import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main container">
        <Aside additionalClass="item--box-shadow"/>
        <Profile/>
      </main>
    </div>
  );
}

export default App;
