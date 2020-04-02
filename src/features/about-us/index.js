import React from "react";
import SpeechBubble from "./components/speech-bubble";
import ShortP from "./components/short-p";
import Footer from "../landing-page/components/footer";

const aboutUsHeadline = "...wer oder was seid ihr eigentlich?";

const speechBubbles = [
  {
    title: "Das Problem",
    p:
      " In schwierigen Situationen sind wir alle aufeinander angewiesen. Egal ob nur schleppen oder medizinische Qualifikation. Wenn’s drauf ankommt hilft jede helfende Hand."
  },
  {
    title: "Unsere Lösung",
    p:
      "In schwierigen Situationen sind wir alle aufeinander angewiesen. Egal ob nur schleppen oder medizinische Qualifikation. Wenn’s drauf ankommt hilft jede helfende Hand."
  }
];

const descriptionsHeadline = "Und noch mehr Beschreibung";

const descriptions = [
  {
    title: "Organisationen, Vereine, Hilfesuchende.",
    p:
      "In schwierigen Situationen sind wir alle aufeinander angewiesen. Egal ob nur schleppen oder medizinische Qualifikation. Wenn’s drauf ankommt hilft jede helfende Hand."
  },
  {
    title: "Organisationen, Vereine, Hilfesuchende.",
    p:
      "In schwierigen Situationen sind wir alle aufeinander angewiesen. Egal ob nur schleppen oder medizinische Qualifikation. Wenn’s drauf ankommt hilft jede helfende Hand."
  },
  {
    title: "Organisationen, Vereine, Hilfesuchende.",
    p:
      "In schwierigen Situationen sind wir alle aufeinander angewiesen. Egal ob nur schleppen oder medizinische Qualifikation. Wenn’s drauf ankommt hilft jede helfende Hand."
  },
  {
    title: "Organisationen, Vereine, Hilfesuchende.",
    p:
      "In schwierigen Situationen sind wir alle aufeinander angewiesen. Egal ob nur schleppen oder medizinische Qualifikation. Wenn’s drauf ankommt hilft jede helfende Hand."
  }
];

export default function AboutUs(props) {
  return (
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap items-center ">
        <div class="flex  w-1/2 justify-center items-start md:text-left">
          <h1 class="my-4 text-lg leading-tight text-figmaHead font-dm-sans-h1">
            {aboutUsHeadline}
          </h1>
        </div>
        <div className="flex w-1/2 ">
          <p class="leading-normal text-figmaParagraph font-inter">
            HelpOn Spot ist die zentrale Anlaufstelle für Hilfesuchende und
            Helfer. Eine einfache, intuitive Bedienung sowie geringe
            Einstiegshürden ermöglichen eine schnelle Reaktion, wenn’s drauf
            ankommt.
          </p>
        </div>
      </div>

      <div class="container px-3 mx-auto flex flex-wrap items-start ">
            <div className="p-4 w-1/2">
              <SpeechBubble title={speechBubbles[0].title} p={speechBubbles[0].p} />
            </div>
            <div className="p-4 mt-16 w-1/2">
              <SpeechBubble title={speechBubbles[1].title} p={speechBubbles[1].p} />
            </div>
      </div>

      <div className="container px-3 mx-auto flex-col flex-wrap items-center ">
        <div className="mb-8 flex  text-center">
          <h1 className="my-4 text-lg leading-tight text-figmaHead font-dm-sans-h1">{descriptionsHeadline}</h1>
        </div>

        <div className="px-3 flex flex-row">
          <div className="w-1/2">
            <div>
              <ShortP title={descriptions[0].title} p={descriptions[0].p} />
            </div>
            <div>
              <ShortP title={descriptions[1].title} p={descriptions[2].p} />
            </div>
          </div>

          <div className="w-1/2 ">
            <div>
              <ShortP title={descriptions[2].title} p={descriptions[2].p} />
            </div>
            <div>
              <ShortP title={descriptions[3].title} p={descriptions[3].p} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
