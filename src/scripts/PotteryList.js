// Define DOM Target
// Create an <article> element in the index.html file.
// The article element must have a class of potteryList.

// Create Pottery HTML
// Create a scripts/PotteryList.js module.
// Define and export a PotteryList function.
// The PotteryList function must get the items to be sold from the PotteryCatalog.js module.
// The PotteryList function must convert each object in the array to an HTML representation string.
// The PotteryList function must then return a single string that contains ALL of the pottery HTML representation.
import { usePottery } from './PotteryCatalog.js'

export const PotteryList = () => {

    const pieces = usePottery()

    let htmlString = '<article class="potteryList">'

    for (const piece of pieces) {

        htmlString += `<section class="pottery" id="pottery--1">
    <h2 class="pottery__shape">${piece.shape}</h2>
    <div class="pottery__properties">
        Item weighs ${piece.weight} and is ${piece.height} in height
    </div>
    <div class="pottery__price">
        Price is $${piece.price}
    </div>
</section>`
    }
    htmlString += `</article>`

    return htmlString
}