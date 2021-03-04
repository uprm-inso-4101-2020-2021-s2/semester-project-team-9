use crate::postgres;
use crate::models::{SubscriptionService};
use actix_web::{web, Responder, HttpResponse};
use crate::models::Status;
use deadpool_postgres::{Pool, Client};


//To check if the server is UP -RVB
pub async fn status() -> impl Responder{
    web::HttpResponse::Ok()
     .json(Status {status: "UP".to_string()})
 }
 
 pub async fn get_subscriptions(db_pool: web::Data<Pool>) -> impl Responder {

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

 pub async fn add_subscription(db_pool: web::Data<Pool>, json: web::Json<SubscriptionService>)-> impl Responder {
    let client: Client = db_pool
        .get()
        .await
        .expect("error connecting to the database");

    let name = json.service_name.clone();
    let url = json.service_name.clone();
    let category = json.service_name.clone();
    let plans = json.service_name.clone();

    let result = postgres::add_service(&client, name, url, category, plans).await;
    
    match result {
        Ok(sub) => HttpResponse::Ok().json(sub),
        Err(_) => HttpResponse::InternalServerError().into()
    }
 }