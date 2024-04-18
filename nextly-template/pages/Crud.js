import Crudform from "../components/crudform";
import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import useItemsQuery from "../Services/useItemsQuery";
import ItemCard from "../components/itemCard";
import useAddItemQuery from "../Services/useAddItemQuery";
import ItemsContainer from "../components/ItemsContainer";

const Crud = () => {
    const itemsData = useItemsQuery();
    const itemsList = itemsData?.data?.items;
    return (
        <div>
            <Navbar />
            <div className={`container p-8 mx-auto xl:px-0 flex-1`}>
                    <Crudform />
               <ItemsContainer hasActions={true} />
                </div>
        </div>
    );
};

export default Crud;