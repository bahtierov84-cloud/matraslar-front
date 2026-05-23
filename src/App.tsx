
import Header from "./section/header/header";
import Intro from "./section/intro/intro";
import Nav from "./section/nav/nav";
import "./App.css";
import Stats from "./section/stats/stats";
import Product from "./section/products/product";
import Discount from "./section/discount/discount";
import Ingredient from "./section/ingredient/ingredient";
import About from "./section/rectangle/rect";
import Adv from "./section/advantages/adv";
import Add from "./section/address/add";
import Info from "./section/info/info";
import Footer from "./section/footer/footer";

const App = () => {
    return (
        <div className='App'>
            <Nav />
            <Header />
            <Intro />
            <Stats />
            <Product />
            <Discount />
            <Ingredient />
            <About />
            <Adv />
            <Add />
            <Info />
            <Footer /> 
            
        </div>
    );
};
export default App;
