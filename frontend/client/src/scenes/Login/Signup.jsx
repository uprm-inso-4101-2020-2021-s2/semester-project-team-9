import React, {useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import useService from "../../hooks/useService";
import userService from "../../Services/userService";

function SignUpContainer() {
    const { callService } = useService();
    const [isLoading, setIsLoading] = useState(true);

    const onFinish = (values) => {
            callService(userService.register(values))
                .then(() => {
                setIsLoading(false);
                })
                .catch((error) => {
                setIsLoading(false);
                return error;
                });
            console.log('Success:', (values));
        };


   
    return (
        <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        >
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="first_name"
            name="first_name"
            rules={[{ required: true, message: 'Please input your First Name!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="last_name"
            name="last_name"
            rules={[{ required: true, message: 'Please input your Last Name!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Username"
            name="user_name"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item name="checked" valuePropName="checked">
        <Checkbox>I agree to the terms and conditions</Checkbox>
      </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
    );
    };

export default SignUpContainer;