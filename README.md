# 🏥 Farmácia API – Testes com Jest, Axios e Cobertura de Código

Este projeto demonstra o consumo de uma API pública de produtos usando **Axios**, com testes automatizados utilizando **Jest**, incluindo geração de **relatórios de cobertura**.  
Também inclui um pequeno frontend para exibir medicamentos obtidos da API.

---

## 📂 Estrutura do Projeto

📁 Nova Pasta/
│── Pasta/
│   └──api
│       └── farmaciaApi.js
│   └── tests/
│      └── farmaciaApi.test.js
│── coverage/ # Gerado automaticamente pelo Jest
│── index.html # Frontend simples
│── package.json
└── README.md


---

## 🚀 Funcionalidades

- ✔️ Consumo de API externa usando **Axios**
- ✔️ Função `getMedicamentos()` que retorna medicamentos em formato padronizado
- ✔️ Testes automatizados usando **Jest**
- ✔️ Mock de requisições Axios nos testes
- ✔️ Geração de **relatório de cobertura**
- ✔️ Servidor local via `http-server` para visualização do frontend

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Jest**
- **Axios**
- **HTTP-Server**
- **ESModules (type: module)**

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```sh
npm install
```
 🧪 Executar Testes

Rodar todos os testes:
 ```
npm test
```
 📊 Gerar Relatório de Cobertura
```
npm run coverage
```

Acesse o relatório no navegador:
```
start ./coverage/lcov-report/index.html
```
## 🌐 Rodar o Projeto no Navegador

Iniciar servidor web:
```
npm start
```

Isso abrirá seu projeto em:

http://localhost:3000

## 🧩 Função Principal

A função responsável por chamar a API e formatar o resultado:
```
import axios from "axios";

async function getMedicamentos() {
  const url = "https://dummyjson.com/products";
  const response = await axios.get(url);
  const products = response.data?.products || [];

  return products.map((p) => ({
    nome: p.title ?? "",
    fabricante: p.brand ?? ""
  }));
}

export default getMedicamentos;
```
## 🧪 Teste Exemplo (Jest + Mock Axios)
```
const axios = require("axios");
const getMedicamentos = require("../api/farmaciaApi.js");

jest.mock("axios");

test("Deve retornar lista de medicamentos formatada", async () => {
    axios.get.mockResolvedValue({
        data: {
            products: [
                { title: "Dipirona", brand: "NeoQuímica" }
            ]
        }
    });

    const result = await getMedicamentos();

    expect(result).toEqual([
        { nome: "Dipirona", fabricante: "NeoQuímica" }
    ]);
});
```

## 📄 Licença

Este projeto é livre para estudo e uso pessoal.

## ✨ Autor

Projeto criado por Mylena Clímaco.