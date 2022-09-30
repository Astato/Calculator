
const body = document.querySelector("body");
body.setAttribute("style",
"display:flex; flex-direction:column ;justify-content:center; align-items:center; margin-top: 0; background-color:grey; ");

const container = document.createElement("div");
container.classList.add("container");
container.setAttribute("style",
"margin-top: 0; height:0; padding:1rem 0 42rem 0; background-image:url(calculatorbackground.png); background-position-x:center; background-repeat: no-repeat;background-size:contain;" )


const clock =  document.createElement("p");
clock.setAttribute("style","color:white; font-weight:900;margin-left:6rem; margin-bottom:60px; margin-top:1rem");
container.append(clock);


function updateTime(){
    let currentTime = new Date();
    let minutes = currentTime.getMinutes();
    if(minutes <= 9){
        minutes ="0"+currentTime.getMinutes();
    }
    let time = currentTime.getHours()+":"+minutes;
    clock.textContent = time;


setTimeout(updateTime,60000);
}

updateTime();


const resultContainer = document.createElement("div");
resultContainer.classList.add("resultcontainer");
resultContainer.setAttribute("style",
"display:grid;  grid-template-rows: repeat(3,auto);color:white; margin:auto; width:20rem; height:15rem; margin-top:-7rem")

const line0 = document.createElement("div");
const line1 = document.createElement("div");

const result = document.createElement("div");
result.classList.add("result");
result.setAttribute("style",
"position:relative; margin-right:1.5rem;text-align:right;font-size:80px; height:0; font-weight: 1;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;")
result.textContent = 0;


resultContainer.append(line0,line1,result);


const buttonscontainer = document.createElement("div");
buttonscontainer.classList.add("buttonscontainer");
buttonscontainer.setAttribute("style","display:grid; grid-template-rows:repeat(5,3.7rem);grid-template-columns: repeat(4,3.7rem); gap:1rem; padding: 2rem 6rem; ");

body.appendChild(container);
container.append(resultContainer,buttonscontainer);


let index = 0;
let id = "button"+index;
const createButtons = {    ////create and append buttons;
    name: "",
    add(){
        this.name = document.createElement("button");
        this.name.setAttribute("id",id);
        this.name.setAttribute("class","buttons");
        buttonscontainer.appendChild(this.name);
    }

}

for(let i = 0; i<19;i++){
    createButtons.add();
    index = index+1;
    id = "button"+index;
}


const buttons = document.getElementsByClassName("buttons");

let orangeButton = 3;
let lightButton = 0;
const filter = Array.from(buttons).filter(name => {     ///// add style/class to buttons

    if(name.id === "button"+orangeButton){
        name.classList.add("orangebuttons");
        if(orangeButton === 15){
            orangeButton +=3;
        }
        else{
        orangeButton +=4;}

    }
   else if (name.id === "button"+lightButton ){
        name.classList.add("lightgraybuttons");
        lightButton +=1;
    }
    else{
        name.classList.add("darkgraybuttons");
    }
    return;
})


///lightgray Buttons AC , +/- , %

   const buttonAC = document.getElementById("button0");
    buttonAC.setAttribute("id","buttonac");
    buttonAC.textContent = "AC";
   
    const buttonPlusMinus = document.getElementById("button1");
    buttonPlusMinus.setAttribute("id","buttonplusminus");
    buttonPlusMinus.textContent = "+/-";

    const buttonPercentage = document.getElementById("button2");
    buttonPercentage.setAttribute("id","buttonpercentage");
    buttonPercentage.textContent = "%";
  


//// orange Buttons and comma

    const buttonDivision = document.getElementById("button3");
    buttonDivision.setAttribute("id","buttondivision");
    buttonDivision.textContent= "÷";
    

    const buttonMultiply = document.getElementById("button7");
    buttonMultiply.setAttribute("id","buttonmultiply");
    buttonMultiply.textContent = "×";

    const buttonMinus = document.getElementById("button11");
    buttonMinus.setAttribute("id","buttonminus");
    buttonMinus.textContent = "-";

    const buttonPlus = document.getElementById("button15");
    buttonPlus.setAttribute("id","buttonplus");
    buttonPlus.textContent ="+";

    const buttonEqual = document.getElementById("button18");
    buttonEqual.setAttribute("id","buttonequal")
    buttonEqual.textContent = "=";

    const buttonDot = document.getElementById("button17");
    buttonDot.setAttribute("id","buttondot");
    buttonDot.innerText = ".";


////  Numbers
   
    const buttonZero = document.getElementById("button16") ;
    buttonZero.setAttribute("style",
    "grid-column:span 2;background-color:rgb(49,49,49); color:rgb(253,253,253);border-radius:32% / 80% ;border: none;text-align:left;padding-left: 25px; font-size:43px;   ");
    buttonZero.setAttribute("id","buttonzero");
    buttonZero.textContent = 0;

    const button1 = document.getElementById("button12");
    button1.textContent = 1;

    const button2 = document.getElementById("button13");
    button2.textContent =2;

    const button3 = document.getElementById("button14");
    button3.textContent = 3;

    const button4 = document.getElementById("button8");
    button4.textContent =4;

    const button5 = document.getElementById("button9");
    button5.textContent = 5;

    const button6 = document.getElementById("button10");
    button6.textContent = 6;

    const button7 = document.getElementById("button4");
    button7.textContent = 7;

    const button8 = document.getElementById("button5");
    button8.textContent = 8;

    const button9 = document.getElementById("button6");
    button9.textContent = 9;



function adjustFontSize(){ /////adjust text size on result line text

    if(result.textContent.length <=5){
        resultContainer.setAttribute("style",
        "display:grid; grid-template-rows: repeat(3,auto);color:white; margin:auto; width:20rem; height:15rem; margin-top:-7rem; overflow-x:hidden");

        result.setAttribute("style",
        "position:relative;bottom:0; margin-right:1.5rem;text-align:right;font-size:80px; height:0; font-weight: 1;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;")
    }
   else if(result.textContent.length >5 && result.textContent.length <9){
        result.setAttribute("style",
        "position:relative;bottom:0; margin-right:1.5rem;text-align:right;font-size:60px; height:0; font-weight: 1;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;")
    }
    else if(result.textContent.length >9) {
        resultContainer.setAttribute("style",
        "display:grid; grid-template-rows: repeat(3,auto);color:white; margin:auto; width:20rem; height:15rem; margin-top:-7rem; overflow-x:scroll");
        result.setAttribute("style",
        "position:relative;bottom:0; margin-right:1.5rem;text-align:right;font-size:50px; height:0; font-weight: 1;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;")
        
    }

}


const lightgrayAnimation = document.getElementsByClassName("lightgraybuttons") ;
Array.from(lightgrayAnimation).forEach(element => {

    element.addEventListener("pointerdown",()=>{
        element.setAttribute("style", "transition: all 0.06s;background-color:rgb(216,216,216)");
        
    });
    element.addEventListener("pointerup", ()=>{
        element.setAttribute("style","lightgraybuttons");
    });
});


const orangeAnimation= document.getElementsByClassName("orangebuttons");

let waitForInput;

Array.from(orangeAnimation).forEach(element =>{

    element.addEventListener("pointerdown",()=>{ 
        element.setAttribute("style","transition: all 0.06s; background-color:rgb(254,220,184);color:rgb(246,153,3)");
     
    });
    element.addEventListener("pointerup", ()=>{
        if(element.id === buttonEqual.id){
        element.setAttribute("style","orangebuttons");
        }
    });

});


const darkgrayButtons = document.getElementsByClassName("darkgraybuttons");  
Array.from(darkgrayButtons).forEach(element =>{
    if(element.id !== "buttonzero"){

        element.addEventListener("pointerdown",()=>{
            element.setAttribute("style","transition: all 0.06s; background-color:rgb(114,114,114); ");
        });

        element.addEventListener("pointerup",()=>{
            element.setAttribute("style","darkgraybuttons; ");
        });
    }

    else{

        element.addEventListener("pointerdown",()=>{
            element.setAttribute("style", 
            "transition:all 0.06; grid-column:span 2;background-color:rgb(114,114,114); color:rgb(253,253,253);border-radius:32% / 80% ;border: none;text-align:left;padding-left: 25px; font-size:43px; ")
        });
        element.addEventListener("pointerup",()=>{
            element.setAttribute("style",
            "grid-column:span 2;background-color:rgb(49,49,49); color:rgb(253,253,253);border-radius:32% / 80% ;border: none;text-align:left;padding-left: 25px; font-size:43px")
        });
    }

});



let firstValue ;
let secondValue ;


function buttondivision(a,b){
    result.textContent = Number(a/b).toLocaleString();
    return a/b;
}


function buttonmultiply(a,b){
    result.textContent = Number(a*b).toLocaleString();
    return a*b;
}

function  buttonminus(a,b){
    result.textContent = Number(a-b).toLocaleString();
    return a-b;
}

function buttonplus(a,b){
  
    result.textContent = Number(a+b).toLocaleString();
    return a+b;
}

function buttonplusminus(a,b){
    b = -1;
    result.textContent = Number(a+b).toLocaleString();
}

function buttonpercentage(a,b){
    let calculus = 0;

   switch(currentOperation){

    case "buttonplus": 
        calculus = a+(a*b/100);
        result.textContent = Number(a+(a*b/100)).toLocaleString();break
    case "buttonmultiply": 
        calculus = (a*b)/100;
        result.textContent = Number(a*b/100).toLocaleString();break
    case "buttonminus":
        calculus = a-(a*b/100);
        result.textContent = Number(a-(a*b/100)).toLocaleString();break
    case "buttondivision":
        calculus = (a/b)/100;
        result.textContent = Number((a/b)/100).toLocaleString();break
   
     }
    firstValue = calculus;
    currentValue = 0;
    currentOperation = "";
    return;


    
}

let currentValue = 0;
let currentOperation = "";
let commas = ""; 

function doMath(){
    let calculus = window[currentOperation](firstValue, Number(currentValue));
    firstValue = calculus;
    currentValue = 0;
    currentOperation = "";
    return calculus;
}


Array.from(buttons).forEach(button => {

    button.addEventListener("click",()=>{

        if(button.id === buttonAC.id && buttonAC.textContent == "AC"){
            result.textContent = 0;
            adjustFontSize();
            firstValue = undefined;
        
        }
        else if(button.id === buttonAC.id && buttonAC.textContent == "C"){
            result.textContent = 0;   ////erase current input
            currentValue = "";  ////erase store value
            buttonAC.textContent = "AC" ;  ///change to AC to erase values stored.
            adjustFontSize(); ///resize font
        }

        if(button.className === "buttons darkgraybuttons"){
        
            
            if(result.textContent == 0){   
                commas = button.textContent;
            }

            else{
                adjustFontSize()
                buttonAC.textContent = "C";
                commas += button.textContent;
                result.textContent = commas;
                
            }      


            if(commas === "." && button.id === buttonDot.id){
                result.textContent = ".";
                
            }

            else{
                result.textContent = ( Number(commas).toLocaleString()); ////captures a
            }
            
        }

    })


    button.addEventListener("click",()=>{
           

        if(button.id !== buttonAC.id ){
          

            if(button.className ==="buttons darkgraybuttons" || button.id === buttonPlusMinus.id || button.id === buttonPercentage){

                
                if(button.id !== buttonPlusMinus.id && button.id !== buttonPercentage.id){

                currentValue += button.textContent; }

                if(button.id === buttonPlusMinus.id && currentValue != 0){
                    currentValue =currentValue*-1;
                    result.textContent = Number(currentValue).toLocaleString();
                }


                if(waitForInput !== undefined ){
                waitForInput.setAttribute("style","orangebuttons");
                result.textContent = Number(currentValue).toLocaleString(); //// keeps operator (UI) selected until another anumber is pressed
                }

            }    


            
            else if(firstValue === undefined && button.className === "buttons orangebuttons" && button.id !== buttonEqual.id){
                firstValue = currentValue ;///// when operator clicked, saves the value to the "firstValue variable"
                firstValue = parseFloat(firstValue); //// converts value to number
                currentValue = 0; //// resets the current value already stored in first value, ready to enter second value
                waitForInput = button;
                currentOperation = button.id; ///// saves cureent operator
                result.textContent =  Number(firstValue).toLocaleString(); /// shows entered value
        
            }

            else if(button.className === "buttons orangebuttons" && button.id !== buttonEqual.id && button.id !== buttonPercentage.id){ ///// if firstvalue has a number
                waitForInput.setAttribute("style","orangebuttons") //// if operator (ui) is changed resets style from previos selection to "unsulected"
                waitForInput = button;
                firstValue = firstValue; //// keep it;
                result.textContent = Number(firstValue).toLocaleString(); //// show input;
                if(currentOperation !== ""){ //// if a value is intered call funciton,
                doMath();
                }
                currentOperation = button.id; //// if user changes operation replace it;
               
            } 

            else if(button.id === buttonPercentage.id){
                buttonpercentage(firstValue,currentValue);

            }
        
            else if(currentOperation !== "" || button.id === buttonEqual.id){ ////execute function if users pressed an operator with stored values or Equal symbol.
                try {
                    waitForInput.setAttribute("style","orangebuttons");
                    doMath();
                } catch (error) {
                    return 0;
                }finally{
                    buttonAC.textContent = "AC";
                    return;
                }

            
            };
      
        };

    });

});
