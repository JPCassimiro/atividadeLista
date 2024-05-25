
//realiza verificação assim que a pagina é carregada
window.onload = function () {
    verifica();
};

let myNodelist = document.getElementsByTagName("li");

for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u2612"); //caracter x
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let list = document.querySelector("ul");
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') { 
        ev.target.classList.toggle('checked');
    }
}, false);

function addElemento() {
    let li = document.createElement("li");
    let textoTarefa = document.getElementById("tarefa").value.toUpperCase();
    let categoriaTarefa = document.getElementById("categoria").value.toUpperCase();
    let t = document.createTextNode(textoTarefa);
    let t2 = document.createTextNode(" \u268A " + categoriaTarefa);
    li.appendChild(t);
    li.appendChild(t2);
    if (textoTarefa === "" || categoriaTarefa === "") {
        alert("Você precisa descrever a tarefa e categoria");
    } else {
        document.getElementById("itemLista").appendChild(li);
        verifica();
    }
    document.getElementById("tarefa").value = "";
    document.getElementById("categoria").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u2612");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.remove();
            verifica();
        };
    }
    //let edit = document.getElementsByClassName("edit")
}

function limparLista() {
    let lista = document.getElementById("itemLista");
    if (lista.innerHTML.length != 0) {
        console.log(lista.innerHTML.length);
        lista.innerHTML = "";
        console.log("limpou");
    }
    verifica();
}

function verifica() {
    console.log("verificação inicio");

    let lista = document.getElementById("itemLista");
    let botao = document.getElementById("botaoLimpar");
    if (lista.innerHTML.length == 5 || lista.innerHTML.length == 0) {
        botao.style.pointerEvents = "none"; //desabilita todos os eventos de ponteiro para o elemento
        botao.style.opacity = "0.6";
    }else{
        botao.style.pointerEvents = "all"; //habilita eventos de ponteiro para o elemento
        botao.style.opacity = "1";
        botao.style.cursor = "pointer";
    }
}
