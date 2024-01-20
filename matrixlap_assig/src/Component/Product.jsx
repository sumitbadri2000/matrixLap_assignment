import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const Product = () => {
  const images = {
    image1: useRef(null),
    image2: useRef(null),
    image3: useRef(null),
    image4: useRef(null),
    image5: useRef(null),
    image6: useRef(null),
  };

  useEffect(() => {
    // Initialize gsap
    gsap.registerPlugin();

    const tl = gsap.timeline({ repeat: -1 });
    tl.from(images.image1.current, {
      opacity: 0,
      duration: 2,
      x: -20,
      stagger: 0.2,
    })
      .from(images.image2.current, {
        opacity: 0,
        y: -20,
        duration: 2,
        stagger: 0.2,
      })
      .from(images.image3.current, {
        opacity: 0,
        x: 20,
        duration: 2,
        stagger: 0.2,
      })
      .from(images.image4.current, {
        opacity: 0,
        duration: 2,
        x: -20,
        stagger: 0.2,
      })
      .from(images.image5.current, {
        opacity: 0,
        duration: 2,
        y: -20,
        stagger: 0.2,
      })
      .from(images.image6.current, {
        opacity: 0,
        duration: 2,
        x: 20,
        stagger: 0.2,
      });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-16">
        <span className="text-white">Our</span>{" "}
        <span className="text-yellow-500">Products</span>
      </h1>
      <h1 className="mt-6 text-center">
        Pallentesque habitant morbi tristique senectus et netus et Pallentesque
        habitant morbi
      </h1>
      <div className="w-[60%] m-auto grid grid-cols-3 gap-8 text-center mt-8 ">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className="border-4 border-yellow-500 py-6 text-center rounded-xl bg-[rgb(20,20,17)]">
            <div className="flex items-center justify-center">
              <div className="w-[50%]" ref={images[`image${index}`]}>
                <img
                  className="w-full rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/012/966/389/non_2x/shop-store-market-building-shopping-flat-line-filled-icon-beautiful-logo-button-over-yellow-background-for-ui-and-ux-website-or-mobile-application-free-vector.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-4 text-white  w-[50%] m-auto">
              <h1>Bita Marketplace</h1>
              <div className="border-2 border-yellow-500 mt-2"></div>
            </div>
            <h1 className="w-[75%] m-auto mt-2">
              Pallentesque habitant morbi tristique senectus et netus et
              Pallentesque habitant morbi Pallentesque habitant morbi tristique
              senectus et netus et Pallentesque habitant morbi
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
