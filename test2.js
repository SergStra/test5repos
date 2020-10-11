// є zякась стрінга. Треба знайти найдовшу послідовність однаокових букв
const myString = 'hh jjj dfg d f fff nn kk';
const getLongestSequence = (s) => {
    let str1 = '',
        strmax = str1;

    debugger;
    for (let ch of s) {
        if (ch == str1[0]) {
            str1 = str1 + ch;
        } else {
            if (strmax.length <= str1.length) {
                strmax = str1;
            }
            str1 = ch;
        }
    }
    alert(`nnn= ${strmax}`);
    // твій код тут
};

const longestSequence = getLongestSequence(myString);
