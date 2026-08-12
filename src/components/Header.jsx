import { Link } from "react-router";

function Header({ title }) {
  return (
    <header className="flex justify-between p-1 bg-blue-300">
      <h1 className="flex justify-center items-center text-2xl font-bold">{title}</h1>
      <nav className="flex justify-center items-center">
        <ul className="list-none flex gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/counter"}>Counter</Link>
          </li>
          <li>
            <Link to={"/product"}>Product Data</Link>
          </li>
          <li>
            <Link to={"/pokemon"}>Pokemon Data</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
