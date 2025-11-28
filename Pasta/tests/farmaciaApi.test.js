import axios from "axios";
import getMedicamentos from "../api/farmaciaApi.js";

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
/*test("Deve retornar lista vazia quando API retornar erro", async () => {  */
