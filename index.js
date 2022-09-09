const searchinput = document.querySelector('#search');
const movielist = document.querySelectorAll('.movie');

searchinput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
    movielist.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") :  (item.style.display = "none")
    })
})

