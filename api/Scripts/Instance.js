import { instanceFiles } from '../Scripts/FileSystems.js';

/* Delete the values if on production */
/* String who create the .env file */
let envContent = "PUPPETEER_WEB_URL=http://localhost:8080\n\n";
envContent += "###> DataBase parameters ###\n";
envContent += "DB_NAME=dragnreceive\n";
envContent += "DB_USER=root\n";
envContent += "DB_PASS=\n";
envContent += "DB_DIAL=mysql\n";
envContent += "DB_HOST=localhost\n";
envContent += "###< DataBase parameters ###\n\n";
envContent += "###> API Server parameters ###\n";
envContent += "PORT=3000\n";
envContent += "BASE_URL=localhost\n";
envContent += "SECRET_TOKEN=T0k3nD3G4m3r\n";
envContent += "###< API Server parameters ###\n\n";
envContent += "###> WEB Client parameters ###\n";
envContent += "CLIENT_PORT=8080\n";
envContent += "CLIENT_URL=localhost\n";
envContent += "###< WEB Client parameters ###\n\n";
envContent += "###> NodeMailer parameters ###\n";
envContent += "MAILER_HOST=\n";
envContent += "MAILER_PORT=\n";
envContent += "MAILER_USER=\n";
envContent += "MAILER_PASS=\n";
envContent += "###< NodeMailer parameters ###\n\n";

instanceFiles(envContent);