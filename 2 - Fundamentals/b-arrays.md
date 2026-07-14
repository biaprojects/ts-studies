# Arrays
Um array é uma lista de valores.  

- numbers
  - Com inferência:
    ```typescript
    let numbers = [1, 2, 3];
    ```

    Nesse caso, o TypeScript faz a inferência do tipo do array.  
    Internamente ele entende:

    ```typescript
    let numbers: numer[]
    ```

    Ou seja... esse array só pode conter números.  

  - Para tipar explicitamente, fazemos assim:
    ```typescript
    let numbers: number[] = [1, 2, 3];
    ```

    Agora... veja essa situação:

    ```typescript
    let numbers: number[] = [1, 2, 3];

    numbers.push(4);      // ok
    numbers.push(10);     // ok
    numbers.push("10");   // erro, aceita apenas number, não string
    ```

    obs: `.push()` é como o `.append()` do python.  

- string
  ```typescript
  let names: string[] = ["Ana", "Bia", "Carlos"];

  names.push("Maria"); // ok
  names.push(10);      // erro
  ```

## Outra sintaxe:
```typescript
let numbers: Array<number> = [1, 2, 3];
```

## E se quiser misturar tipos?
Você precisa declarar isso.  

```typescript
let data: (number | string)[] = [1, 2, "3"];
```

Isso significa:  
array de number OU string  


# Ou seja...
```typescript 
let numbers: number[] = [1, 2, 3];  
let names: string[] = ["Ana", "Bia"];
```

ou

```typescript
let numbers: Array<number> = [1, 2, 3];
let names: Array<string> = ["Ana", "Bia"];
```

# E quanto ao const ou let?
```typescript
const numbers = [1,2,3];

numbers.push(4); // permitido
```

# Funções úteis
|    função   |                    ação                    |
| ----------- | ------------------------------------------ |
|    push()   |             adiciona no final              |
|   .pop()    |  remove o último (também retorna o valor)  |
|   .shift()  | remove o primeiro (também retorna o valor) |
| .unshift()  |             adiciona no começo             |
|   .length   |                   tamanho                  |
|  includes() |             verifica se existe             |
|  .indexOf() |       retorna a posição do elemento        |

Outras funções:
- **.map()**  
  Transforma cada elemento do array.  
  Exemplo:

  ```typescript
  let numbers = [1,2,3];

  let doubled = numbers.map(n => n * 2);
  ```

  O resultado será:
  [2, 4, 6]


  Outro exemplo:

  ```typescript
  let names = ["ana", "bia"];

  let upper = names.map(n => n.toUpperCase());
  ```

  Resultado:  
  ["ANA", "BIA"]

- **.filter()**
  Remove elementos que não passam na condição.
  Exemplo:

  ```typescript
  let numbers = [1,2,3,4,5];

  let even = numbers.filter(n => n % 2 === 0);
  ```

  Resultado:  
  [2,4]

  Explicação:


  Outro exemplo:
  ```typescript
  let names = ["Ana", "Bia", "Carlos"];

  let result = names.filter(n => n.length > 3);
  ```

  Resultado:  
  ["Carlos"]

- **.find()**
  Para encontrar um elemento.  
  Retorna o primeiro elemento que satisfaz a condição.

  ```typescript
  let numbers = [10,20,30,40];

  let result = numbers.find(n => n > 25);
  ```

  Resultado:  
  30

  Importante:  
  - find() retorna um valor, não um array.

- **.forEach()**
  Percorre o array.  

  ```typescript
  let numbers = [1,2,3];

  numbers.forEach(n => {
    console.log(n);
  });
  ```

  Resultado:

  1
  2
  3

Resumindo as diferenças:  

| Função  |  Retorna   |
| ------- | ---------- |
|   map   | novo array |
|  filter | novo array |
|   find  |  um valor  |
| forEach |	   nada    |
