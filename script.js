
function updateClock(){


    const horasElement = document.querySelector(".horas");
    const minutosElement = document.querySelector(".minutos");
    const segundosElement = document.querySelector(".segundos");
    const relogioElement = document.querySelector(".relogio")


    const horario = new Date();
    const horas = horario.getHours().toString().padStart(2,"0");
    horasElement.textContent= horas;
    
    const minutos = horario.getMinutes().toString().padStart(2,"0");
    minutosElement.textContent = minutos;

    const segundos = horario.getSeconds().toString().padStart(2,"0");
    segundosElement.textContent = segundos;


    if (segundos % 5 ===0) {
        changeLEDColor(relogioElement);
    }

    function changeLEDColor(relogioElement) {
        const randomColor = getRandomColor();
        relogioElement.style.borderColor = randomColor;
        relogioElement.style.boxShadow = `0 0 50px 20px ${randomColor}`;
    }
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 3; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

setInterval(updateClock, 1000);