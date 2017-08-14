/*Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool;
}

booWho(false);


Here are some helpful links:

Boolean Objects*/

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  // solution 1
  //return (bool === true || bool === false);
  // solution 2 :-)
  return !!bool === bool;
}

console.log(booWho(null));
