import React from 'react';

import OrderContext from './OrderContext';
import useOrderHook from './useOrderHook';

interface Props {
  children: React.ReactNode;
}
export default function OrderProvider({ children }: Props) {
  const value = useOrderHook();
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}
