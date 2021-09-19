import "./App.css";
import { useEffect, useState } from "react";

function App() {
    return (
        <div className="App">
            <LoadUsers />
        </div>
    );
}

function LoadUsers() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, []);

    return (
        <div className="load-data">
            {/* <h1>Users Loaded:{user.length}</h1> */}
            {user.map((p) => (
                <UserDetails name={p.name} email={p.email}></UserDetails>
            ))}
        </div>
    );
}

function UserDetails(props) {
    return (
        <div class="user-details">
            <p>Name: {props.name}</p>
            <h4>Email: {props.email}</h4>
        </div>
    );
}

export default App;
