import ChalkMSG from '../Scripts/Chalk.js'
import defaultData from './DefaultData.js'
import victorFlorent from './VictorFlorent.js'
import saintJames from './SaintJames.js'
import laBoutiqueDesArtisans from './LaBoutiqueDesArtisans.js'
import bCM from './BCM.js'
import lME from './LME.js'
import lesMinettes from './lesMinettes.js'

const standify = async () => {
    await defaultData()
    await victorFlorent()
    await saintJames()
    await laBoutiqueDesArtisans()
    await bCM()
    await lME()
    await lesMinettes()
}

const main = () => {
    console.log(`${ChalkMSG.INFO}Standify script is running...`)
    standify()
        .then(() => {
            console.log(`${ChalkMSG.SUCCESS}Standify script is finished !`)
            process.exit(0)
        })
        .catch((err) => {
            console.log(`${ChalkMSG.ERROR}${err}`)
            process.exit(1)
        })
}

main()
