import Login from "./Login.jsx";
import UserDetails from "./Details";

function App() {
  const userInfo = {
    userName: "minhthangtran",
    email: "thang@",
    phone: "0354678876",
  };
  return (
    <>
      <div className="Container" style={{ marginLeft: "600px" }}>
        <Login />
      </div>
      <hr></hr>
      <div className="Container" style={{ marginLeft: "600px" }}>
        <UserDetails info={userInfo} />
      </div>
    </>
  );
}

export default App;