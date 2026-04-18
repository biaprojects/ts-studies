// to install use: npm install prompt-sync
import * as promptSync from "prompt-sync";

const prompt = promptSync()

// build a model
type Person = {
    name: string
    age: number
}

// list
const people: Person[] = []

let action: number = 1

while (action != 5) {
    let input: string = prompt("Type the action you want: ")
    action = Number(input)
    
    if (action === 1) {
        console.log("\nOk, let's register a new person!")

        let name: string = prompt("Type the person's name: ")

        let age_input: string = prompt("Type the person's age: ")
        let age: number = Number(age_input)

        people.push({name, age})
        console.log()
    }
}

console.log(people)
