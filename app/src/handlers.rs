use actix_web::{App,HttpServer, web, Responder};
use crate::models::Status;


//To check if the server is UP -RVB
pub async fn status() -> impl Responder{
    web::HttpResponse::Ok()
     .json(Status {status: "UP".to_string()})
 }