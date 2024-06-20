import AboutTeamItem from "./AboutTeamItem";
const AboutMeetTheTeam = ({ teams }: any) => {
  return (
    <section className="bg-black text-white py-16">
      {/* <Modal
        closeModal={handleClick}
        data={teams}
      /> */}
      <div className="max-w-7xl mx-auto px-2 xl:px-0">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto text-black">
            {teams.map((member: any) => (
              <AboutTeamItem
                member={member}
                key={member.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeetTheTeam;
