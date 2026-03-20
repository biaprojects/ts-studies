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

