import Logo from '@/components/images/logo';
import { LoginProviderConstant } from '@/constants/auth.constant';
import type { IUser } from '@/models/user.model';
import { LockOutlined, SafetyOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { useGSAP } from '@gsap/react';
import { Alert, Button, Card, Checkbox, Divider, Form, Input, Space, theme, type FormProps } from 'antd';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

/**
 * کامپوننت صفحه ثبت‌نام
 * این کامپوننت فرم ثبت‌نام کاربر جدید را مدیریت می‌کند
 * @returns {JSX.Element} المنت صفحه ثبت‌نام
 */
const RegisterView = () => {
  const { t } = useTranslation();
  const { token } = theme.useToken();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
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
      '.register-form-item',
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
   * تابع مدیریت submit فرم ثبت‌نام
   * @param {IUser.Create.Req} values - مقادیر فرم
   */
  const onFinish: FormProps<IUser.Create.Req & { confirmPassword: string }>['onFinish'] = async (values) => {
    setError(null);
    try {
      setLoading(true);
      console.log('Register values:', values);
      // TODO: پیاده‌سازی API ثبت‌نام
      // await registerMutation.mutateAsync(values);
      navigate('/auth/login');
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
  const onFinishFailed: FormProps<IUser.Create.Req>['onFinishFailed'] = (errorInfo) => {
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
                Inquiry Hub
              </div>
            </div>
            <div className='text-2xl font-bold' style={{ color: token.colorText }}>
              {t('auth.page.registerTitle')}
            </div>
            <div className='text-sm' style={{ color: token.colorTextSecondary }}>
              {t('auth.page.registerDescription')}
            </div>
          </div>

          {/* پیام خطا */}
          {error && <Alert title={error} type='error' showIcon closable onClose={() => setError(null)} />}

          {/* فرم */}
          <Form
            form={form}
            name='register'
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            initialValues={{
              loginProvider: LoginProviderConstant.LOCAL,
            }}
          >
            <Form.Item
              name='username'
              label={t('auth.fields.username')}
              rules={[
                {
                  required: true,
                  message: t('auth.messages.pleaseEnterUsername'),
                },
              ]}
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
                {
                  min: 6,
                  message: t('auth.messages.passwordMinLength'),
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined style={{ color: token.colorTextPlaceholder }} />} placeholder={t('auth.fields.passwordPlaceholder')} />
            </Form.Item>

            <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.loginProvider !== currentValues.loginProvider}>
              {({ getFieldValue }) =>
                getFieldValue('loginProvider') !== LoginProviderConstant.ACTIVE_DIRECTORY ? (
                  <Form.Item
                    name='confirmPassword'
                    label={t('auth.fields.confirmPassword')}
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: t('auth.messages.pleaseEnterConfirmPassword'),
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error(t('auth.messages.passwordsDoNotMatch')));
                        },
                      }),
                    ]}
                  >
                    <Input.Password prefix={<SafetyOutlined style={{ color: token.colorTextPlaceholder }} />} placeholder={t('auth.fields.confirmPasswordPlaceholder')} />
                  </Form.Item>
                ) : null
              }
            </Form.Item>

            <Form.Item name='loginProvider' valuePropName='checked'>
              <Checkbox
                onChange={(e) => {
                  form.setFieldValue('loginProvider', e.target.checked ? LoginProviderConstant.ACTIVE_DIRECTORY : LoginProviderConstant.LOCAL);
                }}
              >
                <span style={{ color: token.colorTextSecondary }}>{t('auth.fields.useActiveDirectory')}</span>
              </Checkbox>
            </Form.Item>

            <Form.Item
              name='agreement'
              valuePropName='checked'
              rules={[
                {
                  validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error(t('auth.messages.pleaseAcceptAgreement')))),
                },
              ]}
            >
              <Checkbox>
                <span style={{ color: token.colorTextSecondary }}>{t('auth.messages.acceptTerms')}</span>
              </Checkbox>
            </Form.Item>

            <Form.Item className=''>
              <Button type='primary' htmlType='submit' block loading={loading} icon={<UserAddOutlined />}>
                {t('auth.actions.register')}
              </Button>
            </Form.Item>
          </Form>

          {/* دیوایدر */}
          <Divider plain style={{ margin: 0 }}>
            <span style={{ color: token.colorTextSecondary }}>{t('auth.messages.orContinueWith')}</span>
          </Divider>

          {/* دکمه ورود */}
          <div className='flex flex-col items-center'>
            <Space>
              <span style={{ color: token.colorTextSecondary }}>{t('auth.messages.alreadyHaveAccount')}</span>
              <Button type='link' onClick={() => navigate('/auth/login')} style={{ padding: 0 }}>
                {t('auth.actions.login')}
              </Button>
            </Space>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RegisterView;
