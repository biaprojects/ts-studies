# Estruturas condicionais
## IF
```typescript
let age: number = 18;

if (age >= 18) {
  console.log("Maior de idade");
}
```

## IF / ELSE
```typescript
let age = 16;

if (age >= 18) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
```

## ELSE IF
```typescript
let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("C");
}
```

# Operadores de igualdade em JavaScript
Existem dois tipos de igualdade:

- ==  
  Igualdade frouxa  
  Converte tipos automaticamente.   
  Por exemplo:  
  5 == "5"  
  Resultado: True
- ===  
  Igualdade estrita
  Não converte tipos.  
  Exemplo:  
  5 === "5"  
  Resultado: False  


# Operadores lógicos
Vamos fazer uma comparação:  

| Python | Java | TypeScript |
| :----: | :--: | :--------: |
|   and  |  &&  |     &&     |
|   or   |  \|  |     \|     |
|   not  |   !  |      !     |
