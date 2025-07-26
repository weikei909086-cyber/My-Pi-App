import { useEffect, useState } from 'react';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (window.Pi) {
      window.Pi.init({ version: "2.0" });

      window.Pi.authenticate(['username'], (err, authResult) => {
        if (err) {
          console.error('Login failed:', err);
        } else {
          console.log('Login success!', authResult);
          setUsername(authResult.user.username); // ✅ Save username
        }
      });
    } else {
      console.warn("Pi SDK not found");
    }
  }, []);

  return (
    <div style={{ padding: '2rem', fontSize: '1.5rem' }}>
      <h1>Welcome to My Pi App</h1>
      {username && <p>Hello, <strong>{username}</strong> 👋</p>}
    </div>
  );
}

export default App;