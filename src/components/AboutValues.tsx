const values = [
  {
    header: "Tailored Assistance",
    content:
      "Our virtual assistants provide personalized support tailored to your specific needs, ensuring efficient and effective solutions for every task",
  },
  {
    header: "Niche Specialization",
    content:
      "Our virtual assistants are experts in specific industries, providing tailored support and insights relevant to your business niche, whether it's healthcare, e-commerce, or real estate",
  },
  {
    header: "Creative Solutions",
    content:
      "Beyond handling routine tasks, our virtual assistants excel at thinking outside the box, offering innovative solutions to challenges and contributing fresh ideas to propel your business forward",
  },
  {
    header: "Loyalty & Dedication",
    content:
      "With an unwavering commitment we bring steadfast support, as well as an integral sense of responsibility to our clients and our team",
  },
  {
    header: "Cultural Sensitivity",
    content:
      "Operating in a global marketplace requires cultural awareness. Our virtual assistants are culturally sensitive and adept at navigating diverse cultural nuances, ensuring seamless communication and engagement with clients from around the world",
  },
  {
    header: "Holistic Support",
    content:
      "We go beyond just completing tasks; our virtual assistants take a holistic approach to support, considering the overall well-being and success of your business. Whether it's managing work-life balance or fostering a positive company culture, we're here to help in every aspect",
  },
  {
    header: "Continuous Learning",
    content:
      "Our virtual assistants are lifelong learners, dedicated to staying updated on the latest trends, technologies, and best practices in their respective fields. You can trust that you'll always receive the most current and relevant support for your business needs",
  },
  {
    header: "Community Engagement",
    content:
      "We foster a sense of community among our virtual assistants, encouraging collaboration, knowledge sharing, and mutual support. By tapping into this collective wisdom, you gain access to a diverse network of expertise and resources to propel your business growth",
  },
  {
    header: "Impactful Partnerships",
    content:
      "We're more than just a service provider; we're your strategic partner in success. Through collaborative partnerships, we work closely with you to understand your goals, align our efforts, and drive tangible results that elevate your business to new heights",
  },
];

const AboutValues = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-3xl font-bold montserrat mx-auto py-10 border-y-2 border-black px-5 min-w-fit max-w-sm">
          These are the values we live by
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 mt-20 px-2 ">
          {values.map(({ header, content }) => (
            <div
              key={header}
              className="border border-black px-5 py-8 rounded-md shadow-lg hover:scale-105 duration-200"
            >
              <div>
                <h5 className="text-center text-xl font-semibold border-b-2 border-black w-fit mx-auto px-2 mb-3 ">
                  {header}
                </h5>
                <p className="text-gray-700">{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
