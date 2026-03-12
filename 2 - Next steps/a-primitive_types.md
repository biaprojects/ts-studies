# Vamos ver os tipos primitivos em Type Script
No TS, não é possível mudar o tipo.  
Ou seja, uma string não poderá se tornar um boolean, por exemplo.

Mas, o que é tipo no TS?  
-> é um contrato  
"Essa variável sempre vai guardar esse tipo de valor."

- number
    ```typescript
    let age: number = 30;
    ```

    `let` -> variável mutável
    `age` -> nome da variável
    `: number` -> tipo da variável
    `30` -> valor inicial

    Então... Essa variável poderá ser alterada para...
    - age = 31;
    - age = 29.5;
    Mas não para 
    - age = "30";

- string
    ```typescript
    let name: string = "Beatriz";
    ```

    String podem ser declaradas como...
    - "texto"
    - 'texto'
    - `texto` -> usado para template strings (veremos a seguir)

    Exemplo útil:
    ```typescript
    let greeting: string = `Olá, ${name}`;
    ```
    - O detalhe de termos usado ` para declarar a string, nos permite inserir variáveis dentro da string.  
    - ${} permite incluir variáveis dentro da string

- boolean
    ```typescript
    let isActive: boolean = true;
    ```
    Somente:
    
    Nada de 1, 0, "true".

# Inferência de tipo
Se fizermos...

```typescript
let city = "São Paulo";
``` 

O TS infere:
```typescript
let city: string;
```

# const vs let
```typescript
let age = 30;
age = 31; // ok
const age = 30;
age = 31; // ❌ erro
```

Use:  
const → sempre que possível  
let → só quando precisa mudar


Resumo...

```typescript
let age: number = 30;
age = 35; // OK
age = "31"; // ERRO

let name: string = "Beatriz";
name = 19; // ERRO

const greeting = `Olá, ${name}`;
greeting = "Olá" // ERRO

let active: boolean = true;

// Inferência de tipo
let age = 19;        // TS já sabe que é number
const name = "Bia";   // TS já sabe que é string
```

Diferente do Java, você não precisa declarar tudo.  
Mas diferente do Python, o tipo não muda depois.
