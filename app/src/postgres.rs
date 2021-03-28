use crate::models::{SubscriptionService,CustomSubscriptionService};
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

pub async fn get_custom_services(client: &Client, owner_id: String) -> Result<Vec<CustomSubscriptionService>, io::Error> {

    let statement = client.prepare("select * from custom_unique_services where owner_id = $1").await.unwrap();

    let services = client.query(&statement, &[&owner_id])
        .await
        .expect("Error getting custom_unique_services")
        .iter()
        .map(|row| CustomSubscriptionService::from_row_ref(row).unwrap())
        .collect::<Vec<CustomSubscriptionService>>();
    Ok(services)
}


pub async fn add_custom_service(client: &Client, name: String, url: String, owner_id: String, category: String, plans: String) -> Result<SubscriptionService, io::Error> {

    let query = "insert into custom_unique_services (service_name, service_url,
        category, owner_id, plans) values ($1, $2, $3, $4, $5)";

    let statement = client.prepare(query).await.unwrap();

    client.query(&statement, &[&name, &url, &category, &owner_id,&plans])
        .await
        .expect("error creating service")
        .iter()
        .map(|row| SubscriptionService::from_row_ref(row).unwrap())
        .collect::<Vec<SubscriptionService>>()
        .pop()
        .ok_or(io::Error::new(io::ErrorKind::Other, "Error creating service"))
    }

pub async fn rm_custom_service(client: &Client, name: String, owner_id: String) -> Result<SubscriptionService, io::Error>{

    let query = "delete from custom_unique_services where service_name = $1 and owner_id = $2";

    let statement = client.prepare(query).await.unwrap();

    client.query(&statement, &[&name, &owner_id])
        .await
        .expect("error removing service")
        .iter()
        .map(|row| SubscriptionService::from_row_ref(row).unwrap())
        .collect::<Vec<SubscriptionService>>()
        .pop()
        .ok_or(io::Error::new(io::ErrorKind::Other, "Error removing service"))
 }