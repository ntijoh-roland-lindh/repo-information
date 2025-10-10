function smallestOfTwo(num1,num2) { 
  let smallest = (num1 < num2) ? num1 : num2
  document.querySelector("body").innerHTML = ""
  return smallest
}
