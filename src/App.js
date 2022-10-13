import './App.css';
import Home from "./Components/Home";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "./config/apollo-client"

const client = getApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
