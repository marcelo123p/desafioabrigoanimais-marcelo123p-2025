# Abrigo de Animais

Este projeto implementa uma lógica em JavaScript para simular a adoção de animais de um abrigo, considerando restrições relacionadas aos brinquedos que cada pessoa possui e às regras definidas para cada animal.

---

## Visão Geral

A aplicação avalia quais pessoas podem adotar quais animais, obedecendo critérios de compatibilidade de brinquedos, limite máximo de adoções por pessoa e regras especiais para determinados animais.  
Caso nenhuma pessoa possa adotar, o animal permanece no abrigo.

---

## Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js**
- **Módulos ES (ECMAScript Modules)**

---

## Estrutura do Código

- **`animais`**: Objeto que contém os animais disponíveis, seus tipos e brinquedos associados.  
- **`brinquedosValidos`**: Lista de brinquedos aceitos pelo sistema.  
- **Classe `AbrigoAnimais`**: Contém o método `encontraPessoas`, responsável por aplicar as regras de adoção.  

### Método principal

```javascript
encontraPessoas(p1, p2, ordemAnimais)
