import Home from "./routes/home/home.component";
import { Routes,Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignInPage from "./routes/sign-in-page/sign-in-page.component";

const Shop = () =>{
  
  return(<div>
    <h2>This is the shop page</h2>
  </div>)
}
const App = () => {
  return(<Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/sign-in" element={<SignInPage/>}/>
        </Route>
        </Routes>)
};

export default App;
