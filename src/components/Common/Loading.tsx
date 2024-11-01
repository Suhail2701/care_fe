import React from "react";

const img = "/images/care_logo_gray.svg";

const Loading = () => {
  // Check if the current path is '/patients'
  const isPatientsPage = window.location.pathname === "/patients";
  const isAssetsPage = window.location.pathname === "/assets";

  const minHeight = isPatientsPage || isAssetsPage ? "500px" : "800px"; // Set different min-heights based on URL

  return (
    <div
      className="flex w-full items-center justify-center"
      style={{ minHeight }}
    >
      <div className="w-2/12">
        <img src={img} className="App-logo" alt="logo" />
      </div>
    </div>
  );
};

export default Loading;
