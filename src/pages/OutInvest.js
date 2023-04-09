import FormMaticEth from "../components/FormMaticEth";
import Header from "../components/Header";

const OutInvest = () => {
  return (
    <main
      className="relative bg-gray-300 w-full h-[64rem] overflow-hidden"
      Type="Basic"
    >
      <img
        className="absolute top-[0rem] left-[65.06rem] w-[24.94rem] h-[29.5rem]"
        alt=""
        src="/ellipse-5.svg"
      />
      <img
        className="absolute top-[28.44rem] left-[0rem] w-[46.25rem] h-[46.25rem]"
        alt=""
        src="/ellipse-6.svg"
      />
      <FormMaticEth />
      <Header />
    </main>
  );
};

export default OutInvest;
