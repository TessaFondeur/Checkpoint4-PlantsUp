import React from "react";
import Modal from "react-modal";
import { PiPlantFill } from "react-icons/pi";
import "./ImageButton.scss";

export default function ImageButton() {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="container-plant-choice">
      <div className="card-button">
        <button className="btn-image" type="button" onClick={handleModalOpen}>
          <img
            className="image-plant"
            src="./src/assets/miplante3-removebg.png"
            alt="Plante mignonne"
          />
          <h3 className="title-plant-choice">Aspidistra</h3>
        </button>
      </div>
      <Modal
        className="modal-choice"
        isOpen={openModal}
        onRequestClose={handleModalClose}
        ariaHideApp={false}
      >
        <div className="modal-form-choice">
          <div className="title-modal">
            <h1>~ Quelle jolie plante ! ~</h1>
          </div>
          <form className="form-container-name">
            <div className="input-choice">
              <label htmlFor="nameplant">
                <PiPlantFill /> Quel nom souhaites-tu lui donner ?
              </label>
              <input
                id="nameplant"
                type="text"
                placeholder="ex : Mimi la Plante ..."
              />
            </div>
            <button className="btn-submit-choice" type="submit">
              GO !
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}