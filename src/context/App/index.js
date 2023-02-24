import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext([]);

function AppProvider({ children }) {

    const [show, setShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleSidebar = () => {
        setShow(!show);
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);



    const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const total = Number(totalPrice.toFixed(2));

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }

    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    return (
        <AppContext.Provider value={[{ onAdd, onRemove, total, cartItems, show, toggleSidebar }]}>
            {children}
        </AppContext.Provider>
    )
};

const useAppContext = () => {
    const appsContext = useContext(AppContext);
    return appsContext
}

export { useAppContext, AppProvider }