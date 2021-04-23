use crate::io::ErrorKind::Other;
use crate::models::*;
use crate::models::{CustomSubscriptionService, RemoveCustomService, ResultResponse, Status};
use crate::postgres;
use actix_web::{web, HttpResponse, Responder};
use deadpool_postgres::{Client, Pool};

pub async fn status() -> impl Responder {
    web::HttpResponse::Ok().json(Status {
        status: "UP".to_string(),
    })
}

pub async fn add_custom_service(
    db_pool: web::Data<Pool>,
    json: web::Json<CustomSubscriptionService>,
) -> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let name = json.service_name.clone();
    let url = json.service_url.clone();
    let category = json.category.clone();
    let plans = json.plans.clone();

    let result = postgres::add_service(&client, name, url, category, plans).await;
    match result {
        Ok(sub) => HttpResponse::Ok().json(sub),
        Err(_) => HttpResponse::InternalServerError().into(),
    }
}

pub async fn rm_custom_service(
    db_pool: web::Data<Pool>,
    json: web::Json<RemoveCustomService>,
) -> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let name = json.service_name.clone();

    let result = postgres::rm_service(&client, name).await;
    match result {
        Ok(sub) => HttpResponse::Ok().json(sub),
        Err(_) => HttpResponse::InternalServerError().into(),
    }
}

pub async fn get_services(db_pool: web::Data<Pool>) -> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let result = postgres::get_services(&client).await;

    match result {
        Ok(services) => HttpResponse::Ok().json(services),
        Err(_) => HttpResponse::InternalServerError().into(),
    }
}

pub async fn get_users(db_pool: web::Data<Pool>) -> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let result = postgres::get_users(&client).await;

    match result {
        Ok(services) => HttpResponse::Ok().json(services),
        Err(_) => HttpResponse::InternalServerError().into(),
    }
}

pub async fn add_user(db_pool: web::Data<Pool>, json: web::Json<AddUser>) -> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let email = json.email.clone();
    let firstname = json.first_name.clone();
    let lastname = json.last_name.clone();
    let username = json.user_name.clone();
    let password = json.password.clone();
    let id = json.id.clone();
    let checked = json.checked.clone();

    let result = postgres::add_user(
        &client, id, email, firstname, lastname, username, password, checked,
    )
    .await;
    match result {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(_) => HttpResponse::InternalServerError().into(),
    }
}

pub async fn rm_user(db_pool: web::Data<Pool>, json: web::Json<RemoveUser>) -> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let username = json.user_name.clone();

    let result = postgres::rm_user(&client, username).await;
    match result {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(_) => HttpResponse::InternalServerError().into(),
    }
}

pub async fn check_users(db_pool: web::Data<Pool>, json: web::Json<CheckUser>) -> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let username = json.user_name.clone();
    let id = json.id.clone();
    let result = postgres::check_users(&client, username, id).await;

    match result {
        Ok(true) => HttpResponse::Ok().json(ResultResponse { success: true }),
        Ok(false) => HttpResponse::Ok().json(ResultResponse { success: false }),
        Err(ref e) if e.kind() == Other => {
            HttpResponse::Ok().json(ResultResponse { success: false })
        }
        Err(_) => HttpResponse::InternalServerError().into(),
    }
}
