const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if(numsLeft > 0){
    reader.question("Enter next number to sum: ", function(num) {
      const number = parseInt(num);
      sum += number;
      console.log(`the partial sum so far is: ${sum}`);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    });
    }
    else {
      completionCallback(sum);
    }

}

addNumbers(0, 3, sum => console.log(`total sum: ${sum}`));