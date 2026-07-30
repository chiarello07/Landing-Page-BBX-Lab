migrate(
  (app) => {
    try {
      let record
      try {
        record = app.findFirstRecordByData('partners', 'name', 'Empresa Alpha')
      } catch (_) {
        record = app.findFirstRecordByData('partners', 'name', 'Nestlé')
      }

      record.set('name', 'Nestlé')

      try {
        if (typeof $filesystem !== 'undefined' && typeof $filesystem.fileFromPath === 'function') {
          const file = $filesystem.fileFromPath('src/assets/nestle-logo-38f57.png')
          record.set('logo', file)
        }
      } catch (_) {}

      app.save(record)
    } catch (_) {}
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('partners', 'name', 'Nestlé')
      record.set('name', 'Empresa Alpha')
      record.set('logo', '')
      app.save(record)
    } catch (_) {}
  },
)
