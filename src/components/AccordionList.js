import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function AccordionList(props) {
  return (
    <Fragment>
      {props.accordionList.map((accordion) => {
        return (
          <li
            key={accordion.id}
            className={`card-list-item ${props.accordionState === accordion.id && "active"}`}
          >
            <div
              className="card-item-title"
              onMouseEnter={props.changeBoxMove}
              onMouseLeave={props.changeBoxMove}
              onClick={() => props.toogleAccordion(accordion.id)}
            >
              {accordion.title}
              <FontAwesomeIcon
                className="arrow-icon"
                icon={props.accordionState === accordion.id ? faAngleUp : faAngleDown}
              />
            </div>
            <div className="card-item-description">{accordion.description}</div>
          </li>
        );
      })}
    </Fragment>
  );
}

export default AccordionList;
