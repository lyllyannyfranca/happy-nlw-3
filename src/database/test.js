const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-8.0514722",
        lng: "-34.9494314",
        name: "Lar das meninos",
        about: "Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "81999999999",
        images: [
            "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            
            "https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ].toString(),
        instruction: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18hs",
        open_on_weekends: "0"
    }) 

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="3"')
    console.log(orphanage)

    //deletar dados da tabela
    //console.log(await db.run('DELETE FROM orphanages WHERE id="4"'))
})