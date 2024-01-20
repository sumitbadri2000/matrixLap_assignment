const Footer = () => {
  return (
    <>
      <div className="flex border-4 border-yellow-500 py-10 px-10 w-[70%] m-auto mt-16 rounded-2xl gap-[60%]">
        <h1 className="text-4xl">
          Join Our <span className="text-yellow-500">Community</span>
        </h1>
        <div className="flex gap-2">
          <img
            className="w-[60%] h-[80%] rounded-full"
            src="https://i.pinimg.com/originals/87/f6/80/87f6805beec07c22c753d3b88f644b57.jpg"
            alt=""
          />
          <img
            className="w-[60%] h-[80%]  rounded-full"
            src="https://i.pinimg.com/originals/b7/a5/c7/b7a5c711a94d6b9b25a82ffdf2825464.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
