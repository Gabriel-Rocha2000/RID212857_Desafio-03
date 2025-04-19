let tarefasConcluidas = 0;

// nova tarefa
function adicionarTarefa() {
  const inputTitulo = document.getElementById("tituloTarefa");
  const inputCategoria = document.getElementById("categoriaTarefa");
  const titulo = inputTitulo.value.trim();
  const categoria = inputCategoria.value.trim();

  if (titulo === "" || categoria === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const dataAtual = new Date();
  const dataFormatada = `Criado em: ${dataAtual.getDate()}/${
    dataAtual.getMonth() + 1
  }/${dataAtual.getFullYear()}`;

  const novaTarefa = document.createElement("div");
  novaTarefa.className = "tarefa";
  novaTarefa.innerHTML = `
        <h2>${titulo}</h2>
        <div class="tarefa-info">
            <span class="etiqueta">${categoria}</span>
            <button class="concluir" onclick="concluirTarefa(this)">Concluir</button>
        </div>
        <div class="data">${dataFormatada}</div>
    `;

  document.querySelector(".tarefas").appendChild(novaTarefa);

  // limpa campos
  inputTitulo.value = "";
  inputCategoria.value = "";
}

// tarefa concluida
function concluirTarefa(botao) {
  const tarefa = botao.closest(".tarefa");
  if (!tarefa.classList.contains("concluida")) {
    tarefa.classList.add("concluida");
    botao.innerHTML = "✓";
    tarefasConcluidas++;
    atualizarContador();
  }
}

//  atualizar o contador de tarefas concluídas
function atualizarContador() {
  const contadorElement = document.querySelector(".contador span");
  contadorElement.textContent = `${tarefasConcluidas} ${
    tarefasConcluidas === 1 ? "tarefa concluída" : "tarefas concluídas"
  }`;
}

// adicionar evento de clique ao botão de adicionar
document.addEventListener("DOMContentLoaded", function () {
  const botaoAdicionar = document.querySelector(".adicionar");
  botaoAdicionar.addEventListener("click", adicionarTarefa);

  // adicionar evento de tecla enter nos inputs
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        adicionarTarefa();
      }
    });
  });
});
