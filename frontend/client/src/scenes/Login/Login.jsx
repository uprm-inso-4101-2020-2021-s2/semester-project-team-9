import React, {useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import useService from "../../hooks/useService";
import userService from "../../Services/userService";
import useAuth from "../../hooks/userAuth"

function LogIn() {
    const { onLogin } = useAuth();

    const { callService } = useService();
    const [isLoading, setIsLoading] = useState(true);

    const onFinish = (values) => {
            callService(userService.login(values))
            .then(({ data }) => {
                onLogin(data);
              })
                .catch((error) => {
                setIsLoading(false);
                return error;
                });
            console.log('Success:', values);
        };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        >
        <Form.Item
            label="Username"
            name="user_name"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="pass"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
    );
    };

export default LogIn;