export const itemKeys = {
  all: [{ scope: 'items' }],
  items:() => [{ ...itemKeys.all[0], entity: 'items' }],
  addItem: (data) => [{ scope: 'items', operation: 'create', data }],
  deleteItem: (data) => [{ scope: 'items', operation: 'delete', data }]
};
