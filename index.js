document.querySelector('.generate-btn').addEventListener('click', ()=>{
    let randomNum = document.querySelector('#generateText');
    let num = Math.floor(Math.random()*(9999-1000)+1000);
    randomNum.value = num;
    i=3;
    document.querySelector('#i').innerHTML=i;
    document.querySelector('.submit-btn').disabled = false;
    // console.log(num);
})

let buttons = document.querySelectorAll('.button');
let clear = document.querySelector('#clear');
let erase = document.querySelector('#erase');
let text = document.querySelector('#inputText');

let screenValue = [];

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(!button.id.match('erase')&& !button.id.match('clear')){
            screenValue.push(button.innerHTML);
            text.value = screenValue.join('');
            console.log(screenValue.join(''));
        }
        if (button.id.match('erase')) {
            screenValue.pop()
           text.value = screenValue.join('');
            
        }
        if (button.id.match('clear')) {
            screenValue = [''];
            text.value = screenValue.join('');
        }
    })
    
})
let i=3;
document.querySelector('.submit-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    if(i>=1){
        let randomNum = document.querySelector('#generateText').value;
        let inputNum = document.querySelector('#inputText').value;
        if (randomNum == inputNum) {
            console.log("pass");
            document.querySelector('#matched').style.display='block';
            document.querySelector('#notMatched').style.display='none';
            i=3;
            document.querySelector('#i').innerHTML=i;
        }
        else{
            document.querySelector('#notMatched').style.display='block';
            document.querySelector('#matched').style.display='none';
            i--;
            document.querySelector('#i').innerHTML=i;
            console.log(i);
        }
       
    }
    if(i==0){
        document.querySelector('.submit-btn').disabled = true;
    }
    
})
