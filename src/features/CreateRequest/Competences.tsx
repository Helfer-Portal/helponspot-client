import React, { useState } from "react";
import Modal from "react-modal";
import CheckboxButton from "../../components/CheckboxButton";
import {
  RequestFormContext,
  RequestForm,
} from "../../context/RequestFormStore";
import { Skill } from "../../repository/model/helprequest";
import { ButtonPrimaryBlue, ButtonTertiaryPlus } from "../../components/UiKit";
import RepositoryImpl from "../../repository/repository";
import Skeleton from "react-loading-skeleton";
import { HelperOnBoardingStore } from "../../context/LocationContext";
import ButtonPrimaryGreen from "../../components/UiKit/ButtonPrimaryGreen";

let repository = new RepositoryImpl();

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

export interface CompetencesSelectorProps {
  defaultColorButtons: string;
  /** The component can use a passed context */
  storeSelectedInThisContext?: [HelperOnBoardingStore, () => void];

  preSelectedSkills?: Skill[];
}

/** competence componente with add function */

export default function Competences(props: CompetencesSelectorProps) {
  /** state holds mock competences */
  const defaultButtonColor = props.defaultColorButtons;

  /** options holds all available skills */
  const [options, setOptions] = useState<Skill[]>([]);

  /** indicates if still loading data from api */
  const [loading, setLoading] = useState<boolean>(false);

  /** holds all the data from the new request form */
  let [data, setData] = React.useContext<RequestForm | any>(RequestFormContext);

  // if we pass a specific context through props use this instead
  if (props.storeSelectedInThisContext) {
    [data, setData] = props.storeSelectedInThisContext;
  }

  // should modal be displayed?
  const [modalIsOpen, setIsOpen] = useState(false);

  /** state holds the new competence input */
  const [value, setValue] = useState("");

  /** initial side effect - called on the first render */
  React.useEffect(() => {
    /** initialises the data from api */
    (async () => {
      try {
        setLoading(true);
        let qualifications: Skill[] = await repository.getQualifications();
        await setOptions(qualifications);

        // default displayed competences
        let displayed_competences: Skill[];

        if (data.added_competences != null) {
          displayed_competences = data.added_competences;
        } else {
          displayed_competences = [qualifications[0]];
        }

        setData({ ...data, added_competences: displayed_competences });
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (props.preSelectedSkills) {
      setData({ ...data, added_competences: props.preSelectedSkills });
    }
  }, [props.preSelectedSkills]);

  /**
   * returns a Skill object with the searched name, if it is present in the given array
   * returns undefined if not found
   * @param name
   * @param skills
   */
  const searchSkillByName = (
    name: string,
    skills: Skill[]
  ): Skill | undefined => {
    let res = skills.map((el) => el.name == name).indexOf(true);

    if (res < 0) {
      return undefined;
    } else {
      return skills[res];
    }
  };

  /**
   * given a compentence string from the Interface this method searchs
   * for the corresponing Skill object because we will need the sills
   * key later on
   * @param competence
   */
  const addCompetence = (competence: string): void => {
    let new_competence = searchSkillByName(competence, options);

    /* if new competence is undefinded, the skill is not in options */
    if (new_competence) {
      let new_options: Skill[];
      if (data.added_competences != null) {
        /** is this already selected? */
        let res: boolean[] = data.added_competences.map(
          (el) => el.id == new_competence.id
        );
        if (res.indexOf(true) < 0) {
          new_options = [...data.added_competences, new_competence];
        } else {
          return;
        }
      } else {
        new_options = [new_competence];
      }
      setData({ ...data, added_competences: new_options });
    }
  };

  /**
   * This function is async, as we need to set the context and then update the
   * rendered Checkboxes.
   * @param e event
   * @param text TODO: This should be a Skill type in future
   */
  const selectCompetence = async (
    e: React.FormEvent<HTMLInputElement>,
    skill: Skill
  ): Promise<void> => {
    try {
      if (!data.selected_competences) data.selected_competences = [];
      switch (e.currentTarget.checked) {
        case true:
          await setData({
            ...data,
            selected_competences: [...data.selected_competences, skill],
          });
          break;
        case false:
          let newArray = data.selected_competences.filter((el: Skill) => {
            return el.name != skill.name;
          });
          await setData({ ...data, selected_competences: newArray });
          break;
        default:
          throw new Error("function should not be called now");
      }
    } catch (err) {
      console.log(err);
    }
  };

  /** this should be somehow nicer via id or so */
  const isCompetenceSelected = (text: string): boolean => {
    console.log("searching for ", text, "in ", data.selected_competences);
    if (data.selected_competences) {
      let position = data.selected_competences
        // TODO: Match competences via. ID
        .map((el: Skill) => {
          return el.name === text;
        })
        .indexOf(true);
      console.log(position);
      return position < 0 ? false : true;
    } else {
      return false;
    }
  };

  //keep Options in sync with data
  React.useEffect(() => {
    // prevent adding undefined when added_competences is empty. TODO: initialize data.added_competences with []
    let added_competences =
      data.added_competences != null ? data.added_competences : [];
    // setOptions([...options, added_competences]);
  }, [data.added_competences]);

  /** Function belonging to modal */

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
    <div className="flex flex-col w-full">
      <div>
        {loading && <Skeleton count={4} />}
        {/* when competences are loaded display them */}
        {!loading &&
          data.added_competences &&
          data.added_competences.map((entry, i) => (
            <CheckboxButton
              key={i}
              id={entry.id}
              identifier={entry.key}
              color={defaultButtonColor}
              text={entry.name}
              addToSelectedSkills={selectCompetence}
              isCompetenceSelected={isCompetenceSelected}
            />
          ))}
      </div>
      <div className="flex flex-row w-full ">
        {/* <div
          onClick={openModal}
          className="px-2 rounded-full border-2 text-center align-center border-figmaMenu"
        >
          +
        </div>
        <div
          className="underline font-inter text-figmaSubHead font-bold ml-1"
          onClick={openModal}
        >
          Kompetenzen hinzufügen
        </div> */}
        <ButtonTertiaryPlus onClick={openModal}>
          Kompetenz hinzufügen
        </ButtonTertiaryPlus>
      </div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="p-4 flex flex-col">
          <div className="font-dm-sans font-bold">Neue Kompetenz eingeben</div>
          <div className="p-4 flex flex-col">
            <form className="" onSubmit={handleSubmit}>
              <label>
                Kompetenz
                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder={"Kompetenz"}
                  className="m-4"
                  data-testid="skill-input"
                />
                <div className="flex flex-col">
                  {options.map((el, i) => (
                    <ButtonPrimaryGreen
                      key={i}
                      children={el.name}
                      onClick={() => {
                        addCompetence(el.name);
                      }}
                    />
                  ))}
                </div>
              </label>
              <br />
              <ButtonPrimaryBlue onClick={closeModal}>
                Abbrechen
              </ButtonPrimaryBlue>
              <ButtonPrimaryBlue>Hinzufügen</ButtonPrimaryBlue>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
