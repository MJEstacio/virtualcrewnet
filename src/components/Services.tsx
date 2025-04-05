import React from "react";
import { BsCalendar2Event } from "react-icons/bs";

import { GiArchiveResearch } from "react-icons/gi";

import { BsCardText } from "react-icons/bs";

import { FaCheck } from "react-icons/fa6";
import { MdMarkEmailRead, MdOutlineSupportAgent } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";

const services = [
  {
    icon: (
      <GrChatOption
        size={40}
        className="text-slate-800 my-5 mx-auto  "
      />
    ),
    title: "Administrative Support",
    content: [
      {
        title: "Managing emails",
        subContent: "Sorting, responding, and prioritizing emails",
      },
      {
        title: "Calendar management",
        subContent: "Scheduling appointments, meetings, and events.",
      },
      {
        title: "Travel arrangements",
        subContent: "Booking flights, hotels, and transportation",
      },
      {
        title: "Data entry",
        subContent:
          "Inputting and organizing data into spreadsheets or databases.",
      },
      {
        title: "Document preparation",
        subContent:
          "Creating and formatting documents, presentations, and reports.",
      },
      {
        title: "File organization",
        subContent: "Organizing digital files and folders for easy access.",
      },
    ],
  },
  {
    icon: (
      <MdOutlineSupportAgent
        size={40}
        className="text-slate-800 my-5 mx-auto"
      />
    ),
    title: "Customer Support",
    content: [
      {
        title: "Responding to customer inquiries",
        subContent:
          "Handling customer queries and providing assistance via email, chat, or phone.",
      },
      {
        title: "Order processing",
        subContent:
          "Managing orders, tracking shipments, and processing returns or exchanges.",
      },
      {
        title: "Complaint resolution",
        subContent:
          "Addressing customer complaints and resolving issues in a timely manner.",
      },
      {
        title: "Product/service knowledge",
        subContent:
          "Having a thorough understanding of the company's offerings to provide accurate information to customers.",
      },
    ],
  },

  {
    icon: (
      <BsCardText
        size={40}
        className="text-slate-800 my-5 mx-auto"
      />
    ),
    title: "Social Media Management",
    content: [
      {
        title: "Content creation",
        subContent:
          "Developing engaging posts, graphics, and videos for social media platforms.",
      },
      {
        title: "Scheduling posts",
        subContent:
          "Planning and scheduling content to be published at optimal times.",
      },
      {
        title: "Community engagement",
        subContent:
          "Monitoring comments, messages, and mentions, and engaging with the audience.",
      },
      {
        title: "Analytics tracking",
        subContent:
          "Analyzing social media metrics to assess performance and make data-driven decisions.",
      },
      {
        title: "Growth strategies",
        subContent:
          "Implementing strategies to increase followers, engagement, and brand visibility.",
      },
    ],
  },
  {
    icon: (
      <MdMarkEmailRead
        size={40}
        className="text-slate-800 my-5 mx-auto"
      />
    ),
    title: "Email Management",
    content: [
      {
        title: "Inbox organization",
        subContent:
          "Sorting, filtering, and prioritizing emails based on importance.",
      },
      {
        title: "Email filtering",
        subContent:
          "Filtering out spam, junk, and irrelevant emails to maintain a clean inbox.",
      },
      {
        title: "Email response",
        subContent:
          "Drafting and sending responses to routine inquiries or forwarding emails to the appropriate team member.",
      },
      {
        title: "Email automation",
        subContent:
          "Setting up email templates, autoresponders, and email sequences to streamline communication.",
      },
      {
        title: "Growth strategies",
        subContent:
          "Implementing strategies to increase followers, engagement, and brand visibility.",
      },
    ],
  },
  {
    icon: (
      <GiArchiveResearch
        size={40}
        className="text-slate-800 my-5 mx-auto"
      />
    ),
    title: "Research Assistance",
    content: [
      {
        title: "Market research",
        subContent:
          "Conducting research on competitors, industry trends, and target markets.",
      },
      {
        title: "Product research",
        subContent:
          "Gathering information on products or services to support decision-making.",
      },
      {
        title: "Content research",
        subContent:
          "Finding reliable sources, statistics, and references for blog posts, articles, or presentations.",
      },
      {
        title: "Data gathering",
        subContent:
          "Collecting and organizing data from various sources for analysis or reporting purposes.",
      },
    ],
  },
  {
    icon: (
      <BsCalendar2Event
        size={40}
        className="text-slate-800 my-5 mx-auto"
      />
    ),
    title: "Virtual Event Support",
    content: [
      {
        title: "Event planning",
        subContent:
          "Assisting with the planning and coordination of virtual events, including webinars, conferences, and workshops.",
      },
      {
        title: "Technical support",
        subContent:
          "Providing technical assistance to participants during virtual events, troubleshooting issues with audio, video, or platform access.",
      },
      {
        title: "Participant management",
        subContent:
          "Managing attendee registrations, sending invitations and reminders, and handling inquiries before and during the event.",
      },
      {
        title: "Post-event follow-up",
        subContent:
          "Sending thank-you emails, collecting feedback, and compiling post-event reports.",
      },
    ],
  },
];

const Services = () => {
  return (
    <section
      className="relative  max-w-[1440px] mx-auto px-2 mt-20"
      id="services"
    >
      <div className="max-w-80 mx-auto border-y-2 border-slate-500">
        <h3 className="text-4xl font-bold montserrat text-center py-5">
          Services
        </h3>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-20 gap-5 text-center`}
      >
        {services.map(({ title, icon, content }) => (
          <div
            className="service-card border px-5 pb-10 pt-5 shadow-md "
            key={title}
          >
            {icon}
            <h4 className="mb-4 font-semibold text-xl text-left mb-2 text-center">
              {title}
            </h4>
            <ul className="px-4">
              {content.map((content) => (
                <li
                  key={content.title}
                  className="mb-3"
                >
                  <div className="flex items-center gap-3 font-semibold">
                    <FaCheck className="text-green-500" /> {content.title}
                  </div>
                  <p className="text-left pl-7 text-slate-600">
                    {content.subContent}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
