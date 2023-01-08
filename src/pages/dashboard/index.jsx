import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="space-y-2 p-8">
      <p>Dashboard Page</p>
      <div className="space-x-2">
        <Link to="/register" className="px-4 py-2 rounded-lg bg-blue-200 border-2 border-black">
          Go To Register
        </Link>
        <Link to='/login' className="px-4 py-2 rounded-lg bg-blue-200 border-2 border-black">Go To Login</Link>
      </div>
    </div>
  );
}
