import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { PiPlantFill } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import "./Login.scss";

export default function Login() {
  const [loginData, setLoginData] = useState({
    firstname: "",
    alias: "",
  });

  const handleChangeData = (event) => {
    setLoginData((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  };
  // const [createdUserId, setCreatedUserId] = useState(null);

  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/user`, loginData)
      .then(() => {
        // const userId = response.data.id;
        // setCreatedUserId(userId);
        navigate("/chooseplant");
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
            <input
              id="firstname"
              type="text"
              placeholder="Angélique ..."
              name="firstname"
              value={loginData.firstname}
              onChange={handleChangeData}
            />
          </div>
          <div className="input-alias-login">
            <label htmlFor="alias">
              <PiPlantFill /> Choisis un pseudo !
            </label>
            <input
              id="alias"
              type="text"
              placeholder="Angel59 ..."
              name="alias"
              value={loginData.alias}
              onChange={handleChangeData}
            />
          </div>
        </div>
        <button type="button" className="btn-login" onClick={handleLoginSubmit}>
          VALIDER
        </button>
      </form>
    </div>
  );
}
