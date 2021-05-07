"use strict"

const fs = require('fs');
const Sqlite = require('better-sqlite3');

let db = new Sqlite('db.sqlite');

db.prepare('DROP TABLE IF EXISTS Bibliographie').run();
db.prepare('DROP TABLE IF EXISTS CCC').run();

db.prepare('CREATE TABLE Bibliographie (id INTEGER PRIMARY KEY AUTOINCREMENT, typeUE TEXT, nom TEXT, lien TEXT)').run();

db.prepare('CREATE TABLE CCC (nomUE TEXT PRIMARY KEY, MCC TEXT)').run();

