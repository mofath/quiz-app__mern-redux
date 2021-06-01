import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing, Result, Quiz } from './Screens'
import Layout from './Layout';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/quiz' exact ><Quiz /></Route>
          <Route path='/result' exact ><Result /></Route>
          <Route path='/' exact><Landing /></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
