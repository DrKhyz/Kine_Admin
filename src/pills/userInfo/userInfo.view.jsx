import React from "react";
import PropTypes from "prop-types";
import DayCarousel from "../../components/DayCarousel";

const UserInfoView = ({ name, events }) => {
  return (
    <>
      <h1 style={{ marginLeft: "3vw" }}>Calendrier de {name}</h1>
      <DayCarousel events={events} />
    </>
  );
};

UserInfoView.propTypes = {
  name: PropTypes.string.isRequired
};

export default UserInfoView;
