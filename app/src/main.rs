mod models;
mod config;
mod handlers;

use crate::models::Status;
use actix_web::{App,HttpServer, web, Responder};
use std::io;
use dotenv::dotenv;
use tokio_postgres::NoTls;


#[actix_rt::main]
async fn main() -> io::Result<()> {

    dotenv().ok();
    let config = crate::config::Config::from_env().unwrap();

    let pool = config.pg.create_pool(NoTls).unwrap();

    println!("Starting server at http://{}:{}", config.server.host, config.server.port);

    HttpServer::new(move || {
        App::new()
            .data(pool.clone())
            .route("/", web::get().to(handlers::status))
    })

    .bind(format!("{}:{}", config.server.host, config.server.port))?
    .run()
    .await
}