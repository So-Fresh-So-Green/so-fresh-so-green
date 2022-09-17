import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import PlantShop from './pages/PlantShop';
import Newsfeed from './pages/Newsfeed';
import About from './pages/About';
import Post from './pages/Post'
import TestChat from './pages/TestChat/TestChat'
import UserProfile from './pages/UserProfile'
import UpdateProfile from './pages/UpdateProfile';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />

            {/* <TestChat /> */}

            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/success"
                element={<Success />}
              />
              <Route
                path="/orderHistory"
                element={<OrderHistory />}
              />
              <Route
                path="/products/:id"
                element={<Detail />}
              />
              <Route
                path="/plant-shop"
                element={<PlantShop />}
              />
              <Route
                path="/update-profile/:id"
                element={<UpdateProfile />}
              />
              <Route
                path="/profile/:id"
                element={<UserProfile />}
              />
              <Route
                path="/newsfeed"
                element={<Newsfeed />}
              />
              <Route
                path="/post/:postId"
                element={<Post />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/chat"
                element={<TestChat />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
