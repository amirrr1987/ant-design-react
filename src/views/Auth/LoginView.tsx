import Logo from '@/components/images/logo';
import type { IAuth } from '@/models/auth.model';
import { useAuthService } from '@/services/auth.service';
import { LockOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { useGSAP } from '@gsap/react';
import { Alert, Button, Card, Checkbox, Divider, Form, Input, Space, theme, type FormProps } from 'antd';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

/**
 * کامپوننت صفحه ورود به سیستم
 * این کامپوننت فرم ورود کاربر را مدیریت می‌کند
 * @returns {JSX.Element} المنت صفحه ورود
 */
const LoginView = () => {
  const { t } = useTranslation();
  const { token } = theme.useToken();
  const logoRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const authService = useAuthService();
  const loginMutation = authService.useLogin();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [_auth, setAuth] = useLocalStorage<IAuth.Login.Res>('auth', {} as IAuth.Login.Res);
  const cardRef = useRef<HTMLDivElement>(null);

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
      '.login-form-item',
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
   * تابع submit فرم ورود
   * @param {IAuth.Login.Req} values - مقادیر فرم
   * @returns { IAuth.Login.Res}
   */
  const onFinish: FormProps<IAuth.Login.Req>['onFinish'] = async (values) => {
    const x: IAuth.Login.Req = { username: values.username, password: values.password, client_id: '', client_secret: '', grant_type: '' };
    setError(null);
    try {
      setLoading(true);
      const { data } = await loginMutation.mutateAsync(x);
      setAuth(data || ({} as IAuth.Login.Res));
      navigate('/');
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
  const onFinishFailed: FormProps<IAuth.Login.Req>['onFinishFailed'] = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <div ref={cardRef}>
      <Card
        className='w-120'
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
                {t('app.title')}
              </div>
            </div>
            <div className='text-2xl font-bold' style={{ color: token.colorText }}>
              {t('auth.page.title')}
            </div>
            <div className='text-sm' style={{ color: token.colorTextSecondary }}>
              {t('auth.page.description')}
            </div>
          </div>

          {/* پیام خطا */}
          {error && <Alert title={error} type='error' showIcon closable onClose={() => setError(null)} className='login-form-item' />}

          {/* فرم */}
          <Form name='login' layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='true'>
            <Form.Item
              name='username'
              label={t('auth.fields.username')}
              rules={[
                {
                  required: true,
                  message: t('auth.messages.pleaseEnterUsername'),
                },
              ]}
              className='login-form-item'
            >
              <Input prefix={<UserOutlined style={{ color: token.colorTextPlaceholder }} />} placeholder={t('auth.fields.usernamePlaceholder')} />
            </Form.Item>

            <Form.Item
              name='password'
              label={t('auth.fields.password')}
              rules={[
                {
                  required: true,
                  message: t('auth.messages.pleaseEnterPassword'),
                },
              ]}
              className='login-form-item'
            >
              <Input.Password prefix={<LockOutlined style={{ color: token.colorTextPlaceholder }} />} placeholder={t('auth.fields.passwordPlaceholder')} />
            </Form.Item>

            <div className='flex items-center justify-between mb-4 login-form-item'>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>{t('auth.fields.rememberMe')}</Checkbox>
              </Form.Item>
              <Button type='link' onClick={() => navigate('/auth/forgot-password')} style={{ padding: 0 }}>
                {t('auth.actions.forgotPassword')}
              </Button>
            </div>

            <Form.Item className='login-form-item mb-0'>
              <Button type='primary' htmlType='submit' block loading={loading} icon={<LoginOutlined />}>
                {t('auth.actions.login')}
              </Button>
            </Form.Item>
          </Form>

          {/* دیوایدر */}
          <Divider plain style={{ margin: 0 }}>
            <span style={{ color: token.colorTextSecondary }}>{t('auth.messages.orContinueWith')}</span>
          </Divider>

          {/* دکمه ثبت‌نام */}
          <div className='flex flex-col items-center gap-2'>
            <Space>
              <span style={{ color: token.colorTextSecondary }}>{t('auth.messages.dontHaveAccount')}</span>
              <Button type='link' onClick={() => navigate('/auth/register')} style={{ padding: 0 }}>
                {t('auth.actions.register')}
              </Button>
            </Space>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginView;
