import React from "react";
import "./CheckboxButton.css";

type CheckboxButtonProps = {
  color: string;
  text: string;
  /** A function which adds the selected Skill into the stored form datas selection */
  addToSelectedSkills?: (
    e: React.FormEvent<HTMLInputElement>,
    text: string
  ) => Promise<void>;
  /** a function which tells the componenten if it is contained in the selected competences */
  isCompetenceSelected?: (text: string) => boolean;
};

/**
 * If this Component gets a callback, it is called, when the value changes.
 * TODO: Don't pass the Skill value as string, insted, use the Skill type.
 * Therefore we need the Skills with ID from API
 * @param props
 */
const CheckboxButton = (props: CheckboxButtonProps) => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const color = props.color !== null ? props.color : "";

  let passSelectedSkill;
  if (props.addToSelectedSkills) {
    passSelectedSkill = async (e: React.FormEvent<HTMLInputElement>) => {
      if (props.addToSelectedSkills)
        await props.addToSelectedSkills(e, props.text);
      setChecked(!checked);
    };
  }

  // TODO: this hook runs on every render. this should be better.
  React.useEffect(() => {
    if (props.isCompetenceSelected) {
      // console.log("checking ", props.text);
      let status = props.isCompetenceSelected(props.text);
      // console.log(status);
      setChecked(status);
    }
  });

  return (
    <div
      style={{ position: "relative" }}
      className={`rounded-lg ${color}`}
      id="ck-button"
    >
      <label style={{ width: props.text.length * 11 + "px" }}>
        {/* If the functions are given, we want this behavoir */}
        {props.addToSelectedSkills && props.isCompetenceSelected ? (
          <>
            <input
              type="checkbox"
              checked={checked}
              onChange={passSelectedSkill}
            />
            <span>{props.text}</span>
          </>
        ) : (
          // else, we only render the box for styling
          <>
            <input type="checkbox" value="1" />
            <span>{props.text}</span>
          </>
        )}
      </label>
    </div>
  );
};

export default CheckboxButton;
