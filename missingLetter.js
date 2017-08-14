/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.
function fearNotLetter(str) {
  return str;
}
fearNotLetter("abce");


Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

// function fearNotLetter(str) {
//
//   for(var i = 0; i < str.length; i++) {
//     /* code of current character */
//     var code = str.charCodeAt(i);
//
//     /* if code of current character is not equal to first character + no of
//      iteration hence character has been escaped */
//     if (code !== str.charCodeAt(0) + i) {
//
//       /* if current character has escaped one character find previous char and
//          return */
//       return String.fromCharCode(code - 1);
//     }
//   }
//   return undefined;
//}



// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var charCode = str.charCodeAt(0), missingLetter;

  str.split("").map(function(letter,index) {
    if (str.charCodeAt(index) == charCode) {
      ++charCode;
    } else {
      missingLetter = String.fromCharCode(charCode);
    }
  });

  return missingLetter;
}

// test here

console.log(fearNotLetter("abce"));
