import React, { useState } from "react";
import { useTheme } from "../../common/ThemeContext";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { motion as _m } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";

const poetry = [
  {
    id: 1,
    title: "Toh kya Kahoon",
    lines: [
      "Vo mere hote toh kya kehna tha,",
      "Ab nahi hoon main unka toh kya kahoon.",
      "Jaane kyun dil ne unko chaha tha,",
      "Benaam si thi duniya, toh kya kahoon.",
      "Har lamha unka tasavvur tha,",
      "Ab hai khali se raasta, toh kya kahoon.",
      "Meri har baat mein uska zikr tha be-maqaam,",
      "Ab hai khali har lamha, toh kya kahoon.",
      "Woh baat baaton mein keh ke chhup gaye,",
      "Main reh gaya tanha, toh kya kahoon.",
      "Keh diya tha tum bin jee na paayenge,",
      "Ab jee rahe hain tanha, toh kya kahoon.",
      "Maine kaha tha, tum chhod ke jaaogi ek din,",
      "Waqt ne sach kar diya, toh kya kahoon.",
      "Ishq tha ya koi khwab adhoora sa,",
      "Toota jo neend mein, toh kya kahoon.",
      "Vo mere hote toh kya kehna tha,",
      "Ab nahi hoon main unka toh kya kahoon.",
    ],
  },
  {
    id: 1,
    title: "Baatein Chand Se",
    lines: [
      "Chand ke sang baith kar baatein kiya karte hain,",
      "Dil ke dard ko tanhai mein jiya karte hain.",
      "Dil ki baat Dillu se hai magar,",
      "Dard-e-zakham chupa kye jiya karte hain.",
      "Unke ishq ki batien hm aese kiya karte hain,",
      "Ham ankhu mai ansuu lekar jiya katre hain.",
      "Har mod pe milte hain sapne toote hue,",
      "Phir bhi naye khwab roshan kiya karte hain.",
      "Log poochte hain muskaan ka raaz humse,",
      "Kya kahen, hum aansuon ko pee liya karte hain.",
    ],
  },
  {
    id: 1,
    title: "Ishq Mukammal Nahi Hota",
    lines: [
      "Tum jo dhoondo fizaaon mein mujhko,",
      "Khoya rehta hoon apne jahaan mein...",

      "Main wasiyat mein likh doon tumko,",
      "Phir bhi tu na mila mujhko.",

      "Dil ke safar ka koi silsila nahi hota",
      "Ishq kabhi mukammal nahi hota.",

      "Khwabon ke shehar mein udta raha,",
      "Haqeeqat se mera rabta nahi hota.",

      "Shikway toh bahut hain kismat se mujhe,",
      "Par tere bina jeene ka hausla nahi hota.",

      "Dil ke safar ka koi silsila nahi hota,",
      "Ishq kabhi mukammal nahi hota.",

      "Teri talash mein har raah chal diya,",
      "Mujhse behtar mera saathi nahi milta.",

      "Ab toh bas safar hai aur hai manzil adhoori,",
      "Ham toh jee chuke, tum kya paaoge apni kahani puri.",

      "Dil ke safar ka koi silsila nahi hota,",
      "Ishq kabhi mukammal nahi hota.",
    ],
  },
];

function Poetry() {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = poetry.length;
  const currentPoem = poetry[currentPage];

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div id="Nazm-e-Dil" className="mt-20">
      <_m.h2
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="mb-20 md:text-5xl text-4xl font-extrabold tracking-wide text-center"
      >
        Nazm-e-Dil
      </_m.h2>

      {/* Flex container for side-by-side layout */}
      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 px-4">
        {/* My Own Writing (Left Side) */}
        <div
          className={`w-full md:w-1/2 ${
            theme === "dark" ? "text-white" : "text-black"
          } text-left mx-auto mb-10 
     md:h-[800px] md:overflow-auto 
     h-auto overflow-visible`}
        >
          <_m.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-4 text-2xl font-extrabold text-left text-teal-700 border-b-2"
          >
            "{currentPoem.title}"
          </_m.h3>

          {currentPoem.lines.map((line, index) => (
            <_m.p
              key={index}
              className="font-serif leading-relaxed whitespace-pre-line"
              style={{ wordSpacing: "1rem" }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {line}
            </_m.p>
          ))}

          {/* Pagination Controls (Placed under My Own Writing) */}
          <_m.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`flex justify-center items-center space-x-4 mt-14 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`px-6 py-2 rounded-lg ${
                currentPage === 0
                  ? "bg-gray-400 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <MdOutlineNavigateBefore />
            </button>

            <span className="text-sm font-semibold">
              Page {currentPage + 1} of {totalPages}
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`px-6 py-2 rounded-lg ${
                currentPage === totalPages - 1
                  ? "bg-gray-400 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <MdOutlineNavigateNext />
            </button>
          </_m.div>
        </div>

        {/* Famous Poetry (Right Side) */}
        <div
          className={`w-full md:w-[30%] mx-auto mb-10 hidden md:block ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <_m.h3
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-xl font-bold text-center mb-6"
          >
            Famous Writing
          </_m.h3>

          <_m.div
            variants={SlideUp(0.5)}
                        initial="initial"
                        whileInView="animate"
            className={`rounded-2xl p-6 shadow-inner space-y-8 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            {/* Famous Poets */}
            <div>
              <h4
                className={`text-center text-lg font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Famous Poets
              </h4>

              <div className="space-y-4">
                {[
                  {
                    name: "Allama Iqbal",
                    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSe7FVHC6MAfvCW5KsIRqDKYHJAv24Il7tkI39J22b6m_ePTxBt",
                    link: "https://www.rekhta.org/poets/allama-iqbal",
                  },
                  {
                    name: "Jaun Elia",
                    img: "https://poetistic.com/_ipx/f_webp,s_360x360/https://d1a1sxzos5rrmb.cloudfront.net/writers-profile/8H9ANj3IL8w3dUmKhfilSpF5AbjmSe5WFhOGRxj0.jpeg",
                    link: "https://www.rekhta.org/poets/jaun-elia",
                  },
                  {
                    name: "Faiz Ahmed Faiz",
                    img: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/16/Pictures/_4a9fa5a2-388b-11ea-a5b1-19fef2bd3e95.jpg",
                    link: "https://www.rekhta.org/poets/faiz-ahmad-faiz",
                  },
                  {
                    name: "William Shakespeare",
                    img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg",
                    link: "https://www.poetryfoundation.org/poets/william-shakespeare",
                  },
                  {
                    name: "Emily Dickinson",
                    img: "https://framerusercontent.com/images/aM1G5TfC8Is6A3ErmxDSMk2xtg.png",
                    link: "https://www.poetryfoundation.org/poets/emily-dickinson",
                  },
                ].map((poet, idx) => (
                  <a
                    key={idx}
                    href={poet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 transition-all duration-300 p-3 rounded-xl shadow-sm hover:shadow-md group ${
                      theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-white hover:bg-blue-50"
                    }`}
                  >
                    <img
                      src={poet.img}
                      alt={poet.name}
                      className="w-12 h-12 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span
                      className={`text-base font-medium transition-colors duration-300 group-hover:text-blue-600 ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {poet.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </_m.div>
        </div>
      </div>
    </div>
  );
}

export default Poetry;
