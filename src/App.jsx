import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const loginWithPi = async () => {
      if (window?.Pi) {
        try {
          const scopes = ['username'];
          const result = await window.Pi.authenticate(scopes);
          setUsername(result?.user?.username);
          console.log("Login successful:", result);
        } catch (error) {
          console.error("Login failed:", error);
        }
      } else {
        console.warn("Pi SDK not found");
      }
    };

    loginWithPi();
  }, []);

  return (
    <div style={{ padding: '2rem', fontSize: '1.5rem' }}>
      <h1>Welcome to My Pi App</h1>
      {username && <p>Hello, <strong>{username}</strong> 👋</p>}
    </div>
  );
}

export default App;