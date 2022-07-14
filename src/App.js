import { Footer, Gallery, Possibility, Features, About, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
     
    <Brand />
      <Features />
    <About />
    <Possibility />
    <CTA />
    <Gallery />
    <Footer />
  </div>
);

export default App;