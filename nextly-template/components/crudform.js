import React, { useState } from 'react';
import {Button, Form, Input, message, Upload} from 'antd';
import useItemsQuery from "../Services/useItemsQuery";
import useAddItemQuery from "../Services/useAddItemQuery";

const Crudform = () => {
    const { data: itemsData, isLoading, isError } = useItemsQuery(); // Use useQuery

    const addItem= useAddItemQuery();


    const onFinish = (values) => {
        const fileInput = document.getElementById("fileInput").files[0];
        console.log(fileInput)

        addItem.mutate({
            itemName: values.itemname,
            itemPrice: values.price,
            itemType: values.type,
            itemImage: fileInput
        }
        )

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Item name"
                name="itemname"
                rules={[
                    {
                        required: true,
                        message: 'Please input the item name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"
                rules={[
                    {
                        required: true,
                        message: 'Please input price!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Type"
                name="type"
                rules={[
                    {
                        required: true,
                        message: 'Please input type!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Item Image"
                name="itemimage"
                rules={[
                    {
                        required: true,
                        message: 'Please input the item image!',
                    },
                ]}
            >
                <Input id="fileInput" type="file"/>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
};

export default Crudform;
