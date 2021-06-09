var add = function(a,b){
  return 'The sum of '+a+' & '+b+' is: '+(a+b)
}
var multiply = function(x,y){
  return 'The multiplication of '+x+' & '+y+' is: '+(x*y)
}

module.exports = {
  add: add,
  multiply: multiply
}
