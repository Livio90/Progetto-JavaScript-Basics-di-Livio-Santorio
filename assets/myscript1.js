const toBody = document.getElementById("body");

const titolo= document.createElement("h1")
toBody.appendChild(titolo);
titolo.textContent = "Counter";
titolo.classList.add("titolo");

let div1=document.createElement("div");
toBody.appendChild(div1);
div1.classList.add("project");
div1.id="project";
const project= document.getElementById("project")

let btnMeno=document.createElement("button");
project.appendChild(btnMeno);
btnMeno.classList.add("btn");
btnMeno.textContent = "-";
btnMeno.id="meno";
btnMeno.dataset.counter="meno";

const conto= document.createElement("h1");
project.appendChild(conto);
conto.id="count";

let btnPiu=document.createElement("button");
project.appendChild(btnPiu);
btnPiu.classList.add("btn");
btnPiu.textContent="+";
btnPiu.id="piu";
btnPiu.dataset.counter="piu";

let div2=document.createElement("div");
toBody.appendChild(div2);
div2.classList.add("bottoneclear");
div2.id="bottoneclear";
const bottoneclear= document.getElementById("bottoneclear")



let btnClear=document.createElement("button");
bottoneclear.appendChild(btnClear);
btnClear.classList.add("btnclear");
btnClear.textContent="Azzera Counter";
btnClear.id="clear";
btnClear.dataset.counter="clear";










let counter = 0;
const count = document.getElementById("count");
const buttonpiu = document.getElementById("piu");
const buttonmeno = document.getElementById("meno");
const buttonclear = document.getElementById("clear");
  count.innerText = counter;
  document.addEventListener('click', function(event){
    if (event.target.dataset.counter === "piu") {
        counter++;
    } else if(event.target.dataset.counter === "meno"){
        counter--;
    } else if(event.target.dataset.counter === "clear"){
         counter=0;
    }
    count.innerText = counter;
    if (counter > 0) {
        document.getElementById('count').style.color = "green";
      } else if (counter < 0) {
        document.getElementById('count').style.color =  "red";
      } else {
        document.getElementById('count').style.color =  "white";
      }
})
