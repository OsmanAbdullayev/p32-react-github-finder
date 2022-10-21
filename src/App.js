import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <Search />
      <UserList />
      </div>
    </div>
  );
}

export default App;
