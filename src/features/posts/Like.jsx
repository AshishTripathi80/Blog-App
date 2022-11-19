import React, { useState } from "react";

function Like() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button
          className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
          onClick={handleLikeClick}
        >
          Like {likeCount}
        </button>
      </div>
    </div>
  );
}

export default Like;
