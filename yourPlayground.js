const letterCounter = (phrases) => {
  let results = [];
  for (let i = 0; i < phrases.length; i++) {
    results.push(phrases[i]);
  }
  console.log(`There is ${results.length} characters in the phrase`);
};
inputText = "My name is Nabil";
letterCounter(inputText);

//PROJECT:Sum Number Using Array
const sumArray = (numbers) =>{
  let results = 0;
  for (let i=0;i<numbers.length;i++){
    results = results + numbers[i];
  }
  console.log(`There is total ${results} in this array`);
}
sumArray([2, 3, 4, 5]);

//PROJECT:Find the max value number in array
//READ.ME: Loop through the array and use if else statement to find the biggest number

const maxNumber = (numbers) =>{
  let maxNumber = 0
  for(let i =0;i<numbers.length;i++){
    if (maxNumber < numbers[i]){
      maxNumber = numbers[i];
      
    }
  }
  console.log(`THe biggest number in the array is ${maxNumber}`);
}
const numbers =[1,2,3,4,5,6,2,3]
maxNumber(numbers)

//PROJECT:Calculate frequencies of anything
//ALGO:Expected to return object that show key=letter,value=number of times appeared
//TODO: Loop through the phrase
//TODO:Create empty object 
//TODO:Check if the letter exists in the frequency 
//TODO:if exists,increment it
//TODO:otherwise, set the value to 1

const letterFrequency =(phrases) =>{
  let frequency ={};
  for(letter of phrases){
    if(letter in frequency){
      //This is usefull for adding element within loop because most loop return string
    frequency[letter] = frequency[letter] + 1}
    else{
      frequency[letter] = 1
    }
  }
  return frequency
}
console.log(letterFrequency("haha"))