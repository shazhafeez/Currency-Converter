const BaseUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll(".dropdown select");
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");

for(let select of dropdowns){
for( code in countryList ){
    
    let newoptions = document.createElement("option");
    newoptions.innerText = code;
    select.append(newoptions);
    if(select.name === "From" && code === "USD" ){
        newoptions.selected = "selected";
    }
    if(select.name === "TO" && code === "PKR"){
        newoptions.selected = "selected";
    }
    select.addEventListener("change",(evt) => {
        changeflag(evt.target);
    });

}}

const changeflag = (element) => {
    let currcode  = element.value;
    
    let countrycode = countryList[currcode];
    
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let image = element.parentElement.querySelector("img");
    image.src = newsrc;
}

let btn = document.querySelector("form button");
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let AmntVal = amount.value;
    if (AmntVal === "" || AmntVal < 1){
        AmntVal  = 1;
        amount.value = "1";
    }

    const URL = `${BaseUrl}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let val = data[tocurr.value.toLowerCase()];

    let finalvalue = val*AmntVal;
    let msg = document.querySelector("#msg");
    msg.innerText = `${AmntVal}${fromcurr.value} = ${finalvalue}${tocurr.value}`;
    console.log(msg);
    
})