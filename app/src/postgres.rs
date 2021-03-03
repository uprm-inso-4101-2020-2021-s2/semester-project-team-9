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
