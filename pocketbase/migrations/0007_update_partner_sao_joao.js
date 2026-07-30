migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('partners', 'name', 'Empresa Beta')
      record.set('name', 'Farmácias São João')
      app.save(record)
    } catch (_) {}
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('partners', 'name', 'Farmácias São João')
      record.set('name', 'Empresa Beta')
      app.save(record)
    } catch (_) {}
  },
)
