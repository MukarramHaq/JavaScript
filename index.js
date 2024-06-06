let count = 0;
let countLabel = document.getElementById("text-box")

function increment(){
   count++;
   countLabel.textContent = count;
}

function reset(){
   count = 0;
   countLabel.textContent = count;
}

function decrement(){
   count--;
   countLabel.textContent = count;
}