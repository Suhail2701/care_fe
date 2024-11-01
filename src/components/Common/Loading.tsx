const img = "/images/care_logo_gray.svg";

const Loading = () => {
  const isPatientsPage = window.location.pathname === "/patients";
  const isAssetsPage = window.location.pathname === "/assets";
  const isUserPage = window.location.pathname === "/users";
  const minHeight =
    isPatientsPage || isAssetsPage || isUserPage ? "500px" : "800px";

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
