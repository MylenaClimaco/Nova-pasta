import axios from "axios";

export default async function getMedicamentos() {
  const url = "https://dummyjson.com/products";
  const response = await axios.get(url);
  const products = response.data?.products || [];

  return products.map(p => ({
    nome: p.title ?? "",
    fabricante: p.brand ?? ""
  }));
}

