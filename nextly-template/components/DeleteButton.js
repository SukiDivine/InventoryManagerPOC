import useDeleteItemQuery from "../Services/useDeleteItemQuery";
import {Button, Card} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import React from "react";

function DeleteButton({itemId}) {

    const delItem= useDeleteItemQuery();
    const handleRemove = (itemId) => {
        delItem.mutate(itemId);
    }
    return (
        <Button type="Primary"  className="bg-red-500" icon={<DeleteOutlined />} size={23} onClick={() => handleRemove(itemId)} />

    );
}
export default DeleteButton;