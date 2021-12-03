import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="logo">
      <Link className="link" to="/">
        <img src="image/icon/Group 64.png" alt="logo" />
      </Link>
      <img src="image/icon/Group 63.png" alt="user" />
    </div>
  );
}
