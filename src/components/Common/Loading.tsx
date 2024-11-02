const img = "/images/care_logo_gray.svg";

const Loading = ({ minHeightClass = "min-h-screen" }) => {
  return (
    <div
      className={`flex w-full items-center justify-center ${minHeightClass}`}
    >
      <div className="w-2/12">
        <img src={img} className="App-logo" alt="logo" />
      </div>
    </div>
  );
};

export default Loading;
