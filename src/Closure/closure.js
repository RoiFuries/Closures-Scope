const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Moneybox: $${saveCoins}`);
}

moneyBox(4);
moneyBox(12);


const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`);
    }
    return countCoins;
}

let MymoneyBox = moneyBox()
MymoneyBox(4)
MymoneyBox(6)
MymoneyBox(10)