let total = 0

function adicionar() {
    let nome = document.getElementById("name").value;

    let potencia = document.getElementById("pot").value;
    let horas = document.getElementById("hour").value;
    
    let result = (potencia/1000) * horas
    total = total + result

    document.getElementById(`resultados`).innerHTML += `<tr><td style="padding-right: 250px">${nome}</td><td>${result} kWh</td> </tr>`
    document.getElementById(`infoTotal`).innerHTML = ` ${total} kWh <br>`
}