import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './components/landingPage';
import searchComponent from './components/search';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/scanpage" component={LandingPage} />
        <Route path="/search" component={searchComponent} />
      </Switch>
    </Router>
  );
}

export default App;
