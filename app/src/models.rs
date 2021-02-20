use serde::Serialize;

#[derive(Serialize)]
pub struct Status{
    pub status: String,
}

//For the moment leave comment so no warnings appears, when constructed, uncomment. -RVB
// pub struct SubService{
//     pub name: String,
//     pub url: String,
//     pub price: f32
// }