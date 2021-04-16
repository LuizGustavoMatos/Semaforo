const img = document.getElementById ( 'img' ); 
const buttons = document.getElementById ('buttons');
let colorIndex = 0;
let intervalId = null 



const trafficLigth = (event) => {
    stopAutomatic(); 
    turnOn[event.target.id]();
     


}



const  nextIndex = () => /*colorIndex = colorIndex  < 2 ? ++ colorIndex : 0 */ {
  
    // essa função não é obrigatória estar dentro de chaves
    colorIndex = colorIndex  < 2 ? ++ colorIndex : 0 ; 

    // if ( colorIndex  < 2){
    //     colorIndex++
    // }else{ 
    //     colorIndex = 0 ;
    // }
}

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green']
    const color = colors [ colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId)
}

const turnOn = {
    'red':    () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
     'green': () => img.src = './img/verde.png',
     'altomatic':() => intervalId = setInterval( changeColor, 1000)
}


buttons.addEventListener('click', trafficLigth );