const novaTarefa = document.querySelector("#inserir-tarefa");
const buttonAdicionar = document.querySelector("#btn-add");
const buttonFeito = document.querySelectorAll("button.feito");
const buttonRemover = document.querySelectorAll("button.remover");
const atividadesCampo = document.querySelector(".atividades");
const textoTarefaSpan = document.querySelectorAll(".tarefa span");


buttonAdicionar.addEventListener("click", () => {
    if(novaTarefa.value == 'javascript' || novaTarefa.value == "Javascript") {
        alert("Oi, Paulo!")
    }
    if (novaTarefa.value.trim() !== "") {
        const div1 = document.createElement("div");
        div1.setAttribute("class", "tarefa");
        let c = new Atividade(novaTarefa.value);
        const span = document.createElement("span");
        span.innerHTML = c.tarefa;
        console.log(c)
        div1.appendChild(span);
        const divButtons = document.createElement("div");
        divButtons.setAttribute("class", "buttons")
        div1.appendChild(divButtons);
        const buttonDone = document.createElement("button");
        buttonDone.setAttribute("class", "feito");
        const icone1 = document.createElement("i");
        icone1.className = "fa-solid fa-check";
        buttonDone.appendChild(icone1);
        divButtons.appendChild(buttonDone);
        buttonDone.addEventListener("click", (event) => {
            div1.classList.toggle("concluido");
        });
        const buttonRemove = document.createElement("button");
        buttonRemove.setAttribute("class", "remover");
        buttonRemove.innerHTML = "X";
        buttonRemove.addEventListener("click", (event) => {
            buttonRemove.parentNode.parentNode.remove()
        });
        divButtons.appendChild(buttonRemove);
        // document.addEventListener("keypress", event => {
        //     if (event.key === "r") {
        //         buttonRemove.click()
        //     }
        // })
        atividadesCampo.appendChild(div1);
        novaTarefa.value = "";
        novaTarefa.placeholder = 'Digite a próxima tarefa aqui';
    }
})

document.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        buttonAdicionar.click()
    }
})

class Atividade {
    constructor(tarefa) {
        this.tarefa = tarefa
    }
}