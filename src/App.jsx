import LandingPage from "./components/LandingPage";
import Load from "./components/Load";
import Navbar from "./components/Navbar";
import Fleet from "./components/Fleet";
import OurValues from "./components/OurValues";
import Testing from "./components/Testing";
import ShipForm from "./components/ShipForm";
import Footer from "./components/Footer";

function App(){
    return(
        <div>
            <Navbar></Navbar>
            <LandingPage></LandingPage>
            <Load></Load>
            <Fleet></Fleet>
            <OurValues></OurValues>
            <ShipForm></ShipForm>
            <Footer></Footer>
        </div>
    );
}

export default App;