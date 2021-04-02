DROP TABLE IF EXISTS subscription_services;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS custom_unique_services;

CREATE TABLE subscription_services(
    id SERIAL PRIMARY KEY,
    service_name VARCHAR(255),
    service_url VARCHAR(255),
    category VARCHAR(255)
);

CREATE TABLE users( 
    id VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    fisrst_name VARCHAR(255), 
    last_name VARCHAR(255),
    user_name VARCHAR(155),
    password VARCHAR(255)   
);

CREATE TABLE custom_unique_services(
    id SERIAL PRIMARY KEY,
    owner_id VARCHAR(255),
    service_name VARCHAR(255),
    service_url VARCHAR(255),
    category VARCHAR(255)
);

-- INSERT INTO subscription_services (service_name,service_url,category,plans) 
--     VALUES (
--         'Netflix',
--         'www.Netflix.com',
--         'entertainment',
--         'three plans'
--     );