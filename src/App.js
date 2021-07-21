import './App.css';
import Header from "./components/Header";



function App() {
  var user = {
    name: "Shreya",
    age: 20
  };
  return (
    <div className="App">
      <Header name = "Bucchi Jha" year="2001" user={user} />
      <Header name = "dhinchak" year="2002"/>
      
    </div>
    
  );
}

export default App;