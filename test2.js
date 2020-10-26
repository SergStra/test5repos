// є zякась стрінга. Треба знайти найдовшу послідовність однаокових букв
const myString = 'hh jjjj dfg d f fff nn kk';
const getLongestSequence = (strng) => {
    let PartOfStr = '',
        strmax = PartOfStr;

    for (let simbol of strng) {
        if (simbol == PartOfStr[0]) {
            PartOfStr = PartOfStr + simbol;
        } else {
            if (strmax.length <= PartOfStr.length) {
                strmax = PartOfStr;
            }
            PartOfStr = simbol;
        }
    }
    alert(`The longest is = ${strmax}`);
    return strmax
    // твій код тут
};

const longestSequence = getLongestSequence(myString);
