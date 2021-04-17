use pwhash::bcrypt;

fn encrypt(password: String) -> Result<String, std::io::Error> {
    let encrypted = bcrypt::hash(password).unwrap();
    Ok(encrypted)
}

fn verify(input: String, hashed_pass: String) -> bool {
    bcrypt::verify(input, hashed_pass.as_str())
}