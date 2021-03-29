use serde::{Deserialize, Serialize};
use tokio_pg_mapper_derive::PostgresMapper;

#[derive(Serialize)]
pub struct Status {
    pub status: String,
}

#[derive(Clone, Serialize, Deserialize, PostgresMapper)]
#[pg_mapper(table = "subscription_service")]
pub struct SubscriptionService {
    pub service_name: String,
    pub service_url: String,
    pub category: String,
    pub plans: String,
}

#[derive(Serialize, Deserialize, PostgresMapper)]
#[pg_mapper(table = "subscription_service")]
pub struct CustomSubscriptionService {
    pub service_name: String,
    pub service_url: String,
    pub category: String,
    pub plans: String,
}

#[derive(Serialize, Deserialize, PostgresMapper)]
#[pg_mapper(table = "users")]
pub struct User {
    pub id: String, //must be a unique id
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub user_name: String,
    pub password: String,
    pub checked: bool,
}

#[derive(Serialize, Deserialize)]
pub struct CreateService {
    pub service_name: String,
    pub service_url: String,
    pub category: String,
    pub plans: String,
}

#[derive(Serialize, Deserialize)]
pub struct RemoveCustomService {
    pub service_name: String,
}

#[derive(Serialize, Deserialize)]
pub struct OwnerId {
    pub id: String,
}

#[derive(Serialize, Deserialize)]
pub struct RemoveService {
    pub service_name: String,
}

#[derive(Serialize, Deserialize)]
pub struct AddUser {
    pub id: String,
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub user_name: String,
    pub password: String,
    pub checked: bool,
}

#[derive(Serialize, Deserialize)]
pub struct RemoveUser {
    pub user_name: String,
}

#[derive(Serialize, Deserialize)]
pub struct CheckUser {
    pub user_name: String,
    pub id: String,
}

#[derive(Serialize, Deserialize)]
pub struct ResultResponse {
    pub success: bool,
}
