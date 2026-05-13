import { ThreeDots } from "react-loader-spinner";

function ThreeDotsSpinner() {
  return (
    <div className="w-[80%] min-h-screen flex justify-center items-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: "20px" }}
        wrapperClass="custom-loader"
        visible={true}
      />
    </div>
  );
}

export default ThreeDotsSpinner;
