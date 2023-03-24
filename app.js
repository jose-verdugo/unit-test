// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (num) =>{
    return num * oneEuroIs.USD
}

console.log(fromEuroToDollar(2));

const fromDollarToYen = (num) =>{
    return num * oneEuroIs.USD * oneEuroIs.JPY
}
console.log(fromDollarToYen(1));

const fromYenToPound = (num) =>{
    return num / oneEuroIs.JPY * oneEuroIs.GBP
}
console.log(fromYenToPound(5000));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};