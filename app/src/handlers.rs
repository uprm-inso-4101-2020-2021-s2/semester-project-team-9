use crate::postgres;
use crate::models::*;
use actix_web::{web, Responder, HttpResponse};
use crate::models::{Status, CustomSubscriptionService, RemoveCustomService};
use deadpool_postgres::{Pool, Client};


//To check if the server is UP -RVB
pub async fn status() -> impl Responder{
    web::HttpResponse::Ok()
     .json(Status {status: "UP".to_string()})
 }
 

 pub async fn add_custom_service(db_pool: web::Data<Pool>, json: web::Json<CustomSubscriptionService>)-> impl Responder {
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
        Err(_) => HttpResponse::InternalServerError().into()
    }
 }


pub async fn rm_custom_service(db_pool: web::Data<Pool>, json: web::Json<RemoveCustomService>) -> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let name = json.service_name.clone();

    let result = postgres::rm_service(&client, name).await;
    
    match result {
        Ok(sub) => HttpResponse::Ok().json(sub),
        Err(_) => HttpResponse::InternalServerError().into()
    }

}

pub async fn get_services(db_pool: web::Data<Pool>) -> impl Responder {

    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let result = postgres::get_services(&client)
        .await;

    match result {
        Ok(services) => {HttpResponse::Ok().json(services)},
        Err(_) => HttpResponse::InternalServerError().into()
    }
 }

pub async fn get_users(db_pool: web::Data<Pool>) -> impl Responder {

    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let result = postgres::get_users(&client)
        .await;

    match result {
        Ok(services) => {HttpResponse::Ok().json(services)},
        Err(_) => HttpResponse::InternalServerError().into()
    }
}

pub async fn add_user(db_pool: web::Data<Pool>, json: web::Json<AddUser>)-> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let email = json.user_name.clone();
    let firstname = json.password.clone();
    let lastname = json.password.clone();
    let username = json.user_name.clone();
    let password = json.password.clone();
    let id = json.id.clone();

    let result = postgres::add_user(&client, id, email, firstname, lastname, username, password).await;
    
    match result {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(_) => HttpResponse::InternalServerError().into()
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
        Err(_) => HttpResponse::InternalServerError().into()
    }

}
