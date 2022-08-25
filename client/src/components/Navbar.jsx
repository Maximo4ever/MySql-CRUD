import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-zinc-700 text-white flex justify-between px-10 py-2 ">
      <Link to="/" className="font-bold">
        <h1>React MySql</h1>
      </Link>
      <ul className="flex gap-x-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create task</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
