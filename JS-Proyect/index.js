function compare() {
    debugger;
    var machineOne = document.getElementById("machineOne").value;
    var machineTwo = document.getElementById("machineTwo").value;
   
    if (!machineOne) {
        alert("Debe ingresar un valor en el primer campo.")
        return;
    }
    if (!machineTwo) {
        alert("Debe ingresar un valor en el Segundo campo.")
        return;
    }

    if (machineOne > machines.length || machineTwo > machines.length){
        alert("Una de las opciones no corresponde al catalogo de la sala de ventas.");
        return;
    }

     if (machineOne < 1 || machineTwo < 1 ){
        alert("Una de las opciones no corresponde al catalogo de la sala de ventas.");
        return;
    }
    
    var optionOne = machines.filter(o => o.id == machineOne)[0];
    var optionTwo = machines.filter(o => o.id == machineTwo)[0];
    console.log(optionOne);
    var scoreOne = 0;
    var scoreTwo = 0;

     if (optionOne.ram != optionTwo.ram) {
        (optionOne.ram > optionTwo.ram) ? scoreOne += 1 : scoreTwo += 1
    };
     if (optionOne.hardDisk != optionTwo.hardDisk) {
        (optionOne.hardDisk > optionTwo.hardDisk) ? scoreOne += 1 : scoreTwo += 1
    };
     if (optionOne.screen != optionTwo.screen) {
        (optionOne.screen > optionTwo.screen) ? scoreOne += 1 : scoreTwo += 1
    };
     if (optionOne.card != optionTwo.card) {
        (optionOne.card > optionTwo.card) ? scoreOne += 1 : scoreTwo += 1
    };
     if (optionOne.price != optionTwo.price) {
        (optionOne.price < optionTwo.price) ? scoreOne += 1 : scoreTwo += 1
    };

    if (scoreOne != scoreTwo) {
        if (scoreOne > scoreTwo) { alert("La opción: " + machineOne + " es mejor.") }
        else { alert("La opción: " + machineTwo + " es mejor.") }
    }
    else {
        alert("Ambas opciones son similares.")
    }
}

machines = [
    { id: 1, ram: 2, hardDisk: 200, screen: 12, card: 2, price: 300 },
    { id: 2, ram: 4, hardDisk: 600, screen: 14, card: 4, price: 600 },
    { id: 3, ram: 6, hardDisk: 200, screen: 12, card: 6, price: 500 },
    { id: 4, ram: 6, hardDisk: 1000, screen: 16, card: 8, price: 1000},
    { id: 5, ram: 8, hardDisk: 800, screen: 14, card: 10, price: 1000}
];
