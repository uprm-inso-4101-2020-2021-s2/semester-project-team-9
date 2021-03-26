use crate::postgres;
use crate::models::*;
use actix_web::{web, Responder, HttpResponse};
use crate::models::Status;
use deadpool_postgres::{Pool, Client};


//To check if the server is UP -RVB
pub async fn status() -> impl Responder{
    web::HttpResponse::Ok()
     .json(Status {status: "UP".to_string()})
 }
 
 pub async fn get_custom_services(db_pool: web::Data<Pool>, json: web::Json<OwnerId>) -> impl Responder {

    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let result = postgres::get_custom_services(&client,json.id.clone())
        .await;

    match result {
        Ok(services) => HttpResponse::Ok().json(services),
        Err(_) => HttpResponse::InternalServerError().into()
    }
 }

 pub async fn add_custom_service(db_pool: web::Data<Pool>, json: web::Json<CreateCustomSubscriptionService>)-> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let name = json.service_name.clone();
    let url = json.service_url.clone();
    let category = json.category.clone();
    let owner_id = json.owner_id.clone();

    let result = postgres::add_custom_service(&client, name, url, category, owner_id).await;
    
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

    let  name: String = json.service_name.clone();
    let owner_id: String = json.owner_id.clone();

    let result = postgres::rm_custom_service(&client, name, owner_id).await;
    
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
        Ok(services) => HttpResponse::Ok().json(services),
        Err(_) => HttpResponse::InternalServerError().into()
    }
 }