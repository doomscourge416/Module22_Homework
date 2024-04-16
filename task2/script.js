const btn = document.querySelector(".btn");
const svg1 = document.querySelector(".svg1");
const svg2 = document.querySelector(".svg2");

btn.addEventListener('click', function(){

    if(svg1.style.display === "block"){
        svg1.style.display = "none";
        svg2.style.display = "block";
    }else{
        svg1.style.display = "block";
        svg2.style.display = "none";
    }
});
