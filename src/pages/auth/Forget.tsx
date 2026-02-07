import { MailOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Form, Input, theme, Typography } from 'antd'
import type { FormProps } from 'antd'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AUTH_ROUTES } from './constants'

const { useToken } = theme
const { Title, Text } = Typography

interface ForgetFormValues {
  email: string
}

const initialValues: ForgetFormValues = {
  email: ''
}

function ForgetPage() {
  const { token } = useToken()
  const [form] = Form.useForm<ForgetFormValues>()
  const [loading, setLoading] = useState(false)

  const onFinish: FormProps<ForgetFormValues>['onFinish'] = async values => {
    setLoading(true)
    try {
      // TODO: call forgot-password API
      console.log('Forget password values:', values)
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
        <Title level={3} style={{ textAlign: 'center', marginBottom: token.marginSM }}>
          Forgot Password
        </Title>
        <Text
          style={{
            display: 'block',
            textAlign: 'center',
            marginBottom: token.marginLG,
            color: token.colorTextSecondary
          }}
        >
          Enter your email address and we'll send you a link to reset your password.
        </Text>
        <Form<ForgetFormValues>
          form={form}
          name="forget"
          initialValues={initialValues}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
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

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Send Reset Link
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            <Link to={AUTH_ROUTES.login}>Back to Login</Link>
          </div>
        </Form>
      </Card>
    </Flex>
  )
}

export default ForgetPage
