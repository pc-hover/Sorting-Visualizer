let currentBars = [];


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
currentBars ={elements : barElements,heights:barHeights};
console.log(currentBars.heights);
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
    const ele =document.querySelector(".bar");
    const n = ele.length;
    for (let i = 0; i <  n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            ele[j].style.backgroundColor="red";
            ele[j+1].style.backgroundColor="red";
    
            if(ele[j],ele[j+1])
            {
                swapStyle(ele[j],ele[j+1]);
            }
            ele[j].style.backgroundColor="cyan";
            ele[j+1].style.backgroundColor="cyan";
    
            await new Promise((resolve)=>
    setTimeout(()=>{
        resolve();},100));
    }
    
    ele[n - i - 1].style.background = "green";
    }  
    console.log(ele.height)
    };

const bubbleSortButton = document.querySelector(".Bubble_sort");
bubbleSortButton.addEventListener("click",async ()=> {
    await bubbleSort();
    console.log(currentBars.barHeights);
});
generate_Bars();