const msg = "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript";

const splitMsg = msg.split(" ");

console.log(splitMsg);

let count = 0

for (let i = 0; i < splitMsg.length; i++)
  if (splitMsg[i] === `Javascript`)
    count++
console.log(`Il y a ${count} foix le mot Javascript dans ce texte`)