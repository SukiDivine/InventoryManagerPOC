import { useQuery } from 'react-query';
import {itemKeys} from './ItemsKeysFactory';
import {getItems} from "./itemsAPI";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const fetchItems = async () => {
  return getItems();
};
// eslint-disable-next-line no-empty-pattern
const useItemsQuery = () => {
  const queryKey = itemKeys.items();
  return useQuery(queryKey, fetchItems, {
    refetchOnWindowFocus: false
  });
};


export default useItemsQuery;
