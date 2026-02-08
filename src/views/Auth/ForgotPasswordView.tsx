import Logo from '@/components/images/logo';
import { MailOutlined, SendOutlined } from '@ant-design/icons';
import { useGSAP } from '@gsap/react';
import { Alert, Button, Card, Divider, Form, Input, Result, Space, theme, type FormProps } from 'antd';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
interface ForgotPasswordFormValues {
  email: string;
}

/**
 * کامپوننت صفحه فراموشی رمز عبور
 * این کامپوننت فرم درخواست بازیابی رمز عبور را مدیریت می‌کند
 * @returns {JSX.Element} المنت صفحه فراموشی رمز عبور
 */
const ForgotPasswordView = () => {
  const { t } = useTranslation();
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const timeline = gsap.timeline();

    // انیمیشن کارت
    timeline.from(cardRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1.5)',
    });
    timeline.from(
      logoRef.current,
      {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.5)',
      },
      '-=0.3',
    );
    // انیمیشن آیتم‌های فرم
    timeline.from(
      '.forgot-password-form-item',
      {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
      },
      '-=0.2',
    );
  }, []);

  /**
   * تابع مدیریت submit فرم بازیابی رمز عبور
   * @param {ForgotPasswordFormValues} values - مقادیر فرم
   */
  const onFinish: FormProps<ForgotPasswordFormValues>['onFinish'] = async (values) => {
    setError(null);
    try {
      setLoading(true);
      console.log('Forgot password values:', values);
      // TODO: پیاده‌سازی API بازیابی رمز عبور
      // await forgotPasswordMutation.mutateAsync(values);

      // شبیه‌سازی درخواست
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
    } catch (err) {
      setError(t('auth.states.error'));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * تابع مدیریت خطاهای فرم
   * @param {any} errorInfo - اطلاعات خطا
   */
  const onFinishFailed: FormProps<ForgotPasswordFormValues>['onFinishFailed'] = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  if (success) {
    return (
      <div ref={cardRef}>
        <Card
          className='w-full max-w-md'
          style={{
            boxShadow: token.boxShadowTertiary,
            borderRadius: token.borderRadiusLG,
          }}
        >
          <Result
            status='success'
            title={t('auth.messages.passwordResetEmailSent')}
            subTitle={t('auth.messages.checkYourEmail')}
            extra={[
              <Button type='primary' key='login' onClick={() => navigate('/auth/login')}>
                {t('auth.actions.backToLogin')}
              </Button>,
            ]}
          />
        </Card>
      </div>
    );
  }

  return (
    <div ref={cardRef}>
      <Card
        className='w-full max-w-md'
        style={{
          boxShadow: token.boxShadowTertiary,
          borderRadius: token.borderRadiusLG,
        }}
      >
        <div className='flex flex-col gap-4'>
          {/* هدر */}
          <div className='flex flex-col items-center gap-2'>
            <div ref={logoRef} className='flex flex-col items-center gap-4 mb-4'>
              <Logo width={64} height={64} fill={token.colorPrimary} />
              <div className='text-2xl font-bold' style={{ color: token.colorText }}>
                Inquiry Hub
              </div>
            </div>
            <div className='text-2xl font-bold' style={{ color: token.colorText }}>
              {t('auth.page.forgotPasswordTitle')}
            </div>
            <div className='text-sm text-center' style={{ color: token.colorTextSecondary }}>
              {t('auth.page.forgotPasswordDescription')}
            </div>
          </div>

          {/* پیام خطا */}
          {error && <Alert message={error} type='error' showIcon closable onClose={() => setError(null)} className='forgot-password-form-item' />}

          {/* فرم */}
          <Form name='forgot-password' layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off' size='large'>
            <Form.Item
              name='email'
              label={t('auth.fields.email')}
              rules={[
                {
                  required: true,
                  message: t('auth.messages.pleaseEnterEmail'),
                },
                {
                  type: 'email',
                  message: t('auth.messages.invalidEmail'),
                },
              ]}
              className='forgot-password-form-item'
            >
              <Input prefix={<MailOutlined style={{ color: token.colorTextPlaceholder }} />} placeholder={t('auth.fields.emailPlaceholder')} />
            </Form.Item>

            <Form.Item className='forgot-password-form-item mb-0'>
              <Button type='primary' htmlType='submit' block size='large' loading={loading} icon={<SendOutlined />}>
                {t('auth.actions.sendResetLink')}
              </Button>
            </Form.Item>
          </Form>

          {/* دیوایدر */}
          <Divider plain style={{ margin: 0 }}>
            <span style={{ color: token.colorTextSecondary }}>{t('auth.messages.orContinueWith')}</span>
          </Divider>

          {/* دکمه بازگشت */}
          <div className='flex flex-col items-center gap-2'>
            <Space>
              <span style={{ color: token.colorTextSecondary }}>{t('auth.messages.rememberPassword')}</span>
              <Button type='link' onClick={() => navigate('/auth/login')} style={{ padding: 0 }}>
                {t('auth.actions.backToLogin')}
              </Button>
            </Space>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPasswordView;
