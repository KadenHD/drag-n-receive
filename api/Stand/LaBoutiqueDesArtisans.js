import ChalkMSG from '../Scripts/Chalk.js'
import { User, Shop, Product } from '../Models/Models.js'
import bcrypt from 'bcrypt'
import { mkUser, mkShop, mkProduct, writeUser, writeShop, writeProduct } from '../Scripts/FileSystems.js'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

const getShopPath = (shopId, logoName) => '/Companies/' + shopId + '/Logo/' + logoName
const getUserPath = (userId, photoName) => '/Users/' + userId + '/Photo/' + photoName
const getProductPath = (shopId, productId, imageName) => '/Companies/' + shopId + '/Products/' + productId + '/' + imageName

const lBDA = async () => {
    /* Default Shop */
    const lBDAId = uuidv4()
    const lBDAImgPath = 'Stand/laboutiquedesartisans/logo.png'
    const lBDAImgData = fs.readFileSync(lBDAImgPath)
    const lBDAImgName = lBDAImgPath.split('/').pop()
    mkShop(lBDAId)
    writeShop(lBDAId, { name:lBDAImgName, data: lBDAImgData })
    await Shop.create({
        id: lBDAId,
        name: "La Boutique Des Artisans",
        email: "service@lbda.fr",
        phone: "0344843449",
        city: "Beauvais",
        street: "4 Boulevard Saint-André",
        postal: "60000",
        path: getShopPath(lBDAId, lBDAImgName),
        deleted: false
    })

    /* Default Partners */
    const hashPassword = () => bcrypt.hash("Password1@", 10)
    const ralofFinterId = uuidv4()
    const ralofFinterImgPath = 'Stand/laboutiquedesartisans/partners/Ralof_Finter.jpg'
    const ralofFinterImgData = fs.readFileSync(ralofFinterImgPath)
    const ralofFinterImgName = ralofFinterImgPath.split('/').pop()
    mkUser(ralofFinterId)
    writeUser(ralofFinterId, { name:ralofFinterImgName, data: ralofFinterImgData })
    await User.create({ 
        id: ralofFinterId, 
        lastname: "Finter", 
        firstname: "Ralof", 
        email: "ralof.finter@lbda.fr", 
        password: await hashPassword(), 
        path: getUserPath(ralofFinterId, ralofFinterImgName),
        roleId: "3", 
        shopId: lBDAId
    })
    const michelleTableId = uuidv4()
    const michelleTableImgPath = 'Stand/laboutiquedesartisans/partners/Michelle_Table.jpg'
    const michelleTableImgData = fs.readFileSync(michelleTableImgPath)
    const michelleTableImgName = michelleTableImgPath.split('/').pop()
    mkUser(michelleTableId)
    writeUser(michelleTableId, { name:michelleTableImgName, data: michelleTableImgData })
    await User.create({ 
        id: michelleTableId, 
        lastname: "Table", 
        firstname: "Michelle", 
        email: "michelle.Table@lbda.fr", 
        password: await hashPassword(), 
        path: getUserPath(michelleTableId, michelleTableImgName),
        roleId: "3", 
        shopId: lBDAId
    })

    /* Default Products */
    const decoMurArbreId = uuidv4()
    const decoMurArbreImgPath = 'Stand/laboutiquedesartisans/produits/décoration murale arbre.png'
    const decoMurArbreImgData = fs.readFileSync(decoMurArbreImgPath)
    const decoMurArbreImgName = decoMurArbreImgPath.split('/').pop()
    mkProduct(decoMurArbreId, lBDAId)
    writeProduct(decoMurArbreId, lBDAId, { name:decoMurArbreImgName, data: decoMurArbreImgData })
    await Product.create({
        id: decoMurArbreId,
        name: "Décoration Murale Arbre",
        description: "Lorem Ipsum.",
        price: "720",
        stock: "2",
        path: getProductPath(lBDAId, decoMurArbreId, decoMurArbreImgName),
        deleted: false,
        shopId: lBDAId
    })

    const decoMurId = uuidv4()
    const decoMurImgPath = 'Stand/laboutiquedesartisans/produits/décoration murale.png'
    const decoMurImgData = fs.readFileSync(decoMurImgPath)
    const decoMurImgName = decoMurImgPath.split('/').pop()
    mkProduct(decoMurId, lBDAId)
    writeProduct(decoMurId, lBDAId, { name:decoMurImgName, data: decoMurImgData })
    await Product.create({
        id: decoMurId,
        name: "Décoration Murale",
        description: "Lorem Ipsum.",
        price: "520",
        stock: "4",
        path: getProductPath(lBDAId, decoMurId, decoMurImgName),
        deleted: false,
        shopId: lBDAId
    })

    const epeeCourteId = uuidv4()
    const epeeCourteImgPath = 'Stand/laboutiquedesartisans/produits/épée courte.png'
    const epeeCourteImgData = fs.readFileSync(epeeCourteImgPath)
    const epeeCourteImgName = epeeCourteImgPath.split('/').pop()
    mkProduct(epeeCourteId, lBDAId)
    writeProduct(epeeCourteId, lBDAId, { name:epeeCourteImgName, data: epeeCourteImgData })
    await Product.create({
        id: epeeCourteId,
        name: "Épée Courte",
        description: "Lorem Ipsum.",
        price: "840",
        stock: "1",
        path: getProductPath(lBDAId, epeeCourteId, epeeCourteImgName),
        deleted: false,
        shopId: lBDAId
    })

    const lampeEnCartonId = uuidv4()
    const lampeEnCartonImgPath = 'Stand/laboutiquedesartisans/produits/lampe en carton.png'
    const lampeEnCartonImgData = fs.readFileSync(lampeEnCartonImgPath)
    const lampeEnCartonImgName = lampeEnCartonImgPath.split('/').pop()
    mkProduct(lampeEnCartonId, lBDAId)
    writeProduct(lampeEnCartonId, lBDAId, { name:lampeEnCartonImgName, data: lampeEnCartonImgData })
    await Product.create({
        id: lampeEnCartonId,
        name: "Lampe en Carton",
        description: "Lorem Ipsum.",
        price: "74",
        stock: "8",
        path: getProductPath(lBDAId, lampeEnCartonId, lampeEnCartonImgName),
        deleted: false,
        shopId: lBDAId
    })

    const miroirEnCartonId = uuidv4()
    const miroirEnCartonImgPath = 'Stand/laboutiquedesartisans/produits/miroir en carton.png'
    const miroirEnCartonImgData = fs.readFileSync(miroirEnCartonImgPath)
    const miroirEnCartonImgName = miroirEnCartonImgPath.split('/').pop()
    mkProduct(miroirEnCartonId, lBDAId)
    writeProduct(miroirEnCartonId, lBDAId, { name:miroirEnCartonImgName, data: miroirEnCartonImgData })
    await Product.create({
        id: miroirEnCartonId,
        name: "Miroir en Carton",
        description: "Lorem Ipsum.",
        price: "94",
        stock: "7",
        path: getProductPath(lBDAId, miroirEnCartonId, miroirEnCartonImgName),
        deleted: false,
        shopId: lBDAId
    })

    const miroirMagiqueId = uuidv4()
    const miroirMagiqueImgPath = 'Stand/laboutiquedesartisans/produits/Miroir magique champinon Marolo 48.png'
    const miroirMagiqueImgData = fs.readFileSync(miroirMagiqueImgPath)
    const miroirMagiqueImgName = miroirMagiqueImgPath.split('/').pop()
    mkProduct(miroirMagiqueId, lBDAId)
    writeProduct(miroirMagiqueId, lBDAId, { name:miroirMagiqueImgName, data: miroirMagiqueImgData })
    await Product.create({
        id: miroirMagiqueId,
        name: "Miroir Magique Champignong Marolo",
        description: "Lorem Ipsum.",
        price: "48",
        stock: "5",
        path: getProductPath(lBDAId, miroirMagiqueId, miroirMagiqueImgName),
        deleted: false,
        shopId: lBDAId
    })

    const pendentifId = uuidv4()
    const pendentifImgPath = 'Stand/laboutiquedesartisans/produits/pendentif.png'
    const pendentifImgData = fs.readFileSync(pendentifImgPath)
    const pendentifImgName = pendentifImgPath.split('/').pop()
    mkProduct(pendentifId, lBDAId)
    writeProduct(pendentifId, lBDAId, { name:pendentifImgName, data: pendentifImgData })
    await Product.create({
        id: pendentifId,
        name: "Pendentif",
        description: "Lorem Ipsum.",
        price: "14",
        stock: "20",
        path: getProductPath(lBDAId, pendentifId, pendentifImgName),
        deleted: false,
        shopId: lBDAId
    })

    const porteCleHerissonId = uuidv4()
    const porteCleHerissonImgPath = 'Stand/laboutiquedesartisans/produits/porte clés hérisson.png'
    const porteCleHerissonImgData = fs.readFileSync(porteCleHerissonImgPath)
    const porteCleHerissonImgName = porteCleHerissonImgPath.split('/').pop()
    mkProduct(porteCleHerissonId, lBDAId)
    writeProduct(porteCleHerissonId, lBDAId, { name:porteCleHerissonImgName, data: porteCleHerissonImgData })
    await Product.create({
        id: porteCleHerissonId,
        name: "Porte Clés Hérisson",
        description: "Lorem Ipsum.",
        price: "34",
        stock: "23",
        path: getProductPath(lBDAId, porteCleHerissonId, porteCleHerissonImgName),
        deleted: false,
        shopId: lBDAId
    })

    const porteManteauxId = uuidv4()
    const porteManteauxImgPath = 'Stand/laboutiquedesartisans/produits/porte manteaux.png'
    const porteManteauxImgData = fs.readFileSync(porteManteauxImgPath)
    const porteManteauxImgName = porteManteauxImgPath.split('/').pop()
    mkProduct(porteManteauxId, lBDAId)
    writeProduct(porteManteauxId, lBDAId, { name:porteManteauxImgName, data: porteManteauxImgData })
    await Product.create({
        id: porteManteauxId,
        name: "Porte Manteaux",
        description: "Lorem Ipsum.",
        price: "25",
        stock: "15",
        path: getProductPath(lBDAId, porteManteauxId, porteManteauxImgName),
        deleted: false,
        shopId: lBDAId
    })

    const rangementBouteillesId = uuidv4()
    const rangementBouteillesImgPath = 'Stand/laboutiquedesartisans/produits/rangement bouteilles.png'
    const rangementBouteillesImgData = fs.readFileSync(rangementBouteillesImgPath)
    const rangementBouteillesImgName = rangementBouteillesImgPath.split('/').pop()
    mkProduct(rangementBouteillesId, lBDAId)
    writeProduct(rangementBouteillesId, lBDAId, { name:rangementBouteillesImgName, data: rangementBouteillesImgData })
    await Product.create({
        id: rangementBouteillesId,
        name: "Rangement Bouteilles",
        description: "Lorem Ipsum.",
        price: "27",
        stock: "12",
        path: getProductPath(lBDAId, rangementBouteillesId, rangementBouteillesImgName),
        deleted: false,
        shopId: lBDAId
    })

    const clocheId = uuidv4()
    const clocheImgPath = 'Stand/laboutiquedesartisans/produits/renard champi sous cloche.png'
    const clocheImgData = fs.readFileSync(clocheImgPath)
    const clocheImgName = clocheImgPath.split('/').pop()
    mkProduct(clocheId, lBDAId)
    writeProduct(clocheId, lBDAId, { name:clocheImgName, data: clocheImgData })
    await Product.create({
        id: clocheId,
        name: "Cloche Champignon Renard",
        description: "Lorem Ipsum.",
        price: "65",
        stock: "4",
        path: getProductPath(lBDAId, clocheId, clocheImgName),
        deleted: false,
        shopId: lBDAId
    })

    const roseDoreeId = uuidv4()
    const roseDoreeImgPath = 'Stand/laboutiquedesartisans/produits/rose dorée.png'
    const roseDoreeImgData = fs.readFileSync(roseDoreeImgPath)
    const roseDoreeImgName = roseDoreeImgPath.split('/').pop()
    mkProduct(roseDoreeId, lBDAId)
    writeProduct(roseDoreeId, lBDAId, { name:roseDoreeImgName, data: roseDoreeImgData })
    await Product.create({
        id: roseDoreeId,
        name: "Rose Dorée",
        description: "Lorem Ipsum.",
        price: "9999.99",
        stock: "1",
        path: getProductPath(lBDAId, roseDoreeId, roseDoreeImgName),
        deleted: false,
        shopId: lBDAId
    })

    const styloBoisId = uuidv4()
    const styloBoisImgPath = 'Stand/laboutiquedesartisans/produits/stylo en bois.png'
    const styloBoisImgData = fs.readFileSync(styloBoisImgPath)
    const styloBoisImgName = styloBoisImgPath.split('/').pop()
    mkProduct(styloBoisId, lBDAId)
    writeProduct(styloBoisId, lBDAId, { name:styloBoisImgName, data: styloBoisImgData })
    await Product.create({
        id: styloBoisId,
        name: "Stylo en Bois",
        description: "Lorem Ipsum.",
        price: "15",
        stock: "16",
        path: getProductPath(lBDAId, styloBoisId, styloBoisImgName),
        deleted: false,
        shopId: lBDAId
    })

    const tableBasseBoisEpoxyId = uuidv4()
    const tableBasseBoisEpoxyImgPath = 'Stand/laboutiquedesartisans/produits/table basse bois epoxy.png'
    const tableBasseBoisEpoxyImgData = fs.readFileSync(tableBasseBoisEpoxyImgPath)
    const tableBasseBoisEpoxyImgName = tableBasseBoisEpoxyImgPath.split('/').pop()
    mkProduct(tableBasseBoisEpoxyId, lBDAId)
    writeProduct(tableBasseBoisEpoxyId, lBDAId, { name:tableBasseBoisEpoxyImgName, data: tableBasseBoisEpoxyImgData })
    await Product.create({
        id: tableBasseBoisEpoxyId,
        name: "Table Basse Bois/Epoxy",
        description: "Lorem Ipsum.",
        price: "623",
        stock: "7",
        path: getProductPath(lBDAId, tableBasseBoisEpoxyId, tableBasseBoisEpoxyImgName),
        deleted: false,
        shopId: lBDAId
    })

    const tableauAneId = uuidv4()
    const tableauAneImgPath = 'Stand/laboutiquedesartisans/produits/Tableau ane.png'
    const tableauAneImgData = fs.readFileSync(tableauAneImgPath)
    const tableauAneImgName = tableauAneImgPath.split('/').pop()
    mkProduct(tableauAneId, lBDAId)
    writeProduct(tableauAneId, lBDAId, { name:tableauAneImgName, data: tableauAneImgData })
    await Product.create({
        id: tableauAneId,
        name: "Tableau Âne",
        description: "Lorem Ipsum.",
        price: "125",
        stock: "6",
        path: getProductPath(lBDAId, tableauAneId, tableauAneImgName),
        deleted: false,
        shopId: lBDAId
    })

    const tableauLicorneId = uuidv4()
    const tableauLicorneImgPath = 'Stand/laboutiquedesartisans/produits/Tableau licorne.png'
    const tableauLicorneImgData = fs.readFileSync(tableauLicorneImgPath)
    const tableauLicorneImgName = tableauLicorneImgPath.split('/').pop()
    mkProduct(tableauLicorneId, lBDAId)
    writeProduct(tableauLicorneId, lBDAId, { name:tableauLicorneImgName, data: tableauLicorneImgData })
    await Product.create({
        id: tableauLicorneId,
        name: "Tableau Licorne",
        description: "Lorem Ipsum.",
        price: "125",
        stock: "6",
        path: getProductPath(lBDAId, tableauLicorneId, tableauLicorneImgName),
        deleted: false,
        shopId: lBDAId
    })

    const tabletteBoisId = uuidv4()
    const tabletteBoisImgPath = 'Stand/laboutiquedesartisans/produits/Tablette en bois.png'
    const tabletteBoisImgData = fs.readFileSync(tabletteBoisImgPath)
    const tabletteBoisImgName = tabletteBoisImgPath.split('/').pop()
    mkProduct(tabletteBoisId, lBDAId)
    writeProduct(tabletteBoisId, lBDAId, { name:tabletteBoisImgName, data: tabletteBoisImgData })
    await Product.create({
        id: tabletteBoisId,
        name: "Tablette en Bois",
        description: "Lorem Ipsum.",
        price: "175",
        stock: "68",
        path: getProductPath(lBDAId, tabletteBoisId, tabletteBoisImgName),
        deleted: false,
        shopId: lBDAId
    })

    console.log(`${ChalkMSG.SUCCESS}La Boutique Des Artisans created !`)
}

export default lBDA