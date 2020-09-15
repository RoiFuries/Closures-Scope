const helloWorld = () => {
    const hello = 'helow world';
    console.log(hello);
}
helloWorld()
console.log(hello);

var scope = 'i am global bitch'

const functionScope = () =>{
    var scope = 'i am  just a local'
    const func = () => {
        return scope
    }
    console.log(func());
}
functionScope()
console.log(scope);