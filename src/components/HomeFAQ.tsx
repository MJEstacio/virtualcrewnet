import { questions } from "@/app/api/data";
import styles from "./HomeFaq.module.css";

const HomeFAQ = () => {
  return (
    <section className="my-14">
      <div className="max-w-6xl mx-auto px-2 lg:px-0">
        <h2 className="text-brand-2 text-3xl text-center py-20 font-semibold relative">
          Frequent Asked Questions.
          <div className="absolute flex gap-5 opacity-50 top-0 left-1/2 -translate-x-1/2 ">
            <i className="fa-solid fa-question -rotate-45 fa-2x"></i>
            <i className="fa-solid fa-question fa-3x translate-y-[-30px]"></i>
            <i className="fa-solid fa-question rotate-45 fa-2x"></i>
          </div>
        </h2>
        <ul className="accordion">
          <li className=" mb-2 w-full text-left text-brand-1 ">
            <input
              type="checkbox"
              name="accordion"
              id="first"
              className={styles.input}
            />
            <label
              htmlFor="first"
              className="font-semibold text-brand-1 cursor-pointer flex p-5 bg-slate-50 text-base label"
            >
              Do we have VA&apos;s who can provide 24/7 support?
            </label>
            <div className="content ">
              <p className="text-brand-1/75 p-5 bg-white">Yes, we do.</p>
            </div>
          </li>

          <li className=" mb-2 w-full text-left text-brand-1 ">
            <input
              type="checkbox"
              name="accordion"
              id="second"
            />
            <label
              htmlFor="second"
              className="font-semibold text-brand-1 cursor-pointer flex p-5 bg-slate-50 text-base label"
            >
              How Do We Communicate?
            </label>
            <div className="content ">
              <p className="text-brand-1/75 p-5 bg-white">
                We have a state of the art Project Management tool that you will
                access when you start with us. The portal will allow you to
                assign tasks, start discussions, upload files, and fully
                integrates with your email for quick communication. We can help
                you determine a cost effective way to gain your valuable time
                back so you can spend it on what&apos;s important to you whether
                that&apos;s refocusing on growing your business, or spending
                more time with your family.
              </p>
            </div>
          </li>

          <li className=" mb-2 w-full text-left text-brand-1 ">
            <input
              type="checkbox"
              name="accordion"
              id="third"
            />
            <label
              htmlFor="third"
              className="font-semibold text-brand-1 cursor-pointer flex p-5 bg-slate-50 text-base label"
            >
              What are your payment options?
            </label>
            <div className="content ">
              <p className="text-brand-1/75 p-5 bg-white">
                We accept bank or wire transfer to our bank account and fund
                transfer through Stripe.
              </p>
            </div>
          </li>

          <li className=" mb-2 w-full text-left text-brand-1 ">
            <input
              type="checkbox"
              name="accordion"
              id="fourth"
            />
            <label
              htmlFor="fourth"
              className="font-semibold text-brand-1 cursor-pointer flex p-5 bg-slate-50 text-base label"
            >
              Can I select the level of virtual assistant I want to work with?
            </label>
            <div className="content ">
              <p className="text-brand-1/75 p-5 bg-white">
                Yes, VirtualCrew.Net offers a variety of solutions for a wide
                range of expertise and skill levels, and you can select the type
                of VA that best matches your needs and budget range.
              </p>
            </div>
          </li>

          <li className=" mb-2 w-full text-left text-brand-1 ">
            <input
              type="checkbox"
              name="accordion"
              id="fifth"
            />
            <label
              htmlFor="fifth"
              className="font-semibold text-brand-1 cursor-pointer flex p-5 bg-slate-50 text-base label"
            >
              Can I add or remove virtual assistant services as my needs change?
            </label>
            <div className="content ">
              <p className="text-brand-1/75 p-5 bg-white">
                Yes. Our virtual assistant services can be scaled up or down as
                necessary to match your specific needs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeFAQ;
