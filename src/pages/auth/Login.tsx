import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Form, Input, Space, theme, Typography } from 'antd'
import type { FormProps } from 'antd'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { IAuth } from '@/models/auth.model'
import { AUTH_ROUTES } from './constants'

const { useToken } = theme
const { Title } = Typography

type LoginFormValues = Pick<IAuth.Login.Req, 'username' | 'password'>

const initialValues: LoginFormValues = {
  username: '',
  password: ''
}

function LoginPage() {
  const { token } = useToken()
  const [form] = Form.useForm<LoginFormValues>()
  const [loading, setLoading] = useState(false)

  const onFinish: FormProps<LoginFormValues>['onFinish'] = async values => {
    setLoading(true)
    try {
      // TODO: call login API with IAuth.Login.Req (add grant_type, client_id, client_secret)
      // then useAuthStore.getState().setToken(res.access_token)
      console.log('Login values:', values)
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
          Login
        </Title>
        <Form<LoginFormValues>
          form={form}
          name="login"
          initialValues={initialValues}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Login
            </Button>
          </Form.Item>

          <Space separator="|" style={{ width: '100%', justifyContent: 'center' }}>
            <Link to={AUTH_ROUTES.register}>Register</Link>
            <Link to={AUTH_ROUTES.forget}>Forgot Password?</Link>
          </Space>
        </Form>
      </Card>
    </Flex>
  )
}

export default LoginPage
