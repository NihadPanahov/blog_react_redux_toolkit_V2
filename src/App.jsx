import './App.scss';
import Header from './components/header/Header';
import MyRoutes from './components/layout/MyRoutes';
import { Counter } from './Counter';

function App() {
  return (
    <>
      <Header/>
      <MyRoutes/>

      {/* <Counter/> */}
    </>
  );
}

export default App;
