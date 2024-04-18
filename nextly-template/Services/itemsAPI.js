import axios from "axios";

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090/');

export const getItems = async () => {
    const authData = await pb.admins.authWithPassword('fjosepinto95@gmail.com', '255534071kiko');
    const itemsList = await pb.collection("Items").getList();

    const res = itemsList;

    pb.authStore.clear();

    return res;

};

export const addItem = async (item) => {
    const authData = await pb.admins.authWithPassword('fjosepinto95@gmail.com', '255534071kiko');

    const formData = new FormData();
    formData.append("Name",item?.itemName);
    formData.append("Price",item?.itemPrice);
    formData.append("Type",item?.itemType);
    formData.append("Image", new File([item?.itemImage],item?.itemImage));

    const record = await pb.collection('Items').create(formData);

    pb.authStore.clear();

};

export const deleteItem = async (itemId) => {
    console.log(itemId)
    const authData = await pb.admins.authWithPassword('fjosepinto95@gmail.com', '255534071kiko');
    await pb.collection('Items').delete(itemId);

    pb.authStore.clear();

};