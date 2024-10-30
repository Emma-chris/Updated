import { MdAdd, MdClose } from "react-icons/md";
import pix from "../assets/HOLIDAY-INN-VEGAS.-3.jpeg";
import pix1 from "../assets/HRH-CANCUN.2.jpeg";
import pix2 from "../assets/SHERATON-VIS-2.jpeg";
import pix3 from "../assets/SUN-PALACE-1.jpeg";
import { useState } from "react";
// import { FaSpinner } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
const Visas = () => {
  const images = [
    {
      id: 1,
      image: pix,
      title: "Holiday Inn, Las Vegas",
    },
    {
      id: 2,
      image: pix1,
      title: "Hard Rock Resort, Cancun",
    },
    {
      id: 3,
      image: pix2,
      title: "Sheraton Vistana, Florida",
    },
    {
      id: 4,
      image: pix3,
      title: "Sun Palace Resort, Cancun",
    },
  ];
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChanged = (el: any) => {
    setIsChecked(el.target.Checked);
  };
  const [showInput, setShowInput] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>("");
  const handleAdd = (e: any) => {
    e.preventDefault();
    console.log(`Added:`, newValue);
    setShowInput(false);
    setNewValue("");
  };

  return (
    <div className="bg-blue-300 max-w-screen">
      <div className="flex justify-between">
        <div className="ml-20 mt-5">
          <div className="flex justify-between gap-3">
            <div>
              <h1>
                BranchOffice:<span className="text-red-600">*</span>
              </h1>
            </div>

            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChanged}
            />
            <p>Abuja</p>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChanged}
            />
            <p>Lagos</p>
          </div>
          <div className="flex justify-between gap-3 mt-5">
            <div>
              <h1>
                Name:<span className="text-red-600">*</span>
              </h1>
            </div>
            <div className="">
              {" "}
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="ml-10"
              />
            </div>
          </div>
          <div className="flex justify-between gap-3 mt-5">
            <div>
              <h1>
                Mobile1<span className="text-red-600">*</span>
              </h1>
            </div>
            <div className="">
              {" "}
              <input type="text" className="ml-10" aria-label="name" />
            </div>
          </div>
          <div className="flex justify-between gap-3 mt-5">
            <div>
              <h1>
                Mobile2<span className="text-red-600">*</span>
              </h1>
            </div>
            <div className="">
              {" "}
              <input type="text" className="ml-10" />
            </div>
          </div>
          <div className="flex justify-between gap-3 mt-5">
            <div>
              <h1>
                E-mail<span className="text-red-600">*</span>
              </h1>
            </div>
            <div className="">
              {" "}
              <input type="text" className="ml-10" />
            </div>
          </div>
          <div className="flex justify-between gap-3 mt-5">
            <div>
              <h1>
                Virgin visa<span className="text-red-600">*</span>
              </h1>
            </div>
            <div className="flex gap-1">
              {" "}
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChanged}
              />
              <p className="">Yes</p>
            </div>
            <div className="flex gap-1">
              {" "}
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChanged}
              />
              <p className="">No</p>
            </div>
          </div>
          {showInput && (
            <form onSubmit={handleAdd}>
              <div className="flex justify-between gap-20">
                <div className="flex justify-between mt-5">
                  <p>Destination # 17</p>
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="h-[30px] mt-5 gap-[200px]
                   w-[300px] ml-10 pl-20"
                  />
                  <button>
                    <MdClose className="bg-red-600 rounded-md border w-[30px] h-[20px]" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="mt-5">
                  <p>Number of Applicants for</p>
                  <p>Destination # 17 </p>
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    className="h-[30px] mt-5 gap-[200px]
                   w-[90%] ml-10"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="mt-5">
                  <p>Estimated date of departure for</p>
                  <p>Destination # 17 </p>
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    className="h-[30px] mt-5 gap-[200px]
                   w-[90%] ml-10 "
                    placeholder="YYYY-MM-DD"
                  />
                </div>
              </div>
            </form>
          )}
          <div className="flex justify-between gap-3 mt-5">
            <div>
              <h1>Add your destination</h1>
            </div>

            <button
              onClick={() => setShowInput(!showInput)}
              className="bg-green-600 w-[20px] rounded-md h-[20px] flex justify- hover:bg-green-400 transition-all duration-500
            "
            >
              <MdAdd className="text-center text-[20px]" />
            </button>
          </div>

          <div className="flex justify-between gap-3 mt-5 mb-4">
            <div>
              <h1>
                MemberNo<span className="text-red-600">*</span>
              </h1>
            </div>
            <div className="">
              {" "}
              <input type="text" className="ml-10" />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1>
                where did you hear about us ?
                <span className="text-red-600">*</span>
              </h1>
            </div>
            <div className="ml-5">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChanged}
                />
                <p>internet</p>
              </div>
              <div className="flex gap-3">
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChanged}
                />
                <p>survey in shopping mail</p>
              </div>
              <div className="flex gap-3">
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChanged}
                />
                <p>Advertisement</p>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChanged}
                />
                <p>Promotion</p>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChanged}
                />
                <p>Social media</p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="border w-[70px] h-[30px] rounded-md bg-slate-400 font-semibold hover:bg-slate-200 transition-all duration-500
          "
          >
            send
          </button>
        </div>
        <div className="flex flex-col p-4 gap-5  ">
          {images?.map((el) => (
            <div key={el.id} className="">
              <div className="h-[300px] w-[300px] rounded-md bg-white flex flex-col gap-5 items-center ">
                <img
                  src={el.image}
                  alt="image"
                  className="w-full object-cover h-[80%] "
                />
                <p className="font-semibold text-[24px] text-slate-400 mb-4">
                  {el.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Visas;
