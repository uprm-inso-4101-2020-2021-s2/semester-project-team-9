use crate::models::{SubscriptionService};
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

pub async fn add_service(client: &Client, name: String, url: String, category: String) -> Result<SubscriptionService, io::Error> {

    let query = "insert into subscription_services (service_name, service_url,
        category) values ($1, $2, $3)";

    let statement = client.prepare(query).await.unwrap();

    client.query(&statement, &[&name,&url,&category])
        .await
        .expect("error creating service")
        .iter()
        .map(|row| SubscriptionService::from_row_ref(row).unwrap())
        .collect::<Vec<SubscriptionService>>()
        .pop()
        .ok_or(io::Error::new(io::ErrorKind::Other, "Error creating service"))
    }

pub async fn rm_service(client: &Client, name: String) -> Result<SubscriptionService, io::Error>{

    let query = "delete from subscription_services where service_name = $1";

    let statement = client.prepare(query).await.unwrap();

    client.query(&statement, &[&name])
        .await
        .expect("error removing service")
        .iter()
        .map(|row| SubscriptionService::from_row_ref(row).unwrap())
        .collect::<Vec<SubscriptionService>>()
        .pop()
        .ok_or(io::Error::new(io::ErrorKind::Other, "Error removing service"))
 }

