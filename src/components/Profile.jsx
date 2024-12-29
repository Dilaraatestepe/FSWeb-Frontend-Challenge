function Profile() {
  return (
    <div className="flex flex-col justify-start ml-52 mt-28 mb-10 border-[#BAB2E7] border-y-[2px] mr-52 pb-12 ">
      <h1 className="text-[64px] font-semibold text-[#1F2937] mt-6 mb-5 ">
        Profile
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-col justify-start w-[30rem]  ">
          <h2 className="text-[32px] text-[#4338CA] font-medium mb-6">
            Profile
          </h2>
          <nav className="text-[18px] text-[#1F2937] font-bold">
            <p className="text-[#000000] text-[18px] pb-3">
              Doğum Tarihi{" "}
              <span className="text-[#000000] font-medium text-[18px] pl-[52px]">
                01.05.1996
              </span>
            </p>
            <p className="text-[#000000] text-[18px] pb-3">
              İkamet Şehri{" "}
              <span className="text-[#000000] font-medium text-[18px] pl-[60px]">
                İstanbul
              </span>
            </p>
            <p className="text-[#000000] text-[18px] flex">
              <span>Eğitim Durumu</span>
              <span className="text-[#000000] font-medium text-[18px] pl-[42px] ">
                İstanbul Ünv.
                <br /> Lisans, 2019
              </span>
            </p>
            <p className="text-[#000000] text-[18px]">
              Tercih Ettiği Rol{" "}
              <span className="text-[#000000] font-medium text-[18px] pl-[32px]">
                Frontend, UI
              </span>
            </p>
          </nav>
        </div>
        <div className="flex flex-col w-[52rem]">
          <h2 className="text-[32px] text-[#4338CA] font-medium mb-4">
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
