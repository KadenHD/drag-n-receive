import ChalkMSG from '../Scripts/Chalk.js'
import { User, Shop, Product } from '../Models/Models.js'
import bcrypt from 'bcrypt'
import { mkUser, mkShop, mkProduct, writeUser, writeShop, writeProduct } from '../Scripts/FileSystems.js'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

const getShopPath = (shopId, logoName) => '/Companies/' + shopId + '/Logo/' + logoName
const getUserPath = (userId, photoName) => '/Users/' + userId + '/Photo/' + photoName
const getProductPath = (shopId, productId, imageName) => '/Companies/' + shopId + '/Products/' + productId + '/' + imageName

const lME = async () => {
    /* Default Shop */
    const lMEId = uuidv4()
    const lMEImgPath = 'Stand/lme/logo.png'
    const lMEImgData = fs.readFileSync(lMEImgPath)
    const lMEImgName = lMEImgPath.split('/').pop()
    mkShop(lMEId)
    writeShop(lMEId, { name:lMEImgName, data: lMEImgData })
    await Shop.create({
        id: lMEId,
        name: "La Miellerie Enchantée",
        email: "service@lme.fr",
        phone: "0651116675",
        city: "Savignies",
        street: "2 Rue du Lavoir des Dames",
        postal: "60650",
        path: getShopPath(lMEId, lMEImgName),
        deleted: false
    })

    /* Default Partners */
    const hashPassword = () => bcrypt.hash("Password1@", 10)
    const hugoBourdonId = uuidv4()
    const hugoBourdonImgPath = 'Stand/lme/partners/Hugo_Bourdon.jpg'
    const hugoBourdonImgData = fs.readFileSync(hugoBourdonImgPath)
    const hugoBourdonImgName = hugoBourdonImgPath.split('/').pop()
    mkUser(hugoBourdonId)
    writeUser(hugoBourdonId, { name:hugoBourdonImgName, data: hugoBourdonImgData })
    await User.create({ 
        id: hugoBourdonId, 
        lastname: "Bourdon", 
        firstname: "Hugo", 
        email: "hugo.bourdon@lme.fr", 
        password: await hashPassword(), 
        path: getUserPath(hugoBourdonId, hugoBourdonImgName),
        roleId: "3", 
        shopId: lMEId
    })
    const mikeAbeilleId = uuidv4()
    const mikeAbeilleImgPath = 'Stand/lme/partners/Mike_Abeille.jpg'
    const mikeAbeilleImgData = fs.readFileSync(mikeAbeilleImgPath)
    const mikeAbeilleImgName = mikeAbeilleImgPath.split('/').pop()
    mkUser(mikeAbeilleId)
    writeUser(mikeAbeilleId, { name:mikeAbeilleImgName, data: mikeAbeilleImgData })
    await User.create({ 
        id: mikeAbeilleId, 
        lastname: "Abeille", 
        firstname: "Mike", 
        email: "mike.abeille@lme.fr", 
        password: await hashPassword(), 
        path: getUserPath(mikeAbeilleId, mikeAbeilleImgName),
        roleId: "3", 
        shopId: lMEId
    })

    /* Default Products */
    const chocoMielId = uuidv4()
    const chocoMielImgPath = 'Stand/lme/produits/choco_miel.png'
    const chocoMielImgData = fs.readFileSync(chocoMielImgPath)
    const chocoMielImgName = chocoMielImgPath.split('/').pop()
    mkProduct(chocoMielId, lMEId)
    writeProduct(chocoMielId, lMEId, { name:chocoMielImgName, data: chocoMielImgData })
    await Product.create({
        id: chocoMielId,
        name: "Chocomiel (250g)",
        description: "Lorem Ipsum.",
        price: "6",
        stock: "180",
        path: getProductPath(lMEId, chocoMielId, chocoMielImgName),
        deleted: false,
        shopId: lMEId
    })

    const mielNoisetteId = uuidv4()
    const mielNoisetteImgPath = 'Stand/lme/produits/Miel_noisette.png'
    const mielNoisetteImgData = fs.readFileSync(mielNoisetteImgPath)
    const mielNoisetteImgName = mielNoisetteImgPath.split('/').pop()
    mkProduct(mielNoisetteId, lMEId)
    writeProduct(mielNoisetteId, lMEId, { name:mielNoisetteImgName, data: mielNoisetteImgData })
    await Product.create({
        id: mielNoisetteId,
        name: "Délice des écureuils (250g)",
        description: "Lorem Ipsum.",
        price: "6",
        stock: "180",
        path: getProductPath(lMEId, mielNoisetteId, mielNoisetteImgName),
        deleted: false,
        shopId: lMEId
    })

    const confimielNoelId = uuidv4()
    const confimielNoelImgPath = 'Stand/lme/produits/Confimiel_noel.png'
    const confimielNoelImgData = fs.readFileSync(confimielNoelImgPath)
    const confimielNoelImgName = confimielNoelImgPath.split('/').pop()
    mkProduct(confimielNoelId, lMEId)
    writeProduct(confimielNoelId, lMEId, { name:confimielNoelImgName, data: confimielNoelImgData })
    await Product.create({
        id: confimielNoelId,
        name: "Confimiel Noël (250g)",
        description: "Lorem Ipsum.",
        price: "5.5",
        stock: "180",
        path: getProductPath(lMEId, confimielNoelId, confimielNoelImgName),
        deleted: false,
        shopId: lMEId
    })

    const confimielPommeSpeculosId = uuidv4()
    const confimielPommeSpeculosImgPath = 'Stand/lme/produits/Confimiel_pomme_speculoos.png'
    const confimielPommeSpeculosImgData = fs.readFileSync(confimielPommeSpeculosImgPath)
    const confimielPommeSpeculosImgName = confimielPommeSpeculosImgPath.split('/').pop()
    mkProduct(confimielPommeSpeculosId, lMEId)
    writeProduct(confimielPommeSpeculosId, lMEId, { name:confimielPommeSpeculosImgName, data: confimielPommeSpeculosImgData })
    await Product.create({
        id: confimielPommeSpeculosId,
        name: "Confimiel Pomme Spéculos (250g)",
        description: "Lorem Ipsum.",
        price: "5",
        stock: "180",
        path: getProductPath(lMEId, confimielPommeSpeculosId, confimielPommeSpeculosImgName),
        deleted: false,
        shopId: lMEId
    })

    const confimielPoirePainId = uuidv4()
    const confimielPoirePainImgPath = 'Stand/lme/produits/Confimiel_poires_painepices.png'
    const confimielPoirePainImgData = fs.readFileSync(confimielPoirePainImgPath)
    const confimielPoirePainImgName = confimielPoirePainImgPath.split('/').pop()
    mkProduct(confimielPoirePainId, lMEId)
    writeProduct(confimielPoirePainId, lMEId, { name:confimielPoirePainImgName, data: confimielPoirePainImgData })
    await Product.create({
        id: confimielPoirePainId,
        name: "Confimiel Poire Pain d'Épices (250g)",
        description: "Lorem Ipsum.",
        price: "5",
        stock: "180",
        path: getProductPath(lMEId, confimielPoirePainId, confimielPoirePainImgName),
        deleted: false,
        shopId: lMEId
    })

    const confimielPommeGingembreId = uuidv4()
    const confimielPommeGingembreImgPath = 'Stand/lme/produits/Confimiel_pommes_gingembre.png'
    const confimielPommeGingembreImgData = fs.readFileSync(confimielPommeGingembreImgPath)
    const confimielPommeGingembreImgName = confimielPommeGingembreImgPath.split('/').pop()
    mkProduct(confimielPommeGingembreId, lMEId)
    writeProduct(confimielPommeGingembreId, lMEId, { name:confimielPommeGingembreImgName, data: confimielPommeGingembreImgData })
    await Product.create({
        id: confimielPommeGingembreId,
        name: "Confimiel Pomme Gingembre (250g)",
        description: "Lorem Ipsum.",
        price: "5",
        stock: "180",
        path: getProductPath(lMEId, confimielPommeGingembreId, confimielPommeGingembreImgName),
        deleted: false,
        shopId: lMEId
    })

    const confimielBananeFlambeeId = uuidv4()
    const confimielBananeFlambeeImgPath = 'Stand/lme/produits/Confimiel_banane_flambées.png'
    const confimielBananeFlambeeImgData = fs.readFileSync(confimielBananeFlambeeImgPath)
    const confimielBananeFlambeeImgName = confimielBananeFlambeeImgPath.split('/').pop()
    mkProduct(confimielBananeFlambeeId, lMEId)
    writeProduct(confimielBananeFlambeeId, lMEId, { name:confimielBananeFlambeeImgName, data: confimielBananeFlambeeImgData })
    await Product.create({
        id: confimielBananeFlambeeId,
        name: "Confimiel Banane Flambée (250g)",
        description: "Lorem Ipsum.",
        price: "5",
        stock: "180",
        path: getProductPath(lMEId, confimielBananeFlambeeId, confimielBananeFlambeeImgName),
        deleted: false,
        shopId: lMEId
    })

    const mielForet250Id = uuidv4()
    const mielForet250ImgPath = 'Stand/lme/produits/Miel_foret.png'
    const mielForet250ImgData = fs.readFileSync(mielForet250ImgPath)
    const mielForet250ImgName = mielForet250ImgPath.split('/').pop()
    mkProduct(mielForet250Id, lMEId)
    writeProduct(mielForet250Id, lMEId, { name:mielForet250ImgName, data: mielForet250ImgData })
    await Product.create({
        id: mielForet250Id,
        name: "Miel Forêt (250g)",
        description: "Lorem Ipsum.",
        price: "5",
        stock: "180",
        path: getProductPath(lMEId, mielForet250Id, mielForet250ImgName),
        deleted: false,
        shopId: lMEId
    })
    
    const mielForet500Id = uuidv4()
    const mielForet500ImgPath = 'Stand/lme/produits/Miel_foret.png'
    const mielForet500ImgData = fs.readFileSync(mielForet500ImgPath)
    const mielForet500ImgName = mielForet500ImgPath.split('/').pop()
    mkProduct(mielForet500Id, lMEId)
    writeProduct(mielForet500Id, lMEId, { name:mielForet500ImgName, data: mielForet500ImgData })
    await Product.create({
        id: mielForet500Id,
        name: "Miel Forêt (500g)",
        description: "Lorem Ipsum.",
        price: "9",
        stock: "180",
        path: getProductPath(lMEId, mielForet500Id, mielForet500ImgName),
        deleted: false,
        shopId: lMEId
    })

    const mielChataigniers250Id = uuidv4()
    const mielChataigniers250ImgPath = 'Stand/lme/produits/Miel_chataigniers.png'
    const mielChataigniers250ImgData = fs.readFileSync(mielChataigniers250ImgPath)
    const mielChataigniers250ImgName = mielChataigniers250ImgPath.split('/').pop()
    mkProduct(mielChataigniers250Id, lMEId)
    writeProduct(mielChataigniers250Id, lMEId, { name:mielChataigniers250ImgName, data: mielChataigniers250ImgData })
    await Product.create({
        id: mielChataigniers250Id,
        name: "Miel Châtaigniers (250g)",
        description: "Lorem Ipsum.",
        price: "5",
        stock: "180",
        path: getProductPath(lMEId, mielChataigniers250Id, mielChataigniers250ImgName),
        deleted: false,
        shopId: lMEId
    })
    
    const mielChataigniers500Id = uuidv4()
    const mielChataigniers500ImgPath = 'Stand/lme/produits/Miel_Chataigniers.png'
    const mielChataigniers500ImgData = fs.readFileSync(mielChataigniers500ImgPath)
    const mielChataigniers500ImgName = mielChataigniers500ImgPath.split('/').pop()
    mkProduct(mielChataigniers500Id, lMEId)
    writeProduct(mielChataigniers500Id, lMEId, { name:mielChataigniers500ImgName, data: mielChataigniers500ImgData })
    await Product.create({
        id: mielChataigniers500Id,
        name: "Miel Châtaigniers (500g)",
        description: "Lorem Ipsum.",
        price: "9",
        stock: "180",
        path: getProductPath(lMEId, mielChataigniers500Id, mielChataigniers500ImgName),
        deleted: false,
        shopId: lMEId
    })

    const mielTilleul250Id = uuidv4()
    const mielTilleul250ImgPath = 'Stand/lme/produits/Miel Tilleul.png'
    const mielTilleul250ImgData = fs.readFileSync(mielTilleul250ImgPath)
    const mielTilleul250ImgName = mielTilleul250ImgPath.split('/').pop()
    mkProduct(mielTilleul250Id, lMEId)
    writeProduct(mielTilleul250Id, lMEId, { name:mielTilleul250ImgName, data: mielTilleul250ImgData })
    await Product.create({
        id: mielTilleul250Id,
        name: "Miel Tilleul (250g)",
        description: "Lorem Ipsum.",
        price: "5",
        stock: "180",
        path: getProductPath(lMEId, mielTilleul250Id, mielTilleul250ImgName),
        deleted: false,
        shopId: lMEId
    })
    
    const mielTilleul500Id = uuidv4()
    const mielTilleul500ImgPath = 'Stand/lme/produits/Miel Tilleul.png'
    const mielTilleul500ImgData = fs.readFileSync(mielTilleul500ImgPath)
    const mielTilleul500ImgName = mielTilleul500ImgPath.split('/').pop()
    mkProduct(mielTilleul500Id, lMEId)
    writeProduct(mielTilleul500Id, lMEId, { name:mielTilleul500ImgName, data: mielTilleul500ImgData })
    await Product.create({
        id: mielTilleul500Id,
        name: "Miel Tilleul (500g)",
        description: "Lorem Ipsum.",
        price: "9",
        stock: "180",
        path: getProductPath(lMEId, mielTilleul500Id, mielTilleul500ImgName),
        deleted: false,
        shopId: lMEId
    })

    const mielEte250Id = uuidv4()
    const mielEte250ImgPath = 'Stand/lme/produits/Miel_ete.png'
    const mielEte250ImgData = fs.readFileSync(mielEte250ImgPath)
    const mielEte250ImgName = mielEte250ImgPath.split('/').pop()
    mkProduct(mielEte250Id, lMEId)
    writeProduct(mielEte250Id, lMEId, { name:mielEte250ImgName, data: mielEte250ImgData })
    await Product.create({
        id: mielEte250Id,
        name: "Miel Été (250g)",
        description: "Lorem Ipsum.",
        price: "4.5",
        stock: "180",
        path: getProductPath(lMEId, mielEte250Id, mielEte250ImgName),
        deleted: false,
        shopId: lMEId
    })
    
    const mielEte500Id = uuidv4()
    const mielEte500ImgPath = 'Stand/lme/produits/Miel_ete.png'
    const mielEte500ImgData = fs.readFileSync(mielEte500ImgPath)
    const mielEte500ImgName = mielEte500ImgPath.split('/').pop()
    mkProduct(mielEte500Id, lMEId)
    writeProduct(mielEte500Id, lMEId, { name:mielEte500ImgName, data: mielEte500ImgData })
    await Product.create({
        id: mielEte500Id,
        name: "Miel Été (500g)",
        description: "Lorem Ipsum.",
        price: "8.5",
        stock: "180",
        path: getProductPath(lMEId, mielEte500Id, mielEte500ImgName),
        deleted: false,
        shopId: lMEId
    })

    const mielFleurs250Id = uuidv4()
    const mielFleurs250ImgPath = 'Stand/lme/produits/Miel_fleurs.png'
    const mielFleurs250ImgData = fs.readFileSync(mielFleurs250ImgPath)
    const mielFleurs250ImgName = mielFleurs250ImgPath.split('/').pop()
    mkProduct(mielFleurs250Id, lMEId)
    writeProduct(mielFleurs250Id, lMEId, { name:mielFleurs250ImgName, data: mielFleurs250ImgData })
    await Product.create({
        id: mielFleurs250Id,
        name: "Miel Fleurs (250g)",
        description: "Lorem Ipsum.",
        price: "4.5",
        stock: "180",
        path: getProductPath(lMEId, mielFleurs250Id, mielFleurs250ImgName),
        deleted: false,
        shopId: lMEId
    })
    
    const mielFleurs500Id = uuidv4()
    const mielFleurs500ImgPath = 'Stand/lme/produits/Miel_fleurs.png'
    const mielFleurs500ImgData = fs.readFileSync(mielFleurs500ImgPath)
    const mielFleurs500ImgName = mielFleurs500ImgPath.split('/').pop()
    mkProduct(mielFleurs500Id, lMEId)
    writeProduct(mielFleurs500Id, lMEId, { name:mielFleurs500ImgName, data: mielFleurs500ImgData })
    await Product.create({
        id: mielFleurs500Id,
        name: "Miel Fleurs (500g)",
        description: "Lorem Ipsum.",
        price: "8.5",
        stock: "180",
        path: getProductPath(lMEId, mielFleurs500Id, mielFleurs500ImgName),
        deleted: false,
        shopId: lMEId
    })

    const mielCremeux250Id = uuidv4()
    const mielCremeux250ImgPath = 'Stand/lme/produits/Miel_cremeuxpng.png'
    const mielCremeux250ImgData = fs.readFileSync(mielCremeux250ImgPath)
    const mielCremeux250ImgName = mielCremeux250ImgPath.split('/').pop()
    mkProduct(mielCremeux250Id, lMEId)
    writeProduct(mielCremeux250Id, lMEId, { name:mielCremeux250ImgName, data: mielCremeux250ImgData })
    await Product.create({
        id: mielCremeux250Id,
        name: "Miel Crémeux (250g)",
        description: "Lorem Ipsum.",
        price: "4.5",
        stock: "180",
        path: getProductPath(lMEId, mielCremeux250Id, mielCremeux250ImgName),
        deleted: false,
        shopId: lMEId
    })
    
    const mielCremeux500Id = uuidv4()
    const mielCremeux500ImgPath = 'Stand/lme/produits/Miel_cremeuxpng.png'
    const mielCremeux500ImgData = fs.readFileSync(mielCremeux500ImgPath)
    const mielCremeux500ImgName = mielCremeux500ImgPath.split('/').pop()
    mkProduct(mielCremeux500Id, lMEId)
    writeProduct(mielCremeux500Id, lMEId, { name:mielCremeux500ImgName, data: mielCremeux500ImgData })
    await Product.create({
        id: mielCremeux500Id,
        name: "Miel Crémeux (500g)",
        description: "Lorem Ipsum.",
        price: "8.5",
        stock: "180",
        path: getProductPath(lMEId, mielCremeux500Id, mielCremeux500ImgName),
        deleted: false,
        shopId: lMEId
    })

    const mielPrintemps250Id = uuidv4()
    const mielPrintemps250ImgPath = 'Stand/lme/produits/Miel_Printemps.png'
    const mielPrintemps250ImgData = fs.readFileSync(mielPrintemps250ImgPath)
    const mielPrintemps250ImgName = mielPrintemps250ImgPath.split('/').pop()
    mkProduct(mielPrintemps250Id, lMEId)
    writeProduct(mielPrintemps250Id, lMEId, { name:mielPrintemps250ImgName, data: mielPrintemps250ImgData })
    await Product.create({
        id: mielPrintemps250Id,
        name: "Miel Printemps (250g)",
        description: "Lorem Ipsum.",
        price: "4.5",
        stock: "180",
        path: getProductPath(lMEId, mielPrintemps250Id, mielPrintemps250ImgName),
        deleted: false,
        shopId: lMEId
    })
    
    const mielPrintemps500Id = uuidv4()
    const mielPrintemps500ImgPath = 'Stand/lme/produits/Miel_Printemps.png'
    const mielPrintemps500ImgData = fs.readFileSync(mielPrintemps500ImgPath)
    const mielPrintemps500ImgName = mielPrintemps500ImgPath.split('/').pop()
    mkProduct(mielPrintemps500Id, lMEId)
    writeProduct(mielPrintemps500Id, lMEId, { name:mielPrintemps500ImgName, data: mielPrintemps500ImgData })
    await Product.create({
        id: mielPrintemps500Id,
        name: "Miel Printemps (500g)",
        description: "Lorem Ipsum.",
        price: "8.5",
        stock: "180",
        path: getProductPath(lMEId, mielPrintemps500Id, mielPrintemps500ImgName),
        deleted: false,
        shopId: lMEId
    })

    const mielDuo250Id = uuidv4()
    const mielDuo250ImgPath = 'Stand/lme/produits/duo_miel.png'
    const mielDuo250ImgData = fs.readFileSync(mielDuo250ImgPath)
    const mielDuo250ImgName = mielDuo250ImgPath.split('/').pop()
    mkProduct(mielDuo250Id, lMEId)
    writeProduct(mielDuo250Id, lMEId, { name:mielDuo250ImgName, data: mielDuo250ImgData })
    await Product.create({
        id: mielDuo250Id,
        name: "Miel Duo (250g)",
        description: "Lorem Ipsum.",
        price: "5.5",
        stock: "180",
        path: getProductPath(lMEId, mielDuo250Id, mielDuo250ImgName),
        deleted: false,
        shopId: lMEId
    })
    
    const mielDuo500Id = uuidv4()
    const mielDuo500ImgPath = 'Stand/lme/produits/duo_miel.png'
    const mielDuo500ImgData = fs.readFileSync(mielDuo500ImgPath)
    const mielDuo500ImgName = mielDuo500ImgPath.split('/').pop()
    mkProduct(mielDuo500Id, lMEId)
    writeProduct(mielDuo500Id, lMEId, { name:mielDuo500ImgName, data: mielDuo500ImgData })
    await Product.create({
        id: mielDuo500Id,
        name: "Miel Duo (500g)",
        description: "Lorem Ipsum.",
        price: "9.5",
        stock: "180",
        path: getProductPath(lMEId, mielDuo500Id, mielDuo500ImgName),
        deleted: false,
        shopId: lMEId
    })

    console.log(`${ChalkMSG.SUCCESS}La Miellerie Enchantée created !`)
}

export default lME