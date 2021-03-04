-- DROP TABLE IF EXISTS subscription_services;
-- DROP TABLE IF EXISTS users;

CREATE TABLE subscription_services(
    id SERIAL PRIMARY KEY,
    service_name VARCHAR(255),
    service_url VARCHAR(255),
    category VARCHAR(255),
    plans VARCHAR(1024)
);

CREATE TABLE users( 
    id INT NOT NULL,
    subscriptions VARCHAR(1024),
    email VARCHAR(255),
    userName VARCHAR(255), 
    userPass VARCHAR(255)   
);

INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES (
        'Netflix',
        'www.Netflix.com',
        'entertainment',
        'three plans'
    );