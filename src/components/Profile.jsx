function Profile() {
  return (
    <div className="flex flex-col ml-52 mt-28 mb-10 border-[#BAB2E7] border-y-[2px] mr-52 pb-12 ">
      <h1 className="text-[64px] font-semibold text-[#1F2937] mt-6 mb-5 ">
        Profile
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col justify-start w-[24rem] ">
          <h2 className="text-[32px] text-[#4338CA] font-medium mb-6">
            Profile
          </h2>
          <nav className="text-[18px] text-[#1F2937] font-bold">
            <div className="flex justify-between">
              <p className="text-[#000000] text-xl ">Date of birth</p>
              <span className="text-[#000000] font-medium text-xl  ">
                01.05.1996
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-[#000000] text-xl ">Location</p>
              <span className="text-[#000000] font-medium text-xl  ">
                Istanbul
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-[#000000] text-xl ">Education</p>
              <span className="text-[#000000] font-medium text-xl  ">
                Istanbul Univ. <br />
                License , 2019
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-[#000000] text-xl ">Preferred Role</p>
              <span className="text-[#000000] font-medium text-xl ">
                Frontend, UI
              </span>
            </div>
          </nav>
        </div>
        <div className="flex flex-col w-[52rem] pl-48">
          <h2 className="text-[32px] text-[#4338CA] font-medium mb-4 ">
            About Me
          </h2>
          <p className="text-[18px] text-[#6B7280] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p className="text-[18px] text-[#6B7280]  mt-8">
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
