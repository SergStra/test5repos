// є список продуктів у кошику. Треба вивести на який материках виготовилися продукти у кошикую

const myCart = [
    {
        name: 'banana',
        quantity: 5,
        company: {
            id: 88,
        },
    },
    {
        name: 'apple',
        quantity: 4,
        company: {
            id: 123,
        },
    },
    {
        name: 'milk',
        quantity: 15,
        company: {
            id: 999,
        },
    },
];

const company = [
    {
        id: 999,
        country: 'Ukraine',
    },
    {
        id: 123,
        country: 'USA',
    },
    {
        id: 88,
        country: 'France',
    },
];

const getProductsContinents = (cart, compS) => {
 let ProdOnContinent=[] 
    cart.forEach((product) => {
        compS.forEach((company) => {
            if (Object.values(product.company) == company.id) {
            let rez={prod: product.name, country: company.country}  // not nice. Є альтернатива?
            ProdOnContinent.push(rez)
            }
        });
    });
console.log(ProdOnContinent)
return ProdOnContinent

    // твій код тут
};
const continents = getProductsContinents(myCart, company);