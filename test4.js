// є список продуктів у кошику і список цін. Треба порахувати вартість продуктів у кошику

const myCart = [{ banana: 5 }, { milk: 1 }, { apple: 10 }];

const myPrices = [{ milk: 6.4 }, { apple: 0.6 }, { banana: 4.6 }];

const getCartPrice = (cart, prices) => {
  let sum = cart.reduce((sumC,prod) => {;
    pricc=prices.find(item=> Object.keys(item)[0]==Object.keys(prod)[0]);
    sumC=Object.values(pricc)[0]*Object.values(prod)[0];
 alert(`Cost of ${Object.keys(prod)[0]} , will be ${sumC} , USD`);
  },0)
};
const cartPrice = getCartPrice(myCart, myPrices);
