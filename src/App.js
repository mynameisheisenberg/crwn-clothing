import Home from "./routes/home/home.component";
import { Routes,Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignInPage from "./routes/sign-in-page/sign-in-page.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  return(<Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/sign-in" element={<SignInPage/>}/>
          <Route path="/checkout" element={<Checkout/>} />
        </Route>
        </Routes>)
};

export default App;
