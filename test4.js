// є список продуктів у кошику і список цін. Треба порахувати вартість продуктів у кошику

const myCart = [{ banana: 5 }, { milk: 1 }, { apples: 10 }];

const myPrices = [{ milk: 6.4 }, { apple: 0.6 }, { banana: 4.6 }];
debugger;
const getCartPrice = (cart, prices) => {
  let sum = 0, pricc=0;
  cart.forEach((prod) => {
    pricc=+prices.find(item=> item.key==prod);
    alert(Object.values(prod)[0]);
    
    sum=pricc*Object.values(prod)[0];
    alert(pricc);
    alert(`Cost of ${Object.keys(prod)[0]} , will be ${sum} , USD`);
 //  sum = 0;
 //   prices.forEach((prodpr) => {
 //     // alert(Object.keys(prod)[0]);
 //     // alert(Object.keys(prodpr)[0]);
 //     if (Object.keys(prod)[0] == Object.keys(prodpr)[0]) {
 //       sum = sum + Object.values(prod)[0] * Object.values(prodpr)[0];
 //     }
 //   });
 //   alert(`fuuu ${prod} , sum ${sum}`);
 // });
 // return sum;
});
};

// твій код тут

const cartPrice = getCartPrice(myCart, myPrices);
