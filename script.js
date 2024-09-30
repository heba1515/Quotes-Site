let quoteArea = document.querySelector("#quote");
let copyBTN = document.querySelector("button");

let rand = Math.ceil(Math.random()*30);
// console.log(rand)

fetch(`https://dummyjson.com/quotes/${rand}`).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
    quoteArea.innerHTML=`" ${data.quote} " \n\n-${data.author}`;
})


copyBTN.addEventListener('click',()=>{
    quoteArea.select();
    document.execCommand("copy");
})