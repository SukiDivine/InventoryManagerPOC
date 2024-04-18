import React from 'react';
import {useRouter} from 'next/router';
import useItemsQuery from "../../Services/useItemsQuery";
import Head from "next/head";
import Navbar from "../../components/navbar";
import ItemsContainer from "../../components/ItemsContainer";
import Footer from "../../components/footer";
import {Card} from "antd";
import Container from "../../components/container";
import Link from "next/link";
import Image from "next/image";

const ItemDetail = () => {
    const router = useRouter();
    const productId = router.query.id;

    const itemsData = useItemsQuery();
    const productDetails = itemsData?.data?.items.filter(item => item.id === productId || productId === null)[0]
    const imageUrl = `http://127.0.0.1:8090/api/files/${productDetails?.collectionId}/${productDetails?.id}/${productDetails?.Image}`;
    console.log(productDetails)
    return (
        <div className="relative">
            <Container>
                <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 ">
                    <Navbar/>
                    <div className={"m-auto justify-center"}>
                        <div
                            className="p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-1">
                            <div>
                                <img className="w-full h-48 object-contain" alt={productDetails?.name} src={imageUrl}/>
                            </div>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-1 ">
                                <div>
                                    <h1 className={"mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"}>{productDetails?.Name}</h1>
                                </div>
                                <div>
                                </div>
                                <div>
                                    <h2 className="text-4xl font-extrabold dark:text-white"> Preço: {productDetails?.Price} €</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default ItemDetail;
