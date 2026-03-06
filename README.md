# DragNReceiveV3

Drag-n-Receive is a student project aimed at presenting, at a stand, a Click & Collect system on a metropolitan scale, exclusively promoting partners offering local products.

The goal of the project is to promote short supply chains by offering a digital platform that allows users to:
* discover local partner retailers,
* order their products online,
* pick up their orders via a Click & Collect system.

The project is based on a full-stack architecture with:
* a backend API for managing products, partners, and orders,
* a web interface for managing administration and partners' products/orders,
* a mobile application for demonstrating product purchases at the booth.

This prototype was designed as a proof of concept, illustrating the technical feasibility and value of a digital tool serving the local economy and local retailers.

## To launch it on the stand

Connect the PC and smartphone using connection sharing.
Launch Laragon and create the database named `dragnreceive` on <http://localhost/phpmyadmin/> in utf8.
(Check that the .env mailer is still valid)

Launch the API:

```bash
npm i && npm run Standify && npm start
```

> If the API is running on a different machine than the applications: Retrieve the IPv4 address displayed in the terminal after running this command and save it to the clipboard. Replace localhost with the URL.

Create an .env file for the mobile application:

```.env
VUE_APP_URL=http://localhost:3000
```

Launch the mobile application:

```bash
npm i && npm run serve
```

Create an .env file for the web application:

```.env
VUE_APP_URL=http://localhost:3000
```

Launch the web application:

```bash
npm i && npm run serve
```

Then simply enter the application URLs into the device from which you want to access the desired application.
> The two default ports for the applications are 8080 and 8081.

You can then add the sites to your phone's favorites (as desktop shortcuts) to play in mobile app mode (it works on both).
> You can also play in website mode on a PC for both applications.
