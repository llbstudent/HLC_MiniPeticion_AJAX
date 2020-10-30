//Cargamos la página
window.addEventListener('load', function() {
    // 'Bindeamos' los botones
    var btnLoadData = document.getElementById('btnMov');
    var btnLoadAllData = document.getElementById('btnAllMov');
    console.log("A");
    // Variable para realizar la petición
    const xhr = new XMLHttpRequest();
    //Variable para mostrar futuramente los datos
    var output = "";


    //Realizamos los eventos
    //Carga de un movimimiento
    btnLoadData.addEventListener('click', function() {
        xhr.open('GET', './JSONFiles/latestMov.json', true);
        output = "";

        xhr.onload = function() {
            if (this.status === 200) {
                const account = JSON.parse(this.responseText);
                output = `<div id="table-result" class="table-responsive container container-fluid">
                <div id="dateField" class="row container-fluid table-primary "><h4>DATOS</h4></div>
                <!--Fecha-->
                <div id="dateField" class="row container-fluid">
                    <div class="col">
                        <strong>Fecha</strong>
                    </div>
                    <div class="col">
                        ${account.date}
                    </div>
                </div>
                <!--Concepto-->
                <div id="conceptField" class="row container-fluid">
                    <div class="col">
                    <strong>Concepto</strong>
                    </div>
                    <div class="col">
                        ${account.concept}
                    </div>
                </div>
                <!--Cantidad-->
                <div id="amountField" class="row container-fluid">
                    <div class="col">
                    <strong>Cantidad</strong>
                    </div>
                    <div class="col">
                        ${account.amount}
                    </div>
                </div>
            </div>`;
            } else {
                output = `<h3>ERROR, No pudo realizarse correctamente</h3>`;
            }
            document.getElementById('result-container').innerHTML = output;
        }
        xhr.send();
    });

    //------
    //Cargar todos los movimientos
    btnLoadAllData.addEventListener('click', function() {
        xhr.open('GET', './JSONFiles/allMoves.json', true);
        output = "";

        xhr.onload = function() {
            if (this.status === 200) {
                const accountMovements = JSON.parse(this.responseText);

                output += `<div id="table-result" class="table-responsive container container-fluid">
                <div id="dateField" class="row container-fluid table-primary "><h4>DATOS</h4></div>`;

                //Bucle forEach para recorrer todos lo movimientos que existen
                accountMovements.forEach(function(movement) {
                    output += `<!--Fecha-->
                    <div id="dateField" class="row container-fluid table-secondary"><h6>Movimiento ${movement.date}</h6></div>
                    <div id="dateField" class="row container-fluid">
                        <div class="col">
                            <strong>Fecha</strong>
                        </div>
                        <div class="col">
                            ${movement.date}
                        </div>
                    </div>
                    <!--Concepto-->
                    <div id="conceptField" class="row container-fluid">
                        <div class="col">
                        <strong>Concepto</strong>
                        </div>
                        <div class="col">
                            ${movement.concept}
                        </div>
                    </div>
                    <!--Cantidad-->
                    <div id="amountField" class="row container-fluid">
                        <div class="col">
                        <strong>Cantidad</strong>
                        </div>
                        <div class="col">
                            ${movement.amount}
                        </div>
                    </div>`;
                });
                output += `</div>`;
            } else {
                output = `<h3>ERROR, No pudo realizarse correctamente</h3>`;
            }
            document.getElementById('result-container').innerHTML = output;
        }
        xhr.send();
    });

});