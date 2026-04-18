import * as promptSync from "prompt-sync";

const prompt = promptSync()

let action: number = 1

while (action != 5) {
    action = prompt("Type the action you want: ")
    console.log(action)
}
