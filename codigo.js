const notaMate = document.getElementById("nota-matematica");
const notaLengua = document.getElementById("nota-lengua");
const notaEfsi = document.getElementById("nota-efsi");
const notaMateInput = document.getElementById("nota-matematica-input");
const notaLenguainput = document.getElementById("nota-lengua-input");
const notaEfsiinput = document.getElementById("nota-efsi-input");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const h1Mostrar = document.getElementById("mostrar")

function ValidarInfoMate()
{
    var text = document.getElementById('nota-matematica-input').value;
    if(text > 10)
    {
        text1.innerText = "Ingrese una nota valida"
        text1.style.color = "red"
    }
    else if(text <= 10 && text > 0)
    {
        text1.innerText = "ya se ingreso una nota";
        text1.style.color = "green";
    }
    else
    {
        text1.innerText = "Ingrese una nota valida"
        text1.style.color = "red"
    }
}

function ValidarInfolengua()
{
    var text = document.getElementById('nota-lengua-input').value;
    if(text > 10)
    {
        text2.innerText = "Ingrese una nota valida"
        text2.style.color = "red"
    }
    else if(text <= 10 && text > 0)
    {
        text2.innerText = "ya se ingreso una nota";
        text2.style.color = "green";
    }
    else
    {
        text2.innerText = "Ingrese una nota valida"
        text2.style.color = "red"
    }
}

function ValidarInfoEfsi()
{
    var text = document.getElementById('nota-efsi-input').value;
    if(text > 10)
    {
        text3.innerText = "Ingrese una nota valida"
        text3.style.color = "red"
    }
    else if(text <= 10 && text > 0)
    {
        text3.innerText = "ya se ingreso una nota";
        text3.style.color = "green";
    }
    else
    {
        text3.innerText = "Ingrese una nota valida"
        text3.style.color = "red"
    }
}


function CalcularPromedio()
{
    if(notaMateInput.value > 10 || notaMateInput.value < 0)
    {
        alert("Ingrese una nota valida en Matematica");
    }
    if(notaLenguainput.value > 10 || notaLenguainput.value < 0)
    {
        alert("Ingrese una nota valida en Lengua");
    }
    if(notaEfsiinput.value > 10 || notaEfsiinput.value < 0)
    {
        alert("Ingrese una nota valida en EFSI");
    }

    let promedio = parseInt(notaMateInput.value)
    promedio = promedio + parseInt(notaLenguainput.value) + parseInt(notaEfsiinput.value);
    promedio = promedio / 3;
    h1Mostrar.innerText = promedio
    if(promedio >= 6)
    {
        h1Mostrar.style.color = "green";
    }
    else if(promedio <= 5)
    {
        h1Mostrar.style.color = "red";
    }
}


function MayorNota()
{
    let materiaMasAlta
    if(notaMateInput.value > notaLenguainput && notaMateInput.value > notaEfsiinput.value)
    {
        materiaMasAlta = "Matematica"
    }
    else if(notaLenguainput.value > notaMateInput.value && notaLenguainput.value > notaEfsiinput.value)
    {
        materiaMasAlta = "Lengua"
    }
    else if(notaEfsiinput.value > notaMateInput.value && notaEfsiinput.value > notaLenguainput.value)
    {
        materiaMasAlta = "Efsi"
    }
    else if(notaEfsiinput.value == notaLenguainput.value && notaEfsiinput.value > notaMateInput.value)
    {
        materiaMasAlta = "Efsi Y Lengua"
    }
    else if(notaEfsiinput.value == notaMateInput.value && notaEfsiinput.value > notaLenguainput.value)
    {
        materiaMasAlta = "Efsi Y Matematica"
    }
    else if(notaMateInput.value == notaLenguainput.value && notaEfsiinput.value < notaMateInput.value)
    {
        materiaMasAlta = "Matematica Y Lengua"
    }
    else
    {
        materiaMasAlta = "Efsi , Matematica Y Lengua"
    }

    h1Mostrar.innerText = materiaMasAlta
    h1Mostrar.style.color = "blue"
}