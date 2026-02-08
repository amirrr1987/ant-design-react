export default {
  page: {
    title: 'Customers',
    description: 'Manage customer information',
    titleWithMobile: 'Customer with Mobile',
  },
  fields: {
    firstName: 'First Name',
    lastName: 'Last Name',
    fatherName: 'Father Name',
    birthCertificateNumber: 'Birth Certificate Number',
    customerNo: 'Customer Number',
    nationalID: 'National ID',
    fullName: 'Full Name',
    mobileNumber: 'Mobile Number',
    accountNumber: 'Account Number',
    cardNumber: 'Card Number',
    gender: 'Gender',
    birthDate: 'Birth Date',
    actions: 'Actions',
  },
  actions: {
    create: 'Create Customer',
    createWithMobile: 'Create Customer with Mobile',
    search: 'Search',
    edit: 'Edit',
    delete: 'Delete',
  },
  states: {
    loading: 'Loading...',
    empty: 'No customer found',
    error: 'Error loading customer data',
    male: 'Male',
    female: 'Female',
  },
  messages: {
    customerInfo: 'Customer Information',
    deleteConfirmation: 'Are you sure you want to delete this customer?',
    pleaseEnterMobileNumber: 'Please enter mobile number',
  },
};

