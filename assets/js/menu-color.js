const toggleColor = document.getElementById("toggle-color");

const rootStyle = document.documentElement.style;

toggleColor.addEventListener("click", (e)=>{
    // console.log(e.target.dataset);
    rootStyle.setProperty('--first-color', e.target.dataset.color);
});