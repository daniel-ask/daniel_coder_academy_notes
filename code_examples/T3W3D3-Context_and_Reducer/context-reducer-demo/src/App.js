import './App.scss';
import { ThemeProvider } from './contexts/TestContext';
import Nav from './components/Nav';
import Main from './components/Main'

function App() {
  return (
    <ThemeProvider>
      <Nav/>
      <Main />
    </ThemeProvider>
  );
}

export default App;
