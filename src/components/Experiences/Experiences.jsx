import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ScrollToTop from "react-scroll-to-top";
import "react-vertical-timeline-component/style.min.css";
import "./Experiences.css";

const Experiences = () => {
  return (
    <div className="Experiences-container">
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#45566c", outline: "none" }}
      />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#2F435E",
            color: "#fff",
            widht: "200px",
            height: "150px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #2F435E" }}
          date="Aout 2020 - present"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          // icon={WorkIcon}
        >
          <h3 className="vertical-timeline-element-title">
            Développeur Web Fullstack
          </h3>
          <h2 className="vertical-timeline-element-subtitle">Bordeaux</h2>
          <p>Création d'applications Web avec ReactJs et NodeJs</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2F435E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2F435E" }}
          date="Février 2020-Juillet 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={}
        >
          <h3 className="vertical-timeline-element-title">
            Etudiant Wild Code School
          </h3>
          <h2 className="vertical-timeline-element-subtitle">Bordeaux</h2>
          <p>Apprentissage de Javascript sur les frameworks React et NodeJS</p>
          <p>Hooks, Redux, react-router-dom, Express</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2F435E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2F435E" }}
          date="Octobre 2011-Novembre 2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Conseiller commercial
          </h3>
          <h2 className="vertical-timeline-element-subtitle">
            Crédit Agricole d'Aquitaine
          </h2>
          <p>Gestion de portefeuille client</p>
          <p>Montage et réalisation de prêts habitat et consommation</p>
          <p>Accompagnement et formation des nouveaux entrants</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010-2011"
          contentStyle={{ background: "#2F435E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2F435E" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">IF2E</h3>
          <h2 className="vertical-timeline-element-subtitle">Bègles</h2>
          <p>Licence Européenne Patrimoine, assurances, banque</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009-2010"
          contentStyle={{ background: "#2F435E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2F435E" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">ESARC Evolution</h3>
          <h2 className="vertical-timeline-element-subtitle">Mérignac</h2>
          <p>BTS Banque option marché des particuliers</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#2F435E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2F435E" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Baccalauréat STG option Gestion des Systèmes d'Information
          </h3>
          <h2 className="vertical-timeline-element-subtitle">Pau</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          // icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experiences;
