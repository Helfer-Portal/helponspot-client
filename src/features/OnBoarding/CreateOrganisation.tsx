import React from "react";
import { useForm } from "react-hook-form";

import ButtonWithLink from "../../components/ButtonWithLink";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import InputWithLabel from "../../components/UiKit/InputWithLabel";
import BackButton from "../../components/BackButton";
import { OrgBoardingPostStoreContext } from "../../context/OrgBoardingPostStore";
import { InputWithIcon, ButtonPrimaryOrange } from "../../components/UiKit";

type Inputs = {
  name: string;
};

export default function CreateOrganisation() {
  const [orgPostData, setOrgPostData] = React.useContext(
    OrgBoardingPostStoreContext
  );
  const storeAlteredName = async (inputs: Inputs): Promise<void> => {
    if (inputs.name) {
      await setOrgPostData({ ...orgPostData, name: inputs.name });
    }
    alert("Danke!");
    return;
  };
  const { handleSubmit, register, reset, errors } = useForm<Inputs>();
  return (
    <div className="flex flex-col w-full h-full px-8 py-4 bg-bluePrimary">
      <div style={{ flex: 1 }} className="flex w-full">
        <BackButton />
      </div>
      <div style={{ flex: 2 }}>
        <QuestionWithLabel
          question="Hi, wie heißt deine Organisation"
          label="Schritt 1 von 3"
        />
      </div>
      <form style={{ flex: 5 }} onSubmit={handleSubmit(storeAlteredName)}>
        <div
          style={{ flex: 5 }}
          className="flex flex-col mb-4 justify-start items-start w-full"
        >
          <div style={{ flex: 1 }} className="my-2 w-full">
            <InputWithLabel
              placeholder={"z.B. DRK Berlin"}
              name="name"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "invalid name",
                },
              })}
            />
          </div>
          <div>{errors.name && errors.name.message}</div>
          <div style={{ flex: 1 }} className="w-full">
            <ButtonPrimaryOrange type="submit">Bestätigen</ButtonPrimaryOrange>
          </div>
        </div>
      </form>

      <div style={{ flex: 1 }} className="w-full">
        <ButtonWithLink
          className="w-full flex justify-center"
          children="Weiter"
          link="/app/organisation/createOrganisation/standort/"
        />
      </div>
    </div>
  );
}
