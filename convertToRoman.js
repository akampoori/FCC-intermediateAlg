/*Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

function convertToRoman(num) {
return num;
}
convertToRoman(36);

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()
*/
function convertToRoman(num) {
 var result = '';
 var arabicNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  if (num > 0 && num < 4000){

    for (i = 0; i < arabicNum.length; i++){

      while (num >= arabicNum[i]) {

        result += romanNum[i];
        num -= arabicNum[i];

      }

    }
    return result;
  }

  else {
         return "Number must be between 1 - 3999.";
  }
}

console.log(convertToRoman(1968));
