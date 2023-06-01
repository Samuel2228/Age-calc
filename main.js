let ageNum = document.getElementById('ageNum');
let btn = document.getElementById('btn');
let pTag = document.getElementById('pT');

btn.addEventListener('click', () => {
    let birth = ageNum.value;
    let currentYear =  2023;
    let age = currentYear - birth;
    pTag.textContent = 'You Are ' + age + ' Years Old.' ;
    
    if (birth=='') {
        alert('ERROR! Input cannot be empty.');
        pTag.textContent = '';
    }

    else if (age>=18) {
        alert('Adult!');
        btn.style.backgroundColor = 'rgb(205, 83, 73)';
        pTag.textContent += ' Greetings!.'
    }

    else {
        alert('Kid! how are you doing little kid.')
        btn.style.backgroundColor = 'red';
        pTag.textContent += ' Have You washed Plate??'
    }
})
console.log(currentYear)


// // function declaration
// sum=()=> {  
//     // function dfinition 
//     let x = 10;
//     let y = 9;
//     let total = y + x;
//     // function output method
//     alert(total);
// }
// // function calling
// sum();