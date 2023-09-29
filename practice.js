// // import { bubbleSort } from "./Js Files/BubbleSort"; !!!!!!!!!!!!!!!!!
var currentBars = [];
function generate_Bars()
{
const barElements =[]; //this will store bar as an element
const barHeights=[];
var i=0;
while(i<21)
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
        
        await new Promise((resolve)=>
setTimeout(()=>{
    resolve();},50));
    
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


async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});