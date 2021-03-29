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
    first_name VARCHAR(255), 
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
        'education',
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
        'Prime-TV-Shows',
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

INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'HBO Max',
        'https://www.hbomax.com//',
        'entertainment',
        '{"monthly":14.99}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Amazon Prime Video',
        'https://www.amazon.com/Prime-Video/',
        'entertainment',
        '{"monthly":8.99}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Sling TV',
        'https://www.sling.com/',
        'entertainment',
        '{"monthly":35.00}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Fubo TV',
        'https://www.fubo.tv/',
        'entertainment',
        '{"Starter (monthly)":64.99, “Elite (monthly)”:69.99,”Pro (monthly)”: 79.99,”Latino Quarterly (qtr)”:99.00}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Peacock TV',
        'https://www.peacocktv.com/',
        'entertainment',
        '{"monthly":4.99}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Youtube TV',
        'https://tv.youtube.com/',
        'entertainment',
        '{"monthly":64.99}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Chegg',
        'https://www.chegg.com/',
        'education',
        '{"Chegg Study":14.95,"Chegg Study Pack": 19.95}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Coursera',
        'https://www.coursera.org/',
        'education',
        '{"Course Minimum":30.00,"Course Maxmimum": 80.00}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Course Hero',
        'https://www.coursehero.com/',
        'education',
        '{"Quarterly Plan":19.95,"Montlhy Plan": 39.99,"Annual Plan": 9.95}'
    );

INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Codecademy',
        'https://www.codecademy.com/',
        'education',
        '{"Pro Plan": 19.99}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Udacity',
        'https://www.udacity.com/',
        'education',
        '{"Course Monthly": 399.99}'
    );    
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Playstation+',
        'https://www.playstation.com/',
        'gaming',
        '{"1 Month": 9.99,"3 Months": 8.33,"12 Months": 5.00}'
    ); 
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Xbox Live Gold',
        'https://www.xbox.com/',
        'gaming',
        '{"1 Month": 9.99,"3 Months": 8.33, "6 Months": 6.67,"12 Months": 5.00}'
    ); 
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'EA Play',
        'https://www.ea.com/',
        'gaming',
        '{"1 Month": 4.99,"Full Year": 24.99}'
    ); 
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'EA Play Pro',
        'https://www.ea.com/',
        'gaming',
        '{"1 Month": 14.99,"Full Year": 99.99}'
    ); 
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'eHarmony',
        'https://www.eharmony.com/',
        'dating',
        '{"1 Month": 59.95,"3 Month": 23.95,"6 Month": 29.95,"12 Month": 19.95}'
    ); 
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Tinder Gold',
        'https://www.tinder.com/',
        'dating',
        '{"1 Month": 14.99,"6 Months": 8.83,"12 Months": 6.92}'
    ); 
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Tinder Plus',
        'https://www.tinder.com/',
        'dating',
        '{"1 Month": 4.99,"6 Months": 3.00,"12 Months": 2.33}'
    ); 
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Match Standard',
        'https://www.match.com/',
        'dating',
        '{"1 Month": 19.99,"6 Months": 17.99,"12 Months": 15.99}'
    ); 
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Match Premium',
        'https://www.match.com/',
        'dating',
        '{"3 Months": 23.99,"6 Months": 19.99,"12 Months": 16.49}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'The League Regular',
        'https://www.theleague.com/',
        'dating',
        '{"1 Month": 199.99,"3 Months": 99.99,"6 Months": 67.00}'
    ); 
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'The League Premium',
        'https://www.theleague.com/',
        'dating',
        '{"1 Month": 399.00,"3 Months": 299.00}'
    );

INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Zoosk Premium',
        'https://www.zoosk.com/',
        'dating',
        '{"1 Month": 29.95,"3 Months": 19.98,"6 Months": 12.49,"12 Months": 12.49}'
    );
INSERT INTO subscription_services (service_name,service_url,category,plans) 
    VALUES(
        'Elite Singles Premium',
        'https://www.elitesingles.com/',
        'dating',
        '{"Classic(1 Month)": 29.95,"Light(3 Months)": 19.98,"Comfort(6 Months)": 12.49,"12 Months": 12.49}'
    );