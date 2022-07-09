DROP DATABASE IF EXISTS musicvids_db;

CREATE DATABASE musicvids_db;

USE musicvids_db

CREATE TABLE songs (
    id INT NOT NULL,
    song_name VARCHAR(100) NOT NULL
);

CREATE TABLE artists (
    id INT NOT NULL,
    artist_name VARCHAR (100) NOT NULL
)

CREATE TABLE videos (
    id INT NOT NULL,
    video_link VALUES --is this valid?--
)