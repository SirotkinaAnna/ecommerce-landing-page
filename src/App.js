import Navigation from "./components/Navigation";
import { useState } from "react";
import Modal from "./components/Modal";
import MainContent from "./components/MainContent";
import OurCreations from "./components/Creations";
import Footer from "./components/Footer";
function App() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show)
    }
    return <div>
        <Navigation handleClick={handleClick} />
        {show && <Modal onClose={handleClick} />}
        <MainContent />
        <OurCreations />
        <Footer />
    </div>
}
export default App;