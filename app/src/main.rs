mod models;
mod config;
mod handlers;
mod postgres;

use crate::handlers::*;
use crate::config::Config;
use actix_web::{App,HttpServer, web};
use std::io;
use dotenv::dotenv;
use tokio_postgres::NoTls;

#[actix_rt::main]
async fn main() -> io::Result<()> {

    dotenv().ok();

    let config = Config::from_env().unwrap();

    let pool = config.pg.create_pool(NoTls).unwrap();

    println!("Starting server at http://{}:{}", config.server.host, config.server.port);

    HttpServer::new(move || {
        App::new()
            .data(pool.clone())
            .route("/", web::get().to(handlers::status))
            .route("/get-user-services{_:/?}", web::get().to(get_custom_services))
            .route("/add-user-service{_:/?}", web::post().to(add_custom_service))
            .route("/rm-user-service{_:/?}", web::post().to(rm_custom_service))
            .route("/get_services{_:/?}", web::post().to(get_services))
            .route("/get_services_withnm{_:/?}", web::post().to(get_services_withnm))
    })

    .bind(format!("{}:{}", config.server.host, config.server.port))?
    .run()
    .await
}