Claro! Aqui está o documento atualizado com a adição da linguagem utilizada e a seção de pré-requisitos para o Node.js:

---

# Desafio Técnico - Estágio Target Sistemas

Este repositório contém a solução para o desafio técnico proposto pela Target Sistemas para a vaga de estágio. Abaixo estão as instruções e soluções para cada um dos problemas solicitados.

## Linguagem Utilizada

- **JavaScript** (Node.js)

## Pré-requisitos

- **Node.js**: Certifique-se de que o Node.js esteja instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Problemas Resolvidos

### 1. Sequência de Fibonacci

```javascript
function checkFibonacci(numberToCheck) {    
    let a = 0;
    let b = 1;
    let temp;

    while (a < numberToCheck) {
        temp = a;
        a = b;
        b += temp;
    }

    return (a === numberToCheck);
}
    
const numberToCheck = 13;

if (checkFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
```

---

### 2. Verificar a letra 'a' em uma string

```javascript
function letterCounter(inputText, target = 'a') {
    const characterMap = new Map();
    const inputTextArray = inputText.toLowerCase().split('');

    inputTextArray.forEach((item) => {
        const newValue = characterMap.has(item) ? characterMap.get(item) + 1 : 1;
        characterMap.set(item, newValue);
    })

    if (characterMap.has(target)) {
        return characterMap.get(target);
    } else {
        return 0;
    }
}

inputText = 'Oi! Meu nome é Aridan Pantoja';
const letterCount = letterCounter(inputText);

if (letterCount > 0) {
    console.log(`O caractere 'a' aparece ${letterCount} vezes no texto!`);
} else {
    console.log(`O caractere 'a' NÃO aparece no texto!`);
}
```

---

### 3. Cálculo da soma de uma sequência

```javascript
let indice = 12;
let soma = 0;
let k = 1;

while (k < indice) {
    k += 1;
    soma += k;
}

console.log(`O valor da variável soma é: ${soma}`);
```

#### Resposta  
O valor final da variável `soma` será 77.

---

### 4. Complete a sequência lógica

#### Resposta 

a) 1, 3, 5, 7, **9**  
b) 2, 4, 8, 16, 32, 64, **128**  
c) 0, 1, 4, 9, 16, 25, 36, **49**  
d) 4, 16, 36, 64, **100**  
e) 1, 1, 2, 3, 5, 8, **13**  
f) 2, 10, 12, 16, 17, 18, 19, **200**

---

### 5. Interruptores e Lâmpadas
**Descrição:**  
Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você precisa descobrir qual interruptor controla qual lâmpada, fazendo no máximo duas idas até a sala das lâmpadas.

#### Resposta  
1. Considerar os três interruptores como A, B e C.
2. Ligar o Interruptor B.
3. Ir até as salas e verificar qual lâmpada foi ligada.
4. Voltar para a sala dos interruptores.
5. Desligar o Interruptor B e ligar o Interruptor A.
6. Ir nas salas e verificar qual lâmpada está acesa.

**Resultados:**
- A lâmpada que foi ligada na primeira ida pertence ao interruptor B.
- A lâmpada que está acessa na segunda ida pertence ao interruptor A.
- A lâmpada que não foi ligada pertence ao interruptor C.

---

## Executando as Soluções

Cada um dos problemas do 1 ao 3 possui uma solução implementada em Javascript. Siga as instruções abaixo para executar os códigos:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/aridanpantoja/desafio-target-sistemas.git
   ```

2. **Navegue até o diretório**:
   ```bash
   cd desafio-target-sistemas
   ```

3. **Execute o código de cada problema**:
   - Para o problema da sequência de Fibonacci:
     ```bash
     node fibonnaci.js
     ```
   - Para o problema de contagem de letras 'a':
     ```bash
     node letterCounter.js
     ```
   - Para o problema da soma da sequência:
     ```bash
     node soma.js
     ```

---

## Autor

- Este desafio foi desenvolvido por Aridan Pantoja.  
- Entre em contato comigo através de aridanpantoja@gmail.com ou no [LinkedIn](https://linkedin.com/in/aridanpantoja).