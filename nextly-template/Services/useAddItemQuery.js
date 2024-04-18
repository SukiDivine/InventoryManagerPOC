import {useMutation, useQuery, useQueryClient} from 'react-query';
import {addItemKey, itemKeys} from './ItemsKeysFactory';
import {addItem, getItems} from "./itemsAPI";
import { QueryClient, QueryClientProvider } from 'react-query';
const addDoc= async (item) => {
    return addItem(item);
};
// eslint-disable-next-line no-empty-pattern
const useAddItemQuery = (item) => {
    const queryKey = itemKeys.items();
    const queryClient = useQueryClient();
    return useMutation( addDoc,{
        onSuccess :() => {
            queryClient.invalidateQueries( { queryKey } );
        }
    }
    );
};

export default useAddItemQuery;
