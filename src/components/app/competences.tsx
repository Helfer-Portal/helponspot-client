import React, { useState } from "react";
import Modal from "react-modal";
import CheckboxButton from "../CheckboxButton";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#EAF3FF",
  },
};

const options_list = [
  "super",
  "Plasma",
  "Führerschein",
  "medizinische Grundausbildung"
];

/** competence componente with add function */
export default function Competences() {
  /** state holds mock competences */
  const [options, setOptions] = useState(options_list);

  const [modalIsOpen, setIsOpen] = useState(false);

  /** state holds the new competence input */
  const [value, setValue] = useState("");

  const addCompetence = (competence: string) => {
    let new_options = [...options, competence];
    setOptions(new_options);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    if (value !== "") {
      addCompetence(value);
    }

    event.preventDefault();
    closeModal();
  }

  /** on input of new competence */
  function handleChange(event: React.FormEvent<HTMLInputElement>): void {
    setValue(event.currentTarget.value);
  }

  return (
    <div className="flex flex-col w-1/2">
      <div>
        {options.map(entry => (
          <CheckboxButton text={entry} />
        ))}
      </div>
      <div className="flex flex-row ">
        <div
          onClick={openModal}
          className="w-8 rounded-full border-2 text-center align-center border-figmaMenu"
        >
          {" "}
          +{" "}
        </div>
        <div
          className="underline font-inter text-figmaSubHead font-bold"
          onClick={openModal}
        >
          Kompetenzen hinzufügen
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="p-4 flex flex-col">
          
          <div className="font-dm-sans font-bold">Neue Kompetenz eingeben</div>
          <div className="p-4 flex flex-col">
            <form className="gradient" onSubmit={handleSubmit}>
              <label>
                Kompetenz 
                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder={"Kompetenz"}
                  className="m-4"
                />
              </label>
              <br />
              <button className="unlimited" onClick={closeModal}>Abbrechen</button>
              <input className="unlimited" type="submit" value="Hinzufügen" />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
