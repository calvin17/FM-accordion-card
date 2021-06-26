import React, { Fragment, useState } from "react";
import cardImageMobile from "../assets/images/illustration-woman-online-mobile.svg";
import cardImage from "../assets/images/illustration-woman-online-desktop.svg";
import cardBox from "../assets/images/illustration-box-desktop.svg";
import accordionList from "../data/accordionList";
import AccordionList from "./AccordionList";

function Accordion() {
  const [accordionState, setAccordionState] = useState(2);
  const [titleHoverState, setTitleHoverState] = useState(false);
  function toogleAccordion(id) {
    accordionState === id ? setAccordionState(null) : setAccordionState(id);
  }
  const changeBoxMove = () => {
    setTitleHoverState(!titleHoverState);
  };
  return (
    <Fragment>
      <img src={cardBox} alt="Card Box" className={`card-box ${titleHoverState && "active"}`} />

      <div className="accordion-card">
        <div className="card-img-container">
          <picture>
            <source media="(min-width:1060px)" srcSet={cardImage} />
            <source media="(min-width:360px)" srcSet={cardImageMobile} />
            <img src={cardImageMobile} alt="Flowers" className="card-img" />
          </picture>
        </div>

        <ul className="card-list">
          <h2 className="accordion-card-title">FAQ</h2>
          <AccordionList
            accordionList={accordionList}
            changeBoxMove={changeBoxMove}
            onMouseLeave={changeBoxMove}
            accordionState={accordionState}
            toogleAccordion={toogleAccordion}
          />
        </ul>
      </div>
    </Fragment>
  );
}

export default Accordion;
