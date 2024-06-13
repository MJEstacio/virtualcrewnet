import Image from "next/image";

const teams = [
  {
    name: "Islay R.",
    role: "President",
    img: "/islay.jpg",
  },
  {
    name: "Joseph M.",
    role: "Vice-President",
    img: "/joseph2.jpg",
  },
  {
    name: "Mark E.",
    role: "Director of Web Development",
    img: "/mjestacio2.jpg",
  },
  {
    name: "Jon",
    role: "Project Manager",
    img: "/jon.jpg",
  },
  {
    name: " Liam G.",
    role: "Marketing Specialist/Team Lead",
    img: "/liam.jpg",
  },
  {
    name: "Princess L.",
    role: "E-commerce Specialist",
    img: "/princess.jpg",
  },

  {
    name: "Amelia L.",
    role: "Creative Director",
    img: "/amelia.jpg",
  },
  {
    name: "Shaina M.",
    role: "Communications Director",
    img: "/shaina2.jpg",
  },
];

const AboutMeetTheTeam = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-2 xl:px-0">
        <div>
          <h2 className="text-3xl mx-auto montserrat font-bold px-5 py-10 border-t-2 border-b-2 w-fit ">
            Meet The VirtualCrew Team
          </h2>
          <div className="flex justify-center items-center  mx-auto mt-20 text-black">
            {teams
              .map(({ name, role, img }) => (
                <div
                  key={name}
                  className="bg-white flex flex-col justify-between rounded-lg overflow-hidden max-w-sm"
                >
                  <Image
                    src={img}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="border-t-2 py-4 px-2 bg-slate-100 text-center">
                    <h3 className="mb-2 font-semibold montserrat">{name}</h3>
                    <h4 className="text-sm italic">{role}</h4>
                  </div>
                </div>
              ))
              .slice(0, 1)}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mx-auto mt-10  text-black">
            {teams
              .map(({ name, role, img }) => (
                <div
                  key={name}
                  className="bg-white flex flex-col justify-between rounded-lg overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="border-t-2 py-4 px-2 bg-slate-100 text-center">
                    <h3 className="mb-2 font-semibold montserrat">{name}</h3>
                    <h4 className="text-sm italic">{role}</h4>
                  </div>
                </div>
              ))
              .slice(1, 11)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeetTheTeam;
