import pix from "../assets/SUN-PALACE-1.jpeg";
import pix1 from "../assets/HRH-CANCUN.2.jpeg";
import pix2 from "../assets/HOLIDAY-INN-VEGAS.-3.jpeg";
import pix3 from "../assets/SHERATON-VIS-2.jpeg";
import pix4 from "../assets/HOLIDAY-INN-VEGAS.-3.jpeg";
// import pix5 from "../assets/HOLIDAY-INN-VEGAS.-3.jpeg";
// import pix6 from "../assets/HOLIDAY-INN-VEGAS.-3.jpeg";
// import { useState } from "react";

const Landingpage = () => {
  const images = [
    {
      id: 1,
      image: pix,
      title: "Sun Palace Resort, Cancun",
    },
    {
      id: 2,
      image: pix1,
      title: "Hard Rock Resort, Cancun",
    },
    {
      id: 3,
      image: pix2,
      title: "Holiday Inn, Las Vegas",
    },
  ];
  const images2 = [
    {
      id: 4,
      image: pix3,
      title: "Sheraton Vistana, Florida",
    },
    {
      id: 5,
      image: pix4,
      title: "family care",
    },
    {
      id: 6,
      image: pix,
      title: "family care",
    },
  ];
  const text1 = [
    {
      id: 1,
      title: "One Lucky young member travels with us for FREE!",
    },
  ];
  const text2 = [
    {
      id: 2,
      title: "10 Cruise Mistakes You're Still Making",
    },
  ];

  return (
    <div className="bg-blue-300">
      <div className="bg-purple-800 w-full h-[650px] border"></div>
      <div>
        <div className="ml-[200px]">
          <h1 className="font-semibold text-[30px] text-slate-300 ml-2">
            TOP MEMBER DESTINATIONS
          </h1>
          <div className="flex p-4 gap-7">
            {images?.map((el) => (
              <div key={el.id} className="">
                <div className="h-[300px] w-[300px] rounded-md bg-slate-50 flex flex-col gap-5 items-center">
                  <img
                    src={el.image}
                    alt="image"
                    className="w-full object-cover h-[80%]"
                  />
                  <p className="font-semibold text-[24px] text-slate-400 mb-5">
                    {el.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex p-4 gap-7 ">
            {images2?.map((el) => (
              <div key={el.id} className="">
                <div className="h-[300px] w-[300px] rounded-md bg-slate-50 flex flex-col gap-5 items-center">
                  <img
                    src={el.image}
                    alt="image"
                    className="w-full object-cover h-[80%]"
                  />
                  <p className="font-semibold text-[24px] text-slate-400 mb-5">
                    {el.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-[200px]">
          <h1 className="font-semibold text-[30px] text-black mb-3">
            UPGRADE TO POPULAR RENTALS
          </h1>
          <div className="bg-red-500 w-[1000px] h-[700px]"></div>
        </div>
        <div className="flex p-4 gap-7 ml-[200px]">
          {images?.map((el) => (
            <div key={el.id} className="">
              <div className="h-[300px] w-[300px] rounded-md bg-slate-50 flex flex-col gap-5 items-center ">
                <img
                  src={el.image}
                  alt="image"
                  className="w-full object-cover h-[80%] "
                />
                <p className="font-semibold text-[24px] text-slate-400 mb-5">
                  {el.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-[150px] ml-[150px]">
          <div className="h-[100px] w-[450px] rounded-md bg-slate-50 flex justify-center gap-5 items-center mb-9 ">
            {text1?.map((el) => (
              <div>
                <p className="text-[20px]">{el.title}</p>
              </div>
            ))}
          </div>
          <div className="h-[100px] w-[450px] rounded-md bg-slate-50 flex justify-center gap-5 items-center ">
            {text2?.map((el) => (
              <div>
                <p className="text-[25px]">{el.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
