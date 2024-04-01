import { questions } from "@/api/data";
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
              Lorem, ipsum dolor.
            </label>
            <div className="content ">
              <p className="text-brand-1/75 p-5 bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                harum dicta id possimus ratione. Quibusdam ea deleniti officia
                quae ex quaerat nisi error quisquam dolorem?
              </p>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </label>
            <div className="content ">
              <p className="text-brand-1/75 p-5 bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                harum dicta id possimus ratione. Quibusdam ea deleniti officia
                quae ex quaerat nisi error quisquam dolorem?
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
              Lorem ipsum dolor sit amet.
            </label>
            <div className="content ">
              <p className="text-brand-1/75 p-5 bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                harum dicta id possimus ratione. Quibusdam ea deleniti officia
                quae ex quaerat nisi error quisquam dolorem?
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
              Lorem ipsum dolor sit amet consectetur.
            </label>
            <div className="content ">
              <p className="text-brand-1/75 p-5 bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                harum dicta id possimus ratione. Quibusdam ea deleniti officia
                quae ex quaerat nisi error quisquam dolorem?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum.
            </label>
            <div className="content ">
              <p className="text-brand-1/75 p-5 bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                harum dicta id possimus ratione. Quibusdam ea deleniti officia
                quae ex quaerat nisi error quisquam dolorem?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeFAQ;
