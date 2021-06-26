import React, { Fragment, useState } from "react";
import cardImageMobile from "../assets/images/illustration-woman-online-mobile.svg";
import cardImage from "../assets/images/illustration-woman-online-desktop.svg";
import cardBox from "../assets/images/illustration-box-desktop.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const accordionList = [
  {
    id: 1,
    title: "How many team members can I invite?",
    description:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: 2,
    title: "What is the maximum file upload size?",
    description: "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3,
    title: "How do I reset my password?",
    description:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: 4,
    title: "Can I cancel my subscription?",
    description: "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: 5,
    title: "Do you provide additional support?",
    description:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

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
            <source media="(min-width:1060px)" srcset={cardImage} />
            <source media="(min-width:360px)" srcset={cardImageMobile} />
            <img src={cardImageMobile} alt="Flowers" className="card-img" />
          </picture>
        </div>

        <ul className="card-list">
          <h2 className="accordion-card-title">FAQ</h2>
          {accordionList.map((accordion) => {
            return (
              <li className={`card-list-item ${accordionState === accordion.id && "active"}`}>
                <div
                  className="card-item-title"
                  onMouseEnter={changeBoxMove}
                  onMouseLeave={changeBoxMove}
                  onClick={() => toogleAccordion(accordion.id)}
                >
                  {accordion.title}
                  <FontAwesomeIcon
                    className="arrow-icon"
                    icon={accordionState === accordion.id ? faAngleUp : faAngleDown}
                  />
                </div>
                <div className="card-item-description">{accordion.description}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default Accordion;
