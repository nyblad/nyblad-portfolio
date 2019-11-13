//Array of words
const words = ['tech support', 'project management', 'web editor'];

let index = 0;

//Function to spap words
const swapWords = () => {
  document.getElementById("swap-words").innerHTML = words[index++ % words.length]
}

//Set interval of the swapping
setInterval(swapWords, 1000)