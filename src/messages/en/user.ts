export default {
  page: {
    title: 'Users',
    description: 'Manage system users',
  },
  fields: {
    id: 'ID',
    username: 'Username',
    name: 'Name',
    roles: 'Roles',
    approved: 'Approved',
    createdAt: 'Created At',
    updatedAt: 'Updated At',
    action: 'Action',
  },
  actions: {
    create: 'Create User',
    edit: 'Edit',
    delete: 'Delete',
  },
  states: {
    loading: 'Loading...',
    empty: 'No users found',
    error: 'Error loading users',
    active: 'Active',
    inactive: 'Inactive',
  },
  messages: {
    pleaseEnterName: 'Please enter name',
    deleteConfirmation: 'Are you sure you want to delete this user?',
  },
};

