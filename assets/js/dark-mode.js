const darkMode = document.getElementById('darkMode');
console.log(darkMode.classList);

const logo = document.getElementById('logo');
console.log(logo.attributes.src.nodeValue);

darkMode.addEventListener("click", (e)=>{
    darkMode.classList.forEach((res)=>{
        if(res === 'fa-moon'){
            rootStyle.setProperty('--second-color', 'rgba(255, 255, 255, 0.781)');
            rootStyle.setProperty('--white', 'rgba(50, 49, 68, 0.781)');
            darkMode.classList.add('fa-sun');
            darkMode.classList.remove('fa-moon');
            logo.attributes.src.nodeValue = './assets/img/logo2.png';
        }
        if(res === 'fa-sun'){
            rootStyle.setProperty('--second-color', '#282d30');
            rootStyle.setProperty('--white', 'rgba(255, 255, 255, 0.781)');
            darkMode.classList.add('fa-moon');
            darkMode.classList.remove('fa-sun');
            logo.attributes.src.nodeValue = './assets/img/logo.png';
        }
    })

});