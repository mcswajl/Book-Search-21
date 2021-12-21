import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SearchBooks from './pages/SearchBooks';
// import SavedBooks from './pages/SavedBooks';
// import Navbar from './components/Navbar';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

// import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

function App() {
  
    return (
      <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
              <h1>GraphQL Library</h1>
            </div>
          </header>
          <div className="container">
           
          </div>
        </div>
      </ApolloProvider>

    //   return (
    // <Router>
    //   <>
    //     <Navbar />
    //     <Switch>
    //       <Route exact path='/' component={SearchBooks} />
    //       <Route exact path='/saved' component={SavedBooks} />
    //       <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
    //     </Switch>
    //   </>
    // </Router>
      
  );
}

export default App;
