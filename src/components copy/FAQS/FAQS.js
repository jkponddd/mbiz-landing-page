import React, { useState } from "react";
import "./FAQS.css";

function FAQS() {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Loremipsum dolor sit amet, consectetur adipiscingLorem ipsumdolor sit amet,consectetur adipiscingLorem ipsum dolor sitamet, consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscin",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Loremipsum dolor sit amet, consectetur adipiscingLorem ipsumdolor sit amet,consectetur adipiscingLorem ipsum dolor sitamet, consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscin",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Loremipsum dolor sit amet, consectetur adipiscingLorem ipsumdolor sit amet,consectetur adipiscingLorem ipsum dolor sitamet, consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscin",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Loremipsum dolor sit amet, consectetur adipiscingLorem ipsumdolor sit amet,consectetur adipiscingLorem ipsum dolor sitamet, consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscin",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Loremipsum dolor sit amet, consectetur adipiscingLorem ipsumdolor sit amet,consectetur adipiscingLorem ipsum dolor sitamet, consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscin",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Loremipsum dolor sit amet, consectetur adipiscingLorem ipsumdolor sit amet,consectetur adipiscingLorem ipsum dolor sitamet, consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscin",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Loremipsum dolor sit amet, consectetur adipiscingLorem ipsumdolor sit amet,consectetur adipiscingLorem ipsum dolor sitamet, consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscin",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Loremipsum dolor sit amet, consectetur adipiscingLorem ipsumdolor sit amet,consectetur adipiscingLorem ipsum dolor sitamet, consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscin",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Loremipsum dolor sit amet, consectetur adipiscingLorem ipsumdolor sit amet,consectetur adipiscingLorem ipsum dolor sitamet, consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscin",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Loremipsum dolor sit amet, consectetur adipiscingLorem ipsumdolor sit amet,consectetur adipiscingLorem ipsum dolor sitamet, consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscingLorem ipsum dolor sit amet,consectetur adipiscin",
    },
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <div className="bg-FAQS" id="FAQs">
        <div className="container">
          <div className="container-FAQS">
            <div className="mb-3">
              <h1 className="fw-bold">FAQS</h1>
            </div>

            <div className="wrapper-FAQS">
              <div className="accordion-FAQS">
                {data.map((data, i) => (
                  <div className="item-FAQS shadow-FAQS">
                    <div className="title-FAQS">
                      <p className="m-0">{data.title}</p>
                      <button
                        className="btn-FAQS shadow-FAQS-btn"
                        onClick={() => toggle(i)}
                      >
                        {selected === i ? "-" : "+"}
                      </button>
                    </div>
                    <div
                      className={
                        selected === i
                          ? "content-FAQS show lorem-FAQS mt-2 "
                          : "content-FAQS"
                      }
                    >
                      <p>{data.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQS;
