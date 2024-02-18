let firstCountry = "Украина"
let secondCountry = "Италия"
let thirdCountry = "Таиланд"
let fourthCountry = "Польша"

let country = prompt('Выберите страну в которой хотите оказаться: Украина, Италия, Таиланд, Польша')
let amount = prompt('Ваш бюджет')

if (country === firstCountry)
    if (amount >= 500) {
        alert('Надеемся, что' + " " + firstCountry + " " + 'подарит Вам незабываемые воспоминания')
    } else if (amount < 500 && amount >= 200) {
        alert('Вы не можете посетить Украину с этим бюджетом, доступная страна для посещения:' + " " + fourthCountry)
    } else if (amount < 200) {
        alert('У Вас недостаточно средств для путешествия в какую либо страну')
    }

if (country === secondCountry)
    if (amount >= 1500) {
        alert('Надеемся, что' + " " + secondCountry + " " + 'подарит Вам незабываемые воспоминания')
    } else if (amount < 1500 && amount >= 500) {
        alert('Вы не можете посетить Италию с этим бюджетом, доступные страны для посещения:' + " " + firstCountry + " " + ',' + " " + thirdCountry)
    } else if (amount < 500 && amount >= 200) {
        alert('Вы не можете посетить Италию с этим бюджетом, доступная страна для посещения:' + " " + fourthCountry)
    } else if (amount < 200) {
        alert('У Вас недостаточно средств для путешествия в какую либо страну')
    }

if (country === thirdCountry)
    if (amount >= 1000) {
        alert('Надеемся, что' + " " + thirdCountry + " " + 'подарит Вам незабываемые воспоминания')
    } else if (amount < 1000 && amount >= 500) {
        alert('Вы не можете посетить Таиланд с этим бюджетом, доступная страна для посещения:' + " " + firstCountry)
    } else if (amount < 500 && amount >= 200) {
        alert('Вы не можете посетить Таиланд с этим бюджетом, доступная страна для посещения:' + " " + fourthCountry)
    } else if (amount < 200) {
        alert('У Вас недостаточно средств для путешествия в какую либо страну')
    }

if (country === fourthCountry)
    if (amount >= 200) {
        alert('Надеемся, что' + " " + fourthCountry + " " + 'подарит Вам незабываемые воспоминания')
    } else if (amount < 200) {
        alert('У Вас недостаточно средств для путешествия в какую либо страну')
    }
 
alert('Task 2')


