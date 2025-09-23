import ChalkMSG from '../Scripts/Chalk.js'
import { User, Shop, Product } from '../Models/Models.js'
import bcrypt from 'bcrypt'
import { mkUser, mkShop, mkProduct, writeUser, writeShop, writeProduct } from '../Scripts/FileSystems.js'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

const getShopPath = (shopId, logoName) => '/Companies/' + shopId + '/Logo/' + logoName
const getUserPath = (userId, photoName) => '/Users/' + userId + '/Photo/' + photoName
const getProductPath = (shopId, productId, imageName) => '/Companies/' + shopId + '/Products/' + productId + '/' + imageName

const bCM = async () => {
    /* Default Shop */
    const bCMId = uuidv4()
    const bCMImgPath = 'Stand/bcm/logo.png'
    const bCMImgData = fs.readFileSync(bCMImgPath)
    const bCMImgName = bCMImgPath.split('/').pop()
    mkShop(bCMId)
    writeShop(bCMId, { name:bCMImgName, data: bCMImgData })
    await Shop.create({
        id: bCMId,
        name: "Brasseries & Cidreries de Milly",
        email: "service@bcm.fr",
        phone: "0344813333",
        city: "Milly-sur-Thérain",
        street: "Rue de la Gare",
        postal: "60112",
        path: getShopPath(bCMId, bCMImgName),
        deleted: false
    })

    /* Default Partners */
    const hashPassword = () => bcrypt.hash("Password1@", 10)
    const louiseBordeauxId = uuidv4()
    const louiseBordeauxImgPath = 'Stand/bcm/partners/Louise_Bordeaux.jpg'
    const louiseBordeauxImgData = fs.readFileSync(louiseBordeauxImgPath)
    const louiseBordeauxImgName = louiseBordeauxImgPath.split('/').pop()
    mkUser(louiseBordeauxId)
    writeUser(louiseBordeauxId, { name:louiseBordeauxImgName, data: louiseBordeauxImgData })
    await User.create({ 
        id: louiseBordeauxId, 
        lastname: "Bordeaux", 
        firstname: "Louise", 
        email: "louise.bordeaux@bcm.fr", 
        password: await hashPassword(), 
        path: getUserPath(louiseBordeauxId, louiseBordeauxImgName),
        roleId: "3", 
        shopId: bCMId
    })
    const marcBourbonId = uuidv4()
    const marcBourbonImgPath = 'Stand/bcm/partners/Marc_Bourbon.jpg'
    const marcBourbonImgData = fs.readFileSync(marcBourbonImgPath)
    const marcBourbonImgName = marcBourbonImgPath.split('/').pop()
    mkUser(marcBourbonId)
    writeUser(marcBourbonId, { name:marcBourbonImgName, data: marcBourbonImgData })
    await User.create({ 
        id: marcBourbonId, 
        lastname: "Bourbon", 
        firstname: "Marc", 
        email: "marc.bourbon@bcm.fr", 
        password: await hashPassword(), 
        path: getUserPath(marcBourbonId, marcBourbonImgName),
        roleId: "3", 
        shopId: bCMId
    })

    /* Default Products */
    const paleAle33Id = uuidv4()
    const paleAle33ImgPath = 'Stand/bcm/produits/pale_ale.png'
    const paleAle33ImgData = fs.readFileSync(paleAle33ImgPath)
    const paleAle33ImgName = paleAle33ImgPath.split('/').pop()
    mkProduct(paleAle33Id, bCMId)
    writeProduct(paleAle33Id, bCMId, { name:paleAle33ImgName, data: paleAle33ImgData })
    await Product.create({
        id: paleAle33Id,
        name: "Pale Ale (33cl)",
        description: "Bière Blonde.",
        price: "2.45",
        stock: "180",
        path: getProductPath(bCMId, paleAle33Id, paleAle33ImgName),
        deleted: false,
        shopId: bCMId
    })

    const paleAle75Id = uuidv4()
    const paleAle75ImgPath = 'Stand/bcm/produits/pale_ale.png'
    const paleAle75ImgData = fs.readFileSync(paleAle75ImgPath)
    const paleAle75ImgName = paleAle75ImgPath.split('/').pop()
    mkProduct(paleAle75Id, bCMId)
    writeProduct(paleAle75Id, bCMId, { name:paleAle75ImgName, data: paleAle75ImgData })
    await Product.create({
        id: paleAle75Id,
        name: "Pale Ale (75cl)",
        description: "Bière Blonde.",
        price: "4.9",
        stock: "180",
        path: getProductPath(bCMId, paleAle75Id, paleAle75ImgName),
        deleted: false,
        shopId: bCMId
    })

    const wheatAle33Id = uuidv4()
    const wheatAle33ImgPath = 'Stand/bcm/produits/wheat_ale.png'
    const wheatAle33ImgData = fs.readFileSync(wheatAle33ImgPath)
    const wheatAle33ImgName = wheatAle33ImgPath.split('/').pop()
    mkProduct(wheatAle33Id, bCMId)
    writeProduct(wheatAle33Id, bCMId, { name:wheatAle33ImgName, data: wheatAle33ImgData })
    await Product.create({
        id: wheatAle33Id,
        name: "Wheat Ale (33cl)",
        description: "Bière Blanche.",
        price: "2.5",
        stock: "180",
        path: getProductPath(bCMId, wheatAle33Id, wheatAle33ImgName),
        deleted: false,
        shopId: bCMId
    })
    
    const wheatAle75Id = uuidv4()
    const wheatAle75ImgPath = 'Stand/bcm/produits/wheat_ale.png'
    const wheatAle75ImgData = fs.readFileSync(wheatAle75ImgPath)
    const wheatAle75ImgName = wheatAle75ImgPath.split('/').pop()
    mkProduct(wheatAle75Id, bCMId)
    writeProduct(wheatAle75Id, bCMId, { name:wheatAle75ImgName, data: wheatAle75ImgData })
    await Product.create({
        id: wheatAle75Id,
        name: "Wheat Ale (75cl)",
        description: "Bière Blanche.",
        price: "5",
        stock: "180",
        path: getProductPath(bCMId, wheatAle75Id, wheatAle75ImgName),
        deleted: false,
        shopId: bCMId
    })

    const amberAle33Id = uuidv4()
    const amberAle33ImgPath = 'Stand/bcm/produits/amber_ale.png'
    const amberAle33ImgData = fs.readFileSync(amberAle33ImgPath)
    const amberAle33ImgName = amberAle33ImgPath.split('/').pop()
    mkProduct(amberAle33Id, bCMId)
    writeProduct(amberAle33Id, bCMId, { name:amberAle33ImgName, data: amberAle33ImgData })
    await Product.create({
        id: amberAle33Id,
        name: "Amber Ale (33cl)",
        description: "Bière Ambrée.",
        price: "2.7",
        stock: "180",
        path: getProductPath(bCMId, amberAle33Id, amberAle33ImgName),
        deleted: false,
        shopId: bCMId
    })
    
    const amberAle75Id = uuidv4()
    const amberAle75ImgPath = 'Stand/bcm/produits/amber_ale.png'
    const amberAle75ImgData = fs.readFileSync(amberAle75ImgPath)
    const amberAle75ImgName = amberAle75ImgPath.split('/').pop()
    mkProduct(amberAle75Id, bCMId)
    writeProduct(amberAle75Id, bCMId, { name:amberAle75ImgName, data: amberAle75ImgData })
    await Product.create({
        id: amberAle75Id,
        name: "Amber Ale (75cl)",
        description: "Bière Ambrée.",
        price: "5.05",
        stock: "180",
        path: getProductPath(bCMId, amberAle75Id, amberAle75ImgName),
        deleted: false,
        shopId: bCMId
    })

    const triple33Id = uuidv4()
    const triple33ImgPath = 'Stand/bcm/produits/triple.png'
    const triple33ImgData = fs.readFileSync(triple33ImgPath)
    const triple33ImgName = triple33ImgPath.split('/').pop()
    mkProduct(triple33Id, bCMId)
    writeProduct(triple33Id, bCMId, { name:triple33ImgName, data: triple33ImgData })
    await Product.create({
        id: triple33Id,
        name: "Triple (33cl)",
        description: "Bière Blonde.",
        price: "2.95",
        stock: "180",
        path: getProductPath(bCMId, triple33Id, triple33ImgName),
        deleted: false,
        shopId: bCMId
    })
    
    const triple75Id = uuidv4()
    const triple75ImgPath = 'Stand/bcm/produits/triple.png'
    const triple75ImgData = fs.readFileSync(triple75ImgPath)
    const triple75ImgName = triple75ImgPath.split('/').pop()
    mkProduct(triple75Id, bCMId)
    writeProduct(triple75Id, bCMId, { name:triple75ImgName, data: triple75ImgData })
    await Product.create({
        id: triple75Id,
        name: "Triple (75cl)",
        description: "Bière Blonde.",
        price: "5.45",
        stock: "180",
        path: getProductPath(bCMId, triple75Id, triple75ImgName),
        deleted: false,
        shopId: bCMId
    })

    const pailetteBlonde33Id = uuidv4()
    const pailetteBlonde33ImgPath = 'Stand/bcm/produits/pailette_blonde.png'
    const pailetteBlonde33ImgData = fs.readFileSync(pailetteBlonde33ImgPath)
    const pailetteBlonde33ImgName = pailetteBlonde33ImgPath.split('/').pop()
    mkProduct(pailetteBlonde33Id, bCMId)
    writeProduct(pailetteBlonde33Id, bCMId, { name:pailetteBlonde33ImgName, data: pailetteBlonde33ImgData })
    await Product.create({
        id: pailetteBlonde33Id,
        name: "Pailette Blonde (33cl)",
        description: "Bière Blonde.",
        price: "2.40",
        stock: "180",
        path: getProductPath(bCMId, pailetteBlonde33Id, pailetteBlonde33ImgName),
        deleted: false,
        shopId: bCMId
    })
    
    const pailetteBlonde75Id = uuidv4()
    const pailetteBlonde75ImgPath = 'Stand/bcm/produits/pailette_blonde.png'
    const pailetteBlonde75ImgData = fs.readFileSync(pailetteBlonde75ImgPath)
    const pailetteBlonde75ImgName = pailetteBlonde75ImgPath.split('/').pop()
    mkProduct(pailetteBlonde75Id, bCMId)
    writeProduct(pailetteBlonde75Id, bCMId, { name:pailetteBlonde75ImgName, data: pailetteBlonde75ImgData })
    await Product.create({
        id: pailetteBlonde75Id,
        name: "Pailette Blonde (75cl)",
        description: "Bière Blonde.",
        price: "4.8",
        stock: "180",
        path: getProductPath(bCMId, pailetteBlonde33Id, pailetteBlonde33ImgName),
        deleted: false,
        shopId: bCMId
    })

    const pailetteIndiaPaleAle33Id = uuidv4()
    const pailetteIndiaPaleAle33ImgPath = 'Stand/bcm/produits/pailette_IndiaPaleAle.png'
    const pailetteIndiaPaleAle33ImgData = fs.readFileSync(pailetteIndiaPaleAle33ImgPath)
    const pailetteIndiaPaleAle33ImgName = pailetteIndiaPaleAle33ImgPath.split('/').pop()
    mkProduct(pailetteIndiaPaleAle33Id, bCMId)
    writeProduct(pailetteIndiaPaleAle33Id, bCMId, { name:pailetteIndiaPaleAle33ImgName, data: pailetteIndiaPaleAle33ImgData })
    await Product.create({
        id: pailetteIndiaPaleAle33Id,
        name: "Pailette India Pale Ale (33cl)",
        description: "Bière India Pale Ale.",
        price: "3.1",
        stock: "180",
        path: getProductPath(bCMId, pailetteIndiaPaleAle33Id, pailetteIndiaPaleAle33ImgName),
        deleted: false,
        shopId: bCMId
    })
    
    const pailetteIndiaPaleAle75Id = uuidv4()
    const pailetteIndiaPaleAle75ImgPath = 'Stand/bcm/produits/pailette_IndiaPaleAle.png'
    const pailetteIndiaPaleAle75ImgData = fs.readFileSync(pailetteIndiaPaleAle75ImgPath)
    const pailetteIndiaPaleAle75ImgName = pailetteIndiaPaleAle75ImgPath.split('/').pop()
    mkProduct(pailetteIndiaPaleAle75Id, bCMId)
    writeProduct(pailetteIndiaPaleAle75Id, bCMId, { name:pailetteIndiaPaleAle75ImgName, data: pailetteIndiaPaleAle75ImgData })
    await Product.create({
        id: pailetteIndiaPaleAle75Id,
        name: "Pailette India Pale Ale (75cl)",
        description: "Bière India Pale Ale.",
        price: "6.2",
        stock: "180",
        path: getProductPath(bCMId, pailetteIndiaPaleAle75Id, pailetteIndiaPaleAle75ImgName),
        deleted: false,
        shopId: bCMId
    })

    const cidreBioId = uuidv4()
    const cidreBioImgPath = 'Stand/bcm/produits/cidre_bio.png'
    const cidreBioImgData = fs.readFileSync(cidreBioImgPath)
    const cidreBioImgName = cidreBioImgPath.split('/').pop()
    mkProduct(cidreBioId, bCMId)
    writeProduct(cidreBioId, bCMId, { name:cidreBioImgName, data: cidreBioImgData })
    await Product.create({
        id: cidreBioId,
        name: "Cidre Bio (75cl)",
        description: "Lorem Ipsum.",
        price: "5.7",
        stock: "180",
        path: getProductPath(bCMId, cidreBioId, cidreBioImgName),
        deleted: false,
        shopId: bCMId
    })

    const cidreDouxId = uuidv4()
    const cidreDouxImgPath = 'Stand/bcm/produits/cidre_doux.png'
    const cidreDouxImgData = fs.readFileSync(cidreDouxImgPath)
    const cidreDouxImgName = cidreDouxImgPath.split('/').pop()
    mkProduct(cidreDouxId, bCMId)
    writeProduct(cidreDouxId, bCMId, { name:cidreDouxImgName, data: cidreDouxImgData })
    await Product.create({
        id: cidreDouxId,
        name: "Cidre Doux (75cl)",
        description: "Lorem Ipsum.",
        price: "4.95",
        stock: "180",
        path: getProductPath(bCMId, cidreDouxId, cidreDouxImgName),
        deleted: false,
        shopId: bCMId
    })

    const cidreRoseId = uuidv4()
    const cidreRoseImgPath = 'Stand/bcm/produits/cidre_rosé.png'
    const cidreRoseImgData = fs.readFileSync(cidreRoseImgPath)
    const cidreRoseImgName = cidreRoseImgPath.split('/').pop()
    mkProduct(cidreRoseId, bCMId)
    writeProduct(cidreRoseId, bCMId, { name:cidreRoseImgName, data: cidreRoseImgData })
    await Product.create({
        id: cidreRoseId,
        name: "Cidre Rosé (75cl)",
        description: "Lorem Ipsum.",
        price: "5.45",
        stock: "180",
        path: getProductPath(bCMId, cidreRoseId, cidreRoseImgName),
        deleted: false,
        shopId: bCMId
    })

    const poireId = uuidv4()
    const poireImgPath = 'Stand/bcm/produits/poiré.png'
    const poireImgData = fs.readFileSync(poireImgPath)
    const poireImgName = poireImgPath.split('/').pop()
    mkProduct(poireId, bCMId)
    writeProduct(poireId, bCMId, { name:poireImgName, data: poireImgData })
    await Product.create({
        id: poireId,
        name: "Poiré (75cl)",
        description: "Lorem Ipsum.",
        price: "7.2",
        stock: "180",
        path: getProductPath(bCMId, poireId, poireImgName),
        deleted: false,
        shopId: bCMId
    })

    console.log(`${ChalkMSG.SUCCESS}Brasseries & Cidreries de Milly created !`)
}

export default bCM