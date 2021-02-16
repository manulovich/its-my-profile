import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div class="container">
          <div class="main__body">
            <Aside />
            <Profile/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
