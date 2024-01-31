const rollDice = document.querySelector('.dice-area button')
const diceImage = document.querySelector('.dice-area img')
const diceImage2 = document.querySelector('.dice-area img:last-child')

const diceImages = ['/assets/']

rollDice.addEventListener('click', handleRollDice)

function handleRollDice() {
    const randomNumber1 = Math.round(Math.random() * 5)
    const randomNumber2 = Math.round(Math.random() * 5)

    diceImage.src = `assets/dice${randomNumber1 + 1}.png`
    diceImage2.src = `assets/dice${randomNumber2 + 1}.png`

    console.log(randomNumber1 + 1, randomNumber2 + 1)
}