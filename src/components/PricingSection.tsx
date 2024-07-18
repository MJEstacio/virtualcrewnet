"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
interface tierProps {
  id: number;
  subscription: boolean;
  plan: string;
  price: number;
  discount: boolean;
  discountPrice: number;
  stripeUrl: string;
  testUrl?: string;
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
    stripeUrl: "https://buy.stripe.com/28o8A2f132vp8uY9AA",
    testUrl: "https://buy.stripe.com/test_cN203Qdnj0TU3EQdQR",
    features: [
      "40 hours of VirtualCrew assistance",
      "2 voice calls and 1 video meeting with a staff member",
    ],
  },
  {
    id: 2,
    subscription: true,
    plan: "Basic",
    price: 350,
    discount: true,
    discountPrice: 50,
    stripeUrl: "https://buy.stripe.com/fZecQi6ux7PJ7qU6op",
    testUrl: "https://buy.stripe.com/test_cN203Qdnj0TU3EQdQR",
    features: [
      "40 hours/month of VirtualCrew assistance",
      "Unlimited Customer Support",
      "2 voice calls and 1 video meeting with a staff member",
    ],
  },
  {
    id: 3,
    subscription: true,
    plan: "Standard",
    price: 650,
    discount: true,
    discountPrice: 150,
    stripeUrl: "https://buy.stripe.com/cN2g2ucSVgmfh1ucMO",
    testUrl: "https://buy.stripe.com/test_7sIbMy82Z9qqfny9AC",
    features: [
      "80 hours/month of VirtualCrew assistance",
      "Unlimited Customer Support",
      "4 voice calls and 2 video meeting with a staff member",
    ],
  },
  {
    id: 4,
    subscription: true,
    plan: "Premium",
    price: 950,
    discount: true,
    discountPrice: 250,
    stripeUrl: "https://buy.stripe.com/6oE9E63ilda3eTm28b",
    testUrl: "https://buy.stripe.com/test_eVag2Oab7dGGa3e6or",
    features: [
      "120 hours/month of VirtualCrew assistance",
      "Unlimited Customer Support",
      "6 voice calls and 3 video meeting with a staff member",
    ],
  },
  {
    id: 5,
    subscription: true,
    plan: "Premium Plus",
    price: 1250,
    discount: true,
    discountPrice: 350,
    stripeUrl: "https://buy.stripe.com/14k03wg57fibeTmcMQ",
    testUrl: "https://buy.stripe.com/test_9AQ6segzv8mm7V628c",
    features: [
      "160 hours/month of VirtualCrew assistance",
      "Unlimited Customer support",
      "8 voice calls and 4 video meeting with a staff member",
      "Exclusively buy unlimited hours at $5 per hour after the initial 160 hours",
    ],
  },
];

export default function PricingSection() {
  const [testMode, setTestMode] = useState(false);
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10 montserrat">
          Choose the Right Plan for You
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
                stripeUrl,
                testUrl,
                features,
              }: tierProps) => (
                <motion.div
                  key={id}
                  className="border rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-500"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: id / 4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white bg-black text-center py-5 ">
                    <h4 className="font-semibold text-2xl montserrat ">
                      {plan}
                    </h4>
                  </div>
                  <div className="py-10 px-5">
                    <ul className="flex flex-col gap-3 min-h-52">
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
                    <a
                      href={testMode ? testUrl : stripeUrl}
                      target="_blank"
                    >
                      <button className="border border-white border-2 py-3 px-12 font-semibold mb-5 hover:text-black hover:bg-white hover:border-black duration-500">
                        Buy Now
                      </button>
                    </a>

                    {/* <button className="border border-white border-2 py-3 px-12 font-semibold mb-5 hover:text-black hover:bg-white hover:border-black duration-500">
                      Coming Soon
                    </button> */}
                  </div>
                </motion.div>
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
                  stripeUrl,
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
                      <a
                        href={stripeUrl}
                        target="_blank"
                      >
                        <button className="border border-white border-2 py-3 px-12 font-semibold mb-5 hover:text-black hover:bg-white hover:border-black duration-500">
                          Buy Now
                        </button>
                      </a>
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
