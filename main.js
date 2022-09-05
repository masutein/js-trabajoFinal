
let valor = document.getElementById("valor")
    valor.addEventListener ("submit", calcularPrecio)

function calcularPrecio(e) {
    e.preventDefault();
    var productos = [ivrea = 750, panini = 1100, pdf = 250];
    let cantidad = document.getElementById("cantidad").value,
        editorial = document.getElementById("select").value;
        total = 0;
    if (editorial == "ivrea"){
        total = parseInt(cantidad * ivrea)
    }if (editorial == "panini"){
        total = parseInt(cantidad * panini)
    }if (editorial == "pdf"){
        total = parseInt(cantidad * pdf)
    }
    console.log(editorial, total)
    UI(total, editorial)
}

function UI(total, editorial){
    let result = document.getElementById('result')
    let dataPrint = document.createElement('div')

    dataPrint.innerHTML = `
    <div class="container-data">
        <h3>Precio ${editorial} = ${total}</h3>
    </div>
    `
    result.appendChild(dataPrint);
    document.getElementById('valor').reset()
    
}