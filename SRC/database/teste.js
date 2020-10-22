const data = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

data.then( async db => {
   // inserir dados na tabela
  await saveOrphanage(db,  { 
    lat:"-22.9206724",
    lng:"-42.8274063",
    name:"Lar das meninas",
    description:"Presta assistencia a crianças de 05 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social",
    images: [
      "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" ,

      "https://images.unsplash.com/photo-1598749953342-b4ee75629dca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
  ].toString(),
    instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours:"Horario de visita das 18h às 8h.",
    open_on_weekends:"0"
})
  // Consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")

        console.log(selectedOrphanages)

        //consultar dados de apenas 1 orphanato pelo id
        const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
        console.log(orphanage)
}) 