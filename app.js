'use strict';


let products=[];
let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;
let firstImageElement = document.getElementById('first');
let secondImageElement = document.getElementById('second');
let thirdImageElement = document.getElementById('third');
let maxAttempts=25;
let userAttemptsCounter= 0;




function Product (name, source){
    this.name = name;
    this. source = source;
    this. vote = 0;
    products.push(this);
}

new Product ('bag', 'bag.jpg');
new Product ('banana','banana.jpg');
new Product ('bathroom', 'bathroom.jpg');
new Product ('boots','boots.jpg');
new Product ('breakfast', 'breakfast.jpg');
new Product ('bubblegum', 'bubblegum.jpg');
new Product ('chair', 'chair.jpg');
new Product ('cthulhu','cthulhu.jpg');
new Product ('dog-duck','dog-duck.jpg');
new Product ('dragon','dragon.jpg');
new Product ('pen', 'pen.jpg');
new Product ('pet-sweep', 'pet-sweep.jpg');
new Product ('scissors', 'scissors.jpg');
new Product ('shark', 'shark.jpg');
new Product ('sweep', 'sweep.png');
new Product ('tauntaun', 'tauntaun.jpg');
new Product ('unicorn','unicorn.jpg');
new Product ('usb','usb.gif');
new Product ('water-can', 'water-can.jpg');
new Product ('wine-glass', 'wine-glass.jpg');

function generateRandomIndex (){
    return Math.floor (Math.random()* products.length);
}



function renderThreeImage (){
    
    firstImageIndex = generateRandomIndex();



    do {
        secondImageIndex= generateRandomIndex();
        thirdImageIndex= generateRandomIndex();
    }while (firstImageIndex === secondImageIndex || firstImageIndex === thirdImageIndex || secondImageIndex === thirdImageIndex){

         firstImageElement.src = products [firstImageIndex]. source
         secondImageElement .src = products [secondImageIndex]. source
         thirdImageElement .src = products [thirdImageIndex] . source
    }
}

renderThreeImage();

firstImageElement.addEventListener('click', useClick);
secondImageElement.addEventListener('click', useClick);
thirdImageElement.addEventListener('click', useClick);


function useClick (event){
    userAttemptsCounter++;
    if (userAttemptsCounter<maxAttempts){
        
        if (event.target.id === 'first'){
            products[firstImageIndex].vote++
        
       }else if (event.target.id === 'second') {
            products[secondImageIndex].vote++

        
       } else {
            products[thirdImageIndex].vote++
        
    }
    renderThreeImage();

} else{
    let list= document.getElementById('result');
    let productsResult;
    for (let i=0; i<products.length; i++){
        productsResult=document.createElement('li');
        list.appendChild(productsResult);
        productsResult.textContent = products[i].name+ products[i].vote;
    }
    firstImageElement.removeEventListener('click', useClick);
    secondImageElement.removeEventListener('click', useClick);
    thirdImageElement.removeEventListener('click', useClick);
     
}

}


