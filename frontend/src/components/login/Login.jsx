import { PiPlantFill } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import "./Login.scss";

export default function Login() {
  return (
    <div className="container-global-login">
      <form className="form-container-login">
        <h1>~ Enregistre-toi ! ~</h1>
        <p>
          <HiOutlineDotsHorizontal />
        </p>
        <div className="all-input-login">
          <div className="input-firstname-login">
            <label htmlFor="firstname">
              <PiPlantFill /> Quel est ton prénom ?
            </label>
            <input id="firstname" type="text" placeholder="Angélique ..." />
          </div>
          <div className="input-alias-login">
            <label htmlFor="alias">
              <PiPlantFill /> Choisis un pseudo !
            </label>
            <input id="alias" type="text" placeholder="Angel59 ..." />
          </div>
        </div>
        <button type="submit" className="btn-login">
          VALIDER
        </button>
      </form>
    </div>
  );
}
