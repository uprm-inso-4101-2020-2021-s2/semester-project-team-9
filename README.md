# Subscription Service Manager
Web application to keep track of multiple subscription services

The back end will be developed in Rust using [Actix web](https://actix.rs/) with [Postgresql](https://www.postgresql.org/) as the database.

- Prerequisite:
  1) _rust_ | terminal command: `{curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh}`
  2) _docker_ | terminal command: `sudo apt install docker.io`
  3) _docker-compose_ | terminal command: `sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
  4) _curl_ (installed with rust by default) | If not found then-> terminal command: `sudo apt install curl`

- Useful line commands 
  1) _cargo check_ : quickly checks for errors and warnings
  2) _cargo run_ : compiles
  3) _sudo netstat -tulpn_ : see the servers active and listening
