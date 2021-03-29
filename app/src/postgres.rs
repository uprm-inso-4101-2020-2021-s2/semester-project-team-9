use crate::models::{CustomSubscriptionService, SubscriptionService, User};
use deadpool_postgres::Client;
use std::io;
use tokio_pg_mapper::FromTokioPostgresRow;

pub async fn get_services(client: &Client) -> Result<Vec<SubscriptionService>, io::Error> {
    let statement = client
        .prepare("select * from subscription_services")
        .await
        .unwrap();

    let services = client
        .query(&statement, &[])
        .await
        .expect("Error getting subscription services")
        .iter()
        .map(|row| SubscriptionService::from_row_ref(row).unwrap())
        .collect::<Vec<SubscriptionService>>();

    Ok(services)
}

pub async fn add_service(
    client: &Client,
    name: String,
    url: String,
    category: String,
    plans: String,
) -> Result<CustomSubscriptionService, io::Error> {
    let query = "insert into subscription_services (service_name, service_url,
        category,plans) values ($1, $2, $3, $4)";

    let statement = client.prepare(query).await.unwrap();

    client
        .query(&statement, &[&name, &url, &category, &plans])
        .await
        .expect("error creating service")
        .iter()
        .map(|row| CustomSubscriptionService::from_row_ref(row).unwrap())
        .collect::<Vec<CustomSubscriptionService>>()
        .pop()
        .ok_or(io::Error::new(
            io::ErrorKind::Other,
            "Error creating service",
        ))
}

pub async fn rm_service(client: &Client, name: String) -> Result<SubscriptionService, io::Error> {
    let query = "delete from subscription_services where service_name = $1";

    let statement = client.prepare(query).await.unwrap();

    client
        .query(&statement, &[&name])
        .await
        .expect("error removing service")
        .iter()
        .map(|row| SubscriptionService::from_row_ref(row).unwrap())
        .collect::<Vec<SubscriptionService>>()
        .pop()
        .ok_or(io::Error::new(
            io::ErrorKind::Other,
            "Error removing service",
        ))
}

pub async fn get_users(client: &Client) -> Result<Vec<User>, io::Error> {
    let statement = client.prepare("select * from users").await.unwrap();

    let users = client
        .query(&statement, &[])
        .await
        .expect("Error getting user")
        .iter()
        .map(|row| User::from_row_ref(row).unwrap())
        .collect::<Vec<User>>();
    Ok(users)
}

pub async fn add_user(
    client: &Client,
    id: String,
    email: String,
    firstname: String,
    lastname: String,
    username: String,
    password: String,
) -> Result<User, io::Error> {
    let query = "insert into users (id, email, first_name, last_name, user_name, password
        ) values ($1, $2, $3, $4, $5, $6)";

    let statement = client.prepare(query).await.unwrap();

    client
        .query(
            &statement,
            &[&id, &email, &firstname, &lastname, &username, &password],
        )
        .await
        .expect("error adding user")
        .iter()
        .map(|row| User::from_row_ref(row).unwrap())
        .collect::<Vec<User>>()
        .pop()
        .ok_or(io::Error::new(io::ErrorKind::Other, "Error adding user"))
}

pub async fn rm_user(client: &Client, username: String) -> Result<User, io::Error> {
    let query = "delete from users where user_name = $1";

    let statement = client.prepare(query).await.unwrap();

    client
        .query(&statement, &[&username])
        .await
        .expect("error removing user")
        .iter()
        .map(|row| User::from_row_ref(row).unwrap())
        .collect::<Vec<User>>()
        .pop()
        .ok_or(io::Error::new(io::ErrorKind::Other, "Error removing user"))
}
