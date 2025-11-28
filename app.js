// app.js (module)
const btnBuscar = document.getElementById("btnBuscar");
const lista = document.getElementById("listaMedicamentos");

async function renderMedicamentos() {
  btnBuscar.disabled = true;
  btnBuscar.textContent = "Buscando...";

  try {
    // chama a função disponibilizada no farmaciaApi.js (window.getMedicamentos)
    const getMedicamentos = window.getMedicamentos;
    if (!getMedicamentos) {
      throw new Error("Função getMedicamentos não encontrada.");
    }

    const medicamentos = await getMedicamentos();

    // limpar lista
    lista.innerHTML = "";

    if (!medicamentos || medicamentos.length === 0) {
      lista.innerHTML = "<li>Nenhum medicamento encontrado.</li>";
      return;
    }

    medicamentos.forEach((m) => {
      const li = document.createElement("li");
      const nome = document.createElement("div");
      nome.className = "nome";
      nome.textContent = m.nome;

      const fab = document.createElement("div");
      fab.className = "fabricante";
      fab.textContent = m.fabricante;

      li.appendChild(nome);
      li.appendChild(fab);
      lista.appendChild(li);
    });
  } catch (err) {
    lista.innerHTML = `<li>Erro ao buscar medicamentos: ${err.message}</li>`;
  } finally {
    btnBuscar.disabled = false;
    btnBuscar.textContent = "Buscar Medicamentos";
  }
}

btnBuscar.addEventListener("click", () => {
  renderMedicamentos();
});
