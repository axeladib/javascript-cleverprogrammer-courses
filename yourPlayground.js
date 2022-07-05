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