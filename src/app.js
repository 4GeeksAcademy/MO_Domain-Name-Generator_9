// script.js

// Arrays de partes de dominio
const pronoun = ["the", "our"];
const adj = ["big", "great"];
const noum = ["jogger", "racoon"];
const extensions = [".com", ".net"];

// Función para generar dominios
function generateDomains() {
  let domains = [];

  // Bucles anidados para combinar las partes
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noum.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let domain = pronoun[i] + adj[j] + noum[k] + extensions[l];
          domains.push(domain);
        }
      }
    }
  }

  return domains;
}

// Función para mostrar los dominios generados
function displayDomains() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Limpiar resultados previos

  const domains = generateDomains();

  domains.forEach(domain => {
    const p = document.createElement("p");
    p.textContent = domain;
    resultsDiv.appendChild(p);
  });
}

// Agregar evento al botón
document
  .getElementById("generateButton")
  .addEventListener("click", displayDomains);
