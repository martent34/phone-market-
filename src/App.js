import { CartProvider } from "react-use-cart";
import AllHome from "./home/AllHome";



function App() {
  return (
    <CartProvider>
      <AllHome/>
    </CartProvider>
  );
}

export default App;
