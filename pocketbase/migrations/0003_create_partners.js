migrate(
  (app) => {
    const collection = new Collection({
      name: 'partners',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'name', type: 'text', required: true },
        {
          name: 'logo',
          type: 'file',
          required: false,
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: ['image/svg+xml', 'image/png', 'image/jpeg'],
        },
        { name: 'order', type: 'number', onlyInt: true },
        { name: 'active', type: 'bool' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: [
        'CREATE INDEX idx_partners_order ON partners (order)',
        'CREATE INDEX idx_partners_active ON partners (active)',
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('partners')
    app.delete(collection)
  },
)
