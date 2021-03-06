import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
      <div className="app">
        <Router>
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                </Route>
              </Switch>
            </AppBody>
          </>
        </Router>
      </div>
  );
}

export default App;

const AppBody = styled.div`
 display: flex;
 height: 100%;
`;
