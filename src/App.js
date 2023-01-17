
import './App.css';

function App() {
  var count = 0;
  const increamentCount = () => {
    count++;
  };
  return (
    <div className="App">
      Button is pressed {count} times
      <p><button variant="text" onClick={() => increamentCount()}>Look here</button></p>
    </div>
  )
};

export default App;
