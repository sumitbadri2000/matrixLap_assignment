const Banner = () => {
  return (
    <>
      <div className="mt-16">
        <img
          className=""
          src="https://asset.brandfetch.io/idDbHKMXV3/idtbQhRfhJ.jpeg"
          alt=""
        />
      </div>
      <div className="w-[80%] m-auto flex flex-col gap-8 text-center text-3xl mt-8">
        <div className="self-stretch relative leading-[168%]">
          Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse
          id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus
          tellus augue.
        </div>
        <div className="flex flex-row items-start justify-center text-base text-gray-200">
          <div className="rounded-xl h-[55px] flex flex-col items-start justify-start">
            <button className="px-8 py-2 bg-yellow-500 border-2 border-yellow-500 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
