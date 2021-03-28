DROP TABLE IF EXISTS subscription_services;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS custom_unique_services;

CREATE TABLE subscription_services(
    service_name VARCHAR(255),
    service_url VARCHAR(255),
    category VARCHAR(255),
    plans VARCHAR(1024)
);

CREATE TABLE users( 
    id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    fisrst_name VARCHAR(255), 
    last_name VARCHAR(255),
    user_name VARCHAR(155) UNIQUE NOT NULL,
    password VARCHAR(255)   
);

CREATE TABLE custom_unique_services(
    owner_id VARCHAR(255),
    service_name VARCHAR(255),
    service_url VARCHAR(255),
    category VARCHAR(255),
    plans VARCHAR(1024)
);
INSERT INTO custom_unique_services (owner_id,service_name,service_url,category,plans) 
    VALUES(
        'Chegg',
        'Chegg',
        'https://www.chegg.com/',
        'educational',
        '{"monthly":7.99, "yearly":79.99}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES (
        'Netflix',
        'https://www.netflix.com/',
        'entertainment',
        '{"basic":8.99,"Standard":13.99,"premium":17.99}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Hulu',
        'https://www.hulu.com/',
        'entertainment',
        '{"basic":5.99,"no ads":11.99,"+Live TV":17.99, "no ads and Live TV":70.99}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Prime Video',
        'https://www.amazon.com/Prime-TV-Shows',
        'entertainment',
        '{"monthly":12.99, "yearly":119}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Disney+',
        'https://www.disneyplus.com/',
        'entertainment',
        '{"monthly":7.99, "yearly":79.99}'
    );