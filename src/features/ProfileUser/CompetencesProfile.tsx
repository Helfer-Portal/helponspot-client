import React, { useState } from "react";
import Modal from "react-modal";
import CheckboxButton from "../../components/CheckboxButton";
import {
  RequestFormContext,
  RequestForm,
} from "../../context/RequestFormStore";
import { Skill, UserInfo } from "../../repository/model/helprequest";
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

  userInfo: Partial<UserInfo>;
}

/** competence componente with add function */

export default function Competences(props: CompetencesSelectorProps) {
  /** state holds mock competences */
  const defaultButtonColor = props.defaultColorButtons;

  /** options holds all available skills */
  const [options, setOptions] = useState<Skill[]>([]);

  /** indicates if still loading data from api */
  const [loading, setLoading] = useState<boolean>(true);

  const [isError, setIsError] = useState<boolean>(true);

  /** holds all the data from the new request form */
  let [data, setData] = React.useState<Partial<UserInfo>>(props.userInfo);

  // should modal be displayed?
  const [modalIsOpen, setIsOpen] = useState(false);

  /** state holds the new competence input */
  const [value, setValue] = useState("");

  const [shouldQualificationsPatch, setShouldQualificationsPatch] = useState<
    boolean
  >(false);

  /** initial side effect - called on the first render */
  React.useEffect(() => {
    /** initialises the data from api */
    (async () => {
      try {
        setLoading(true);
        setIsError(false);
        let qualifications: Skill[] = await repository.getQualifications();
        await setOptions(qualifications);

        if (qualifications instanceof Error) {
          throw new Error("Error loading qualifications");
        }

        // default displayed competences
        let displayed_competences: Skill[];

        if (props.userInfo.qualifications) {
          displayed_competences = props.userInfo.qualifications;
        } else {
          displayed_competences = [qualifications[0]];
        }
        setData({ ...props.userInfo, qualifications: displayed_competences });
        setLoading(false);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
    })();
  }, [props.userInfo]);

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
  const addCompetence = async (competence: string): Promise<void> => {
    let new_competence = searchSkillByName(competence, options);

    /* if new competence is undefinded, the skill is not in options */
    if (new_competence) {
      let new_options: Skill[];
      if (data.qualifications != null) {
        /** is this already selected? */
        let res: boolean[] = data.qualifications.map(
          (el) => el.id == new_competence.id
        );
        if (res.indexOf(true) < 0) {
          new_options = [...data.qualifications, new_competence];
        } else {
          return;
        }
      } else {
        new_options = [new_competence];
      }
      await setData({ ...data, qualifications: new_options });
      setShouldQualificationsPatch(true);
    }
  };

  const removeCompetence = async (competenceName: string): Promise<Skill[]> => {
    let competenceToRemove = searchSkillByName(competenceName, options);

    try {
      if (competenceToRemove) {
        let new_options: Skill[];
        if (data.qualifications != null) {
          /** is this already selected? */
          let res: boolean[] = data.qualifications.map(
            (el) => el.id == competenceToRemove.id
          );
          if (res.indexOf(true) < 0) {
            throw new Error("The competence you want to remove does not exist");
          } else {
            new_options = data.qualifications.filter(
              (skill) => skill.id != competenceToRemove.id
            );
          }
        }
        await setData({ ...data, qualifications: new_options });
        console.log(data);
        setShouldQualificationsPatch(true);
        return new_options;
      }
    } catch (err) {
      // TODO error handling
    }
  };

  React.useEffect(() => {
    console.log("qualifications changed");
    console.log(data);
    console.log("trying to patch new selection to api");
    (async () => {
      try {
        let res = await repository.patchUserInfo(data as UserInfo);
        console.log("response: ", res);
      } catch (err) {
        console.log(err);
        alert("Sorry, please try again");
      }
    })();
  }, [shouldQualificationsPatch]);

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
          isError === false &&
          data.qualifications.map((entry, i) => (
            <div key={i} className="inline-flex">
              <div className="inline-flex">
                <button onClick={() => removeCompetence(entry.name)}>-</button>
              </div>
              <div className="inline-flex">
                <CheckboxButton
                  key={i}
                  id={entry.id}
                  identifier={entry.key}
                  color={defaultButtonColor}
                  text={entry.name}
                />
              </div>
            </div>
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
                  {options.map &&
                    options.map((el, i) => (
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
