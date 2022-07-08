const button =  document.querySelectorAll('.btn');
let input = document.querySelector('.input');
const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');



button.forEach(function(e) {
    
    e.addEventListener("click", function(num){
      parseInt(  input.innerText)

switch(num.target.innerText){

case 'RESET':
  input.innerText = '';
break;

case '=':
  input.innerText = eval(input.innerText);
  break;

  case 'x':
    input.innerText += '*'
    break;

    case 'Del':
      if (input.innerText){
         input.innerText = input.innerText.slice(0, -1);
      }
      break;

default:
  parseInt(  input.innerText += num.target.innerText)

console.log(typeof(input.innerText))

}




    });


  
});

function addINComma() {
  const display = n;
  return display.toLocaleString('en-US');

}

theme1.addEventListener('click', function(){
  if(value = '0'){
    document.getElementById("css").href="styles.css";
  }
})

theme2.addEventListener('click', function(){
  if(value = '1'){
    document.getElementById("css").href="theme1.css";
  }

})


theme3.addEventListener('click', function(){
  if(value = '2'){
    document.getElementById("css").href="theme2.css";

  }
})
