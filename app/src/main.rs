mod models;
mod config;
mod handlers;
mod postgres;

//Leave commented, so no warning appears on terminal, uncomment when needed -RVB
// use crate::models::Status;
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
            .route("/subscriptions{_:/?}", web::get().to(get_subscriptions))
            .route("/add-sub{_:/?}", web::post().to(add_subscription))
    })

    .bind(format!("{}:{}", config.server.host, config.server.port))?
    .run()
    .await
}