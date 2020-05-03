import React from "react";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import InputWithLabel from "../../components/UiKit/InputWithLabel";
import ButtonWithLink from "../../components/ButtonWithLink";
import BackButton from "../../components/BackButton";
import { useForm } from "react-hook-form";
import { ButtonPrimaryOrange } from "../../components/UiKit";
import { OrgBoardingPostStoreContext } from "../../context/OrgBoardingPostStore";
import { AuthorizationContext } from "../../context/AuthorizationStore";
import { PostOrganisation } from "../../repository/model/helprequest";
import RepositoryImpl from "../../repository/repository";
import { Redirect } from "react-router-dom";

let repository = new RepositoryImpl();

/** second Screen of User Story */

type Inputs = import("../../repository/model/helprequest").PostAddress;

export default function UpdateAddress() {
  const [orgPostData, setOrgPostData] = React.useContext(
    OrgBoardingPostStoreContext
  );
  const [authInfo, setAuthInfo] = React.useContext(AuthorizationContext);
  const { handleSubmit, register, reset, errors } = useForm<Inputs>();
  const [shouldRedirect, setRedirect] = React.useState<boolean>(false);
  const storeAlteredAddress = async (inputs: Inputs): Promise<void> => {
    if (inputs) {
      await setOrgPostData({ ...orgPostData, address: inputs });
    }
    alert("Danke!");
    return;
  };
  const postOrganisationData = async () => {
    let orgDataToStore: PostOrganisation = {
      ...orgPostData,
      logoPath: "lol",
    };
    try {
      let res = await repository.postOrganisation(orgDataToStore);
      setRedirect(true);
    } catch (err) {
      console.log(err);
      alert("something went wrong, sorry");
    }
  };
  React.useEffect(() => {
    setOrgPostData({ ...orgPostData, responsibles: [authInfo.useruuid] });
  }, [authInfo.useruuid]);
  return (
    <div className="flex flex-col w-full h-full px-8 py-4 bg-bluePrimary">
      <div style={{ flex: 1 }} className="flex w-full">
        <BackButton />
      </div>
      <div style={{ flex: 2 }}>
        <QuestionWithLabel
          question="Wo befindet ihr euch"
          label="Schritt 2 von 3"
        />
      </div>
      <div style={{ flex: 5 }} className="flex items-start">
        <form
          style={{ flex: 1 }}
          className="w-full"
          onSubmit={handleSubmit(storeAlteredAddress)}
        >
          <InputWithLabel
            placeholder={"Straße"}
            name="street"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: "invalid street",
              },
            })}
          />
          <InputWithLabel
            placeholder={"Hausnummer"}
            name="houseNumber"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[0-9]+$/i,
                message: "invalid Housenumber",
              },
            })}
          />
          <InputWithLabel
            placeholder={"Plz"}
            name="postalCode"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[0-9]+$/i,
                message: "invalid Postal number",
              },
            })}
          />
          <InputWithLabel
            placeholder={"Stadt"}
            name="city"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[a-zA-z]+$/i,
                message: "invalid Stadt",
              },
            })}
          />
          <InputWithLabel
            placeholder={"Land"}
            name="country"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[a-zA-z]+$/i,
                message: "invalid Land",
              },
            })}
          />
          <div className="my-2">
            <ButtonPrimaryOrange type="submit">Bestätigen</ButtonPrimaryOrange>
          </div>
        </form>
      </div>
      <div
        style={{ flex: 1 }}
        className="w-full"
        onClick={postOrganisationData}
      >
        <ButtonPrimaryOrange onClick={postOrganisationData}>
          Weiter
        </ButtonPrimaryOrange>
        {shouldRedirect && <Redirect to={"/app/organisation/profile"} />}
      </div>
    </div>
  );
}
