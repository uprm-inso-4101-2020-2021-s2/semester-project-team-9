import React, { useState, useEffect } from 'react';
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
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}

            >
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
                label="First Name"
                name="first_name"
                rules={[{ required: true, message: 'Please input your First Name!' }]}
            >
                <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
                label="Last Name"
                name="last_name"
                rules={[{ required: true, message: 'Please input your Last Name!' }]}
            >
                <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item
                label="Username"
                name="user_name"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder="User Name" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item name="checked" valuePropName="checked">
                <div style={{ margin: 'auto', width: '20%' }} >
                    <Checkbox>I agree to the terms and conditions</Checkbox>
                </div>
            </Form.Item>
            <Form.Item >
                <div style={{ margin: 'auto', width: '5%' }} >
                    <Button type="primary" htmlType="submit">
                        Submit
            </Button>
                </div>
            </Form.Item>
        </Form>
    );
};

export default SignUpContainer;