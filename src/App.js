import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing, Search } from './pages';
import { BarCodeScanner } from './components';


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/gps" component={Search} />
      <Route path="/bar" component={BarCodeScanner} />
    </Switch>
  </Router>
  );
}

export default App;
