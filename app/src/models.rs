use serde::{Serialize, Deserialize};
use tokio_pg_mapper_derive::PostgresMapper;

#[derive(Serialize)]
pub struct Status{
    pub status: String
}

//For the moment leave comment so no warnings appears, when constructed, uncomment. -RVB
#[derive(Serialize, Deserialize, PostgresMapper)]
#[pg_mapper(table="subscription_service")]
pub struct SubscriptionService {
    pub id: i32,
    pub service_name: String,
    pub service_url: String,
    pub category: String
}

#[derive(Serialize, Deserialize, PostgresMapper)]
#[pg_mapper(table="custom_unique_services")]
pub struct CustomSubscriptionService {
    pub id: i32,
    pub owner_id: String, //unique from user that is owner
    pub service_name: String,
    pub service_url: String,
    pub category: String
}

#[derive(Serialize, Deserialize, PostgresMapper)]
#[pg_mapper(table="custom_unique_services")]
pub struct CreateCustomSubscriptionService {
    pub owner_id: String, //unique from user that is owner
    pub service_name: String,
    pub service_url: String,
    pub category: String
}

#[derive(Serialize, Deserialize, PostgresMapper)]
#[pg_mapper(table="users")]
pub struct User {
    pub id: i32, //must be a unique id
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub user_name: String,
    pub password: String
}

#[derive(Serialize, Deserialize)]
pub struct CreateService {
    pub service_name: String,
    pub service_url: String,
    pub category: String
}

#[derive(Serialize, Deserialize)]
pub struct RemoveCustomService {
    pub service_name: String,
    pub owner_id: String
}

#[derive(Serialize, Deserialize)]
pub struct OwnerId {
    pub id: String
}