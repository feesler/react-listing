import './App.css';
import Listing from './components/Listing/Listing.jsx';
import jsonData from './esty.json';

function App() {
  const items = (typeof jsonData === 'string')
    ? JSON.parse(jsonData)
    : jsonData;

  return (
    <Listing items={items}/>
  );
}

export default App;
