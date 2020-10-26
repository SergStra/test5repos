// є список продуктів у кошику і список цін. Треба порахувати вартість продуктів у кошику

const myCart = [{ banana: 5 }, { milk: 1 }, { apple: 10 }];

const myPrices = [{ milk: 6.4 }, { apple: 0.6 }, { banana: 4.6 }];
debugger
const getCartPrice = (cart, prices) => {
  let sum = cart.reduce((sumC,prod) => {;
    const productname=Object.keys(item)[0]
    pricc=prices.find(item=> productname==Object.keys(prod)[0]);
   return sumC+Object.values(pricc)[0]*Object.values(prod)[0];
},0)
console.log(sum)
return sum;
};
const cartPrice = getCartPrice(myCart, myPrices);
