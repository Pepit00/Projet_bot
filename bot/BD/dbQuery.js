const Sqlite = require('better-sqlite3');

let db = new Sqlite('db.sqlite');

exports.getBibliographie = (word) => {
	var data = db.prepare('SELECT * FROM bibliographie WHERE typeUE LIKE ? OR nom LIKE ?').get(word, word);
	if (data === undefined) return -1;
	return data;
}

exports.getCCC = (nomUE) => {
	var data = db.prepare('SELECT MCC FROM CCC WHERE nomUE = ?').get(nomUE);
	if (data === undefined) return -1;
	return data;
}

exports.createBibliographie = (typeUE, nom, lien) => {
	db.prepare('INSERT INTO bibliographie (typeUE, nom, lien) VALUES (?, ?, ?)').run(typeUE, nom, lien);
}

exports.createCCC = (nomUE, MCC) => {
	db.prepare('INSERT INTO CCC VALUES (?, ?)').run(nomUE, MCC);
}

exports.updateCCC = (nomUE, MCC) => {
	db.prepare('UPDATE CCC SET MCC = ? WHERE nomUE = ?').run(MCC, nomUE);
}

exports.updateBibliographie = (nom, lien) => {
	db.prepare('UPDATE bibliographie SET lien = ? WHERE nom = ?').run(lien, nom);
}
