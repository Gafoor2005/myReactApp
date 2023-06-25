console.log("woow scroll");
console.log("amazing!!");

window.addEventListener("scroll",()=>{
    let h = document.querySelector(".App-header");
    if(window.scrollY !== 0){
        console.log("red");
        h.style.backgroundColor = "green";
    }
    else{
        h.style.backgroundColor = "#282c34";

    }
})

window.addEventListener("load",()=>{
    let n = document.querySelector(".Nav");
    console.log(n);
});