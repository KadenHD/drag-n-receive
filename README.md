# DragNReceiveV3

Drag-n-Receive est un projet étudiant visant à présenter, lors d’un stand, un système de Click & Collect à l’échelle d’une agglomération, mettant en avant exclusivement des partenaires proposant des produits locaux.

L’objectif du projet est de favoriser les circuits courts en proposant une plateforme numérique permettant aux utilisateurs de :
* découvrir des commerçants locaux partenaires,
* commander leurs produits en ligne,
* récupérer leurs commandes via un système de Click & Collect.

Le projet repose sur une architecture full-stack avec :
* une API backend pour la gestion des produits, partenaires et commandes,
* une interface web pour la gestion administration et produits/commandes des partenaires,
* une application mobile destinée à la démonstration sur stand sur l'achat des produits.

Ce prototype a été conçu comme une preuve de concept, illustrant la faisabilité technique et l’intérêt d’un outil numérique au service de l’économie locale et des commerçants de proximité.

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
