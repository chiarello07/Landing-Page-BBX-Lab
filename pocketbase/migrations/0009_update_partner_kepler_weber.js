migrate(
  (app) => {
    try {
      let record
      try {
        record = app.findFirstRecordByData('partners', 'name', 'Empresa Delta')
      } catch (_) {
        record = app.findFirstRecordByData('partners', 'name', 'Kepler Weber')
      }
      record.set('name', 'Kepler Weber')
      record.set('active', true)
      app.save(record)
    } catch (_) {}
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('partners', 'name', 'Kepler Weber')
      record.set('name', 'Empresa Delta')
      app.save(record)
    } catch (_) {}
  },
)
