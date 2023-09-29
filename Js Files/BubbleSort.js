//ele ={elements : elements,height:barheight};
async function bubbleSort()
{
const ele =document.querySelector(".bar");
const n = ele.length
for (let i = 0; i <  n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        ele[j].style.backgroundColor="red";
        ele[j+1].style.backgroundColor="red";

        if(parseInt(ele[j].height)>parseInt(ele[j+1].height))
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