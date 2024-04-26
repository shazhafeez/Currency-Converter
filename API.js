let url = "https://catfact.ninja/fact";
let para = document.querySelector("#facts");

const getFacts = async() => {
    console.log("getting the data ....");
    let response = await fetch (url);
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    para.innerText = data.fact;
}




