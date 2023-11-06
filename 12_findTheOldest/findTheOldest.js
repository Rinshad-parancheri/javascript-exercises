const findTheOldest = function(arr) {
    if (arr.length === 0) {
      return "No individuals provided";
    }
  
    let agedPersonName = '';
    let maxAge = 0;
    const currentYear = new Date().getFullYear();
  
    for (let i = 0; i < arr.length; i++) {
      let yearOfDeath = arr[i].yearOfDeath || currentYear;
      let currentPersonAge;
  
      if ('yearOfDeath' in arr[i]) {
        currentPersonAge = yearOfDeath - arr[i].yearOfBirth;
      } else {
        currentPersonAge = currentYear - arr[i].yearOfBirth;
      }
  
      if (currentPersonAge >= maxAge) {  // Consider equal age as well
        maxAge = currentPersonAge;
        agedPersonName = arr[i].name;
      }
    }
  
    if (agedPersonName === '') {
      return "Age calculation issue";
    }
  
    return { name: agedPersonName };  // Return an object with the name property
  };
  
  module.exports = findTheOldest;
  