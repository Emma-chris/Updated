import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Hemingways-Logo.jpeg";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [header, setHeader] = useState([
    { id: 1, title: "Home", url: "/", state: false },
    { id: 2, title: "Visas", url: "/Visas", state: false },
    { id: 1, title: "Members Area ", url: "/MemberArea", state: false },
    { id: 2, title: "About Us", url: "/Aboutus", state: false },
    { id: 1, title: "Contact us ", url: "/Contact us", state: false },
  ]);
  return (
    <div className="flex items-center h-[60px] justify-between bg-blue-600">
      <div className="flex gap-5 items-center ml-20 ">
        <img src={Logo} alt="" className="w-[150px]" />
        <div className="flex gap-3 font-medium">
          {header?.map((el) => (
            <div
              className="flex items-center hover:text-white"
              onMouseEnter={() => {
                el.state = true;

                setHeader([...header]);
              }}
              onMouseLeave={() => {
                el.state = false;
                setHeader([...header]);
              }}
            >
              <Link to={el.url}>{el.title}</Link>
              {!el.state ? <MdArrowDownward /> : <MdArrowUpward />}
            </div>
          ))}
        </div>
        <IoMenu />
      </div>
    </div>
  );
};
export default Header;
