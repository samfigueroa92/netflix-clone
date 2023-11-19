DROP DATABASE IF EXISTS flixnet;
CREATE DATABASE flixnet;

\c flixnet;

CREATE TABLE users (
    uuid TEXT PRIMARY KEY UNIQUE NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL, 
    password TEXT NOT NULL,
    dob TEXT NOT NULL,
    phonenumber VARCHAR(10) NOT NULL,
    profilephoto TEXT
);