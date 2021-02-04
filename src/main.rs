use actix_web::{App,Error,HttpResponse,HttpServer,web};
use actix_web::http::{StatusCode};

mod routes;

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(move || {
        App::new()
            .route("/", web::get().to(routes::hello_world))
            //add aditional routes here
    })
    .bind("192.168.0.102:8080")?
    .run()
    .await
}