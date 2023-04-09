import { useCallback } from "react";

const Header = () => {
  const onMonitorContainerClick = useCallback(() => {
    // Please sync "Out/Monitor/Main" to the project
  }, []);

  const onSwapContainerClick = useCallback(() => {
    // Please sync "Out/Swap/Same" to the project
  }, []);

  return (
    <nav
      className="absolute top-[0rem] left-[0rem] [background:linear-gradient(109.83deg,_rgba(255,_255,_255,_0.47),_rgba(255,_255,_255,_0.1))] shadow-[0px_0px_8px_1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(24px)] w-[89.99rem] overflow-hidden flex flex-col py-[0.88rem] px-[5rem] box-border items-start justify-center"
      State="notConnected"
    >
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className="w-[34.12rem] shrink-0 flex flex-row items-center justify-start gap-[6.19rem]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[1.12rem]">
            <img
              className="relative w-[2.25rem] h-[2.25rem] shrink-0 overflow-hidden"
              alt=""
              src="/logo.svg"
            />
            <div className="relative text-[1.5rem] tracking-[0.22px] leading-[2.15rem] font-semibold font-mobile-wireframe-body-large text-w text-left">
              Label
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-between">
            <div className="rounded-sm bg-gainsboro flex flex-row py-[0.5rem] px-[0.75rem] items-start justify-start">
              <div className="relative text-[1rem] font-semibold font-montserrat text-w text-left">
                Invest
              </div>
            </div>
            <div
              className="rounded-sm flex flex-row py-[0.5rem] px-[0.75rem] items-start justify-start cursor-pointer"
              onClick={onMonitorContainerClick}
            >
              <div className="relative text-[1rem] font-semibold font-montserrat text-w text-left">
                Monitor
              </div>
            </div>
            <div
              className="rounded-sm flex flex-row py-[0.5rem] px-[0.75rem] items-start justify-start cursor-pointer"
              onClick={onSwapContainerClick}
            >
              <div className="relative text-[1rem] font-semibold font-montserrat text-w text-left">
                Swap
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-sm [background:linear-gradient(111.98deg,_rgba(77,_203,_228,_0.5),_rgba(72,_39,_169,_0.5))] flex flex-row py-[0.5rem] px-[1rem] items-start justify-start">
          <div className="relative text-[0.88rem] leading-[1.25rem] font-semibold font-montserrat text-white text-left">
            Connect wallet
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
