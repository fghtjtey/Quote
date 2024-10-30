// feom antd icons
import { LockOutlined, UserOutlined } from '@ant-design/icons';

// from antd
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useContext } from 'react';

// from react-icons
import { HiOutlineMail } from "react-icons/hi";
import { mainContaxtProvider } from '../../context/MainContaxt/MainContaxt';

// from style css
import styles from './style.module.css'

function SignUp() {
  const [state, dispatch] = useContext(mainContaxtProvider)
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      dispatch ({type: "CHANGE_COLOR", payload: "blue"})
    };
    return (
      <div className={styles["form-wrapper"]}>
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >



          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>


          
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input prefix={<HiOutlineMail  />} type="email" placeholder="Email" />
          </Form.Item>



          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>



          <Form.Item
            name="password_again"
            rules={[
              {
                required: true,
                message: 'Please enter your password again!',
              },
            ]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>




          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>
    
          <Form.Item>
            <Button block type="primary" htmlType="submit">
            Sign up
            </Button>
            or <a href="">Access</a>
          </Form.Item>
        </Form>
      </div>
    )
}

export default SignUp
