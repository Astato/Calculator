const html = document.querySelector("html")
html.setAttribute("style","width:100%;height:100%")



const body = document.querySelector("body");
body.setAttribute("style",
"display:flex; justify-content:center; align-items:center; margin:auto; height:100%; background-color:grey");

const container = document.createElement("div");
container.setAttribute("style","border: 10px solid black; padding:50px 20px 50px 20px; height:auto; ")

const result = document.createElement("text");
result.setAttribute("style",
"display:flex; align-items:center;justify-content:flex-end;margin-bottom:20px;background-color:black; color:white; font-size:35px; height:80")
result.textContent =" 16516511651561"

const buttonscontainer = document.createElement("div");
buttonscontainer.setAttribute("style","display:grid; grid-template-rows:repeat(5,auto);grid-template-columns: repeat(4,auto); gap:20px; height:auto; background-color:black; padding: 50px")



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
    name.textContent= "text"
    if(name.id === "button"+orangeButton){
        name.setAttribute("style","background-color:rgb(246,153,3);color:rgb(245,245,245); border-radius:50%; padding:30px;border: solid thin white")
        orangeButton +=4
    }
   else if (name.id === "button"+lightButton ){
        name.setAttribute("style","background-color:rgb(160,160,160);color:black; border-radius:50%;padding:30px;border: solid thin white")
        lightButton +=1
    }
    else{
        name.setAttribute("style","background-color:rgb(49,49,49); color:rgb(253,253,253);border-radius:50%;padding:30px; border: solid thin gray")
    }
})

const buttonNumberZero = document.getElementById("button16") 
buttonNumberZero.setAttribute("style","grid-column:span 2;background-color:rgb(49,49,49); color:rgb(253,253,253);border-radius:32% /80% ;padding:25px;border: solid thin gray")