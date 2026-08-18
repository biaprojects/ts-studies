# FOR
```TypeScript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

`for (início; condição; incremento)`

# WHILE
```TypeScript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

# FOR...OF (muito usado em arrays)
Esse é muito usado em JS/TS.  
Percorre os valores.
```typescript
let names = ["Ana", "Bia", "Carlos"];

for (const name of names) {
  console.log(name);
}
```

# FOR...IN
Percorre os índices.  
```typescript
let names = ["Ana", "Bia", "Carlos"];

for (const index in names) {
  console.log(index);
}
```

Resultado:

0
1
2

Se quiser o valor:

names[index]

# O equivalente ao in do Python
Em python:
```Python
if "Ana" in names
```

TypeScript usa:
`includes()`

Exemplo:
```typescript
let names = ["Ana", "Bia", "Carlos"];

if (names.includes("Ana")) {
  console.log("Existe");
}
```
