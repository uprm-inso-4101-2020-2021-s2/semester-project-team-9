DROP TABLE IF EXISTS subscription_service;
DROP TABLE IF EXISTS user;

CREATE TABLE subscription_service(
    id SERIAL PRIMARY KEY,
    serviceName VARCHAR(255),
    serviceUrl VARCHAR(255),
    category VARCHAR(255),
    plans VARCHAR(1024),
)

CREATE TABLE user( 
    id INT NOT NULL,
    subscriptions VARCHAR(1024),
    userName VARCHAR(255), 
    userPass VARCHAR(255),   
)