mod config;
mod handlers;
mod models;
mod postgres;
mod auth;
  
use actix_cors::Cors;
use crate::config::Config;
use crate::handlers::*;
use crate::auth::{register, login};
use actix_web::{web, App,HttpServer};
use dotenv::dotenv;
use std::io;
use tokio_postgres::NoTls;

#[actix_web::main]
async fn main() -> io::Result<()> {
    dotenv().ok();

    let config = Config::from_env().unwrap();

    let pool = config.pg.create_pool(NoTls).unwrap();

    println!(
        "Starting server at http://{}:{}",  
        config.server.host, config.server.port
    );


    
    HttpServer::new(move || {
        let cors = Cors::default().allow_any_origin();
        App::new()
        .wrap(cors)
            .data(pool.clone())
            .route("/", web::get().to(handlers::status))
            .route("/get-services{_:/?}", web::get().to(get_services))
            .route("/get-custom-services{_:/?}", web::get().to(get_custom_services))
            .route("/add-service{_:/?}", web::post().to(add_service))
            .route("/add-custom-service{_:/?}", web::post().to(add_custom_service))
            .route("/rm-service{_:/?}", web::post().to(rm_service))
            .route("/rm-custom-service{_:/?}", web::post().to(rm_custom_service))
            .route("/get-users{_:/?}", web::get().to(get_users))
            .route("/rm-user{_:/?}", web::post().to(rm_user))
            .route("/check-user{_:/?}", web::put().to(check_users))
            .route("/register{_:/?}", web::post().to(register))
            .route("/login{_:/?}", web::post().to(login))
    })
    .bind(format!("{}:{}", config.server.host, config.server.port))?
    .run()
    .await
}
