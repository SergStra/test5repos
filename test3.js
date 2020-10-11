// є дві стрінги. Треба перевірити чи може з одної стрінги вийти інша якщо перемішати символи
const myString2 = ' abcd';
const myString1 = 'abcdef';

debugger;
const checkIfStringsAreSimilar = (s1, s2) => {
    let similar = 0;
    if (s1.length > s2.length) {
        for (let char2 of s2) {
            for (let char1 of s1) {
                if (char2 == char1) {
                    similar = similar + 1;
                    alert(similar);
                }
            }
        }
        if ((similar = s2.length)) return true;
    } else {
    }
    // твій код тут
};

if (checkIfStringsAreSimilar(myString1, myString2)) {
    alert('super');
} // true or false
