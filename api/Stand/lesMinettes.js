import ChalkMSG from '../Scripts/Chalk.js'
import { User, Shop, Product } from '../Models/Models.js'
import bcrypt from 'bcrypt'
import { mkUser, mkShop, mkProduct, writeUser, writeShop, writeProduct } from '../Scripts/FileSystems.js'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

const getShopPath = (shopId, logoName) => '/Companies/' + shopId + '/Logo/' + logoName
const getUserPath = (userId, photoName) => '/Users/' + userId + '/Photo/' + photoName
const getProductPath = (shopId, productId, imageName) => '/Companies/' + shopId + '/Products/' + productId + '/' + imageName

const lesMinettes = async () => {
    /* Default Shop */
    const lesMinettesId = uuidv4()
    const lesMinettesImgPath = 'Stand/lesminettes/logo.png'
    const lesMinettesImgData = fs.readFileSync(lesMinettesImgPath)
    const lesMinettesImgName = lesMinettesImgPath.split('/').pop()
    mkShop(lesMinettesId)
    writeShop(lesMinettesId, { name:lesMinettesImgName, data: lesMinettesImgData })
    await Shop.create({
        id: lesMinettesId,
        name: "Les Minettes",
        email: "service@lmin.fr",
        phone: "0682861889",
        city: "Wavignies",
        street: "46 Allée du Château",
        postal: "60130",
        path: getShopPath(lesMinettesId, lesMinettesImgName),
        deleted: false
    })

    /* Default Partners */
    const hashPassword = () => bcrypt.hash("Password1@", 10)
    const mathildeMarkovId = uuidv4()
    const mathildeMarkovImgPath = 'Stand/lesminettes/partners/Mathilde_Markov.png'
    const mathildeMarkovImgData = fs.readFileSync(mathildeMarkovImgPath)
    const mathildeMarkovImgName = mathildeMarkovImgPath.split('/').pop()
    mkUser(mathildeMarkovId)
    writeUser(mathildeMarkovId, { name:mathildeMarkovImgName, data: mathildeMarkovImgData })
    await User.create({ 
        id: mathildeMarkovId, 
        lastname: "Markov", 
        firstname: "Mathilde", 
        email: "mathilde.markov@lmin.fr", 
        password: await hashPassword(), 
        path: getUserPath(mathildeMarkovId, mathildeMarkovImgName),
        roleId: "3", 
        shopId: lesMinettesId
    })
    const paolaCressonId = uuidv4()
    const paolaCressonImgPath = 'Stand/lesminettes/partners/Paola_Cresson.png'
    const paolaCressonImgData = fs.readFileSync(paolaCressonImgPath)
    const paolaCressonImgName = paolaCressonImgPath.split('/').pop()
    mkUser(paolaCressonId)
    writeUser(paolaCressonId, { name:paolaCressonImgName, data: paolaCressonImgData })
    await User.create({ 
        id: paolaCressonId, 
        lastname: "Cresson", 
        firstname: "Paola", 
        email: "paola.cresson@lmin.fr", 
        password: await hashPassword(), 
        path: getUserPath(paolaCressonId, paolaCressonImgName),
        roleId: "3", 
        shopId: lesMinettesId
    })

    /* Default Products */
    const bonnetRoseId = uuidv4()
    const bonnetRoseImgPath = 'Stand/lesminettes/produits/bonnet_rose.jpg'
    const bonnetRoseImgData = fs.readFileSync(bonnetRoseImgPath)
    const bonnetRoseImgName = bonnetRoseImgPath.split('/').pop()
    mkProduct(bonnetRoseId, lesMinettesId)
    writeProduct(bonnetRoseId, lesMinettesId, { name:bonnetRoseImgName, data: bonnetRoseImgData })
    await Product.create({
        id: bonnetRoseId,
        name: "Bonnet Rose",
        description: "Lorem Ipsum.",
        price: "37.5",
        stock: "180",
        path: getProductPath(lesMinettesId, bonnetRoseId, bonnetRoseImgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const bOCId = uuidv4()
    const bOCImgPath = 'Stand/lesminettes/produits/boucles_oreilles_coquillages.jpg'
    const bOCImgData = fs.readFileSync(bOCImgPath)
    const bOCImgName = bOCImgPath.split('/').pop()
    mkProduct(bOCId, lesMinettesId)
    writeProduct(bOCId, lesMinettesId, { name:bOCImgName, data: bOCImgData })
    await Product.create({
        id: bOCId,
        name: "Boucles d'Oreilles Coquillages",
        description: "Lorem Ipsum.",
        price: "37.5",
        stock: "180",
        path: getProductPath(lesMinettesId, bOCId, bOCImgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const bOEId = uuidv4()
    const bOEImgPath = 'Stand/lesminettes/produits/boucles_oreilles_etoiles.jpg'
    const bOEImgData = fs.readFileSync(bOEImgPath)
    const bOEImgName = bOEImgPath.split('/').pop()
    mkProduct(bOEId, lesMinettesId)
    writeProduct(bOEId, lesMinettesId, { name:bOEImgName, data: bOEImgData })
    await Product.create({
        id: bOEId,
        name: "Boucles d'Oreilles Étoiles",
        description: "Lorem Ipsum.",
        price: "37.5",
        stock: "180",
        path: getProductPath(lesMinettesId, bOEId, bOEImgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const bOOpalId = uuidv4()
    const bOOpalImgPath = 'Stand/lesminettes/produits/boucles_oreilles_opal.jpg'
    const bOOpalImgData = fs.readFileSync(bOOpalImgPath)
    const bOOpalImgName = bOOpalImgPath.split('/').pop()
    mkProduct(bOOpalId, lesMinettesId)
    writeProduct(bOOpalId, lesMinettesId, { name:bOOpalImgName, data: bOOpalImgData })
    await Product.create({
        id: bOOpalId,
        name: "Boucles d'Oreilles Opal",
        description: "Lorem Ipsum.",
        price: "37.5",
        stock: "180",
        path: getProductPath(lesMinettesId, bOOpalId, bOOpalImgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const bOOrId = uuidv4()
    const bOOrImgPath = 'Stand/lesminettes/produits/boucles_oreilles_or.jpg'
    const bOOrImgData = fs.readFileSync(bOOrImgPath)
    const bOOrImgName = bOOrImgPath.split('/').pop()
    mkProduct(bOOrId, lesMinettesId)
    writeProduct(bOOrId, lesMinettesId, { name:bOOrImgName, data: bOOrImgData })
    await Product.create({
        id: bOOrId,
        name: "Boucles d'Oreilles Or",
        description: "Lorem Ipsum.",
        price: "37.5",
        stock: "180",
        path: getProductPath(lesMinettesId, bOOrId, bOOrImgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const bOPBId = uuidv4()
    const bOPBImgPath = 'Stand/lesminettes/produits/boucles_oreilles_perles_bleu.jpg'
    const bOPBImgData = fs.readFileSync(bOPBImgPath)
    const bOPBImgName = bOPBImgPath.split('/').pop()
    mkProduct(bOPBId, lesMinettesId)
    writeProduct(bOPBId, lesMinettesId, { name:bOPBImgName, data: bOPBImgData })
    await Product.create({
        id: bOPBId,
        name: "Boucles d'Oreilles Perles Bleu",
        description: "Lorem Ipsum.",
        price: "37.5",
        stock: "180",
        path: getProductPath(lesMinettesId, bOPBId, bOPBImgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const bOPMId = uuidv4()
    const bOPMImgPath = 'Stand/lesminettes/produits/boucles_oreilles_perles_marron.jpg'
    const bOPMImgData = fs.readFileSync(bOPMImgPath)
    const bOPMImgName = bOPMImgPath.split('/').pop()
    mkProduct(bOPMId, lesMinettesId)
    writeProduct(bOPMId, lesMinettesId, { name:bOPMImgName, data: bOPMImgData })
    await Product.create({
        id: bOPMId,
        name: "Boucles d'Oreilles Perles Marron",
        description: "Lorem Ipsum.",
        price: "37.5",
        stock: "180",
        path: getProductPath(lesMinettesId, bOPMId, bOPMImgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const cFBId = uuidv4()
    const cFBImgPath = 'Stand/lesminettes/produits/chaussures_fleurs_blanche.jpg'
    const cFBImgData = fs.readFileSync(cFBImgPath)
    const cFBImgName = cFBImgPath.split('/').pop()
    mkProduct(cFBId, lesMinettesId)
    writeProduct(cFBId, lesMinettesId, { name:cFBImgName, data: cFBImgData })
    await Product.create({
        id: cFBId,
        name: "Chaussures Fleurs Blanche",
        description: "Lorem Ipsum.",
        price: "57.5",
        stock: "180",
        path: getProductPath(lesMinettesId, cFBId, cFBImgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const cFNId = uuidv4()
    const cFNImgPath = 'Stand/lesminettes/produits/chaussures_fleurs_noire.jpg'
    const cFNImgData = fs.readFileSync(cFNImgPath)
    const cFNImgName = cFNImgPath.split('/').pop()
    mkProduct(cFNId, lesMinettesId)
    writeProduct(cFNId, lesMinettesId, { name:cFNImgName, data: cFNImgData })
    await Product.create({
        id: cFNId,
        name: "Chaussures Fleurs Noire",
        description: "Lorem Ipsum.",
        price: "57.5",
        stock: "180",
        path: getProductPath(lesMinettesId, cFNId, cFNImgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const cTBId = uuidv4()
    const cTBmgPath = 'Stand/lesminettes/produits/chaussures_tigres_beiges.jpg'
    const cTBmgData = fs.readFileSync(cTBmgPath)
    const cTBmgName = cTBmgPath.split('/').pop()
    mkProduct(cTBId, lesMinettesId)
    writeProduct(cTBId, lesMinettesId, { name:cTBmgName, data: cTBmgData })
    await Product.create({
        id: cTBId,
        name: "Chaussures Tigres Beige",
        description: "Lorem Ipsum.",
        price: "57.5",
        stock: "180",
        path: getProductPath(lesMinettesId, cTBId, cTBmgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const cTVId = uuidv4()
    const cTVmgPath = 'Stand/lesminettes/produits/chaussures_tigres_vert.jpg'
    const cTVmgData = fs.readFileSync(cTVmgPath)
    const cTVmgName = cTVmgPath.split('/').pop()
    mkProduct(cTVId, lesMinettesId)
    writeProduct(cTVId, lesMinettesId, { name:cTVmgName, data: cTVmgData })
    await Product.create({
        id: cTVId,
        name: "Chaussures Tigres Verte",
        description: "Lorem Ipsum.",
        price: "57.5",
        stock: "180",
        path: getProductPath(lesMinettesId, cTVId, cTVmgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const fBId = uuidv4()
    const fBmgPath = 'Stand/lesminettes/produits/foulard_bleu.jpg'
    const fBmgData = fs.readFileSync(fBmgPath)
    const fBmgName = fBmgPath.split('/').pop()
    mkProduct(fBId, lesMinettesId)
    writeProduct(fBId, lesMinettesId, { name:fBmgName, data: fBmgData })
    await Product.create({
        id: fBId,
        name: "Foulard Bleu",
        description: "Lorem Ipsum.",
        price: "27.5",
        stock: "180",
        path: getProductPath(lesMinettesId, fBId, fBmgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const fVId = uuidv4()
    const fVmgPath = 'Stand/lesminettes/produits/foulard_vert.jpg'
    const fVmgData = fs.readFileSync(fVmgPath)
    const fVmgName = fVmgPath.split('/').pop()
    mkProduct(fVId, lesMinettesId)
    writeProduct(fVId, lesMinettesId, { name:fVmgName, data: fVmgData })
    await Product.create({
        id: fVId,
        name: "Foulard Vert",
        description: "Lorem Ipsum.",
        price: "27.5",
        stock: "180",
        path: getProductPath(lesMinettesId, fVId, fVmgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const sBeigeId = uuidv4()
    const sBeigemgPath = 'Stand/lesminettes/produits/sac_beige.jpg'
    const sBeigemgData = fs.readFileSync(sBeigemgPath)
    const sBeigemgName = sBeigemgPath.split('/').pop()
    mkProduct(sBeigeId, lesMinettesId)
    writeProduct(sBeigeId, lesMinettesId, { name:sBeigemgName, data: sBeigemgData })
    await Product.create({
        id: sBeigeId,
        name: "Sac Beige",
        description: "Lorem Ipsum.",
        price: "60",
        stock: "180",
        path: getProductPath(lesMinettesId, sBeigeId, sBeigemgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const sBleuId = uuidv4()
    const sBleumgPath = 'Stand/lesminettes/produits/sac_bleu.jpg'
    const sBleumgData = fs.readFileSync(sBleumgPath)
    const sBleumgName = sBleumgPath.split('/').pop()
    mkProduct(sBleuId, lesMinettesId)
    writeProduct(sBleuId, lesMinettesId, { name:sBleumgName, data: sBleumgData })
    await Product.create({
        id: sBleuId,
        name: "Sac Bleu",
        description: "Lorem Ipsum.",
        price: "60",
        stock: "180",
        path: getProductPath(lesMinettesId, sBleuId, sBleumgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const sGId = uuidv4()
    const sGmgPath = 'Stand/lesminettes/produits/sac_gris.jpg'
    const sGmgData = fs.readFileSync(sGmgPath)
    const sGmgName = sGmgPath.split('/').pop()
    mkProduct(sGId, lesMinettesId)
    writeProduct(sGId, lesMinettesId, { name:sGmgName, data: sGmgData })
    await Product.create({
        id: sGId,
        name: "Sac Gris",
        description: "Lorem Ipsum.",
        price: "60",
        stock: "180",
        path: getProductPath(lesMinettesId, sGId, sGmgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const sJId = uuidv4()
    const sJmgPath = 'Stand/lesminettes/produits/sac_jaune.jpg'
    const sJmgData = fs.readFileSync(sJmgPath)
    const sJmgName = sJmgPath.split('/').pop()
    mkProduct(sJId, lesMinettesId)
    writeProduct(sJId, lesMinettesId, { name:sJmgName, data: sJmgData })
    await Product.create({
        id: sJId,
        name: "Sac Jaune",
        description: "Lorem Ipsum.",
        price: "60",
        stock: "180",
        path: getProductPath(lesMinettesId, sJId, sJmgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const sMBId = uuidv4()
    const sMBmgPath = 'Stand/lesminettes/produits/sac_main_bleu.jpg'
    const sMBmgData = fs.readFileSync(sMBmgPath)
    const sMBmgName = sMBmgPath.split('/').pop()
    mkProduct(sMBId, lesMinettesId)
    writeProduct(sMBId, lesMinettesId, { name:sMBmgName, data: sMBmgData })
    await Product.create({
        id: sMBId,
        name: "Sac à Main Bleu",
        description: "Lorem Ipsum.",
        price: "80",
        stock: "180",
        path: getProductPath(lesMinettesId, sMBId, sMBmgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const sMGId = uuidv4()
    const sMGmgPath = 'Stand/lesminettes/produits/sac_main_gris.jpg'
    const sMGmgData = fs.readFileSync(sMGmgPath)
    const sMGmgName = sMGmgPath.split('/').pop()
    mkProduct(sMGId, lesMinettesId)
    writeProduct(sMGId, lesMinettesId, { name:sMGmgName, data: sMGmgData })
    await Product.create({
        id: sMGId,
        name: "Sac à Main Gris",
        description: "Lorem Ipsum.",
        price: "80",
        stock: "180",
        path: getProductPath(lesMinettesId, sMGId, sMGmgName),
        deleted: false,
        shopId: lesMinettesId
    })

    const sMVId = uuidv4()
    const sMVmgPath = 'Stand/lesminettes/produits/sac_main_vert.jpg'
    const sMVmgData = fs.readFileSync(sMVmgPath)
    const sMVmgName = sMVmgPath.split('/').pop()
    mkProduct(sMVId, lesMinettesId)
    writeProduct(sMVId, lesMinettesId, { name:sMVmgName, data: sMVmgData })
    await Product.create({
        id: sMVId,
        name: "Sac à Main Vert",
        description: "Lorem Ipsum.",
        price: "80",
        stock: "180",
        path: getProductPath(lesMinettesId, sMVId, sMVmgName),
        deleted: false,
        shopId: lesMinettesId
    })

    console.log(`${ChalkMSG.SUCCESS}Les Minettes created !`)
}

export default lesMinettes