import './App.css';
import Dashboard from './HOC/Dashboard';
import Profile from './HOC/Profile';
import Amap from './Pages/Amap';
import BCounter from './Pages/BCounter';
import Deventhand from './Pages/Deventhand';
import Ekeys from './Pages/Ekeys';
import Forms from './Pages/Forms';
import Gstyle from './Pages/Gstyle';
import Huseref from './Pages/Huseref';
import Iusestate from './Pages/Iusestate';
import Kusememo from './Pages/Kusememo';
import Lsearch from './Pages/Lsearch';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Amap />
      <BCounter />
      <Deventhand />
      <Ekeys />
      <Forms />
      <Gstyle />
      <Iusestate />
      <Huseref />
      <Kusememo />
      <Lsearch />
      <Profile />
      <Dashboard />
    </div>
  );
}

export default App;
