const html = document.querySelector("html")
html.setAttribute("style","height:100vh")

const body = document.querySelector("body");
body.setAttribute("style",
"display:flex; flex-direction:column ;justify-content:center; align-items:center; margin-top: 0; height:100vh; background-color:grey; ");

const container = document.createElement("div");
container.classList.add("container")
container.setAttribute("style",
"margin-top: 0%; height:0; padding:100px 0px 804px 0px; background-image:url(calculatorbackground.png); background-position-x:center; background-repeat: no-repeat;background-size:contain;" )


const clock =  document.createElement("p");
clock.setAttribute("style","color:white; font-weight:900; position:relative;top:7%;right:9%;")
body.append(clock)

function updateTime(){
    let currentTime = new Date();
    let minutes = currentTime.getMinutes();
    if(minutes <= 9){
        minutes ="0"+currentTime.getMinutes()
    }
    let time = currentTime.getHours()+":"+minutes;
    clock.textContent = time;


setTimeout(updateTime,60000)
}

updateTime()



const result = document.createElement("div");
result.classList.add("result");
result.setAttribute("style",
"display:grid; grid-template-rows: repeat(3,auto);color:white; margin:auto; width:429px;height:237px; margin-top:-30px")

const line0 = document.createElement("div");
const line1 = document.createElement("div");

const resultLine = document.createElement("div");
resultLine.classList.add("resultline")
resultLine.setAttribute("style",
"position:relative;bottom:45%; margin-right:40px;text-align:right;font-size:100px; height:0; font-weight: 1;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;")
resultLine.textContent = 0;


result.append(line0,line1,resultLine)




const buttonscontainer = document.createElement("div");
buttonscontainer.classList.add("buttonscontainer")
buttonscontainer.setAttribute("style","display:grid; grid-template-rows:repeat(5,80px);grid-template-columns: repeat(4,80px); gap:20px; padding: 12px 50px  50px; ")

body.appendChild(container)
container.append(result,buttonscontainer)


let index = 0;
let id = "button"+index
const createButtons = {
    name: "",
    add(){
        this.name = document.createElement("button");
        this.name.setAttribute("id",id)
        this.name.setAttribute("class","buttons");
        buttonscontainer.appendChild(this.name)
    }

}

for(let i = 0; i<19;i++){
    createButtons.add()
    index = index+1
    id = "button"+index
}


const buttons = document.getElementsByClassName("buttons");

let orangeButton = 3
let lightButton = 0;
const filter = Array.from(buttons).filter(name => {

    if(name.id === "button"+orangeButton){
        name.classList.add("orange")
        name.setAttribute("style","background-color:rgb(246,153,3);color:rgb(245,245,245); border-radius:50% ;border: none; font-size:50px")
        if(orangeButton === 15){
            console.log(orangeButton)
            orangeButton +=3
        }
        else{
        orangeButton +=4}

    }
   else if (name.id === "button"+lightButton ){
        name.classList.add("lightgray")
        name.setAttribute("style","background-color:rgb(160,160,160);color:black; border-radius:50%;border: none; font-size:35px")
        lightButton +=1
    }
    else{
        name.classList.add("darkgray")
        name.setAttribute("style","background-color:rgb(49,49,49); color:rgb(253,253,253);border-radius:50%; border: none; font-size:45px")
    }
})





///lightgray Buttons AC , +/- , %

   { const buttonAC = document.getElementById("button0");
    buttonAC.setAttribute("id","buttonac")
    buttonAC.textContent = "AC";
   
    const buttonPlusMinus = document.getElementById("button1");
    buttonPlusMinus.setAttribute("id","buttonplusminus")
    buttonPlusMinus.textContent = "+/-";

    const buttonPercentage = document.getElementById("button2");
    buttonPercentage.setAttribute("id","buttonpercentage")
    buttonPercentage.textContent = "%";
  }


//// orange Buttons and Dot(comma)
{
    const buttonDivision = document.getElementById("button3");
    buttonDivision.setAttribute("id","buttondivision")
    buttonDivision.textContent= "÷";
    

    const buttonMultiply = document.getElementById("button7");
    buttonMultiply.setAttribute("id","buttonmultiply")
    buttonMultiply.textContent = "x";

    const buttonMinus = document.getElementById("button11");
    buttonMinus.setAttribute("id","buttonminus")
    buttonMinus.textContent = "-";

    const buttonPlus = document.getElementById("button15");
    buttonPlus.setAttribute("id","buttonplus")
    buttonPlus.textContent ="+";

    const buttonEqual = document.getElementById("button18");
    buttonEqual.setAttribute("id","buttonequal")
    buttonEqual.textContent = "=";

    const buttonDot = document.getElementById("button17");
    buttonDot.setAttribute("id","buttondot")
    buttonDot.textContent =".";
}




{ ////  Numbers
   
    const buttonZero = document.getElementById("button16") 
    buttonZero.setAttribute("style",
    "grid-column:span 2;background-color:rgb(49,49,49); color:rgb(253,253,253);border-radius:32% / 80% ;border: none;text-align:left;padding-left: 25px; font-size:43px;   ")
    buttonZero.setAttribute("id","buttonzero")
    buttonZero.textContent =0;

    const button1 = document.getElementById("button12");
    button1.setAttribute("id","button1")
    button1.textContent = 1;

    const button2 = document.getElementById("button13");
    button2.setAttribute("id","button2")
    button2.textContent =2;

    const button3 = document.getElementById("button14");
    button3.setAttribute("id","button3")
    button3.textContent = 3;

    const button4 = document.getElementById("button8");
    button4.setAttribute("id","button4")
    button4.textContent =4;

    const button5 = document.getElementById("button9");
    button5.setAttribute("id","button5")
    button5.textContent = 5;

    const button6 = document.getElementById("button10");
    button6.setAttribute("id","button6")
    button6.textContent = 6;

    const button7 = document.getElementById("button4");
    button7.setAttribute("id","button7")
    button7.textContent = 7;

    const button8 = document.getElementById("button5");
    button8.setAttribute("id","button8")
    button8.textContent = 8;

    const button9 = document.getElementById("button6");
    button9.setAttribute("id","button0")
    button9.textContent = 9;
}




////////button darkgrat animation rgb(116,113,115) (aprox)
////// button ligth gray animation rgb(216,216,216)
///// button orange animation rbg(254,220,184 ) rgba(243,228,218) /(white)
/////    same for plus symbol rbg(254,220,184 ) rgb(254,180,82) then orange and revert

function adjustFontSize(){

    if(resultLine.textContent.length <=5){
        result.setAttribute("style",
        "display:grid; grid-template-rows: repeat(3,auto);color:white; margin:auto; width:429px;height:237px; margin-top:-30px; overflow-x:hidden")
        resultLine.setAttribute("style",
"position:relative;bottom:45%; margin-right:40px;text-align:right;font-size:100px; height:0; font-weight: 1;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;")
    }
   else if(resultLine.textContent.length >5 && resultLine.textContent.length <9){
        resultLine.setAttribute("style",
"position:relative;bottom:25%; margin-right:40px;text-align:right;font-size:70px; height:0; font-weight: 1;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;")
    }
    else if(resultLine.textContent.length >9) {
        result.setAttribute("style",
        "display:grid; grid-template-rows: repeat(3,auto);color:white; margin:auto; width:429px;height:237px; margin-top:-30px; overflow-x:scroll")
     resultLine.setAttribute("style",
    "position:relative;bottom:1%; margin-right:40px;text-align:right;font-size:50px; height:0; font-weight: 1;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;")
        
    }



}



function calculues(a,b,current){
    return (a+b)+current;
}




const lightgrayAnimation = document.getElementsByClassName("lightgray") ;

Array.from(lightgrayAnimation).forEach(element => {
    element.addEventListener("pointerdown",()=>{
        if(element.id == "buttonac"){
            resultLine.textContent = 0;
            adjustFontSize()
        }
        element.setAttribute("style",
        "transition: all 0.06s; background-color:rgb(216,216,216);color:black; border-radius:50%;border: none; font-size:35px")
        
    });
    element.addEventListener("pointerup", ()=>{
        element.setAttribute("style",
        "transition:all 0.06s; background-color:rgb(160,160,160);color:black; border-radius:50%;border: none; font-size:35px")
    });
});

const orangeAnimation= document.getElementsByClassName("orange");

Array.from(orangeAnimation).forEach(element =>{

    element.addEventListener("pointerdown",()=>{
        
        if(element.textContent === "+"){
            
        }

        element.setAttribute("style",
        "transition: all 0.06s; background-color:rgb(254,220,184);color:rgb(246,153,3); border-radius:50% ;border: none; font-size:50px")
    });
    element.addEventListener("pointerup",()=>{
        element.setAttribute("style",
        "transition: all 0.06; background-color:rgb(246,153,3);color:rgb(245,245,245); border-radius:50% ;border: none; font-size:50px")
    });

});

console.log(resultLine.textContent.length)




const darkgrayAnimation = document.getElementsByClassName("darkgray");  

Array.from(darkgrayAnimation).forEach(element =>{
   
    if(element.id !== "buttonzero"){

        element.addEventListener("pointerdown",()=>{
            adjustFontSize()
            if(resultLine.textContent == 0 ){
                resultLine.textContent = element.textContent; 
            }
            else{
                resultLine.textContent+=element.textContent
            }
            element.setAttribute("style", 
            "transition:all 0.06s; background-color:rgb(114,114,114); color:rgb(253,253,253);border-radius:50%; border: none; font-size:45px")
        

          
        });

        element.addEventListener("pointerup",()=>{
            element.setAttribute("style",
            "transition:all 0.06; background-color:rgb(49,49,49); color:rgb(253,253,253);border-radius:50%; border: none; font-size:45px")
        });
    }
    else{
        element.addEventListener("pointerdown",()=>{
            if(resultLine.textContent !== 0 && resultLine.textContent >0){
                resultLine.textContent += element.textContent; 
            }
            adjustFontSize()
            element.setAttribute("style", 
            "transition:all 0.06s; grid-column:span 2;background-color:rgb(114,114,114); color:rgb(253,253,253);border-radius:32% / 80% ;border: none;text-align:left;padding-left: 25px; font-size:43px")
        });

        element.addEventListener("pointerup",()=>{
            element.setAttribute("style",
            "transition:all 0.06; grid-column:span 2;background-color:rgb(49,49,49); color:rgb(253,253,253);border-radius:32% / 80% ;border: none;text-align:left;padding-left: 25px; font-size:43px")
        });
    }

});
