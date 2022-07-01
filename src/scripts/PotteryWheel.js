// Making Pottery at the Wheel
// Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
// Define and export a function named makePottery.
// The makePottery function must accept the following values as input (i.e.it needs parameters), in the following order.
// Shape of the piece of pottery(e.g. "Mug", "Platter")
// Weight of the piece(e.g. 1, 5)
// Height of the piece(e.g. 3, 7)
// The makePottery function must return an object with the following properties on it.
// shape
// weight
// height
// id(increment this value each time the function is invoked)

const potteryPiece = 1

export const makePottery = (shape, weight, height) => {
    let potteryObject = {
        shape: shape,
        weight: weight,
        height: height,
        id: 1
    }

return potteryObject
}