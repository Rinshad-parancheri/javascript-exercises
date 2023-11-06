const getTheTitles = function(arr) {
  let bookTitiles = []
   console.log(arr[0].title);
  for (let i = 0; i < arr.length; i++){
     bookTitiles[i] = arr[i].title;

   }
   return bookTitiles;
};

// Do not edit below this line
module.exports = getTheTitles;
