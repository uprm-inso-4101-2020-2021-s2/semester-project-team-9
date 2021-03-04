use serde::{Serialize, Deserialize};
use tokio_pg_mapper_derive::PostgresMapper;

#[derive(Serialize)]
pub struct Status{
    pub status: String,
}

//For the moment leave comment so no warnings appears, when constructed, uncomment. -RVB
#[derive(Serialize, Deserialize, PostgresMapper)]
#[pg_mapper(table="subscription_service")]
pub struct SubscriptionService {
    pub id: i32,
    pub service_name: String,
    pub service_url: String,
    pub category: String,
    pub plans: String
}

#[derive(Serialize, Deserialize, PostgresMapper)]
#[pg_mapper(table="user")]
pub struct User {
    pub id: i32,
    pub name: String,
    pub password: String,
    pub subscriptions: String,
}
