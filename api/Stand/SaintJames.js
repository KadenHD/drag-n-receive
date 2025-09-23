import ChalkMSG from '../Scripts/Chalk.js'
import { User, Shop, Product } from '../Models/Models.js'
import bcrypt from 'bcrypt'
import { mkUser, mkShop, mkProduct, writeUser, writeShop, writeProduct } from '../Scripts/FileSystems.js'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

const getShopPath = (shopId, logoName) => '/Companies/' + shopId + '/Logo/' + logoName
const getUserPath = (userId, photoName) => '/Users/' + userId + '/Photo/' + photoName
const getProductPath = (shopId, productId, imageName) => '/Companies/' + shopId + '/Products/' + productId + '/' + imageName

const saintJames = async () => {
    /* Default Shop */
    const saintJamesId = uuidv4()
    const saintJamesImgPath = 'Stand/saintJames/logo.png'
    const saintJamesImgData = fs.readFileSync(saintJamesImgPath)
    const saintJamesImgName = saintJamesImgPath.split('/').pop()
    mkShop(saintJamesId)
    writeShop(saintJamesId, { name:saintJamesImgName, data: saintJamesImgData })
    await Shop.create({
        id: saintJamesId,
        name: "Saint James",
        email: "service@stjam.fr",
        phone: "0344024932",
        city: "Beauvais",
        street: "47 Place Jeanne Hachette",
        postal: "60000",
        path: getShopPath(saintJamesId, saintJamesImgName),
        deleted: false
    })

    /* Default Partners */
    const hashPassword = () => bcrypt.hash("Password1@", 10)
    const lucMarinId = uuidv4()
    const lucMarinImgPath = 'Stand/saintJames/partners/Luc_Marin.jpg'
    const lucMarinImgData = fs.readFileSync(lucMarinImgPath)
    const lucMarinImgName = lucMarinImgPath.split('/').pop()
    mkUser(lucMarinId)
    writeUser(lucMarinId, { name:lucMarinImgName, data: lucMarinImgData })
    await User.create({ 
        id: lucMarinId, 
        lastname: "Marin", 
        firstname: "Luc", 
        email: "luc.marin@stjam.fr", 
        password: await hashPassword(), 
        path: getUserPath(lucMarinId, lucMarinImgName),
        roleId: "3", 
        shopId: saintJamesId
    })
    const lucieMarineId = uuidv4()
    const lucieMarineImgPath = 'Stand/saintJames/partners/Lucie_Marine.jpeg'
    const lucieMarineImgData = fs.readFileSync(lucieMarineImgPath)
    const lucieMarineImgName = lucieMarineImgPath.split('/').pop()
    mkUser(lucieMarineId)
    writeUser(lucieMarineId, { name:lucieMarineImgName, data: lucieMarineImgData })
    await User.create({ 
        id: lucieMarineId, 
        lastname: "Marine", 
        firstname: "Lucie", 
        email: "lucie.marine@stjam.fr", 
        password: await hashPassword(), 
        path: getUserPath(lucieMarineId, lucieMarineImgName),
        roleId: "3", 
        shopId: saintJamesId
    })

    /* Default Products */
    const bermudaFemmeId = uuidv4()
    const bermudaFemmeImgPath = 'Stand/saintJames/produits/bermuda femme 90.png'
    const bermudaFemmeImgData = fs.readFileSync(bermudaFemmeImgPath)
    const bermudaFemmeImgName = bermudaFemmeImgPath.split('/').pop()
    mkProduct(bermudaFemmeId, saintJamesId)
    writeProduct(bermudaFemmeId, saintJamesId, { name:bermudaFemmeImgName, data: bermudaFemmeImgData })
    await Product.create({
        id: bermudaFemmeId,
        name: "Bermuda Femme",
        description: "Bermuda pour Femme",
        price: "90",
        stock: "23",
        path: getProductPath(saintJamesId, bermudaFemmeId, bermudaFemmeImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const bonnetJauneId = uuidv4()
    const bonnetJauneImgPath = 'Stand/saintJames/produits/bonnet jaune 50.png'
    const bonnetJauneImgData = fs.readFileSync(bonnetJauneImgPath)
    const bonnetJauneImgName = bonnetJauneImgPath.split('/').pop()
    mkProduct(bonnetJauneId, saintJamesId)
    writeProduct(bonnetJauneId, saintJamesId, { name:bonnetJauneImgName, data: bonnetJauneImgData })
    await Product.create({
        id: bonnetJauneId,
        name: "Bonnet Jaune",
        description: "Bonnet bien jaune",
        price: "50",
        stock: "14",
        path: getProductPath(saintJamesId, bonnetJauneId, bonnetJauneImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const bonnetRayeId = uuidv4()
    const bonnetRayeImgPath = 'Stand/saintJames/produits/bonnet rayé 55.png'
    const bonnetRayeImgData = fs.readFileSync(bonnetRayeImgPath)
    const bonnetRayeImgName = bonnetRayeImgPath.split('/').pop()
    mkProduct(bonnetRayeId, saintJamesId)
    writeProduct(bonnetRayeId, saintJamesId, { name:bonnetRayeImgName, data: bonnetRayeImgData })
    await Product.create({
        id: bonnetRayeId,
        name: "Bonnet Rayé",
        description: "Bonnet bien Rayé",
        price: "55",
        stock: "10",
        path: getProductPath(saintJamesId, bonnetRayeId, bonnetRayeImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const bonnetUniId = uuidv4()
    const bonnetUniImgPath = 'Stand/saintJames/produits/bonnet uni 40.png'
    const bonnetUniImgData = fs.readFileSync(bonnetUniImgPath)
    const bonnetUniImgName = bonnetUniImgPath.split('/').pop()
    mkProduct(bonnetUniId, saintJamesId)
    writeProduct(bonnetUniId, saintJamesId, { name:bonnetUniImgName, data: bonnetUniImgData })
    await Product.create({
        id: bonnetUniId,
        name: "Bonnet Uni",
        description: "Bonnet bien uni",
        price: "40",
        stock: "9",
        path: getProductPath(saintJamesId, bonnetUniId, bonnetUniImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const parfumId = uuidv4()
    const parfumImgPath = 'Stand/saintJames/produits/bouteille parfum mdr 200.png'
    const parfumImgData = fs.readFileSync(parfumImgPath)
    const parfumImgName = parfumImgPath.split('/').pop()
    mkProduct(parfumId, saintJamesId)
    writeProduct(parfumId, saintJamesId, { name:parfumImgName, data: parfumImgData })
    await Product.create({
        id: parfumId,
        name: "Parfum Sucré",
        description: "Sucré au sucre",
        price: "200",
        stock: "3",
        path: getProductPath(saintJamesId, parfumId, parfumImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const cabanId = uuidv4()
    const cabanImgPath = 'Stand/saintJames/produits/caban femme chanvre et laine 499.png'
    const cabanImgData = fs.readFileSync(cabanImgPath)
    const cabanImgName = cabanImgPath.split('/').pop()
    mkProduct(cabanId, saintJamesId)
    writeProduct(cabanId, saintJamesId, { name:cabanImgName, data: cabanImgData })
    await Product.create({
        id: cabanId,
        name: "Caban Femme",
        description: "Caban en chanvre et laine",
        price: "499",
        stock: "30",
        path: getProductPath(saintJamesId, cabanId, cabanImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const mariniereId = uuidv4()
    const mariniereImgPath = 'Stand/saintJames/produits/mariniere 170.png'
    const mariniereImgData = fs.readFileSync(mariniereImgPath)
    const mariniereImgName = mariniereImgPath.split('/').pop()
    mkProduct(mariniereId, saintJamesId)
    writeProduct(mariniereId, saintJamesId, { name:mariniereImgName, data: mariniereImgData })
    await Product.create({
        id: mariniereId,
        name: "Marinière",
        description: "Marinière blanche et bleu",
        price: "170",
        stock: "18",
        path: getProductPath(saintJamesId, mariniereId, mariniereImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const pullFemmeId = uuidv4()
    const pullFemmeImgPath = 'Stand/saintJames/produits/Pull femme 170.png'
    const pullFemmeImgData = fs.readFileSync(pullFemmeImgPath)
    const pullFemmeImgName = pullFemmeImgPath.split('/').pop()
    mkProduct(pullFemmeId, saintJamesId)
    writeProduct(pullFemmeId, saintJamesId, { name:pullFemmeImgName, data: pullFemmeImgData })
    await Product.create({
        id: pullFemmeId,
        name: "Pull Femme",
        description: "Pull pour femme",
        price: "170",
        stock: "13",
        path: getProductPath(saintJamesId, pullFemmeId, pullFemmeImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const pullHommeId = uuidv4()
    const pullHommeImgPath = 'Stand/saintJames/produits/Pull homme 150.png'
    const pullHommeImgData = fs.readFileSync(pullHommeImgPath)
    const pullHommeImgName = pullHommeImgPath.split('/').pop()
    mkProduct(pullHommeId, saintJamesId)
    writeProduct(pullHommeId, saintJamesId, { name:pullHommeImgName, data: pullHommeImgData })
    await Product.create({
        id: pullHommeId,
        name: "Pull Homme",
        description: "Pull pour homme",
        price: "150",
        stock: "17",
        path: getProductPath(saintJamesId, pullHommeId, pullHommeImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const pullHommeLbId = uuidv4()
    const pullHommeLbImgPath = 'Stand/saintJames/produits/Pull homme laine bleu 235.png'
    const pullHommeLbImgData = fs.readFileSync(pullHommeLbImgPath)
    const pullHommeLbImgName = pullHommeLbImgPath.split('/').pop()
    mkProduct(pullHommeLbId, saintJamesId)
    writeProduct(pullHommeLbId, saintJamesId, { name:pullHommeLbImgName, data: pullHommeLbImgData })
    await Product.create({
        id: pullHommeLbId,
        name: "Pull Homme Laine Bleu",
        description: "Pull pour homme en laine bleu",
        price: "235",
        stock: "5",
        path: getProductPath(saintJamesId, pullHommeLbId, pullHommeLbImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const pullMatelotId = uuidv4()
    const pullMatelotImgPath = 'Stand/saintJames/produits/pull matelot uni homme 155.png'
    const pullMatelotImgData = fs.readFileSync(pullMatelotImgPath)
    const pullMatelotImgName = pullMatelotImgPath.split('/').pop()
    mkProduct(pullMatelotId, saintJamesId)
    writeProduct(pullMatelotId, saintJamesId, { name:pullMatelotImgName, data: pullMatelotImgData })
    await Product.create({
        id: pullMatelotId,
        name: "Pull Matelot Uni Homme",
        description: "Pull pour homme en matelot",
        price: "155",
        stock: "24",
        path: getProductPath(saintJamesId, pullMatelotId, pullMatelotImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const pullRougeId = uuidv4()
    const pullRougeImgPath = 'Stand/saintJames/produits/pull rouge 170.png'
    const pullRougeImgData = fs.readFileSync(pullRougeImgPath)
    const pullRougeImgName = pullRougeImgPath.split('/').pop()
    mkProduct(pullRougeId, saintJamesId)
    writeProduct(pullRougeId, saintJamesId, { name:pullRougeImgName, data: pullRougeImgData })
    await Product.create({
        id: pullRougeId,
        name: "Pull Rouge",
        description: "Pull Rouge",
        price: "170",
        stock: "12",
        path: getProductPath(saintJamesId, pullRougeId, pullRougeImgName),
        deleted: false,
        shopId: saintJamesId
    })

    const vesteHommeId = uuidv4()
    const vesteHommeImgPath = 'Stand/saintJames/produits/vest homme 190.png'
    const vesteHommeImgData = fs.readFileSync(vesteHommeImgPath)
    const vesteHommeImgName = vesteHommeImgPath.split('/').pop()
    mkProduct(vesteHommeId, saintJamesId)
    writeProduct(vesteHommeId, saintJamesId, { name:vesteHommeImgName, data: vesteHommeImgData })
    await Product.create({
        id: vesteHommeId,
        name: "Veste Homme",
        description: "Une veste d'homme",
        price: "190",
        stock: "16",
        path: getProductPath(saintJamesId, vesteHommeId, vesteHommeImgName),
        deleted: false,
        shopId: saintJamesId
    })

    console.log(`${ChalkMSG.SUCCESS}Saint James created !`)
}

export default saintJames