use crate::postgres;
use crate::models::{CreateService, RemoveService};
use actix_web::{web, Responder, HttpResponse};
use crate::models::Status;
use deadpool_postgres::{Pool, Client};


//To check if the server is UP -RVB
pub async fn status() -> impl Responder{
    web::HttpResponse::Ok()
     .json(Status {status: "UP".to_string()})
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

 pub async fn add_service(db_pool: web::Data<Pool>, json: web::Json<CreateService>)-> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let name = json.service_name.clone();
    let url = json.service_url.clone();
    let category = json.category.clone();

    let result = postgres::add_service(&client, name, url, category).await;
    
    match result {
        Ok(sub) => HttpResponse::Ok().json(sub),
        Err(_) => HttpResponse::InternalServerError().into()
    }
 }

pub async fn rm_service(db_pool: web::Data<Pool>, json: web::Json<RemoveService>) -> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let  name: String = json.service_name.clone();

    let result = postgres::rm_service(&client, name).await;
    
    match result {
        Ok(sub) => HttpResponse::Ok().json(sub),
        Err(_) => HttpResponse::InternalServerError().into()
    }

}