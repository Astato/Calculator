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
const line0 = document.createElement("div");
const line1 = document.createElement("div");
const line2 = document.createElement("div");
line2.classList.add("line2")
result.append(line0,line1,line2)
result.setAttribute("style",
"display:grid; grid-template-rows: repeat(3,auto);color:white; margin:auto; width:429px;height:237px; margin-top:-30px; font-family: Arial, Helvetica, sans-serif;")

line0.setAttribute("style","background-color:black")
line1.setAttribute("style","background-color:blue")
line2.setAttribute("style","position:relative;bottom:25%; margin-right:40px;text-align:right;font-size:100px; height:0; background-color:red; ")

line2.textContent = "0";

// result.appendChild(textarea)

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
    // if(name.id !== "button16"){
    //     name.id.setAttribute("style","border: solid black; border-radius: 50%")
    // }
    name.textContent= ""
    if(name.id === "button"+orangeButton){
        name.setAttribute("style","background-color:rgb(246,153,3);color:rgb(245,245,245); border-radius:50% ;border: none; font-size:50px")
        if(orangeButton === 15){
            console.log(orangeButton)
            orangeButton +=3
        }
        else{
        orangeButton +=4}

    }
   else if (name.id === "button"+lightButton ){
        name.setAttribute("style","background-color:rgb(160,160,160);color:black; border-radius:50%;border: none; font-size:35px")
        lightButton +=1
    }
    else{
        name.setAttribute("style","background-color:rgb(49,49,49); color:rgb(253,253,253);border-radius:50%; border: none; font-size:45px")
    }
})

const labelzero = document.createElement("label");
labelzero.textContent = "0"
labelzero.setAttribute("style","font-size:40px ")
const buttonNumberZero = document.getElementById("button16") 
buttonNumberZero.setAttribute("style",
"grid-column:span 2;background-color:rgb(49,49,49); color:rgb(253,253,253);border-radius:32% / 80% ;border: none;text-align:left;padding-left: 25px   ")
buttonNumberZero.appendChild(labelzero)


const buttonAC = document.getElementById("button0");
buttonAC.textContent = "AC";

const buttonPlusMines = document.getElementById("button1");
buttonPlusMines.textContent = "+/-";

const buttonPercentage = document.getElementById("button2");
buttonPercentage.textContent = "%";

const buttonDivision = document.getElementById("button3");
buttonDivision.textContent= "÷";

const buttonMultiply = document.getElementById("button7");
buttonMultiply.textContent = "x";

const buttonMinus = document.getElementById("button11");
buttonMinus.textContent = "-";

const buttonPlus = document.getElementById("button15");
buttonPlus.textContent ="+";

const buttonEqual = document.getElementById("button18");
buttonEqual.textContent = "=";

const buttonDot = document.getElementById("button17");
buttonDot.textContent = ".";

const button1 = document.getElementById("button12");
button1.textContent = "1";
const button2 = document.getElementById("button13");
button2.textContent ="2";
const button3 = document.getElementById("button14");
button3.textContent = "3";
const button4 = document.getElementById("button8");
button4.textContent ="4";
const button5 = document.getElementById("button9");
button5.textContent = "5";
const button6 = document.getElementById("button10");
button6.textContent = "6";
const button7 = document.getElementById("button4");
button7.textContent = "7";
const button8 = document.getElementById("button5");
button8.textContent = "8";
const button9 = document.getElementById("button6");
button9.textContent = "9";



