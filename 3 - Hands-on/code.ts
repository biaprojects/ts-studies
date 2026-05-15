// to install use: npm install prompt-sync
import promptSync from "prompt-sync";

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
        // Register person
        console.log("\nOk, let's register a new person!")

        let name: string = prompt("Type the person's name: ")

        let age_input: string = prompt("Type the person's age: ")
        let age: number = Number(age_input)

        people.push({name, age})
        console.log()
    }
    
    if (action === 2) {
        // List people
        console.log(`\nThere are ${people.length} people registered, they are:`)
        people.forEach(
            person => {console.log(`Name: ${person.name} - ${person.age} years old`)}
        )
        console.log()
    }

    if (action === 3) {
        // filter by older than 18
        let quantity: number = 0
        console.log()
        console.log("Initiating filter of people older than 18 years old")
        for (const person of people) {
            if (person.age >= 18) {
                console.log(`${person.name} is ${person.age} years old`)
                quantity += 1
            } 
        }
        if (quantity == 0) {
            console.log("There are not anyone older than 18")
            console.log()
        } else {
            console.log(`${quantity}/${people.length} older than 18\n`)
        }
    }
}