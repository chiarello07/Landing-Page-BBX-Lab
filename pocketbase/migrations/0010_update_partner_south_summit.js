migrate(
  (app) => {
    try {
      let record
      try {
        record = app.findFirstRecordByData('partners', 'name', 'Empresa Epsilon')
      } catch (_) {
        record = app.findFirstRecordByData('partners', 'name', 'South Summit')
      }
      record.set('name', 'South Summit')
      record.set('active', true)
      app.save(record)
    } catch (_) {}
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('partners', 'name', 'South Summit')
      record.set('name', 'Empresa Epsilon')
      app.save(record)
    } catch (_) {}
  },
)
