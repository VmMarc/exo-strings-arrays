const msg = ('Je suis le ténébreux, - le veuf, - l\'inconsolé,' +
  'Le prince d\'Aquitaine à la tour abolie :' +
  'Ma seule étoile est morte, - et mon luth constellé' +
  'Porte le soleil noir de la Mélancolie.' +

  'Dans la nuit du tombeau, toi qui m\'as consolé,' +
  'Rends-moi le Pausilippe et la mer d\'Italie,' +
  'La fleur qui plaisait tant à mon cœur désolé,' +
  'Et la treille où le pampre à la rose s\'allie.' +

  'Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?' +
  'Mon front est rouge encor du baiser de la reine ;' +
  'J\'ai rêvé dans la grotte où nage la sirène...' +

  'Et j\'ai deux fois vainqueur traversé l\'Achéron ;' +
  'Modulant tour à tour sur la lyre d\'Orphée' +
  'Les soupirs de la sainte et les cris de la fée.')

const splitMsg = msg.split(` `);
console.log(splitMsg)

let count = 0

for (let i = 0; i < splitMsg.length; i++)
  if (splitMsg[i])
    count++
console.log(`Il y a ${count} mots dans ce texte`)
