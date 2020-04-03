import React from "react";
import SpeechBubble from "./components/speech-bubble";
import ShortP from "./components/short-p";
import Footer from "../landing-page/components/footer";

const aboutUsHeadline = "...wer oder was seid ihr eigentlich?";

const speechBubbles = [
  {
    title: "Das Problem",
    p:

      "Durch Krisen kommen Gesundheitssysteme und andere versorgungsrelevante Bereiche an die Grenzen ihrer Kapazitäten. Insbesondere für das Personal wird dann zeitnah Unterstützung benötigt. " +
        "Doch bisher haben die Institutionen wenig Möglichkeiten, schnell und unkompliziert Helfer:innen zu finden und zu kontaktieren. Gleichzeitig wollen die Menschen zwar ihren Beitrag leisten, fühlen sich aber häufig nutzlos, wenn sie gar nicht oder nur ineffizient als Helfende vermittelt werden.\n"
  },
  {
    title: "Unsere Lösung",
    p:
      "HelpOnSpot ist die zentrale Anlaufstelle, um Helfende gemäß ihrer Kompetenzen und der Anforderungen der Institutionen zu vermitteln. Die hilfesuchenden Institutionen können dann über HelpOnSpot in Echtzeit die Anzahl der verfügbaren Hilfskräfte einsehen, entsprechend der benötigten Tätigkeiten und Qualifikationen filtern, und sie direkt über die App kontaktieren.\n"
  }
];

const descriptionsHeadlines = ["Für wen wurde HelpOnSpot entwickelt?", "Wer ist das Team hinter HelpOnSpot?\n", ];

const descriptions = [
  {
    title: "Institutionen, die Unterstützung brauchen, um eine funktionierende Infrastruktur zu gewährleisten\n",
    p:


      "Hilfsorganisationen\n" +
        "Institutionen des Gesundheitswesens\n" +
        "Pflege (z.B. Pflegeeinrichtungen, ambulante Pflegedienste, betreutes Wohnen)\n" +
        "Medizin (z.B. Krankenhäuser, Rettungsdienste, Corona-Teststellen, Apotheken)\n" +
        "Verwaltung und Öffentlicher Dienst\n" +
        "Systemrelevante Infrastruktur\n"
  },
  {
    title: "Helfende, die sich in Krisensituationen engagieren möchten",
    p:
        "Jeder in Bevölkerung, der helfen möchte, kann sich registrieren. Medizinische Vorkenntnisse sind nicht nötig, um in einer Krise einen Beitrag zu leisten, im Gegenteil - jede helfende Hand kann einen Teil dazu beitragen, die Versorgung der Menschen aufrecht zu erhalten.\n"
  },
  {
    title: "Wie alles begann?",
    p:
      "Während des WirVsVirus-Hackathons der Bundesregierung vom 20.-22. April 2020 entstand eine erste Version von HelpOnSpot. Seitdem haben wir uns mit anderen Initiativen zusammengeschlossen, um ein zentrale Plattform zu entwickeln und wirklich einen gesellschaftlichen Mehrwert zu schaffen. Wir sind ein großes Team aus Entwicklern, Designern, Strategen, Projektmanagern und Kommunikationsexperten aus verschiedenen Branchen und mit unterschiedlichem beruflichen Background. Zusammen verfügen wir also über alle notwendigen Kompetenzen, um HelpOnSpot auch langfristig immer weiter zu entwickeln und anzupassen.\n"
  },

  {
    title: "Was zeichnet uns aus?",
    p:
      "Gerade in Krisensituationen halten die Menschen zusammen, sowohl wir im Team hinter HelpOnSpot als auch in der Gesamtbevölkerung. Deshalb möchten wir mit HelpOnSpot eine Plattform zur Verfügung stellen, die genau diesen Zusammenhalt auch dann ermöglicht, wenn es um die Aufrechterhaltung der systemrelevanten Versorgungsstrukturen geht. Für dieses Ziel werden wir immer weiter arbeiten und HelpOnSpot immer weiter verbessern.\n"
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
            HelpOnSpot ist eine praktische Lösung, um Menschen und Institutionen im Umgang mit Krisen zu helfen.
            Indem engagierte Hilfskräfte schnell und unkompliziert genau dorthin vermittelt werden, wo man Unterstützung braucht,
            wird personellen Versorgungsengpässen entgegengewirkt.
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
        <div className="mb-8 flex flex-row text-center flex-custom">
          <h1 className="my-4 w-1/2 text-lg leading-tight text-figmaHead font-dm-sans-h2 pr-3">{descriptionsHeadlines[0]}</h1>
          <h1 className="my-4 w-1/2 text-lg leading-tight text-figmaHead font-dm-sans-h2"pl-3>{descriptionsHeadlines[1]}</h1>
        </div>

        <div className="px-3 flex flex-row">
          <div className="w-1/2">
            <div>
              <ShortP title={descriptions[0].title} p={descriptions[0].p} />
            </div>
            <div>
              <ShortP title={descriptions[1].title} p={descriptions[1].p} />
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
