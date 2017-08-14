/*
Wherefore art thou
Make a function that looks through an array of objects (first argument)
and returns an array of all objects that have matching property
and value pairs (second argument). Each property and value pair
of the source object has to be present in the object from the
collection if it is to be included in the returned array.

For example, if the first argument is
[{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }],
and the second argument is { last: "Capulet" }, then you must return
the third object from the array (the first argument),
because it contains the property and its value, that was passed on
as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


Here are some helpful links:

Global Object
Object.prototype.hasOwnProperty()
Object.keys()
*/
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var arr = [];
  var srcKeys = Object.keys(source);

  // filter the collection
  arr = collection.filter(function (obj) {
    for(var i in srcKeys) { //for(var i = 0; i < srcKeys.length; i++)
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}


// another solution
/*function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter(function(obj){

    for (var key in source){
      if (source[key] != obj[key]){
        return false;
      }

    }
    return true;
  });

  // Only change code above this line
  return arr;
}*/

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
                          { first: "Mercutio", last: null },
                          { first: "Tybalt", last: "Capulet" }],
                          { last: "Capulet" }));
