use crate::models::{SubscriptionService, User};
use deadpool_postgres::Client;
use tokio_pg_mapper::FromTokioPostgresRow;
use std::io;

pub async fn get_services(client: &Client) -> Result<Vec<SubscriptionService>, io::Error> {

    let statement = client.prepare("select * from subscription_services").await.unwrap();

    let services = client.query(&statement, &[])
        .await
        .expect("Error getting subscription services")
        .iter()
        .map(|row| SubscriptionService::from_row_ref(row).unwrap())
        .collect::<Vec<SubscriptionService>>();
    Ok(services)
}

pub async fn add_service(client: &Client, name: String, url: String, category: String, plans: String) -> Result<SubscriptionService, io::Error> {

    let query = "insert into subscription_services (service_name, service_url,
        category, plans) values ($1, $2, $3, $4)";

    let statement = client.prepare(query).await.unwrap();

    client.query(&statement, &[&name,&url,&category,&plans])
        .await
        .expect("error creating service")
        .iter()
        .map(|row| SubscriptionService::from_row_ref(row).unwrap())
        .collect::<Vec<SubscriptionService>>()
        .pop()
        .ok_or(io::Error::new(io::ErrorKind::Other, "Error creating service"))
}
