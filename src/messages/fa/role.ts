export default {
  page: {
    title: 'نقش‌ها',
    description: 'مدیریت نقش‌های سیستم',
  },
  fields: {
    id: 'شناسه',
    name: 'نام',
    normalizedName: 'نام نرمال‌شده',
    value: 'مقدار',
    createdAt: 'تاریخ ایجاد',
    updatedAt: 'تاریخ بروزرسانی',
  },
  actions: {
    create: 'ایجاد نقش',
    edit: 'ویرایش',
    delete: 'حذف',
  },
  states: {
    loading: 'در حال بارگذاری...',
    empty: 'نقشی یافت نشد',
    error: 'خطا در دریافت اطلاعات نقش‌ها',
  },
  messages: {
    pleaseEnterValue: 'لطفاً مقدار را وارد کنید',
    deleteConfirmation: 'آیا از حذف این نقش مطمئن هستید؟',
  },
};

