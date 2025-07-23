import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.Pi) {
      window.Pi.init({ version: "2.0" });

      window.Pi.authenticate(['username'], (err, authResult) => {
        if (err) {
          console.error('Login failed:', err);
        } else {
          console.log('Login success!', authResult);
          alert('Welcome, ' + authResult.user.username + '!');
        }
      });
    } else {
      console.warn("Pi SDK not found");
    }
  }, []);

  return (
    <div>
      <h1>Welcome to My Pi App</h1>
    </div>
  );
}

export default App;