const Navbar = () => {
  return (
    <>
      <div className="h-14 flex flex-row items-center justify-center gap-[8.51px]">
        <img
          className="relative  rounded-full h-16 w-16"
          alt=""
          src="https://i.pinimg.com/originals/2c/1d/86/2c1d862b192eec296fcb2a3fd7fe820b.jpg"
        />
        <div className="flex flex-col items-center justify-center gap-[7.2px]">
          <div className="relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[97px] h-3">
            <b className="absolute top-[0px] left-[0px] text-yellow-400">
              BITVERSE
            </b>
          </div>
          <b className="relative text-[8.73px] tracking-[1.17em] text-white">
            FINANCE
          </b>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[32px] text-lg text-white">
        <div className="flex flex-row items-center justify-end gap-[8px]">
          <div className="rounded-2xl overflow-hidden flex flex-row items-center justify-center pt-[15px] pb-[16.5px] pr-[24.199996948242188px] pl-6 relative gap-[10.55px]">
            <div className="absolute my-0 mx-[!important] w-[100.12%] top-[0px] right-[100.5%] left-[-100.62%] bg-darkolivegreen-100 h-[49px] z-[0]" />
            <div className="relative leading-[16.5px] font-medium z-[1]">
              About
            </div>
            <div className="relative text-mini leading-[16.5px] font-segoe-ui text-gray-100 hidden z-[2]">
              →
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden z-[3]"
              alt=""
              src="/chevronrightfilled.svg"
            />
          </div>
          <div className="rounded-2xl overflow-hidden flex flex-row items-center justify-center pt-[15px] pb-[16.5px] pr-[24.199996948242188px] pl-6 relative gap-[10.55px]">
            <div className="absolute my-0 mx-[!important] w-[100.12%] top-[0px] right-[100.5%] left-[-100.62%] bg-darkolivegreen-100 h-[49px] z-[0]" />
            <div className="relative leading-[16.5px] font-medium z-[1]">
              Our Products
            </div>
            <div className="relative text-mini leading-[16.5px] font-segoe-ui text-gray-100 hidden z-[2]">
              →
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden z-[3]"
              alt=""
              src="/chevronrightfilled.svg"
            />
          </div>
          <div className="rounded-2xl overflow-hidden flex flex-row items-center justify-center pt-[15px] pb-[16.5px] pr-[24.199996948242188px] pl-6 relative gap-[10.55px]">
            <div className="absolute my-0 mx-[!important] w-[100.12%] top-[0px] right-[100.5%] left-[-100.62%] bg-darkolivegreen-100 h-[49px] z-[0]" />
            <div className="relative leading-[16.5px] font-medium z-[1]">
              Token Utility
            </div>
            <div className="relative text-mini leading-[16.5px] font-segoe-ui text-gray-100 hidden z-[2]">
              →
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden z-[3]"
              alt=""
              src="/chevronrightfilled.svg"
            />
          </div>
          <div className="rounded-2xl overflow-hidden flex flex-row items-center justify-center pt-[15px] pb-[16.5px] pr-[24.199996948242188px] pl-6 relative gap-[10.55px]">
            <div className="absolute my-0 mx-[!important] w-[100.12%] top-[0px] right-[100.5%] left-[-100.62%] bg-darkolivegreen-100 h-[49px] z-[0]" />
            <div className="relative leading-[16.5px] font-medium z-[1]">
              Roadmap
            </div>
            <div className="relative text-mini leading-[16.5px] font-segoe-ui text-gray-100 hidden z-[2]">
              →
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden z-[3]"
              alt=""
              src="/chevronrightfilled.svg"
            />
          </div>
        </div>
        <div className="relative w-[187px] h-[55px] text-black">
          <div className="absolute top-[calc(50%_-_27.5px)] left-[calc(50%_-_93.5px)] rounded-[10px] bg-gold-100 w-[187px] h-[55px]" />
          <button className=" font-medium border-2 bg-yellow-500 py-4 px-4 rounded-xl border-yellow-500">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
