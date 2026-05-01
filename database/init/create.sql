use fieldnotes ;

CREATE TABLE users(
    id int PRIMARY KEY AUTO_INCREMENT,
    username varchar(250) NOT NULL,
    email varchar(250) UNIQUE NOT NULL,
    password_hash varchar(250) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE observations(
    id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(255) NOT NULL,
    category varchar(250) NOT NULL,
    content text ,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
    user_id INT NOT NULL ,
    FOREIGN KEY (user_id) 
    REFERENCES users(id)
    ON DELETE CASCADE
);