import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <ColorRing
        visible={true}
        height="50"
        width="50"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#f5ecd5", "#f5ecd5", "#f5ecd5", "#f5ecd5", "#f5ecd5"]}
      />
    </>
  );
};

export default Loading;
