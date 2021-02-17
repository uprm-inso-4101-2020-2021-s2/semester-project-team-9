use actix_web::{App,HttpServer, web, Responder};
use std::io;

mod routes;

//To check if the server is UP -RVB
async fn status() -> impl Responder{
    "{\"status\": \"UP\"}"
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {

    println!("Starting server at http://192.168.0.102:8080");


    HttpServer::new(move || {
        App::new()
            .route("/", web::get().to(routes::hello_world))
            //add aditional routes here
    })
    .bind("192.168.0.102:8080")?
    .run()
    .await
}