//document.getElementById("count-el").innerText = 5
//let firstBatch = 5 
//let secondBatch = 6
//let count = firstBatch + secondBatch
//console.log(count);
//initiialize the count to 0
//Listen for clicks on the increment button
//increment the count variable when the button is clickd
//change the count-el in the html to reflect ht new count

let countEl = document.getElementById("count-el")
let count = 0;

function increment() 
{
  count = count + 1;
  countEl.innerText =count
}

//create a function that save(), logs out the count when is called 
function save()
  {
    console.log(count)
  }