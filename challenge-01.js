const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

export default function contarOvejas(ovejas) {
  const ovejasRojas = ovejas.filter(
    (oveja) => oveja.color.toLowerCase() === "rojo"
  );
  const ovejasConLetrasIndicadas = ovejasRojas.filter(
    (oveja) =>
      oveja.name.trim().toLowerCase().includes("a") &&
      oveja.name.trim().toLowerCase().includes("n")
  );

  return ovejasConLetrasIndicadas;
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
