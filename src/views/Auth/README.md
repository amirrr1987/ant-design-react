# صفحات احراز هویت (Authentication Pages)

این دایرکتوری شامل تمام صفحات مربوط به سیستم احراز هویت است.

## ساختار فایل‌ها

```
src/views/Auth/
├── LoginView.tsx           # صفحه ورود
├── RegisterView.tsx        # صفحه ثبت‌نام
├── ForgotPasswordView.tsx  # صفحه فراموشی رمز عبور
├── index.ts               # Export مرکزی
└── README.md              # این فایل
```

## صفحات موجود

### 1. LoginView (صفحه ورود)
- **مسیر**: `/auth/login`
- **ویژگی‌ها**:
  - ورود با نام کاربری و رمز عبور
  - قابلیت "مرا به خاطر بسپار"
  - لینک به صفحه فراموشی رمز عبور
  - لینک به صفحه ثبت‌نام
  - پیام‌های خطا با Alert
  - انیمیشن‌های GSAP زیبا
  - آیکون‌های Ant Design

### 2. RegisterView (صفحه ثبت‌نام)
- **مسیر**: `/auth/register`
- **ویژگی‌ها**:
  - ثبت‌نام با نام کاربری و رمز عبور
  - تأیید رمز عبور
  - گزینه Active Directory
  - قبول شرایط و قوانین
  - اعتبارسنجی پیشرفته فرم
  - انیمیشن‌های GSAP
  - لینک به صفحه ورود

### 3. ForgotPasswordView (صفحه فراموشی رمز عبور)
- **مسیر**: `/auth/forgot-password`
- **ویژگی‌ها**:
  - ارسال ایمیل برای بازیابی رمز عبور
  - اعتبارسنجی ایمیل
  - صفحه موفقیت با Result component
  - لینک بازگشت به صفحه ورود
  - انیمیشن‌های GSAP

## طراحی و استایل

### رعایت قوانین پروژه
تمام صفحات احراز هویت مطابق با قوانین مندرج در `.cursor/rules/RULE.md` طراحی شده‌اند:

✅ **Ant Design v6.1.0**: استفاده از کامپوننت‌های اصلی
- Card
- Form
- Input
- Button
- Alert
- Result
- Checkbox
- Divider

✅ **Ant Design Tokens**: استفاده از سیستم token برای رنگ‌ها و استایل‌ها
- `token.colorPrimary`
- `token.colorText`
- `token.colorTextSecondary`
- `token.colorTextPlaceholder`
- `token.colorBgContainer`
- `token.boxShadowTertiary`
- `token.borderRadiusLG`

✅ **Tailwind CSS v4.1**: فقط برای Layout
- Flexbox: `flex`, `flex-col`, `items-center`, `justify-center`
- Spacing: `gap-*`, `mb-*`, `px-*`, `py-*`
- Sizing: `w-full`, `max-w-md`, `min-h-screen`
- Position: `fixed`, `absolute`, `relative`, `inset-0`

✅ **GSAP Animations**: انیمیشن‌های حرفه‌ای
- Timeline animations
- Stagger effects
- Ease functions (back.out, power2.out, power3.out)

✅ **i18n**: پشتیبانی کامل از دو زبان
- تمام متن‌ها از سیستم ترجمه
- بدون hardcoded strings
- ساختار domain-based: `auth.page.*`, `auth.fields.*`, `auth.actions.*`, `auth.messages.*`

✅ **TypeScript**: تایپ‌گذاری کامل
- TSDoc comments به فارسی
- Interface‌های مشخص
- Type safety

## Layout

صفحات احراز هویت از `AuthLayout` استفاده می‌کنند که شامل:
- تصویر پس‌زمینه با blur effect
- لوگوی برنامه در بالا
- کارت مرکزی برای فرم‌ها
- انیمیشن‌های ورودی زیبا
- Responsive design کامل

## مسیریابی

مسیرهای احراز هویت در `src/routes/auth.route.tsx` تعریف شده‌اند:

```typescript
/auth/login           → LoginView
/auth/register        → RegisterView
/auth/forgot-password → ForgotPasswordView
```

## استفاده

### Import
```typescript
import { LoginView, RegisterView, ForgotPasswordView } from '@/views/Auth';
```

### Navigation
```typescript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/auth/login');
navigate('/auth/register');
navigate('/auth/forgot-password');
```

## سرویس‌ها

صفحات احراز هویت از `useAuthService` برای ارتباط با API استفاده می‌کنند:

```typescript
const authService = useAuthService();
const loginMutation = authService.useLogin();
const { data } = await loginMutation.mutateAsync(values);
```

## ترجمه‌ها

متن‌های مربوط به احراز هویت در فایل‌های زیر قرار دارند:
- `src/messages/fa/auth.ts` (فارسی)
- `src/messages/en/auth.ts` (انگلیسی)

### کلیدهای ترجمه
```typescript
auth.page.title
auth.page.description
auth.fields.username
auth.fields.password
auth.actions.login
auth.messages.pleaseEnterUsername
// ... و سایر کلیدها
```

## نکات مهم

1. **Security**: رمز عبور با Input.Password نمایش داده می‌شود
2. **Validation**: اعتبارسنجی کامل فرم‌ها با Ant Design Form
3. **Error Handling**: نمایش خطاها با Alert component
4. **Loading States**: نمایش وضعیت بارگذاری در دکمه‌ها
5. **Animations**: انیمیشن‌های smooth و حرفه‌ای
6. **Responsive**: تمام صفحات کاملاً responsive هستند
7. **Accessibility**: استفاده از ARIA labels و keyboard navigation

## TODO

- [ ] پیاده‌سازی API واقعی ثبت‌نام
- [ ] پیاده‌سازی API واقعی فراموشی رمز عبور
- [ ] افزودن reCAPTCHA
- [ ] افزودن ورود با شبکه‌های اجتماعی
- [ ] افزودن Two-Factor Authentication
