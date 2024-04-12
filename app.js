let BetAmount = 0
let Winnings = 1000

let row1 = document.getElementById('firstRow').querySelectorAll('.row1')
// console.log("row1", row1)
let row2 = document.getElementById('secondRow').querySelectorAll('.row2')
// console.log("row2", row2)
let row3 = document.getElementById('thirdRow').querySelectorAll('.row3')
// console.log("row3", row3)



let R11 = document.getElementById("R1-1")
let R12 = document.getElementById("R1-2")
let R13 = document.getElementById("R1-3")
let R14 = document.getElementById("R1-4")
let R15 = document.getElementById("R1-5")

let R21 = document.getElementById("R2-1")
let R22 = document.getElementById("R2-2")
let R23 = document.getElementById("R2-3")
let R24 = document.getElementById("R2-4")
let R25 = document.getElementById("R2-5")

let R31 = document.getElementById("R3-1")
let R32 = document.getElementById("R3-2")
let R33 = document.getElementById("R3-3")
let R34 = document.getElementById("R3-4")
let R35 = document.getElementById("R3-5")




const upBet = () => {

    BetAmount = BetAmount + 5

    let betText = document.getElementById("betText");
    betText.innerText = BetAmount
    // Winnings = Winnings - 5 
    console.log(BetAmount);
    console.log(Winnings);
}

const downBet = () => {

    BetAmount = BetAmount - 1

    let betText = document.getElementById("betText");
    betText.innerText = BetAmount
    // Winnings = Winnings - 1
    if (BetAmount < 0) {
        alert("Bet some money loser!!")
    }
    BetAmount = 0
    betText.innerText = BetAmount
}

const Spin = () => {



    R11.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R11.style.animation = "none", 3500) // Resets the Reels
    R11.style.animationDelay = ".001s"
    R12.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R12.style.animation = "none", 3500) // Resets the Reels
    R12.style.animationDelay = ".001s"
    R13.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R13.style.animation = "none", 3500) // Resets the Reels
    R13.style.animationDelay = ".001s"
    R14.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R14.style.animation = "none", 3500) // Resets the Reels
    R14.style.animationDelay = ".001s"
    R15.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R15.style.animation = "none", 3500) // Resets the Reels
    R15.style.animationDelay = ".001s"
    R21.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R21.style.animation = "none", 3500) // Resets the Reels
    R21.style.animationDelay = ".001s"
    R22.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R22.style.animation = "none", 3500) // Resets the Reels
    R22.style.animationDelay = ".001s"
    R23.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R23.style.animation = "none", 3500) // Resets the Reels
    R23.style.animationDelay = ".001s"
    R24.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R24.style.animation = "none", 3500) // Resets the Reels
    R24.style.animationDelay = ".001s"
    R25.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R25.style.animation = "none", 3500) // Resets the Reels
    R25.style.animationDelay = ".001s"
    R31.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R31.style.animation = "none", 3500) // Resets the Reels
    R31.style.animationDelay = ".001s"
    R32.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R32.style.animation = "none", 3500) // Resets the Reels
    R32.style.animationDelay = ".001s"
    R33.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R33.style.animation = "none", 3500) // Resets the Reels
    R33.style.animationDelay = ".001s"
    R34.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R34.style.animation = "none", 3500) // Resets the Reels
    R34.style.animationDelay = ".001s"
    R35.style.animation = "shake .9s" // Spins the reels...Kinda
    setTimeout(() => R35.style.animation = "none", 3500) // Resets the Reels
    R35.style.animationDelay = ".001s"

    for (let i = 0; i < row1.length; i++) {
        row1[i].innerText = Math.ceil(Math.random() * 5)
    }
    for (let i = 0; i < row2.length; i++) {
        row2[i].innerText = Math.ceil(Math.random() * 5)
    }
    for (let i = 0; i < row3.length; i++) {
        row3[i].innerText = Math.ceil(Math.random() * 5)
    }



    // let interval = setInterval(() => {

    //     for (let i = 0; i < row1.length; i++) {
    //         row1[i].innerText = Math.ceil(Math.random() * 5)
    //     }
    //     for (let i = 0; i < row2.length; i++) {
    //         row2[i].innerText = Math.ceil(Math.random() * 5)
    //     }
    //     for (let i = 0; i < row3.length; i++) {
    //         row3[i].innerText = Math.ceil(Math.random() * 5)
    //     }

    //     clearInterval(interval)
    // }, 1000);





    // console.log("r1-5 TEST', ", R11.innerText, R12.innerText, R13.innerText, R14.innerText, R15.innerText)

    if (R11.innerText === R12.innerText && R12.innerText === R13.innerText ||
        R12.innerText === R13.innerText && R13.innerText === R14.innerText ||
        R13.innerText === R14.innerText && R14.innerText === R15.innerText
    ) {
        console.log("ROW ONE FIRE 3ofaKind")
        Winnings = Winnings + (BetAmount * 3)
        document.getElementById("winningsAmount").innerText = Winnings
    }

    if (R21.innerText === R22.innerText && R22.innerText === R23.innerText ||
        R22.innerText === R23.innerText && R23.innerText === R24.innerText ||
        R23.innerText === R24.innerText && R24.innerText === R25.innerText
    ) {
        console.log("ROW Two FIRE 3ofaKind")
        Winnings = Winnings + (BetAmount * 3)
        document.getElementById("winningsAmount").innerText = Winnings
    }

    if (R31.innerText === R32.innerText && R32.innerText === R33.innerText ||
        R32.innerText === R33.innerText && R33.innerText === R34.innerText ||
        R33.innerText === R34.innerText && R34.innerText === R35.innerText
    ) {
        console.log("ROW Three FIRE 3ofaKind")
        Winnings = Winnings + (BetAmount * 3)
        document.getElementById("winningsAmount").innerText = Winnings
    }

    if (R11.innerText === R21.innerText && R21.innerText === R31.innerText ||
        R12.innerText === R22.innerText && R22.innerText === R32.innerText ||
        R13.innerText === R23.innerText && R23.innerText === R33.innerText ||
        R14.innerText === R24.innerText && R24.innerText === R34.innerText ||
        R15.innerText === R25.innerText && R25.innerText === R35.innerText
    ) {
        console.log("Verical ROW FIRE 3ofaKind")
        Winnings = Winnings + BetAmount * 3
        document.getElementById("winningsAmount").innerText = Winnings
    }
    ///////////////////////////////^^^^^^^3ofaKind Wins^^^^^^^^^^^////////////////////////////////////////////////////

    if (R11.innerText === R12.innerText && R12.innerText === R13.innerText && R13.innerText === R14.innerText ||
        R12.innerText === R13.innerText && R13.innerText === R14.innerText && R14.innertext === R15.innertext ||
        R21.innerText === R22.innerText && R22.innerText === R23.innerText && R23.innerText === R24.innerText ||
        R22.innerText === R23.innerText && R23.innerText === R24.innerText && R24.innertext === R25.innertext ||
        R31.innerText === R32.innerText && R32.innerText === R33.innerText && R33.innerText === R34.innerText ||
        R32.innerText === R33.innerText && R33.innerText === R34.innerText && R34.innertext === R35.innertext

    ) {
        console.log("4ofaKind ")
        Winnings = Winnings + BetAmount * 5
        document.getElementById("winningsAmount").innerText = Winnings
    }
    ///////////////////////////////^^^^^^4ofaKind Wins^^^^^^^^^///////////////////////////////////////////////////////

    if (R11.innerText === R12.innerText && R12.innerText === R13.innerText && R13.innerText === R14.innerText && R14.innertext === R15.innerText || R21.innerText === R22.innerText && R22.innerText === R23.innerText && R23.innerText === R24.innerText && R24.innertext === R25.innerText || R31.innerText === R32.innerText && R32.innerText === R33.innerText && R33.innerText === R34.innerText && R34.innertext === R35.innerText
    ) {
        console.log("5ofaKind ")
        Winnings = Winnings + (BetAmount * 10)
        document.getElementById("winningsAmount").innerText = Winnings
    } else {
        console.log(BetAmount);
        console.log(Winnings);
        Winnings -= BetAmount
        document.getElementById("winningsAmount").innerText = Winnings
        console.log(Winnings);

    }

    ///////////////////////////////^^^^^^5ofaKind Wins^^^^^^^^^///////////////////////////////////////////////////////

    BetAmount = 0
    betText.innerText = BetAmount

}

