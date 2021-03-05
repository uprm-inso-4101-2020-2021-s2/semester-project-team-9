# Subscription Service Manager
Web application to keep track of multiple subscription services

The back end will be developed in Rust using [Actix web](https://actix.rs/) with [Postgresql](https://www.postgresql.org/) as the database.

- ### Prerequisite:  
 1. _rust_ | terminal command: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
 2. _docker_ | terminal command: `sudo apt install docker.io`
 3. _docker-compose_ | terminal command: `sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
 4. _curl_ (installed with rust by default) | If not found then-> terminal command: `sudo apt install curl`

- ### Useful line commands  
 1. _cargo check_ : quickly checks for errors and warnings
 2. _cargo run_ : compiles
 3. _sudo netstat -tulpn_ : see the servers active and listening

- ### Run postgresql with docker container  
 1. Create container. Inside of app, run:  
 `docker-compose up -d`  
 2. Then copy the sql script into the container with:  
 `docker cp database.sql app_psql_1:/`
 3. Finally, run the sql script with:  
 `docker exec -it app_psql_1 psql --dbname=team9 --username team9 -f /database.sql`
 
 - ### Running the server  
 Run: `cargo build`, then: `cargo run` to compile and run. Make sure docker container is running the database.
   
 To kill services using a specific port use: `sudo fuser -k PORT/tcp` (on linux)
 
 - ### Implemented Requests  
   -  /get-all-services/ [TYPE = get]: Returns a list of JSON objects representing all subscription services.
   -  /rm-service/ [TYPE = post]: Takes a JSON object containing the name of the subscription services to be removed & removes it.
   -  /add-service/ [TYPE = post]: Takes a JSON object representing the subscription services & adds it.
