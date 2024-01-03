import './App.css';
import Benefit from './Components/Benefit';
import Description from './Components/Description';
import Faq from './Components/Faq';
import Feature from './Components/Feature';
import Figma from './Components/Figma';
import Header from './Components/Header';
import Journey from './Components/Journey';
import Layout from './layout';


function App() {
  return (
    <div >
      <Layout >

        <Header />
        <Description />
        <Feature />
        <Journey />
        <Benefit />
        <Figma />
        <Faq />

      </Layout>
    </div>
  );
}
export default App;

