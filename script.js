//realiza verificação assim que a pagina é carregada
window.onload = function () {
    verifica();
};

let myNodelist = document.getElementsByTagName("li");
let liInteresse;
let indice;

for (let i = 0; i < myNodelist.length; i++) {//ADICIONA BOTÃO DE EXCLUIR
    let span = document.createElement("span");
    let txt = document.createTextNode("\u2612"); //caracter x
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

for (let i = 0; i < myNodelist.length; i++) {//ADICIONA BOTÃO DE EDITAR
    let span = document.createElement("span");
    let txt = document.createTextNode("\u270E"); //caracter lapis
    span.className = "edit";
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

    let spanTarefa = document.createElement("span");//SPANS INDIVIDUAIS PARA TAREFA, SEPARADOR E CATEGORIA
    let spanSeparador = document.createElement("span");
    let spanCategoria = document.createElement("span");

    spanTarefa.className = "campoTarefa";
    spanCategoria.className = "campoCategoria";

    let textoTarefa = document.getElementById("tarefa").value.toUpperCase();
    let categoriaTarefa = document.getElementById("categoria").value.toUpperCase();

    let tTarefa = document.createTextNode(textoTarefa);
    let tseparador = document.createTextNode(" \u268A ");
    let tCategoria = document.createTextNode(categoriaTarefa);

    spanTarefa.appendChild(tTarefa);
    spanSeparador.appendChild(tseparador);
    spanCategoria.appendChild(tCategoria);

    li.appendChild(spanTarefa);//COLOCANDO SPANS NO LI
    li.appendChild(spanSeparador);
    li.appendChild(spanCategoria);

    spanTarefa.appendChild(tTarefa);
    spanSeparador.appendChild(tseparador);
    spanCategoria.appendChild(tCategoria);

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

    let span2 = document.createElement("SPAN");
    let txt2 = document.createTextNode("\u270E");
    span2.className = "edit";
    span2.appendChild(txt2);
    li.appendChild(span2);

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {//COLOCANDO A FUNÇÃO REMOVE NO ONCLICK DE CADA BOTÃO
        close[i].onclick = function () {
            let div = this.parentElement;
            div.remove();
            verifica();
        };
    }

    let edit = document.getElementsByClassName("edit");
    for(let i = 0;i < edit.length;i++){//COLOCANDO A FUNÇÃO EDIT NO ONCLICK DE CADA BOTÃO
        edit[i].onclick = function () {
            editar(i);
        }
    }
}

function limparLista() {
    let lista = document.getElementById("itemLista");
    if (lista.innerHTML.length != 0) {
        lista.innerHTML = "";
    }
    verifica();
}

function verifica() {
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

function editar(i){//ACIONA AO APERTAR O BOTAO DE EDITAR
    let modal = document.getElementById("modal");
    let campoTarefa = document.getElementById("tarefaModal");
    let campoCategoria = document.getElementById("categoriaModal");

    modal.style.display = "block";//MODAL VISIVEL

    liInteresse = myNodelist[i].textContent;//PEGANDO A STRING DE TAREFAS DA LISTA
    liInteresse = liInteresse.slice(0,liInteresse.length-2);//TIRANDO CARACTERES DESNECESSARIOS

    let tarefa = liInteresse.split(' ')[0];//SEPARANDO PALVRAS
    let categoria = liInteresse.split(' ')[2];
    
    campoTarefa.value = tarefa;//COLOCANDO PALAVRAS NOS CAMPOS
    campoCategoria.value = categoria;
    indice = i;//VARIAVEL GLOBAL QUE INDICA QUAL ELEMENTO DA LISTA ESTA SENDO EDITADO
}

function alterar(){
    let modal = document.getElementById("modal");
    let campoTarefa = document.getElementById("tarefaModal");//CAMPOS DE TEXTO DENTRO DO MODAL
    let campoCategoria = document.getElementById("categoriaModal");

    if(campoCategoria.value === "" || campoTarefa.value === ""){
        alert("Informe ambos os campos");
    }else{//PEGA VALORES DENTRO DA LISTA
        //!PRECISA SER QUERY SELECTOR
        myNodelist[indice].querySelector('.campoTarefa').innerHTML = campoTarefa.value;//!PRECISA SER INERHTML
        myNodelist[indice].querySelector('.campoCategoria').innerHTML = campoCategoria.value;//!PRECISA SER INERHTML
        modal.style.display = "none";
    }
}//top 10 codigos mais feios
