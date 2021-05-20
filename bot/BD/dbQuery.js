const Sqlite = require('better-sqlite3');

let db = new Sqlite('db.sqlite');

exports.getBibliographie = (idGuild, UE) => {
	var data = db.prepare('SELECT nom, lien FROM bibliographie WHERE UE = ? AND idGuild = ?').all(UE, idGuild);
	if (data === undefined) return -1;
	return data;
}

exports.getMCC = (idGuild, UE) => {
	var data = db.prepare('SELECT notation FROM MCC WHERE UE = ? AND idGuild = ?').get(UE, idGuild);
	if (data === undefined) return -1;
	return data;
}

exports.createBibliographie = (idGuild, UE, nom, lien) => {
	db.prepare('INSERT INTO bibliographie VALUES (?, ?, ?, ?)').run(idGuild, nom, UE, lien);
}

exports.createMCC = (idGuild, UE, notation) => {
	var info = db.prepare('INSERT INTO MCC VALUES (?, ?, ?)').run(idGuild, UE, notation);
	if (info === undefined) return -1;
	return info;
}

exports.updateMCC = (idGuild, UE, notation) => {
	db.prepare('UPDATE MCC SET notation = ? WHERE idGuild = ? AND UE = ?').run(notation, idGuild, UE);
}

exports.updateBibliographie = (idGuild, UE, nom, lien) => {
	db.prepare('UPDATE bibliographie SET lien = ? WHERE idGuild = ? AND UE = ? AND nom = ?').run(lien, idGuild, UE, nom);
}

exports.deleteMCC = (idGuild, UE) => {
	var info = db.prepare('DELETE FROM MCC WHERE idGuild = ? AND UE = ?').run(idGuild, UE);
	if (info === undefined) return -1;	
	return info;
}

exports.deleteUEBibliographie = (idGuild, UE) => {
	var info = db.prepare('DELETE FROM bibliographie WHERE idGuild = ? AND UE = ?').run(idGuild, UE);
	if (info === undefined) return -1;	
	return info;
}

exports.deleteBibliographie = (idGuild, UE, nom) => {
	var info = db.prepare('DELETE FROM bibliographie WHERE idGuild = ? AND UE = ? AND nom = ?').run(idGuild, UE, nom);
	if (info === undefined) return -1;	
	return info;
}
