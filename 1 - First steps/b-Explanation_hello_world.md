# Vamos ao primeiro código!

Para compilar:  
`tsc index.ts`

Para executar:  
`node index.js`

```ts
const message: string = "Hello World of typeScript!";
console.log(message);
```

Vamos entender o que está acontecendo aqui...  
- const → cria uma variável constante (não pode ser reatribuída)
- message → nome da variável
- : string → tipo explícito
- console.log → imprime no console


O detalhe mais importante do TypeScript:  
TypeScript não roda diretamente.  

Esse código:  
`const message: string = "Hello World of typeScript!";`  
Depois de compilado vira JavaScript puro:  
`const message = "Hello World of typeScript!";`

Curiosidade:  
Após rodar o código, será gerado um arquivo js. E se você retornar ao arquivo ts, a variável dará erro já que `const` não pode ser reatribuido um valor..