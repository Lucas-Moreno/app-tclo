import { Link } from "../composants";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      NotFound
      <Link underline="always" onClick={() => navigate("/signup")}>
        {"Pas de compte ? S'inscrire"}
      </Link>
    </div>
  );
}
