import React, { useState } from "react";

import EarnBurn from "../../assets/images/icon/bse_1.svg";
import MStamp from "../../assets/images/icon/bse_2.svg";
import MCoupon from "../../assets/images/icon/bse_3.svg";

import bse_1 from "../../assets/images/build-sale-engagement/build-sale-engagement_1.svg";
import bse_2 from "../../assets/images/build-sale-engagement/build-sale-engagement_2.svg";
import bse_3 from "../../assets/images/build-sale-engagement/build-sale-engagement_3.svg";

function Build() {
  let data = {
    title: "BUILD SALE & ENGAGEMENT",
    title_1: "M-Point Earn & Burn",
    detail_1:
      "เพิ่มมูลค่าให้ทุกยอดซื้อมีความหมาย ด้วย MPoint ระบบสะสมแต้ม และแลกแต้มที่รองรับหลากหลายแพลตฟอร์ม ใช้งานง่าย",
    title_2: "M-Stamp",
    detail_2:
      "ลูกค้าซื้อซ้ำ วนกลับมาซื้อใหม่ ด้วยแรงจูงใจผ่าน Campaign สะสม M Stamp ผ่านระบบ Mbiz ที่เชื่อมโยงทุกสาขาไว้ด้วยกัน",
    title_3: "M-Coupon",
    detail_3:
      "เพิ่มความประทับใจที่มากกว่ากับการสร้างคูปองที่หลาย ตอบโจทย์ความต้องการกลุ่มลูกค้าธุรกิจคุณ",
  };
  const [checkTabs, setCheckTabs] = useState(1);
  return (
    <>
      <div className="container">
        <div className="container box-insight-padding">
          <div className="box-title-insight">
            <div>
              <h1 className="box-text-insight">{data.title}</h1>
            </div>
            <div className="card-Insight-out">
              <div className="card-Insight my-3 ms-0 ms-lg-3">
                <button
                  className={`btn-Insight ${checkTabs === 1 ? "active" : ""}`}
                  onClick={() => {
                    setCheckTabs(1);
                  }}
                >
                  <div>
                    <img className="img-Insight" src={EarnBurn} alt="..." />
                  </div>
                  <p className="card-text">M-Point Earn & Burn</p>
                </button>
              </div>
              <div className="card-Insight my-3 ms-0 ms-lg-3">
                <button
                  className={`btn-Insight ${checkTabs === 2 ? "active" : ""}`}
                  onClick={() => {
                    setCheckTabs(2);
                  }}
                >
                  <div>
                    <img className="img-Insight" src={MStamp} alt="..." />
                  </div>
                  <p className="card-text">M-Stamp</p>
                </button>
              </div>
              <div className="card-Insight my-3 ms-0 ms-lg-3">
                <button
                  className={`btn-Insight ${checkTabs === 3 ? "active" : ""}`}
                  onClick={() => {
                    setCheckTabs(3);
                  }}
                >
                  <div>
                    <img className="img-Insight" src={MCoupon} alt="..." />
                  </div>
                  <p className="card-text">M-Coupon</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {checkTabs === 1 ? (
            <>
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <div className="card-Insight-bottom">
                    <div className="card card-Insight-btm shadow-Insight">
                      <h2 className="card-Insight-Text">{data.title_1}</h2>
                      <p className="card-Insight-Text">{data.detail_1}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <img className="box-build-image" src={bse_1} alt=""></img>
                </div>
              </div>
            </>
          ) : checkTabs === 2 ? (
            <>
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <div className="card-Insight-bottom">
                    <div className="card card-Insight-btm shadow-Insight">
                      <h2 className="card-Insight-Text">{data.title_2}</h2>
                      <p className="card-Insight-Text">{data.detail_2}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <img className="box-build-image" src={bse_2} alt=""></img>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <div className="card-Insight-bottom">
                    <div className="card card-Insight-btm shadow-Insight">
                      <h2 className="card-Insight-Text">{data.title_3}</h2>
                      <p className="card-Insight-Text">{data.detail_3}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <img className="box-build-image" src={bse_3} alt=""></img>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Build;
