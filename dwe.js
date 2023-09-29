// // import { bubbleSort } from "./Js Files/BubbleSort"; !!!!!!!!!!!!!!!!!
var currentBars = [];
function generate_Bars()
{
const barElements =[]; //this will store bar as an element
const barHeights=[];
var i=0;
while(i<20)
{
    barHeights[i]=Math.floor(Math.random()*101);
    i++;
}
//taking bar conatiner id element
const bars_container = document.getElementById("bars_container");

//clearng existing bars
bars_container.innerHTML='';

    for(var i=0;i<barHeights.length;i++)
{
    const bar = document.createElement("div");
    bar.style.height=barHeights[i]*10 +"px";
    bar.classList.add("bar");
    bar.style.color="yellow";
    bars_container.appendChild(bar);

    barElements.push(bar);//storing dom element in array
}
currentBars ={elements : barElements,heights:barHeights}; //store both elements and
}
console.log(currentBars);

const newArrayButton = document.querySelector(".New_Array");
newArrayButton.addEventListener("click",generate_Bars);



function swapStyle(a,b)
{

const style1 =window.getComputedStyle(a);//returns an object containing all style of a element
const style2 =window.getComputedStyle(b);

const transform1 =style1.getPropertyValue("height");
const transform2 =style2.getPropertyValue("height");
a.style.height = transform2;
b.style.height = transform1;
}

async function bubbleSort()
{
var n =currentBars.elements.length;
for(var i=n-1;i>=1;i--)
{
    for(var j =0;j<=i-1;j++)
    {

        currentBars.elements[j].style.backgroundColor="white";
        currentBars.elements[j+1].style.backgroundColor="white";

        if(currentBars.heights[j]>currentBars.heights[j+1])
        {
            swapStyle(currentBars.elements[j],currentBars.elements[j+1]);
            [currentBars.elements[j+1],currentBars.elements[j]] =[currentBars.elements[j],currentBars.elements[j+1]];
        }
        
        await new Promise((resoleve)=>
setTimeout(()=>{
    resoleve();},100));
    
      currentBars.elements[j].style.backgroundColor="yellow";
    currentBars.elements[j+1].style.backgroundColor="yellow";
}}

for(var k=0;k<n;k++)
{
    currentBars.elements[k].style.backgroundColor="green";
}
  

};

const bubbleSortButton = document.querySelector(".Bubble_sort");
bubbleSortButton.addEventListener("click",function() {bubbleSort()});

generate_Bars();