import Home from "./routes/home/home.component";
import { Routes,Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import { signInWithGooglePopup } from "./utils/firebase/firebase.util";

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
          <Route path="/sign-in" element={<SignIn/>}/>
        </Route>
        </Routes>)
};

export default App;
