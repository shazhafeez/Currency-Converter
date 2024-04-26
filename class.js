function async1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");  
        }, 4000);
        
    })
}
function async2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");  
        }, 4000);
        
    })
}

console.log("fetching data 1 ");
console.log("fetching data 2");
let p1 = async1();
let p2 = async2();

p1.then((res) => {
    console.log(res);
})

p2.then((res) => {
    console.log (res);
})

