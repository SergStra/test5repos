
// є дві стрінги. Треба перевірити чи може з одної стрінги вийти інша якщо перемішати символи
const myString2 = 'abdc';
const myString1 = 'abcdef';


const checkIfStringsAreSimilar = (s1, s2) => {
    let similar = 0;
    
    string2=s2.split('');
     
     string2.sort();
     s1=string1.join(string1.sort(s1.split('')));
     s2=string2.join();
     if (s1.indexOf(s2)==0) return true;
     if (s2.indexOf(s1)==0) return true;
    // alert(s1);
    // alert(s2);
   // if (s1.length > s2.length) {
   //     for (let char2 of s2) {
    //        for (let char1 of s1) {
    //            if (char2 == char1) {
    //                similar = similar + 1;
    //                alert(similar);
    //            }
    //        }
    //    }
    //    if ((similar = s2.length)) return true;
   // } else {
  //  }
    // твій код тут
};

if (checkIfStringsAreSimilar(myString1, myString2)) {
    alert('super');
} 
