let dropdown = document.querySelector(".dropdown");
//const dropdown = document.getElementsByClassName('.dropdown');
dropdown.addEventListener('click', () => {
    dropdown.classList.toggle("active");
    console.log('ok');
});
