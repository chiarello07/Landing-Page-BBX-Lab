migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('partners')

    const seeds = [
      { name: 'Empresa Alpha', order: 1 },
      { name: 'Empresa Beta', order: 2 },
      { name: 'Empresa Gamma', order: 3 },
      { name: 'Empresa Delta', order: 4 },
      { name: 'Empresa Epsilon', order: 5 },
    ]

    seeds.forEach((seed) => {
      try {
        app.findFirstRecordByData('partners', 'name', seed.name)
      } catch (_) {
        const record = new Record(col)
        record.set('name', seed.name)
        record.set('logo', '')
        record.set('order', seed.order)
        record.set('active', true)
        app.save(record)
      }
    })
  },
  (app) => {
    try {
      const col = app.findCollectionByNameOrId('partners')
      app.truncateCollection(col)
    } catch (_) {}
  },
)
