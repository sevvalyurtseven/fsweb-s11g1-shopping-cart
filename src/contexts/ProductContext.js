import { createContext } from "react";

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState();
    return (
        <ProductsContext.Provider value = {products}>
            {children}
        </ProductsContext.Provider>
    )
};

export const ProductContext = createContext();

export default ProductContextProvider();