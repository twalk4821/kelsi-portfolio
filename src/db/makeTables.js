//projects table

`CREATE TABLE IF NOT EXISTS projects (
id int primary key,
name text not null unique,
views int default 0,
likes int default 0
)`