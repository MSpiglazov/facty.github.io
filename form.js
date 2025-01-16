let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let chitau;
let vse;
let ocenka = document.querySelector('#ocenka');

let function1 = function (vsego, uge){
  if (vsego <= 0){
    ocenka.textContent = 'В книге должны быть страницы!';
  } else {
  
  let procent = uge * 100 / vsego;
  if (procent > 50 && procent < 100){
    ocenka.textContent = 'Ты близок!';
  }
    else if (procent === 100){
      ocenka.textContent = 'Ты молодец!';
    }
    else if (procent > 100){
      ocenka.textContent = 'Ты переборщил!';
      }
  else if (procent < 0){
      ocenka.textContent = 'Читай в обратную сторону!';
      }
  else {
    ocenka.textContent = 'Поднажми!';
    
  }
    }
 }

/*btn1.addEventListener('click', function(evt){
  evt.preventDefault();
  chitau = input1.value;
  console.log(chitau)
  input1.value = '';
});*/

btn2.addEventListener('click', function(evt){
  evt.preventDefault();
  
  chitau = input1.value;
  input1.value = '';
  
  vse = input2.value;
  input2.value = '';
  
  function1(vse, chitau);
});








