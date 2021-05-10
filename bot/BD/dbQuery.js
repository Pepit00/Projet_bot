const Sqlite = require('better-sqlite3');

let db = new Sqlite('db.sqlite');

exports.getBibliographie = (idGuild, word) => {
	var data = db.prepare('SELECT * FROM bibliographie WHERE UE LIKE ? OR nom LIKE ? AND idGuild = ?').get(word, word, idGuild);
	if (data === undefined) return -1;
	return data;
}

exports.getMCC = (idGuild, UE) => {
	var data = db.prepare('SELECT notation FROM MCC WHERE UE = ? AND idGuild = ?').get(UE, idGuild);
	if (data === undefined) return -1;
	return data;
}

exports.createBibliographie = (idGuild, nom, UE, lien) => {
	db.prepare('INSERT INTO bibliographie VALUES (?, ?, ?, ?)').run(idGuild, nom, UE, lien);
}

exports.createMCC = (idGuild, UE, notation) => {
	db.prepare('INSERT INTO MCC VALUES (?, ?, ?)').run(idGuild, UE, notation);
}

exports.updateMCC = (idGuild, UE, notation) => {
	db.prepare('UPDATE MCC SET notation = ? WHERE idGuild = ? AND UE = ?').run(MCC, idGuild, UE);
}

exports.updateBibliographie = (idGuild, nom, lien) => {
	db.prepare('UPDATE bibliographie SET lien = ? WHERE idGuild = ? AND nom = ?').run(lien, idGuild, nom);
}
