export default {
  page: {
    title: 'کاربران',
    description: 'مدیریت کاربران سیستم',
  },
  fields: {
    id: 'شناسه',
    username: 'نام کاربری',
    name: 'نام',
    roles: 'نقش‌ها',
    approved: 'تأیید شده',
    createdAt: 'تاریخ ایجاد',
    updatedAt: 'تاریخ بروزرسانی',
    action: 'عملیات',
  },
  actions: {
    create: 'ایجاد کاربر',
    edit: 'ویرایش',
    delete: 'حذف',
  },
  states: {
    loading: 'در حال بارگذاری...',
    empty: 'کاربری یافت نشد',
    error: 'خطا در دریافت اطلاعات کاربران',
    active: 'فعال',
    inactive: 'غیرفعال',
  },
  messages: {
    pleaseEnterName: 'لطفاً نام را وارد کنید',
    deleteConfirmation: 'آیا از حذف این کاربر مطمئن هستید؟',
  },
};

