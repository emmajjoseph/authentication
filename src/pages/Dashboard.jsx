import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <h2>Welcome, {user.name}</h2>
        
        <p>This is your protected dashboard area</p>
      </div>
    </div>
  );
}

export default Dashboard;