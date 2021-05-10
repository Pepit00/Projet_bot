"use strict"

const fs = require('fs');
const Sqlite = require('better-sqlite3');

let db = new Sqlite('db.sqlite');

db.prepare('DROP TABLE IF EXISTS Bibliographie').run();
db.prepare('DROP TABLE IF EXISTS MCC').run();

db.prepare('CREATE TABLE Bibliographie (idGuild TEXT , nom TEXT, UE TEXT, lien TEXT, PRIMARY KEY (idGuild, nom))').run();

db.prepare('CREATE TABLE MCC (idGuild TEXT, UE TEXT, notation TEXT, PRIMARY KEY(idGuild, UE))').run();

//db.prepare('INSERT INTO MCC (idGuild, UE, notation) VALUES (?, ?, ?)').run('834048740762583051', 'algo', '0 TP + 0 ET');
