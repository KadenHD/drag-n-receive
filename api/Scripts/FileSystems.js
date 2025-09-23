import fs from 'fs';

import ChalkMSG from './Chalk.js';

const projectDirectory = process.cwd();
let dir = projectDirectory + '/';

export const instanceFiles = (envContent) => {
    try {
        dir = projectDirectory + '/Store/Companies';
        if (fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true });
            console.log(`${ChalkMSG.INFO}Folder ${dir} created.`);
        }
        dir = projectDirectory + '/Store/Users';
        if (fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true });
            console.log(`${ChalkMSG.INFO}Folder ${dir} created.`);
        }
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`${ChalkMSG.INFO}Folder ${dir} created.`);
        }
        dir = projectDirectory + '/Store/Users';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`${ChalkMSG.INFO}Folder ${dir} created.`);
        }
        dir = projectDirectory + '/Store/Companies';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`${ChalkMSG.INFO}Folder ${dir} created.`);
        }
        dir = projectDirectory + '/.env';
        fs.writeFileSync(dir, envContent, function (err) {
            if (err) throw err;
            console.log(`${ChalkMSG.INFO}File ${dir} created.`);
        });
    } catch (error) {
        console.log(`${ChalkMSG.ERROR}${error}`);
    }
}

export const rmStore = () => {
    dir = projectDirectory + '/Store/Companies';
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true });
    dir = projectDirectory + '/Store/Users';
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true });
}

export const mkProduct = (id, shopId) => {
    dir = projectDirectory + '/Store/Companies/' + shopId + '/Products/' + id;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export const writeProduct = (id, shopId, img) => {
    dir = projectDirectory + '/Store/Companies/' + shopId + '/Products/' + id + '/';
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true })
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dir + img.name, img.data, function (err) { if (err) throw err; });
}

/*
export const rmProduct = (id, shopId) => {
    dir = projectDirectory + '/Store/Companies/' + shopId + '/Products/' + id;
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true })
}
*/

export const mkShop = (id) => {
    dir = projectDirectory + '/Store/Companies/' + id + '/Products/';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    dir = projectDirectory + '/Store/Companies/' + id + '/Logo/';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export const writeShop = (id, img) => {
    dir = projectDirectory + '/Store/Companies/' + id + '/Logo/';
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true })
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dir + img.name, img.data, function (err) { if (err) throw err; });
}

/*
export const rmShop = (id) => {
    dir = projectDirectory + '/Store/Companies/' + id;
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true })
}
*/

export const mkUser = (id) => {
    dir = projectDirectory + '/Store/Users/' + id + '/Invoices/';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    dir = projectDirectory + '/Store/Users/' + id + '/Photo/';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export const writeUser = (id, img) => {
    dir = projectDirectory + '/Store/Users/' + id + '/Photo/';
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true })
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dir + img.name, img.data, function (err) { if (err) throw err; });
}

export const rmUser = (id) => {
    dir = projectDirectory + '/Store/Users/' + id;
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true });
}
