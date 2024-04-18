import React from 'react';
import {Button, Card} from 'antd';
import PropTypes from 'prop-types';
import {DeleteOutlined} from "@ant-design/icons";
import useDeleteItemQuery from "../Services/useDeleteItemQuery";
import DeleteButton from "./DeleteButton";

const { Meta } = Card;


function ItemCard({ hoverable,name, price, image, itemId, collectionId , hasButton}) {
    // Construct the dynamic image URL
    const imageUrl = `http://127.0.0.1:8090/api/files/${collectionId}/${itemId}/${image}`;

    return (
        <div>


            <Card
                style={{ width: 250 }}
                hoverable={hoverable}
                cover={<img className="w-full h-48 object-contain" alt={name} src={imageUrl} />}
                title={name}
            >
                <div  style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <h5>  Preço: {price} €</h5>
                </div>
            </Card>
        </div>
    );
}

ItemCard.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.any,
    itemId: PropTypes.string,
    collectionId: PropTypes.string
};
export default ItemCard;