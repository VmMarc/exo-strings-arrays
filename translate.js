const msg = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let sanitizeMsg = msg.trim()
let sanitizeMsg2 = sanitizeMsg.toUpperCase()
let splitMsg = sanitizeMsg2.split(` `)

//Boucle let elem of ...
for (let elem of splitMsg) {
  console.log(`mot: ` + elem)
}

//Boucle .forEach
/*
splitMsg.forEach((elem) => {
  console.log(`mot: ` + elem)
})
*/