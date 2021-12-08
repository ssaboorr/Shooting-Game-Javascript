console.log("working")

const start = document.querySelector('.start')
let health1 = document.querySelector('.health1')
let health2 = document.querySelector('.health2')
let score1 = document.querySelector('.score1')
let score2 = document.querySelector('.score2')


const result = document.querySelector('h3')

health1.innerText = "100%"
health2.innerText = "100%"

let playerOneHealth = 100
let playerTwoHealth = 100

let playerOneScore = 0
let playerTwoScore = 0



score1.innerText = 0
score2.innerText = 0


const shoot = document.querySelector('.shoot')
const playAgain = document.querySelector('.play-again')
const restart = document.querySelector('.restart')

playAgain.disabled = true
restart.disabled = true



shoot.disabled = "true"


start.addEventListener('click', () => {
    shoot.disabled = false
})

shoot.addEventListener('click', () => {
    let shoot_power1 = Math.floor(Math.random() * 5)
    let shoot_power2 = Math.floor(Math.random() * 5)

    playerOneHealth = playerOneHealth - shoot_power2
    playerTwoHealth = playerTwoHealth - shoot_power1
    health1.innerText = playerOneHealth + "%"
    health2.innerText = playerTwoHealth + "%"

    // console.log(playerOneHealth)

    // console.log(playerTwoHealth)

    if (playerOneHealth <= 0) {
        shoot.disabled = "true"
        playerTwoScore += 1
        score2.innerText = playerTwoScore


        health1.innerText = 0 + "%"
        health2.innerText = playerTwoHealth + "%"

        playAgain.disabled = false


    } else if (playerTwoHealth <= 0) {

        shoot.disabled = "true"
        playerOneScore += 1

        score1.innerText = playerOneScore



        health1.innerText = playerOneHealth + "%"
        health2.innerText = 0 + "%"
        playAgain.disabled = false


    }

    if (playerOneScore == 3) {

        result.innerText = "Player One Won The game"
        restart.disabled = false

    } else if (playerTwoScore == 3) {
        result.innerText = "Player two Won The game"
        restart.disabled = false

    }


})

playAgain.addEventListener("click", () => {
    shoot.disabled = false

    playerOneHealth = 100
    playerTwoHealth = 100


    health1.innerText = playerOneHealth + "%"
    health2.innerText = playerTwoHealth + "%"


})

restart.addEventListener('click', () => {

    shoot.disabled = false

    playerOneHealth = 100
    playerTwoHealth = 100


    health1.innerText = playerOneHealth + "%"
    health2.innerText = playerTwoHealth + "%"

    playerOneScore = 0
    playerTwoScore = 0



    score1.innerText = 0
    score2.innerText = 0

    playAgain.disabled = true
    restart.disabled = true


})