import Dashboard from './Screens/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'
// const { Button } = chakraTheme.components
import './App.css'

// const theme = extendBaseTheme();

function App() {
  return (
    <ChakraProvider>
      <Dashboard/>
    </ChakraProvider>
  );
}

export default App;
