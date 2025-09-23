# DragNReceiveV3

## Pour le lancer sur le Stand

Connecter le pc et le smartphone en partage de connection.
Lancer Laragon et créer la base de données du nom de `dragnreceive` sur <http://localhost/phpmyadmin/> en utf8.
(Vérifier que le mailer du .env est toujours valide)

Lancer l'API :

```bash
npm i && npm run Standify && npm start
```

> Si l'api tourne sur une autre machine que les applications : Récupérer l'addresse ipv4 affiché dans le terminal suite à cette commande et la garder dans le presse-papier. Remplacer localhost par l'url.

Créer un fichier .env pour l'application mobile :

```.env
VUE_APP_URL=http://localhost:3000
```

Lancer l'application mobile :

```bash
npm i && npm run serve
```

Créer un fichier .env pour l'application web :

```.env
VUE_APP_URL=http://localhost:3000
```

Lancer l'application web :

```bash
npm i && npm run serve
```

Il suffira ensuite de rentrer les url des applications dans l'appareil depuis lequel vous souhaitez accéder à l'application voulu.
> Les deux ports par défaut des applications serront 8080 et 8081.

Vous pourrez ensuite ajouter les sites au favoris du téléphone (comme raccourcis bureau) pour pouvoir jouer en mode application mobile (sur les deux ça marche).
> On peux également jouer en mode site web sur pc pour les deux applications.
