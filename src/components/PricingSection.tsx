import React from "react";
import { FaCheckCircle } from "react-icons/fa";
interface tierProps {
  id: number;
  subscription: boolean;
  plan: string;
  price: number;
  discount: boolean;
  discountPrice: number;
  features: string[];
}

const tier = [
  {
    id: 1,
    subscription: false,
    plan: "Non-Subscription",
    price: 400,
    discount: false,
    discountPrice: 0,
    features: [
      "40 hours/month",
      "Once a week video meetings with our VirtualCrew team",
    ],
  },
  {
    id: 2,
    subscription: true,
    plan: "Basic",
    price: 350,
    discount: true,
    discountPrice: 50,
    features: [
      "40 hours/month of virtual assistance",
      "24/7 Customer support",
      "Once a week video meetings with our VirtualCrew team",
    ],
  },
  {
    id: 3,
    subscription: true,
    plan: "Standard",
    price: 650,
    discount: true,
    discountPrice: 150,
    features: [
      "80 hours/month of virtual assistance",
      "All features included in the Basic subscription",
    ],
  },
  {
    id: 4,
    subscription: true,
    plan: "Premium",
    price: 950,
    discount: true,
    discountPrice: 250,
    features: [
      "120 hours/month of virtual assistance",
      "All features included in the Basic subscription",
    ],
  },
  {
    id: 5,
    subscription: true,
    plan: "Premium Plus",
    price: 1250,
    discount: true,
    discountPrice: 350,
    features: [
      "160 hours/month of virtual assistance",
      "Exclusively buy unlimited hours at $5 per hour after the initial 160 hours",
      "All features included in the Basic subscription",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10 montserrat">
          Choose the right plan for you
        </h3>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-2 xl:px-0">
          {tier
            .map(
              ({
                id,
                subscription,
                plan,
                price,
                discount,
                discountPrice,
                features,
              }: tierProps) => (
                <div
                  key={id}
                  className="border rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-500"
                >
                  <div className="text-white bg-black text-center py-5 ">
                    <h4 className="font-semibold text-2xl montserrat ">
                      {plan}
                    </h4>
                  </div>
                  <div className="py-10 px-5">
                    <ul className="flex flex-col gap-2 min-h-40">
                      {features.map((feature, index) => (
                        <li
                          className="inline-flex text-sm"
                          key={index}
                        >
                          <div>
                            <FaCheckCircle className="text-green-500 w-8 mt-1" />
                          </div>{" "}
                          {feature}
                        </li>
                      ))}
                      {/* <li className="flex gap-2 items-center">
                        <FaCheckCircle className="text-green-500" /> Feature
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCheckCircle className="text-green-500" /> Feature
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCheckCircle className="text-green-500" /> Feature
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCheckCircle className="text-green-500" /> Feature
                      </li> */}
                    </ul>
                  </div>
                  <div className="py-5 bg-black text-white text-center">
                    <p className="mb-2">
                      <span className="font-semibold text-2xl">${price}</span>
                      /month
                    </p>
                    <div className="mb-5 flex gap-2 justify-center items-center">
                      <span className=" text-gray-400 line-through italic ">
                        ${price + discountPrice}
                      </span>
                      <span className="bg-gray-200 text-black px-4 py-1  text-xs rounded-full font-semibold">
                        ${discountPrice} OFF
                      </span>
                    </div>
                    <button className="border border-white border-2 py-3 px-12 font-semibold mb-5 hover:text-black hover:bg-white hover:border-black duration-500">
                      Buy Now
                    </button>
                  </div>
                </div>
              ),
            )
            .slice(1, 5)}
        </div>
        <div className="my-20 ">
          <h4 className="text-3xl font-bold text-center mb-10 montserrat">
            We also have a non-subscription
          </h4>
          <div className=" flex   gap-5 px-2 xl:px-0 justify-center">
            {tier
              .map(
                ({
                  id,
                  subscription,
                  plan,
                  price,
                  discount,
                  discountPrice,
                  features,
                }: tierProps) => (
                  <div
                    key={id}
                    className="border rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-500 min-w-80"
                  >
                    <div className="text-white bg-black text-center py-5 ">
                      <h4 className="font-semibold text-2xl montserrat ">
                        {plan}
                      </h4>
                    </div>
                    <div className="py-10 px-5">
                      <ul className="flex flex-col gap-2 min-h-40">
                        {features.map((feature, index) => (
                          <li
                            className="inline-flex text-sm"
                            key={index}
                          >
                            <div>
                              <FaCheckCircle className="text-green-500 w-8 mt-1" />
                            </div>{" "}
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="py-5 bg-black text-white text-center">
                      <p className="mb-2">
                        <span className="font-semibold text-2xl">${price}</span>
                        /month
                      </p>
                      <button className="border border-white border-2 py-3 px-12 font-semibold mb-5 hover:text-black hover:bg-white hover:border-black duration-500">
                        Buy Now
                      </button>
                    </div>
                  </div>
                ),
              )
              .slice(0, 1)}
          </div>
        </div>
      </div>
    </section>
  );
}
