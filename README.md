# 🏅 Notas dos Atletas

Aplicação desenvolvida em **JavaScript** para calcular a **média válida das notas** de atletas em uma competição de **ginástica artística**.  
A média é calculada com base nas **três notas intermediárias**, descartando a maior e a menor.

---

## 🎯 Objetivo
O projeto foi criado como exercício prático de certificação, com o intuito de aplicar conceitos de manipulação de **arrays**, **objetos**, **funções** e **estruturas de repetição** em JavaScript.

---

## ⚙️ Funcionalidades

✅ Recebe o nome e as cinco notas de cada atleta.  
✅ Ordena automaticamente as notas em ordem crescente.  
✅ Desconsidera a maior e a menor nota.  
✅ Calcula a média das três notas centrais.  
✅ Exibe os resultados formatados no console.

---

## 💻 Exemplo de Entrada

```javascript
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];
