mod models;

use crate::models::Status;
use actix_web::{App,HttpServer, web, Responder};
use std::io;


//To check if the server is UP -RVB
async fn status() -> impl Responder{
   // "{\"status\": \"UP\"}"

   web::HttpResponse::Ok()
    .json(Status {status: "UP".to_string()})
}

#[actix_rt::main]
async fn main() -> io::Result<()> {

    println!("Starting server at http://127.0.0.1:8080");


    HttpServer::new(move || {
        App::new()
            .route("/", web::get().to(status))
            //add aditional routes here
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}