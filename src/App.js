import './App.css';
import Header from "./components/Header";

function App() {
  var user = {
    name: "Shreya",
    age: 20,
    hometown: "farukabad",
    href: "https://www.apple.com/"
  };

  var user2 = {
    name: "meenax",
    age: 31,
    hometown: "United Kingdom",
    href: "https://www.apple.com/"
  };

  return (
    <div className="App">
      <Header name = "Bucchi Jha" href="https://www.apple.com/" year="2001" user={user} />
      <Header name="Dhinchak pooja" href="https://www.google.com/" year="1997" user2={user2} />
      
    </div>
    
  );
}

export default App;