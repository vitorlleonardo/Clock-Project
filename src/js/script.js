function updateClock() {
    const d = new Date();
    document.getElementById("hora").innerHTML = d.getHours();
    document.getElementById("minuto").innerHTML = d.getMinutes();
    document.getElementById("segundo").innerHTML = d.getSeconds(); 
}

setInterval(updateClock, 1000); // Atualiza o relogio a cada segundo.

updateClock(); // // Chama a função updateClock() uma vez ao carregar a página para exibir o relógio imediatamente 