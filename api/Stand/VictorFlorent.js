import ChalkMSG from '../Scripts/Chalk.js'
import { User, Shop, Product } from '../Models/Models.js'
import bcrypt from 'bcrypt'
import { mkUser, mkShop, mkProduct, writeUser, writeShop, writeProduct } from '../Scripts/FileSystems.js'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

const getShopPath = (shopId, logoName) => '/Companies/' + shopId + '/Logo/' + logoName
const getUserPath = (userId, photoName) => '/Users/' + userId + '/Photo/' + photoName
const getProductPath = (shopId, productId, imageName) => '/Companies/' + shopId + '/Products/' + productId + '/' + imageName

const victorFlorent = async () => {
    /* Default Shop */
    const victorFlorentId = uuidv4()
    const victorFlorentImgPath = 'Stand/victorflorent/logo.png'
    const victorFlorentImgData = fs.readFileSync(victorFlorentImgPath)
    const victorFlorentImgName = victorFlorentImgPath.split('/').pop()
    mkShop(victorFlorentId)
    writeShop(victorFlorentId, { name:victorFlorentImgName, data: victorFlorentImgData })
    await Shop.create({
        id: victorFlorentId,
        name: "Victor Florent",
        email: "service@vicflo.fr",
        phone: "0360299162",
        city: "Beauvais",
        street: "138 Avenue Marcel Dassault",
        postal: "60000",
        path: getShopPath(victorFlorentId, victorFlorentImgName),
        deleted: false
    })

    /* Default Partners */
    const hashPassword = () => bcrypt.hash("Password1@", 10)
    const jeanPainId = uuidv4()
    const jeanPainImgPath = 'Stand/victorflorent/partners/Jean_Pain.jpg'
    const jeanPainImgData = fs.readFileSync(jeanPainImgPath)
    const jeanPainImgName = jeanPainImgPath.split('/').pop()
    mkUser(jeanPainId)
    writeUser(jeanPainId, { name:jeanPainImgName, data: jeanPainImgData })
    await User.create({ 
        id: jeanPainId, 
        lastname: "Pain", 
        firstname: "Jean", 
        email: "jean.pain@vicflo.fr", 
        password: await hashPassword(), 
        path: getUserPath(jeanPainId, jeanPainImgName),
        roleId: "3", 
        shopId: victorFlorentId
    })
    const robertLabaguetteId = uuidv4()
    const robertLabaguetteImgPath = 'Stand/victorflorent/partners/Robert_Labaguette.jpg'
    const robertLabaguetteImgData = fs.readFileSync(robertLabaguetteImgPath)
    const robertLabaguetteImgName = robertLabaguetteImgPath.split('/').pop()
    mkUser(robertLabaguetteId)
    writeUser(robertLabaguetteId, { name:robertLabaguetteImgName, data: robertLabaguetteImgData })
    await User.create({ 
        id: robertLabaguetteId, 
        lastname: "Labaguette", 
        firstname: "Robert", 
        email: "robert.labaguette@vicflo.fr", 
        password: await hashPassword(),
        path: getUserPath(robertLabaguetteId, robertLabaguetteImgName),
        roleId: "3", 
        shopId: victorFlorentId
    })

    /* Default Products */
    const briocheRaisinId = uuidv4()
    const briocheRaisinImgPath = 'Stand/victorflorent/produits/Brioche_Raisin.jpg'
    const briocheRaisinImgData = fs.readFileSync(briocheRaisinImgPath)
    const briocheRaisinImgName = briocheRaisinImgPath.split('/').pop()
    mkProduct(briocheRaisinId, victorFlorentId)
    writeProduct(briocheRaisinId, victorFlorentId, { name:briocheRaisinImgName, data: briocheRaisinImgData })
    await Product.create({
        id: briocheRaisinId,
        name: "Brioche Raisin",
        description: "Une bonne brioche au raisin.",
        price: "4.50",
        stock: "23",
        path: getProductPath(victorFlorentId, briocheRaisinId, briocheRaisinImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const briochettesId = uuidv4()
    const briochettesImgPath = 'Stand/victorflorent/produits/Briochettes.jpg'
    const briochettesImgData = fs.readFileSync(briochettesImgPath)
    const briochettesImgName = briochettesImgPath.split('/').pop()
    mkProduct(briochettesId, victorFlorentId)
    writeProduct(briochettesId, victorFlorentId, { name:briochettesImgName, data: briochettesImgData })
    await Product.create({
        id: briochettesId,
        name: "Briochettes",
        description: "Lot de 5 briochettes. Lot varié.",
        price: "2.00",
        stock: "63",
        path: getProductPath(victorFlorentId, briochettesId, briochettesImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const cookieMetMId = uuidv4()
    const cookieMetMImgPath = 'Stand/victorflorent/produits/Cookie_M_Et_M.jpg'
    const cookieMetMImgData = fs.readFileSync(cookieMetMImgPath)
    const cookieMetMImgName = cookieMetMImgPath.split('/').pop()
    mkProduct(cookieMetMId, victorFlorentId)
    writeProduct(cookieMetMId, victorFlorentId, { name:cookieMetMImgName, data: cookieMetMImgData })
    await Product.create({
        id: cookieMetMId,
        name: "Cookie M&M's",
        description: "Un bon cookie aux M&M's.",
        price: "3.00",
        stock: "17",
        path: getProductPath(victorFlorentId, cookieMetMId, cookieMetMImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const cookieTheMatchaId = uuidv4()
    const cookieTheMatchaImgPath = 'Stand/victorflorent/produits/Cookie_The_Matcha.jpg'
    const cookieTheMatchaImgData = fs.readFileSync(cookieTheMatchaImgPath)
    const cookieTheMatchaImgName = cookieTheMatchaImgPath.split('/').pop()
    mkProduct(cookieTheMatchaId, victorFlorentId)
    writeProduct(cookieTheMatchaId, victorFlorentId, { name:cookieTheMatchaImgName, data: cookieTheMatchaImgData })
    await Product.create({
        id: cookieTheMatchaId,
        name: "Cookie The Matcha",
        description: "Un bon cookie au matcha.",
        price: "3.50",
        stock: "9",
        path: getProductPath(victorFlorentId, cookieTheMatchaId, cookieTheMatchaImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const croisSandwichId = uuidv4()
    const croisSandwichImgPath = 'Stand/victorflorent/produits/Crois_Sandwich.jpg'
    const croisSandwichImgData = fs.readFileSync(croisSandwichImgPath)
    const croisSandwichImgName = croisSandwichImgPath.split('/').pop()
    mkProduct(croisSandwichId, victorFlorentId)
    writeProduct(croisSandwichId, victorFlorentId, { name:croisSandwichImgName, data: croisSandwichImgData })
    await Product.create({
        id: croisSandwichId,
        name: "Crois-Sandwich",
        description: "Un croissant ? Un sandwich ? Un crois-sandwich !",
        price: "3.50",
        stock: "9",
        path: getProductPath(victorFlorentId, croisSandwichId, croisSandwichImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const croissantId = uuidv4()
    const croissantImgPath = 'Stand/victorflorent/produits/Croissant.jpg'
    const croissantImgData = fs.readFileSync(croissantImgPath)
    const croissantImgName = croissantImgPath.split('/').pop()
    mkProduct(croissantId, victorFlorentId)
    writeProduct(croissantId, victorFlorentId, { name:croissantImgName, data: croissantImgData })
    await Product.create({
        id: croissantId,
        name: "Croissant",
        description: "Un croissant bien beurré.",
        price: "1.50",
        stock: "16",
        path: getProductPath(victorFlorentId, croissantId, croissantImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const flanCaramelId = uuidv4()
    const flanCaramelImgPath = 'Stand/victorflorent/produits/Flan_Caramel.jpg'
    const flanCaramelImgData = fs.readFileSync(flanCaramelImgPath)
    const flanCaramelImgName = flanCaramelImgPath.split('/').pop()
    mkProduct(flanCaramelId, victorFlorentId)
    writeProduct(flanCaramelId, victorFlorentId, { name:flanCaramelImgName, data: flanCaramelImgData })
    await Product.create({
        id: flanCaramelId,
        name: "Flan Caramel",
        description: "Une part de flan au caramel bien caramélisé.",
        price: "2.50",
        stock: "27",
        path: getProductPath(victorFlorentId, flanCaramelId, flanCaramelImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const flanNatureId = uuidv4()
    const flanNatureImgPath = 'Stand/victorflorent/produits/Flan_Nature.jpg'
    const flanNatureImgData = fs.readFileSync(flanNatureImgPath)
    const flanNatureImgName = flanNatureImgPath.split('/').pop()
    mkProduct(flanNatureId, victorFlorentId)
    writeProduct(flanNatureId, victorFlorentId, { name:flanNatureImgName, data: flanNatureImgData })
    await Product.create({
        id: flanNatureId,
        name: "Flan Nature",
        description: "Une part de flan nature bien naturelle.",
        price: "2.50",
        stock: "23",
        path: getProductPath(victorFlorentId, flanNatureId, flanNatureImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const flanPistacheId = uuidv4()
    const flanPistacheImgPath = 'Stand/victorflorent/produits/Flan_Pistache.jpg'
    const flanPistacheImgData = fs.readFileSync(flanPistacheImgPath)
    const flanPistacheImgName = flanPistacheImgPath.split('/').pop()
    mkProduct(flanPistacheId, victorFlorentId)
    writeProduct(flanPistacheId, victorFlorentId, { name:flanPistacheImgName, data: flanPistacheImgData })
    await Product.create({
        id: flanPistacheId,
        name: "Flan Pistache",
        description: "Une part de flan pistache bien pistaché.",
        price: "2.50",
        stock: "28",
        path: getProductPath(victorFlorentId, flanPistacheId, flanPistacheImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const leCremeuhId = uuidv4()
    const leCremeuhImgPath = 'Stand/victorflorent/produits/Le_Cremeuh.jpg'
    const leCremeuhImgData = fs.readFileSync(leCremeuhImgPath)
    const leCremeuhImgName = leCremeuhImgPath.split('/').pop()
    mkProduct(leCremeuhId, victorFlorentId)
    writeProduct(leCremeuhId, victorFlorentId, { name:leCremeuhImgName, data: leCremeuhImgData })
    await Product.create({
        id: leCremeuhId,
        name: "Le Crémeuh",
        description: "Une part de flan crémeeuuuuh !",
        price: "3.20",
        stock: "14",
        path: getProductPath(victorFlorentId, leCremeuhId, leCremeuhImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const madeleinesId = uuidv4()
    const madeleinesImgPath = 'Stand/victorflorent/produits/Madeleines.jpg'
    const madeleinesImgData = fs.readFileSync(madeleinesImgPath)
    const madeleinesImgName = madeleinesImgPath.split('/').pop()
    mkProduct(madeleinesId, victorFlorentId)
    writeProduct(madeleinesId, victorFlorentId, { name:madeleinesImgName, data: madeleinesImgData })
    await Product.create({
        id: madeleinesId,
        name: "Madeleines",
        description: "Lot de 10 madeleines.",
        price: "3.50",
        stock: "3",
        path: getProductPath(victorFlorentId, madeleinesId, madeleinesImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const painAuChocolatId = uuidv4()
    const painAuChocolatImgPath = 'Stand/victorflorent/produits/Pain_Au_Chocolat.jpg'
    const painAuChocolatImgData = fs.readFileSync(painAuChocolatImgPath)
    const painAuChocolatImgName = painAuChocolatImgPath.split('/').pop()
    mkProduct(painAuChocolatId, victorFlorentId)
    writeProduct(painAuChocolatId, victorFlorentId, { name:painAuChocolatImgName, data: painAuChocolatImgData })
    await Product.create({
        id: painAuChocolatId,
        name: "Pain au Chocolat",
        description: "Un pain au chocolat.",
        price: "1.50",
        stock: "6",
        path: getProductPath(victorFlorentId, painAuChocolatId, painAuChocolatImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const painCompletId = uuidv4()
    const painCompletImgPath = 'Stand/victorflorent/produits/Pain_Complet.jpg'
    const painCompletImgData = fs.readFileSync(painCompletImgPath)
    const painCompletImgName = painCompletImgPath.split('/').pop()
    mkProduct(painCompletId, victorFlorentId)
    writeProduct(painCompletId, victorFlorentId, { name:painCompletImgName, data: painCompletImgData })
    await Product.create({
        id: painCompletId,
        name: "Pain Complet",
        description: "Un pain complet.",
        price: "1.15",
        stock: "16",
        path: getProductPath(victorFlorentId, painCompletId, painCompletImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const painDesBoisId = uuidv4()
    const painDesBoisImgPath = 'Stand/victorflorent/produits/Pain_Des_Bois.jpg'
    const painDesBoisImgData = fs.readFileSync(painDesBoisImgPath)
    const painDesBoisImgName = painDesBoisImgPath.split('/').pop()
    mkProduct(painDesBoisId, victorFlorentId)
    writeProduct(painDesBoisId, victorFlorentId, { name:painDesBoisImgName, data: painDesBoisImgData })
    await Product.create({
        id: painDesBoisId,
        name: "Pain des Bois",
        description: "Un pain des bois.",
        price: "1.30",
        stock: "12",
        path: getProductPath(victorFlorentId, painDesBoisId, painDesBoisImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const painLevainId = uuidv4()
    const painLevainImgPath = 'Stand/victorflorent/produits/Pain_Levain.jpg'
    const painLevainImgData = fs.readFileSync(painLevainImgPath)
    const painLevainImgName = painLevainImgPath.split('/').pop()
    mkProduct(painLevainId, victorFlorentId)
    writeProduct(painLevainId, victorFlorentId, { name:painLevainImgName, data: painLevainImgData })
    await Product.create({
        id: painLevainId,
        name: "Pain Levain",
        description: "Un pain levain.",
        price: "1.30",
        stock: "11",
        path: getProductPath(victorFlorentId, painLevainId, painLevainImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const painNatureFaibleId = uuidv4()
    const painNatureFaibleImgPath = 'Stand/victorflorent/produits/Pain_Nature_Faible.jpg'
    const painNatureFaibleImgData = fs.readFileSync(painNatureFaibleImgPath)
    const painNatureFaibleImgName = painNatureFaibleImgPath.split('/').pop()
    mkProduct(painNatureFaibleId, victorFlorentId)
    writeProduct(painNatureFaibleId, victorFlorentId, { name:painNatureFaibleImgName, data: painNatureFaibleImgData })
    await Product.create({
        id: painNatureFaibleId,
        name: "Pain Nature (Faible Cuisson)",
        description: "Un pain nature faible cuisson.",
        price: "1.30",
        stock: "11",
        path: getProductPath(victorFlorentId, painNatureFaibleId, painNatureFaibleImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const painNatureForteId = uuidv4()
    const painNatureForteImgPath = 'Stand/victorflorent/produits/Pain_Nature_Forte.jpg'
    const painNatureForteImgData = fs.readFileSync(painNatureForteImgPath)
    const painNatureForteImgName = painNatureForteImgPath.split('/').pop()
    mkProduct(painNatureForteId, victorFlorentId)
    writeProduct(painNatureForteId, victorFlorentId, { name:painNatureForteImgName, data: painNatureForteImgData })
    await Product.create({
        id: painNatureForteId,
        name: "Pain Nature (Forte Cuisson)",
        description: "Un pain nature forte cuisson.",
        price: "1.30",
        stock: "11",
        path: getProductPath(victorFlorentId, painNatureForteId, painNatureForteImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const painRaisinSucreId = uuidv4()
    const painRaisinSucreImgPath = 'Stand/victorflorent/produits/Pain_Raisin_Sucre.jpg'
    const painRaisinSucreImgData = fs.readFileSync(painRaisinSucreImgPath)
    const painRaisinSucreImgName = painRaisinSucreImgPath.split('/').pop()
    mkProduct(painRaisinSucreId, victorFlorentId)
    writeProduct(painRaisinSucreId, victorFlorentId, { name:painRaisinSucreImgName, data: painRaisinSucreImgData })
    await Product.create({
        id: painRaisinSucreId,
        name: "Pain au Raisin Sucré",
        description: "Un pain au raisin sucré au sucre.",
        price: "1.70",
        stock: "4",
        path: getProductPath(victorFlorentId, painRaisinSucreId, painRaisinSucreImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const paniniJambonFromageId = uuidv4()
    const paniniJambonFromageImgPath = 'Stand/victorflorent/produits/Panini_Jambon_Fromage.jpg'
    const paniniJambonFromageImgData = fs.readFileSync(paniniJambonFromageImgPath)
    const paniniJambonFromageImgName = paniniJambonFromageImgPath.split('/').pop()
    mkProduct(paniniJambonFromageId, victorFlorentId)
    writeProduct(paniniJambonFromageId, victorFlorentId, { name:paniniJambonFromageImgName, data: paniniJambonFromageImgData })
    await Product.create({
        id: paniniJambonFromageId,
        name: "Panini - Jambon Fromage",
        description: "Un panini bien cuit au jambon et au fromage.",
        price: "3.70",
        stock: "8",
        path: getProductPath(victorFlorentId, paniniJambonFromageId, paniniJambonFromageImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const paniniToscanId = uuidv4()
    const paniniToscanImgPath = 'Stand/victorflorent/produits/Panini_Toscan.jpg'
    const paniniToscanImgData = fs.readFileSync(paniniToscanImgPath)
    const paniniToscanImgName = paniniToscanImgPath.split('/').pop()
    mkProduct(paniniToscanId, victorFlorentId)
    writeProduct(paniniToscanId, victorFlorentId, { name:paniniToscanImgName, data: paniniToscanImgData })
    await Product.create({
        id: paniniToscanId,
        name: "Panini - Toscan",
        description: "Un panini bien cuit au chèvre, jambon cru et sauce BBQ.",
        price: "3.70",
        stock: "8",
        path: getProductPath(victorFlorentId, paniniToscanId, paniniToscanImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const pizzaChickenId = uuidv4()
    const pizzaChickenImgPath = 'Stand/victorflorent/produits/Pizza_Chicken.jpg'
    const pizzaChickenImgData = fs.readFileSync(pizzaChickenImgPath)
    const pizzaChickenImgName = pizzaChickenImgPath.split('/').pop()
    mkProduct(pizzaChickenId, victorFlorentId)
    writeProduct(pizzaChickenId, victorFlorentId, { name:pizzaChickenImgName, data: pizzaChickenImgData })
    await Product.create({
        id: pizzaChickenId,
        name: "Pizza - Chicken",
        description: "Une pizza au poulet.",
        price: "3.90",
        stock: "18",
        path: getProductPath(victorFlorentId, pizzaChickenId, pizzaChickenImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const pizzaJambonId = uuidv4()
    const pizzaJambonImgPath = 'Stand/victorflorent/produits/Pizza_Jambon.jpg'
    const pizzaJambonImgData = fs.readFileSync(pizzaJambonImgPath)
    const pizzaJambonImgName = pizzaJambonImgPath.split('/').pop()
    mkProduct(pizzaJambonId, victorFlorentId)
    writeProduct(pizzaJambonId, victorFlorentId, { name:pizzaJambonImgName, data: pizzaJambonImgData })
    await Product.create({
        id: pizzaJambonId,
        name: "Pizza - Jambon",
        description: "Une pizza au jambon.",
        price: "3.90",
        stock: "18",
        path: getProductPath(victorFlorentId, pizzaJambonId, pizzaJambonImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const pizzaTartifletteId = uuidv4()
    const pizzaTartifletteImgPath = 'Stand/victorflorent/produits/Pizza_Tartiflette.jpg'
    const pizzaTartifletteImgData = fs.readFileSync(pizzaTartifletteImgPath)
    const pizzaTartifletteImgName = pizzaTartifletteImgPath.split('/').pop()
    mkProduct(pizzaTartifletteId, victorFlorentId)
    writeProduct(pizzaTartifletteId, victorFlorentId, { name:pizzaTartifletteImgName, data: pizzaTartifletteImgData })
    await Product.create({
        id: pizzaTartifletteId,
        name: "Pizza - Tartiflette",
        description: "Une pizza à la tartiflette.",
        price: "3.90",
        stock: "12",
        path: getProductPath(victorFlorentId, pizzaTartifletteId, pizzaTartifletteImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const pizzaTexmexId = uuidv4()
    const pizzaTexmexImgPath = 'Stand/victorflorent/produits/Pizza_Texmex.jpg'
    const pizzaTexmexImgData = fs.readFileSync(pizzaTexmexImgPath)
    const pizzaTexmexImgName = pizzaTexmexImgPath.split('/').pop()
    mkProduct(pizzaTexmexId, victorFlorentId)
    writeProduct(pizzaTexmexId, victorFlorentId, { name:pizzaTexmexImgName, data: pizzaTexmexImgData })
    await Product.create({
        id: pizzaTexmexId,
        name: "Pizza - Texmex",
        description: "Une pizza texmex.",
        price: "3.90",
        stock: "13",
        path: getProductPath(victorFlorentId, pizzaTexmexId, pizzaTexmexImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const pizzaTroisFromagesId = uuidv4()
    const pizzaTroisFromagesImgPath = 'Stand/victorflorent/produits/Pizza_Trois_Fromages.jpg'
    const pizzaTroisFromagesImgData = fs.readFileSync(pizzaTroisFromagesImgPath)
    const pizzaTroisFromagesImgName = pizzaTroisFromagesImgPath.split('/').pop()
    mkProduct(pizzaTroisFromagesId, victorFlorentId)
    writeProduct(pizzaTroisFromagesId, victorFlorentId, { name:pizzaTroisFromagesImgName, data: pizzaTroisFromagesImgData })
    await Product.create({
        id: pizzaTroisFromagesId,
        name: "Pizza - Trois Fromages",
        description: "Une pizza aux trois fromages.",
        price: "3.90",
        stock: "3",
        path: getProductPath(victorFlorentId, pizzaTroisFromagesId, pizzaTroisFromagesImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const sandwichPouletId = uuidv4()
    const sandwichPouletImgPath = 'Stand/victorflorent/produits/Sandwich_Poulet.jpg'
    const sandwichPouletImgData = fs.readFileSync(sandwichPouletImgPath)
    const sandwichPouletImgName = sandwichPouletImgPath.split('/').pop()
    mkProduct(sandwichPouletId, victorFlorentId)
    writeProduct(sandwichPouletId, victorFlorentId, { name:sandwichPouletImgName, data: sandwichPouletImgData })
    await Product.create({
        id: sandwichPouletId,
        name: "Sandwich - Poulet",
        description: "Un sandwich au poulet.",
        price: "2.90",
        stock: "2",
        path: getProductPath(victorFlorentId, sandwichPouletId, sandwichPouletImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const sandwichThonId = uuidv4()
    const sandwichThonImgPath = 'Stand/victorflorent/produits/Sandwich_Thon.jpg'
    const sandwichThonImgData = fs.readFileSync(sandwichThonImgPath)
    const sandwichThonImgName = sandwichThonImgPath.split('/').pop()
    mkProduct(sandwichThonId, victorFlorentId)
    writeProduct(sandwichThonId, victorFlorentId, { name:sandwichThonImgName, data: sandwichThonImgData })
    await Product.create({
        id: sandwichThonId,
        name: "Sandwich - Thon",
        description: "Un sandwich au thon.",
        price: "2.90",
        stock: "2",
        path: getProductPath(victorFlorentId, sandwichThonId, sandwichThonImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const tarteletteFramboiseId = uuidv4()
    const tarteletteFramboiseImgPath = 'Stand/victorflorent/produits/Tartelette_Framboise.jpg'
    const tarteletteFramboiseImgData = fs.readFileSync(tarteletteFramboiseImgPath)
    const tarteletteFramboiseImgName = tarteletteFramboiseImgPath.split('/').pop()
    mkProduct(tarteletteFramboiseId, victorFlorentId)
    writeProduct(tarteletteFramboiseId, victorFlorentId, { name:tarteletteFramboiseImgName, data: tarteletteFramboiseImgData })
    await Product.create({
        id: tarteletteFramboiseId,
        name: "Tartelette Framboise",
        description: "Une tartelette à la framboise.",
        price: "1.90",
        stock: "9",
        path: getProductPath(victorFlorentId, tarteletteFramboiseId, tarteletteFramboiseImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    const tropezienneId = uuidv4()
    const tropezienneImgPath = 'Stand/victorflorent/produits/Tropezienne.jpg'
    const tropezienneImgData = fs.readFileSync(tropezienneImgPath)
    const tropezienneImgName = tropezienneImgPath.split('/').pop()
    mkProduct(tropezienneId, victorFlorentId)
    writeProduct(tropezienneId, victorFlorentId, { name:tropezienneImgName, data: tropezienneImgData })
    await Product.create({
        id: tropezienneId,
        name: "Tropezienne",
        description: "Une tropezienne rouge.",
        price: "2.10",
        stock: "5",
        path: getProductPath(victorFlorentId, tropezienneId, tropezienneImgName),
        deleted: false,
        shopId: victorFlorentId
    })

    console.log(`${ChalkMSG.SUCCESS}Victor Florent created !`)
}

export default victorFlorent