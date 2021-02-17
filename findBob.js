const msg = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let sanitizeMsg = msg.trim()
let sanitizeMsg2 = sanitizeMsg.toUpperCase()


console.log(sanitizeMsg2);

const splitMsg = sanitizeMsg2.split(" ");

let count = 0

for (let i = 0; i < splitMsg.length; i++)
  if (splitMsg[i] === `BOB`)
    count++
console.log(`Il y a ${count} foix le nom BOB dans ce texte`)