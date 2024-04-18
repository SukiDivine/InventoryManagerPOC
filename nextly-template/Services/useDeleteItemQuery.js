import {useMutation, useQuery, useQueryClient} from 'react-query';
import {itemKeys} from './ItemsKeysFactory';
import {deleteItem} from "./itemsAPI";
const deleteItemFunc= async (itemId) => {
    return deleteItem(itemId);
};
const useDeleteItemQuery = (item) => {
    const queryKey = itemKeys.items();
    const queryClient = useQueryClient();
    return useMutation( deleteItemFunc,{
        onSuccess :() => {
            queryClient.invalidateQueries( { queryKey } );
        }
    }
    );
};

export default useDeleteItemQuery;
