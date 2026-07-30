migrate(
  (app) => {
    try {
      let record
      try {
        record = app.findFirstRecordByData('partners', 'name', 'Empresa Gamma')
      } catch (_) {
        record = app.findFirstRecordByData('partners', 'name', 'Sicredi')
      }
      record.set('name', 'Sicredi')
      record.set('active', true)
      app.save(record)
    } catch (_) {}
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('partners', 'name', 'Sicredi')
      record.set('name', 'Empresa Gamma')
      app.save(record)
    } catch (_) {}
  },
)
