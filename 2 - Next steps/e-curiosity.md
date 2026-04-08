Momento diário...  

Estava pensando... Vamos botar a mão na massa. E porque não reutilizar projetos que fizemos em python/java?  
Vamos fazer a calculadora. Mas... ainda não vi como é o "input" no TypeScript...  

Fui buscar...

O TypeScript foi criado pensando em API, requisição (JavaScript em navegador, ou seja, o "input" natural dele é click, input, submit - usuário clica, digita em formulário, etc)

Existem 3 formas principais de “input”  
Vamos ver as três mais importantes:  

1. prompt() (no navegador)  
    Se você estiver rodando no browser:  
    `const name = prompt("Digite seu nome:");`  
    Isso abre uma janelinha pedindo input.  
    Mas isso não funciona no Node.js.

2. readline (forma padrão no Node.js)
    Essa é a forma mais correta no backend (Node.js).  
    Passo a passo
    ```typescript
    import * as readline from "readline";
    // Criamos uma interface de leitura:
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Agora fazemos a pergunta:
    rl.question("Digite seu nome: ", (name) => {
        console.log(`Olá, ${name}`);
        rl.close();
    });
    ```
    O que está acontecendo aqui?  
    Vamos com calma:  
    `process.stdin` → entrada do teclado  
    `process.stdout` → saída no terminal  
    `rl.question()` → faz uma pergunta e espera resposta  
    Detalhe importante  
    Isso aqui:  
    `(name) => { ... }` 
    É uma função callback  
    Ou seja:
    - o código só executa depois que o usuário responde

3. Forma mais simples (usando biblioteca)
    Existe uma forma mais simples usando biblioteca externa.  
    Uma muito comum é:  
    `prompt-sync`  
    
    Instalar:  
    npm install prompt-sync  
    Usar:  
    ```typescript
    import promptSync from "prompt-sync";
    const prompt = promptSync();
    const name = prompt("Digite seu nome: ");
    console.log(`Olá, ${name}`);
    ```
    
## Qual você deve usar?  
Para aprendizado:  
-> Use prompt-sync (mais simples)  
Vale lembrar: udo que vem do input é string

Para backend real:  
-> Use readline

Para frontend:  
-> Use prompt() (ou inputs HTML)
