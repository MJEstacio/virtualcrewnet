import Image from "next/image";

const Column2 = () => {
  return (
    <section className="bg-black py-10 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 border-y-2 border-black p-2 mb-10">
        <div className="my-auto">
          <h2 className="text-3xl font-semibold mb-5 montserrat">
            Our Mission
          </h2>
          <p className="leading-8 text-justify">
            At <span className="font-semibold montserrat">VirtualCrew</span>,
            our mission is to empower businesses and entrepreneurs to thrive by
            providing unparalleled virtual assistant services. We strive to
            alleviate the burdens of administrative tasks, allowing our clients
            to focus on their core objectives and strategic growth. Through our
            commitment to excellence, professionalism, and personalized support,
            we aim to build long-lasting partnerships that drive success and
            productivity. Our team of skilled virtual assistants is dedicated to
            delivering innovative solutions tailored to meet the unique needs of
            each client. Together, we envision a world where efficiency and
            effectiveness go hand in hand, enabling businesses to reach new
            heights of achievement.
          </p>
        </div>
        <Image
          src={"/mission.png"}
          width={500}
          height={500}
          alt="Our Mission Image"
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Column2;
