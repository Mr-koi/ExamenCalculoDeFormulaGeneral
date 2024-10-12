function Chicharron(){
let Variable_A = document.getElementById("Variable_A").value;
let Variable_B = document.getElementById("Variable_B").value;
let Variable_C = document.getElementById("Variable_C").value;


document.getElementById("X2").value=Variable_A; 
document.getElementById("X1").value=Variable_C; 
console.log(Variable_A)
}

function Limpiar(){
    const form = document.getElementById('Formulario')    
    form.reset();
    return false;
    }
    