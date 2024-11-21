import React from "react";

import about_us_bg from "../assets/about-us-bg.png";

import lions_currespond_img from "../assets/Lions-Clubs-container-img.png";
import st_thomas_currespond_img from "../assets/st-thomas-container-img.png";
import Engineers_Forum_img from "../assets/Engineers-Forum-container.png";

function AboutUS() {
  return (
    <>
      <div
        className="text-center flex justify-center items-center h-24 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${about_us_bg})` }}
      >
        <h1 className="text-2xl font-outfit font-bold mb-4 text-white">
          ABOUT US
        </h1>
      </div>
      {/* // section 1 */}
      <section className="flex p-10  flex-col  font-outfit  items-center gap-2">
        <div className=" bg-contain max-w-[550px]">
          <img src={lions_currespond_img} alt="lions_currespond_img" />
        </div>
        <div className="max-w-[600px]">
          <h2 className="text-2xl text-center font-bold">
            Lions Clubs International District 318B
          </h2>
          <p className="text-lg text-center text-gray-600">
            Lions Clubs International District 318B is a vibrant part of the
            town, known for its impactful community service and philanthropic
            initiatives. Dedicated to serving the local community, the district
            organizes various programs promoting health, education, and social
            welfare. With a focus on empowering individuals and fostering
            collaboration. Their participation in Pala Marathon 2024 highlights
            their commitment to promoting fitness, unity, and social awareness.
          </p>
        </div>
      </section>

      {/* // section 2 */}
      <section className="flex p-10 font-outfit  items-center gap-2 flex-col">
        <div className=" bg-contain max-w-[550px]">
          <img src={st_thomas_currespond_img} alt="lions_currespond_img" />
        </div>
        <div className="max-w-[600px]">
          <h2 className="text-2xl text-center font-bold mb-4">
            St. Thomas College, Palai - 75th Jubilee Celebrations
          </h2>
          <p className="text-lg text-center text-gray-600">
            St. Thomas College, Pala, a prestigious institution with a rich
            legacy of academic excellence, celebrates its 75th Jubilee this
            year. Renowned for its dedication to fostering intellectual growth
            and holistic development, the college has been a cornerstone of
            education in the region. As part of their Jubilee celebrations, the
            institution partners with Pala Marathon 2024 to inspire a sense of
            unity and health among the community, aligning with their vision of
            nurturing well-rounded individuals.
          </p>{" "}
        </div>
      </section>

      {/* // section 3 */}
      <section className="flex p-10  font-outfit  items-center flex-col gap-2 w-full">
        <div className=" bg-contain max-w-[550px]">
          <img src={Engineers_Forum_img} alt="lions_currespond_img" />
        </div>

        <div className="max-w-[600px]">
          <h2 className="text-2xl text-center font-bold mb-4 ">
            Engineers' Forum, Pala
          </h2>
          <p className="text-lg text-center text-gray-600">
            The Engineers' Forum, Pala, is a dynamic organization that brings
            together engineering professionals to collaborate on projects and
            initiatives that benefit society. With a commitment to innovation,
            sustainability, and professional growth, the forum actively
            participates in events that encourage community development. By
            co-organizing the Pala Marathon 2024, the Engineers' Forum showcases
            its dedication to promoting health, teamwork, and the spirit of
            giving back to society.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUS;
