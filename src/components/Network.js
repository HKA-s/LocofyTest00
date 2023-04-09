const Network = ({ onClose }) => {
  return (
    <div className="relative rounded-t-3xl rounded-b-xl [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#292929] shadow-[0px_1px_2px_rgba(255,_255,_255,_0.15)] flex flex-col items-start justify-start max-w-full max-h-full overflow-auto text-left text-[1rem] text-w font-body">
      <div className="rounded-21xl w-[30.63rem] flex flex-row p-[0.5rem] box-border items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
            alt=""
            src="/cryptoeth.svg"
          />
          <div className="relative leading-[150%]">Ethereum</div>
        </div>
        <div className="flex-1 hidden flex-row items-center justify-end gap-[0.25rem] text-right font-mobile-wireframe-body-large">
          <div className="flex-1 relative leading-[1.5rem]">0.00</div>
          <div className="relative leading-[1.5rem] hidden">%</div>
        </div>
        <img
          className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
          alt=""
          src="/expand-less.svg"
        />
      </div>
      <div className="w-[30.63rem] flex flex-row p-[0.5rem] box-border items-center justify-start">
        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
            alt=""
            src="/cryptomatic.svg"
          />
          <div className="relative leading-[150%]">Polygon</div>
        </div>
        <div className="flex-1 hidden flex-row items-center justify-end gap-[0.25rem] text-right font-mobile-wireframe-body-large">
          <div className="flex-1 relative leading-[1.5rem]">0.00</div>
          <div className="relative leading-[1.5rem] hidden">%</div>
        </div>
        <img
          className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden hidden"
          alt=""
          src="/expand-more.svg"
        />
      </div>
      <div className="w-[30.63rem] flex flex-row p-[0.5rem] box-border items-center justify-start">
        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
            alt=""
            src="/cryptobnb.svg"
          />
          <div className="relative leading-[150%]">Binance Smart chain</div>
        </div>
        <div className="flex-1 hidden flex-row items-center justify-end gap-[0.25rem] text-right font-mobile-wireframe-body-large">
          <div className="flex-1 relative leading-[1.5rem]">0.00</div>
          <div className="relative leading-[1.5rem] hidden">%</div>
        </div>
        <img
          className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden hidden"
          alt=""
          src="/expand-more.svg"
        />
      </div>
      <div className="w-[30.63rem] flex flex-row p-[0.5rem] box-border items-center justify-start">
        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
            alt=""
            src="/cryptoavax.svg"
          />
          <div className="relative leading-[150%]">Avalanche</div>
        </div>
        <div className="flex-1 hidden flex-row items-center justify-end gap-[0.25rem] text-right font-mobile-wireframe-body-large">
          <div className="flex-1 relative leading-[1.5rem]">0.00</div>
          <div className="relative leading-[1.5rem] hidden">%</div>
        </div>
        <img
          className="relative w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden hidden"
          alt=""
          src="/expand-more.svg"
        />
      </div>
    </div>
  );
};

export default Network;
