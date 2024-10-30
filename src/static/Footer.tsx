const Footer = () => {
  return (
    <div
      className="mt-1
     bg-blue-300 w-full"
    >
      <div className=" items-center  ">
        <h1 className="flex justify-center py-7 text-black font-semibold">
          Copyright © 2009 - 2024 Hemingways. All Rights Reserved
        </h1>
        <p className="flex justify-center ">
          {" "}
          Lagos office: 3rd Floor LCCI Building, Plot 10a, Dr Nurudeen Olowopopo
          Drive, Alausa, Ikeja
        </p>
        <p className="flex justify-center ">Mobile No : 0805 669 6351</p>
        <p className="flex justify-center ">
          Lagos office email-address : info@myhemingways.com{" "}
        </p>
        <p className="flex justify-center ">
          {" "}
          Abuja Office: Plot 265, S.E Asebe Street, Mabushi
        </p>
        <p className="flex justify-center ">Mobile No : 0811 700 4642</p>
        <p className="flex justify-center ">
          {" "}
          Abuja office email-address : hemingways.abuja@myhemingways.com
        </p>
      </div>
    </div>
  );
};
export default Footer;
