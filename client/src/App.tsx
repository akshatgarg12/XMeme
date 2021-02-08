import MemeContextProvider from './context/memeContextProvider'
import HomePage from './components/pages/home'

function App() {
  return (
    <MemeContextProvider>
      <HomePage />
   </MemeContextProvider>
  );
}

export default App;
