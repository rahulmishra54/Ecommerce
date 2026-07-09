import { createContext, useState } from "react";


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productAdded, setProductAdded] = useState(false);

  return (
    <ProductContext.Provider value={{ productAdded, setProductAdded }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;