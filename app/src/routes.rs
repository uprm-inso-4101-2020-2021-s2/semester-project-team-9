use actix_web::{Error,HttpResponse};
use actix_web::http::{StatusCode};

pub async fn hello_world() -> Result<HttpResponse, Error> {
    Ok(
        HttpResponse::build(StatusCode::OK)
            .content_type("text/html; charset=utf-8")
            .body(include_str!("../templates/hello.html"))
    )
}