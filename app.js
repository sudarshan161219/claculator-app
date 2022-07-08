const button =  document.querySelectorAll('.btn');
let input = document.querySelector('.input');






  
  




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

