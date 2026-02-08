export default {
  page: {
    title: 'مشتریان',
    description: 'مدیریت اطلاعات مشتریان',
    titleWithMobile: 'مشتری با موبایل',
  },
  fields: {
    firstName: 'نام',
    lastName: 'نام خانوادگی',
    fatherName: 'نام پدر',
    birthCertificateNumber: 'شماره شناسنامه',
    customerNo: 'شماره مشتری',
    nationalID: 'کد ملی',
    fullName: 'نام کامل',
    mobileNumber: 'شماره موبایل',
    accountNumber: 'شماره حساب',
    cardNumber: 'شماره کارت',
    gender: 'جنسیت',
    birthDate: 'تاریخ تولد',
    actions: 'عملیات',
  },
  actions: {
    create: 'ایجاد مشتری',
    createWithMobile: 'ایجاد مشتری با موبایل',
    search: 'جستجو',
    edit: 'ویرایش',
    delete: 'حذف',
  },
  states: {
    loading: 'در حال بارگذاری...',
    empty: 'مشتری یافت نشد',
    error: 'خطا در دریافت اطلاعات مشتری',
    male: 'مرد',
    female: 'زن',
  },
  messages: {
    customerInfo: 'اطلاعات مشتری',
    deleteConfirmation: 'آیا از حذف این مشتری مطمئن هستید؟',
    pleaseEnterMobileNumber: 'لطفا شماره موبایل را وارد کنید',
  },
};

