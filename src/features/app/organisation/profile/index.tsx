import * as React from "react"; // we need this to make JSX compile

type ProfileViewProps = {};

/** Profile view of organisation story */
const ProfileView = (props: ProfileViewProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex w-full">
        <h1 className="question font-dm-sans-h1">Dein Profil</h1>
      </div>

      {/* Image, Title, Location */}
      <AvatarTitleView
        image={""}
        title={"DRK Berlin"}
        location={"Musterstraße 24, Berlin"}
      />

      {/* Paragraph */}
      <div className="flex flex-col my-4">
        <Subheading children={"Informationen"} />
        <div className="font-inter text-figmaParagraph text-sm">
          TextDas DRK hilft Menschen in Not. Hierfür sind wir dringend auf
          Unterstützung angewiesen. Werden Sie Lebensretter!
        </div>
      </div>

      {/* Kontaktdaten */}
      <div className="flex flex-col w-full">
        <Subheading>Kontaktdaten</Subheading>
        <ContactInput placeholder={"drk@berlin.de"} />
        <ContactInput placeholder={"drk@berlin.de"} />
      </div>

      {/* Account verwalten */}
      <div className="flex flex-col w-full">
        {/* Ausloggen */}
        <div className="py-2 flex w-full justify-center">
          <button className="flex-1 unlimited ml-0">Ausloggen</button>
        </div>

        {/* Löschen */}
        <div className="py-2 flex w-full justify-center">
          <button className="flex-1 bg-white text-figmaDescription border-figmaDescription border-2 rounded-full py-1 px-3">
            <span>Account löschen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

type AvatarTitleViewProps = {
  image: any;
  title: string;
  location: string;
};

const AvatarTitleView = ({ image, title, location }: AvatarTitleViewProps) => {
  return (
    <div className="flex w-full">
      <div className="bg-black min-w-4">{/* Bild */}Bild</div>
      <div className="flex flex-col ml-4">
        {/* Title and Location */}
        <div className="font-dm-sans text-figmaDescription font-bold">
          {title}
        </div>
        <div className="font-inter text-figmaParagraph text-sm">
          <span role={"img"} aria-label={"Standort"}>📍</span> {location}
        </div>
      </div>
    </div>
  );
};

const Subheading = ({ children }: { children: string }) => (
  <div className="uppercase text-sm font-inter text-figmaParagraph p-1">
    {children}
  </div>
);

const ContactInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="flex flex-1 flex-row py-2 w-full">
      <div className="flex w-1/5">hi</div>
      <div className="mx-4 flex w-4/5">
        <input className="w-full" type="text" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default ProfileView;
