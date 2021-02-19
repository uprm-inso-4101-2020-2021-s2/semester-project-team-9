use serde::Serialize;

#[derive(Serialize)]
pub struct Status{
    pub status: String,
}

//dummy struct
pub struct sub_service {
    pub name: String,
    pub url: String,
    pub price: f32

}