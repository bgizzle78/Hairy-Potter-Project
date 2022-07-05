// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", "10 oz", "8 inches")
let plate = makePottery("Plate", "16 oz", "1 inches")
let bowl = makePottery("Bowl", "14 oz", "4 inches")
let cup = makePottery("Cup", "8 oz", "8 inches")
let platter = makePottery("Platter", "24 oz", "2 inches")

//console.log(mug, plate, bowl, cup, platter)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2200)
let firedPlate = firePottery(plate, 2200)
let firedBowl = firePottery(bowl, 2200)
let firedCup = firePottery(cup, 2200)
let firedPlatter = firePottery(platter, 2200)

//console.log(firedMug, firedPlate, firedBowl, firedCup, firedPlatter)


// Determine which ones should be sold, and their price
let finishedMug = toSellOrNotToSell(firedMug)
let finishedPlate = toSellOrNotToSell(firedPlate)
let finishedBowl = toSellOrNotToSell(firedBowl)
let finishedCup = toSellOrNotToSell(firedCup)
let finishedPlatter = toSellOrNotToSell(firedPlatter)

// console.log(finishedMug, finishedPlate, finishedBowl, finishedCup, finishedPlatter)
// let potteryArray = usePottery()
// console.log(usePottery())


// Invoke the component function that renders the HTML list
let listedMug = PotteryList(finishedMug)
let listedPlate = PotteryList(finishedPlate)
let listedBowl = PotteryList(finishedBowl)
let listedCup = PotteryList(finishedCup)
let listedPlatter = PotteryList(finishedPlatter)

console.log(listedMug, listedPlate, listedBowl, listedCup, listedPlatter)

const parentHTMLElement = document.querySelector(".potteryList")

parentHTMLElement.innerHTML = PotteryList()

