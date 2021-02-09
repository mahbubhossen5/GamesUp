// function calculation(inputNumber1, inputNumber2) {
// var inputNumber1 = Math.floor(Math.random() * 10);
// // console.log(inputNumber1);
// var inputNumber2 = Math.floor(Math.random() * 10);
// // console.log(inputNumber2);
// document.getElementById('expo').addEventListener('click', function() {
//     const exponent = Math.pow(inputNumber1, inputNumber2);
//     const outputBox = document.getElementById('power').innerText;
//     document.getElementById('power').innerText = exponent;
// })
// document.getElementById('addition').addEventListener('click', function() {
//     const addition = inputNumber1 + inputNumber2;
//     const outputBox = document.getElementById('added');
//     document.getElementById('added').innerText = addition;
// })
// document.getElementById('ten-to-the-power').addEventListener('click', function() {
//     const result = inputNumber1 * Math.pow(10, inputNumber2);
//     document.getElementById('powerTen').innerText = result;
// })
// document.getElementById("division").addEventListener('click', function() {
//     const division = (inputNumber1 / inputNumber2);
//     document.getElementById('divided').innerText = division;
// })

// // CHECK NUMBERS
// var firstResult = parseInt(document.getElementById('input-one').value);
// var secondResult = parseInt(document.getElementById('input-two').value);
// document.getElementById('button-addon1').addEventListener('click', function() {
//     firstResult = parseInt(document.getElementById('input-one').value);

//     if (firstResult == inputNumber1) {
//         document.getElementById('button-addon1').innerText = 'Well done';
//         document.getElementById('button-addon1').style.backgroundColor = 'green';
//     }
//     if (firstResult != inputNumber1) {
//         document.getElementById('button-addon1').innerText = 'Go to hell';
//         document.getElementById('button-addon1').style.backgroundColor = 'red';
//     }
// })

// document.getElementById('button-addon2').addEventListener('click', function() {
//     secondResult = parseInt(document.getElementById('input-two').value);
//     if (secondResult == inputNumber2) {
//         document.getElementById('button-addon2').innerText = 'Congrats';
//         document.getElementById('button-addon2').style.backgroundColor = 'green';
//     }
//     if (secondResult != inputNumber2) {
//         document.getElementById('button-addon2').innerText = 'Go to hell';
//         document.getElementById('button-addon2').style.backgroundColor = 'red';
//     }
// })