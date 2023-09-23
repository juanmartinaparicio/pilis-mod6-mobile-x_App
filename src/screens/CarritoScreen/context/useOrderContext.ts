import { useContext } from 'react';

import OrderContext from './OrderContext';

const useOrderContext = () => useContext(OrderContext);
export default useOrderContext;
