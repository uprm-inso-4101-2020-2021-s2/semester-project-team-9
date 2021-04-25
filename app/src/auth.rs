use crate::models::*;
use crate::postgres::{user_exists, add_user};
use actix_web::{web, HttpResponse, Responder};
use deadpool_postgres::{Client, Pool};
use pwhash::bcrypt;

fn encrypt(password: String) -> Result<String, std::io::Error> {
    let encrypted = bcrypt::hash(password).unwrap();
    Ok(encrypted)
}

fn verify(input: String, user: User) -> impl Responder {
    match bcrypt::verify(input, user.password.as_str()) {
        true => HttpResponse::Ok().json(user),
        false => HttpResponse::InternalServerError().into(),
        }
}

pub async fn register(db_pool: web::Data<Pool>, json: web::Json<AddUser>) -> impl Responder{
    println!("register func accesed");
    //hash password 
    let hashed_pass = encrypt(json.password.clone());
    //make id 
    let new_user_id = encrypt(json.user_name.clone());
    //add to database
    let client: Client = db_pool
    .get()
    .await
    .expect("error connecting to the database");

    let result = add_user(
        &client, new_user_id.expect("ERR creating new id"), json.email.clone(), json.first_name.clone(), 
        json.last_name.clone(), json.user_name.clone(), hashed_pass.expect("Error Encrypting Pass"), json.checked.clone()
    ).await;

    match result {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(_) => HttpResponse::InternalServerError().into(),
    }
}

pub async fn login(db_pool: web::Data<Pool>, json: web::Json<LoginUser>) -> impl Responder {
    //checks if username exists
    //check if password is correct
    //return user id

    let client: Client = db_pool
    .get()
    .await
    .expect("error connecting to the database");

    let user = user_exists(&client, json.user_name.clone()).await;

    let result = verify(json.pass.clone(), user.expect("error getting user"));
    
    result
}