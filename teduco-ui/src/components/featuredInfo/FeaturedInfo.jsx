import "./FeaturedInfo.css";
import {ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Daily Applications</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">712</span>
          <span className="featuredMoneyRate">
            +13.5 <ArrowUpward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Unchecked Applications</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">213</span>
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Amount of Students</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">354</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>
    </div>
  );
}