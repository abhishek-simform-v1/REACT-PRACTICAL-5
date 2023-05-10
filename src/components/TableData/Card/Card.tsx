import { memo } from "react";

import { useAppSelector } from "../../../hooks/hooks";

const Card = () => {
  // const data = props.hoverData;
  const data = useAppSelector((state) => state.hover.currentUser);
  // const data = props.hoverData;
  const showCard = useAppSelector((state) => state.hover.showCard);
  return (
    <>
      {showCard ? (
        <div className="hoverCard">
          <div className="hoverCard-image">
            <img src={data.avatar} />
          </div>
          <div className="hoverCard-detail">
            <div className="hoverCard-name-active">
              <p className="hoverCard-name-text">
                <span className="hoverdot">
                  {data.first_name} {data.last_name}
                </span>
              </p>
              <div className="hoverCard-active-text"></div>
            </div>
            <div>
              <p className="hoverCard-email-text">{data.email}</p>
            </div>
            <div>
              <p className="hoverCard-plan-text">Your Plan : Standard</p>
            </div>
            <div>
              <button className="hoverCard-active-btn">Active Users</button>
            </div>
          </div>
          <div className="hoverCard-progress">
            <div>
              <p className="hoverCard-progressbar-text">Plan Uses</p>
            </div>
            <progress
              className="hoverCard-progress-bar"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className="hoverCard-ownership">
            <div className="hoverCard-view">
              <p className="hoverCard-view-number">2,450</p>
              <p className="hoverCard-view-text">Clicks reviewed</p>
            </div>
            <div className="hoverCard-hor-line"></div>
            <div className="hoverCard-click">
              <p className="hoverCard-click-number">5000</p>
              <p className="hoverCard-click-text">Monthly clicks</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Card);
