let cars=[
    {name: "Volga", age: 28, Q: 12},
    {name: "Honda", age: 5, Q: 8},
    {name: "Volt", age: 2, Q: 1.2},
]
//newarr=cars.map(car=> car.Q<10 ? car:0)
//console.log(newarr)
debugger
const newAge=cars.reduce((acc, cari)=>(cari.age>3)?acc+cari.age:acc,0)

console.log(newAge)