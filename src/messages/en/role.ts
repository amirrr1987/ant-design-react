export default {
  page: {
    title: 'Roles',
    description: 'Manage system roles',
  },
  fields: {
    id: 'ID',
    name: 'Name',
    normalizedName: 'Normalized Name',
    value: 'Value',
    createdAt: 'Created At',
    updatedAt: 'Updated At',
  },
  actions: {
    create: 'Create Role',
    edit: 'Edit',
    delete: 'Delete',
  },
  states: {
    loading: 'Loading...',
    empty: 'No roles found',
    error: 'Error loading roles',
  },
  messages: {
    pleaseEnterValue: 'Please enter value',
    deleteConfirmation: 'Are you sure you want to delete this role?',
  },
};

