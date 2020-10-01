// є список продуктів у кошику. Треба вивести на який материках виготовилися продукти у кошикую

const myCart = [
	{ 
  	name: 'banana',
  	quantity: 5,
    company: {
    	id: 88
    }
  },
  { 
  	name: 'apple',
  	quantity: 4,
    company: {
    	id: 123
    }
  },
  { 
  	name: 'milk',
  	quantity: 15,
    company: {
    	id: 999
    }
  },
]

const company = [
  { 
  	id: 999,
  	country: 'Ukraine'
  },
  { 
  	id: 123,
  	country: 'USA'
  },
  {
  	id: 88,
  	country: 'France'
  }
]

const getProductsContinents = (cart) => {
let cart = new.Map(object.entires(company));
for (let companies of recipeMap.keys()) {
    alert(companies);
alert()
    // твій код тут
}

const continents = getProductsContinents(myCart)