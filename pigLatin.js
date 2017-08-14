/*Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an
English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

function translatePigLatin(str) {
   return str;
}

translatePigLatin("consonant");


Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
*/

/*
function translatePigLatin(str) {
str = str.split('');
 var vowelMatch = /[aeiou]/;

 if (vowelMatch.test(str[0])) {
   return str.join('') + 'way';
 }

 while (true) {
   if (!vowelMatch.test(str[0])) {
     str.push(str.splice(0, 1));
   } else {
     break;
   }
 }
 return str.join('') + 'ay';
}
*/

// another solution
function translatePigLatin(str) {
  var regEx = /[aeiou]/;
  if (str[0].match(regEx)){
    return str += "way";
  } else {
    var index = str.indexOf(str.match(regEx));
       return str.substr(index) + str.substring(0,index) + 'ay';
  }
}



/*
//advance code
function translatePigLatin(str) {
   return str.replace(/(^[^aeiou]*)(\w*)/, function(match, p1, p2){
    return p2 + (p1 ? p1 : 'w') + 'ay';
  });
}
*/

/*explaination the above advance code..
Regarding the arguments passed to the inline function:
* match in this case only serves as a placeholder since it is always
the first argument passed by replace( ) but is not actually used in
the function (with this regex match is always the whole word (given
the input string is stipulated to be an English word in lowercase).
* p1 is the first parenthesized submatch string ^[^aeiou]* , i.e.
zero or more non-vowels at the beginning of the word.
Ex. for 'glove' p1 = 'gl' and for 'algorithm' p1 = "".
* p2 will be all the characters in the word that were not captured
 by p1. Ex. 'glove' p2 = 'ove' and for 'algorithm' p2 = 'algorithm'.
*/

/*
//another solution using indexOf(), match(),regex and slice()
function translatePigLatin(str) {
  var firstVowel = str.indexOf(str.match(/[aeiou]/));

  if (firstVowel === 0) return str + 'way';
  return str.slice(firstVowel) + str.slice(0, firstVowel) + 'ay';
}
*/
/*explaination the above code..
uses str.match(/[aeiou]/) to find the first vowel (anything between
the [] brackets)
then uses str.indexOf() on the result of the str.match() to find the
index of that result

Then, I use that index plus str.slice() to slice out parts of the string
to use in constructing the new string I want to return.*/

console.log(translatePigLatin("glove"));
