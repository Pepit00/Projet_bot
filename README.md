# Projet_bot

Manuel d'exploitation:

Avant toutes choses veillez à créer votre application sur discord et l'inviter sur votre serveur voici un petit tutoriel (avec timestamp) : https://youtu.be/j_sD9udZnCk?t=534

Modules nécessaires à l'installation du bot :

Aller dans le dossier repertoire du bot et taper les commandes suivantes dans le terminal 
	-npm install canvas
	-npm install better-sqlite3
	-npm install yt-search
	-npm install ytdl-core

Installer le logiciel ffmpeg, voici un turtoriel sur Windows 10 : https://www.youtube.com/watch?v=r1AtmY-RMyQ

Ensuite dans le main à la ligne client.login('') inserer le token de votre application afin que ce soit votre bot qui soit utiliser.

Lors de l'ajout d'une fonctionalités vous devez ajouter un fichier .js dans le repertoire "commands" avec une structure de fichier similaire aux autres, 
veilez simplement à le nommer par le nom de votre commande et à changer le "name" et la "description" en fonction.
Ensuite ajoutez un case dans le switch du main avec pour case la commande utilisé sur discord pour faire appel à votre fonction, et dans le get() mettre le "name" défini précedemment.

Enfin, la commande de lancement du bot dans le terminal est "node ." dans le dossier repertoire.
