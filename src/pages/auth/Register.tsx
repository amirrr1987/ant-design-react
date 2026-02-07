import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Form, Input, theme, Typography } from 'antd'
import type { FormProps } from 'antd'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { IAuth } from '@/models/auth.model'
import { AUTH_ROUTES } from './constants'

const { useToken } = theme
const { Title } = Typography

interface RegisterFormValues extends Pick<IAuth.Register.Req, 'username' | 'password'> {
  email: string
  confirmPassword: string
}

const initialValues: RegisterFormValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function RegisterPage() {
  const { token } = useToken()
  const [form] = Form.useForm<RegisterFormValues>()
  const [loading, setLoading] = useState(false)

  const onFinish: FormProps<RegisterFormValues>['onFinish'] = async values => {
    setLoading(true)
    try {
      // TODO: call register API with IAuth.Register.Req (username, password)
      console.log('Register values:', values)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Flex
      align="center"
      justify="center"
      style={{
        minHeight: '100vh',
        background: token.colorBgLayout
      }}
    >
      <Card style={{ width: 400 }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: token.marginLG }}>
          Register
        </Title>
        <Form<RegisterFormValues>
          form={form}
          name="register"
          initialValues={initialValues}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              { required: true, message: 'Please input your username!' },
              { min: 3, message: 'Username must be at least 3 characters' }
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 6, message: 'Password must be at least 6 characters' }
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Passwords do not match!'))
                }
              })
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Register
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            <Link to={AUTH_ROUTES.login}>Already have an account? Login</Link>
          </div>
        </Form>
      </Card>
    </Flex>
  )
}

export default RegisterPage
