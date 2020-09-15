var a = 'hello A'

function hello(){
    let b = 'hello world let d';
    const c = 'hellow world const c'
    if(true){
        let d = 'Hellow wold let d'
        debugger
    }
}

hello();

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