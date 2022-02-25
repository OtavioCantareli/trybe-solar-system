import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Missions from "./components/Missions";
import SolarSystem from "./components/SolarSystem";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <SolarSystem />
      <Missions />
    </ChakraProvider>
  );
}

export default App;
