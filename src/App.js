import React from "react";
import Text from "./component/Text";
import Image from "./component/Image";
import Header from "./component/Header";
import Sectionsmall from "./component/Sectionsmall";
import SectionBig from "./component/SectionBig";
import Footer from "./component/Footer";

// const App = ()=> <div>
//             <h1>Hello World</h1>
//             <Text/>
//              <Image/>
//             </div>;
// const App = ()=> <React.Fragment>
//             <h1>Hello World</h1>
//               <Text/>
//              <Image/>
//             </React.Fragment>;

//Zapis skrócony React.Fragment

const App = () => (
  <>
    <Header />
    <Sectionsmall title="Sekcja 1" />
    XXXXXX
    <SectionBig title="Sekcja 2" />
    <Footer />
  </>
);

export default App;
