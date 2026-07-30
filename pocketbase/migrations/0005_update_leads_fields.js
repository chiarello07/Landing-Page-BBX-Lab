migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    if (!col.fields.getByName('cargo')) {
      col.fields.add(new TextField({ name: 'cargo', required: true }))
    }
    if (!col.fields.getByName('setor')) {
      col.fields.add(new TextField({ name: 'setor', required: true }))
    }
    if (!col.fields.getByName('desafio')) {
      col.fields.add(new TextField({ name: 'desafio', required: true }))
    }

    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    const cargoField = col.fields.getByName('cargo')
    if (cargoField) col.fields.remove(cargoField.getId())

    const setorField = col.fields.getByName('setor')
    if (setorField) col.fields.remove(setorField.getId())

    const desafioField = col.fields.getByName('desafio')
    if (desafioField) col.fields.remove(desafioField.getId())

    app.save(col)
  },
)
