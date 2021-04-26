import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import useService from "../../hooks/useService";
import userService from "../../Services/userService";
import useAuth from "../../hooks/userAuth"
import userContext from "../../context/userContext";


function LogIn() {
    const { onLogin } = useAuth();
    const { loggedUser, updateLoggedUser } = useContext(userContext);
    const { callService } = useService();
    const [isLoading, setIsLoading] = useState(true);

    const onFinish = (values) => {
        callService(userService.login(values))
            .then(({ data }) => {
                onLogin(data ?? []);
                updateLoggedUser(data)
                message.success("Logged In")

            })
            .catch((error) => {
                setIsLoading(false);
                message.error("User not Registered")
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