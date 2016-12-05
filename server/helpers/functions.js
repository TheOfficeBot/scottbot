//generate random number for amount in array
module.exports.randomize = function(array){
  var length = array.length;
  var random = Math.floor(Math.random() * length);
  return random;
};

//filter out other characters that dont match name
module.exports.filterChar = function(name, array) {
  var results = [];
  for(var i = 0; i < array.length; i++){
    var mediaObj = array[i];
    console.log(mediaObj.character);
    if(mediaObj.character.includes(name)){
      results.push(mediaObj);
    }
  }
  return results;
};
