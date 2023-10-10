import { GifExpertApp } from './GiftExpertApp';
import { GifGrid } from './components/GifGrid';

function App() {
  return (
    <div className="App">
      <GifExpertApp />
      <GifGrid category="cats" />
    </div>
  );
}

export default App;
