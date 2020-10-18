//let set = new Set();

//let john = { name: "John" };
//let pete = { name: "Pete" };
//let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
//set.add(john);
//set.add(pete);
//set.add(mary);
//set.add(john);
//set.add(mary);

// set хранит только 3 уникальных значения
//alert(set.size); // 3

//for (let user of set) {
//  alert(user.name); // John (потом Pete и Mary)
//}

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // разбиваем слово на буквы, сортируем и объединяем снова в строку
      let sorted = word.toLowerCase().split("").sort().join(""); // (*)
      map.set(sorted, word);
      alert(sorted);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr) );