# TypeScript
É um **superset do JavaScript**, ou seja, uma linguagem que engloba os recursos do JavaScript.  
Então, o TypeScript tem tudo o que o JavaScript tem, mas com recursos extras.  

Ele tem uma tipagem estática opcional e compila para JavaScript.

Vamos de spoiler?
### Comparando com o que você já sabe

**Java**  
`String name = "Beatriz";`

**Python**  
`name = "Beatriz"`

**TypeScript**  
`let name: string = "Beatriz";`

Aqui você já vê:
- Tipagem explícita (Java vibes)
- Sintaxe simples (Python vibes)

## Vamos ao passo 0
### Instalando o Node.js

Instale a versão LTS
Depois verifique:

node -v
npm -v

Vou deixar documentado aqui as dificuldades que tive e como as resolvi...

Assumindo que você esteja com Windows 10/11, que é o que usei...

#### PASSO 1 — 
No navegador, acesse:  
https://nodejs.org

Depois de baixar, abra o arquivo baixado

#### PASSO 2
Verifique se funcionou

1️⃣ Abra o Prompt de Comando  
No terminal, digite:  
- `node -v`

Se aparecer algo como:  
v18.20.0

Node instalado com sucesso

Agora teste:
- `npm -v`

Se aparecer um número:  
npm também está OK

Mas o que é npm?  
É o gerenciador de pacotes padrão para JavaScript

##### Erro que enfrentei:
Erro como:  
'node' não é reconhecido como um comando interno

Isso significa que:  
O Node foi instalado, mas não entrou no PATH

Ou seja...
- Node foi instalado
- npm existe
- mas o windows não sabe onde ela está 

##### Correção:
Correção: ajustar o PATH manualmente

PASSO 1 — Confirmar onde o Node foi instalado  
Normalmente o Node instala aqui:    
`C:\Program Files\nodejs\`  

Dentro dessa pasta deve existir:
- node.exe
- npm.cmd

PASSO 2 — Abrir as Variáveis de Ambiente  
Aperte tecla Windows  
Digite: variáveis de ambiente  
Clique em: Editar as variáveis de ambiente do sistema

PASSO 3 — Editar o PATH (parte crítica)  
Na tela que abriu: Clique em Variáveis de Ambiente…  
Em Variáveis do sistema: Selecione Path - Clique em Editar  

PASSO 4 — Adicionar os caminhos corretos
Clique em Novo  
Cole exatamente:   
`C:\Program Files\nodejs\`  

Clique em Novo novamente  
Cole:  
`C:\Users\SEU_USUARIO\AppData\Roaming\npm`  

⚠️ Substitua SEU_USUARIO pelo seu usuário do Windows  
(exemplo: C:\Users\Beatriz\AppData\Roaming\npm)  

PASSO 5 — Salvar tudo corretamente  
Clique OK

Feche todos os terminais abertos (cmd, PowerShell, etc.)

PASSO 6 — Testar novamente  
Abra um novo Prompt de Comando e rode:

node -v  
npm -v  

RESULTADO ESPERADO

Se aparecer algo como:

v18.x.x
9.x.x

### Instalando o TypeScript
Rode o comando  
`npm install -g typescript`

Verifique:  
`tsc -v`
