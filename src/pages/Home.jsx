import { useAuth } from '../context/AuthContext';

function Home() {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Welcome</h1>
      <p>This is the home page - accessible to everyone</p>
      {user && <p>Hello, {user.name}!</p>}
    </div>
  );
}

export default Home;