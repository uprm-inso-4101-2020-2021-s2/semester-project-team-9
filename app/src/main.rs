mod config;
mod handlers;
mod models;
mod postgres;


use crate::config::Config;
use crate::handlers::*;
use actix_web::{web, App, HttpServer};
use dotenv::dotenv;
use std::io;
use tokio_postgres::NoTls;

#[actix_rt::main]
async fn main() -> io::Result<()> {
    dotenv().ok();

    let config = Config::from_env().unwrap();

    let pool = config.pg.create_pool(NoTls).unwrap();

    println!(
        "Starting server at http://{}:{}",
        config.server.host, config.server.port
    );

    HttpServer::new(move || {
        App::new()
            .data(pool.clone())
            .route("/", web::get().to(handlers::status))
            .route("/get-all-services{_:/?}", web::get().to(get_services))
            .route("/add-service{_:/?}", web::post().to(add_custom_service))
            .route("/rm-service{_:/?}", web::post().to(rm_custom_service))
            .route("/get-all-users{_:/?}", web::get().to(get_users))
            .route("/add-user{_:/?}", web::post().to(add_user))
            .route("/rm-user{_:/?}", web::post().to(rm_user))            
    })
    .bind(format!("{}:{}", config.server.host, config.server.port))?
    .run()
    .await
}
