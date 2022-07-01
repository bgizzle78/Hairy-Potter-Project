// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", "10 oz", "8 in")
let plate = makePottery("Plate", "16 oz", "1 in")
let bowl = makePottery("Bowl", "14 oz", "4 in")
let cup = makePottery("Cup", "8 oz", "8 in")
let platter = makePottery("Platter", "24 oz", "2 in")

//console.log(mug, plate, bowl, cup, platter)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2200)
let firedPlate = firePottery(plate, 2200)
let firedBowl = firePottery(bowl, 2200)
let firedCup = firePottery(cup, 2200)
let firedPlatter = firePottery(platter, 2200)

console.log(firedMug, firedPlate, firedBowl, firedCup, firedPlatter)


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



