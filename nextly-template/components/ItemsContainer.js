import Crudform from "../components/crudform";
import React, {useEffect, useState} from "react";
import useItemsQuery from "../Services/useItemsQuery";
import ItemCard from "../components/itemCard";
import {SettingOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

const ItemsContainer = ({hasActions}) => {
    const itemsData = useItemsQuery();
    const [selectedFilter, setSelectedFilter] = useState(null)


    const handleClick = (e) => {
        if(e.key === selectedFilter){
            setSelectedFilter(null)
            return
        }
        setSelectedFilter(e.key)
    };

    const itemsList= itemsData?.data?.items.filter(item => item.Type === selectedFilter || selectedFilter === null)

    return (

        <div className="p-10 grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-1">

        <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubMenu key="sub1" icon={<SettingOutlined />} title="Opções">
                <Menu.ItemGroup key="filters" title="Filters" >
                    <Menu.Item key="veiculo">Veículos</Menu.Item>
                    <Menu.Item key="utilitario">Utilitários</Menu.Item>
                </Menu.ItemGroup>

            </SubMenu>
        </Menu>

                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 col-span-4">
                    {itemsList?.map((item, index) => (
                        <div>
                            { hasActions && <DeleteButton itemId={item.id} />}
                            <Link href={"/items/"+item.id} >
                        <ItemCard hoverable = {!hasActions}  className={"px-6 py-4"} key={index} name={item.Name} price={item.Price} image={item.Image} itemId={item.id} collectionId={item.collectionId} />
                            </Link>
                            </div>
                    ))}

                </div>
            </div>
    );
};

export default ItemsContainer;