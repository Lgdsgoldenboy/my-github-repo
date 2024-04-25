import React, { useState } from "react";
import { repoContentFn } from "../../utils/users";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as DarkIcon } from "../../assets/svg/DarkIcon.svg";
import { ReactComponent as Lighthcon } from "../../assets/svg/lightIcon.svg";
import dayjs from "dayjs";

const RepoContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back by one step in the history stack
  };

  const {
    userName,
    repoName,
    repoVisibility,
    dateCreted,
    htmlUrl,
    gitUrl,
    sshUrl,
    cloneUrl,
    description,
  } = location.state ?? {};
  const [themes, setThemes] = useState("light");

  const handleThemeSwitch = () => {
    const html = document.querySelector("html");
    if (themes === "light") {
      setThemes("dark");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      setThemes("light");
    }
  };

  console.log({ userName, repoName });

  return (
    <>
      <div className="">
        <div
          className={`min-h-screen font-mono font-light cont ${
            themes === "dark" ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
          }`}
        >
          <div className="max-w-[767px] mx-auto pt-[50px] px-[20px] cont1ax">
            <div
              className={`flex items-center justify-between cont2 p-3 rounded-lg ${
                themes === "dark" ? "bg-[#243454]" : "bg-white"
              }`}
            >
              <h5 className="text-[#222731] text-3xl font-bold md:text-xl md:font-semibold dark:text-white">
                <p className="text-[#0079FF]">{`${
                  true ? `Lgdsgoldenboy` : "Github"
                }`}</p>
              </h5>
              <div className="flex items-start gap-2 cont4">
                <p
                  className={`uppercase text-[#4B6A9B] tracking-tight-[1rem] ${
                    themes === "light" ? "text-[#4B6A9B]" : "text-white"
                  }`}
                >
                  {themes === "light" ? "DARK" : "LIGHT"}
                </p>
                {themes === "light" ? (
                  <DarkIcon
                    className="w-[30px] h-[30px] cursor-pointer"
                    onClick={handleThemeSwitch}
                  />
                ) : (
                  <Lighthcon
                    className="w-[50px] h-[30px] cursor-pointer"
                    onClick={handleThemeSwitch}
                  />
                )}
              </div>
            </div>
            <div
              className={`mt-[50px] ${
                themes === "dark" ? "bg-[#243454]" : "bg-white"
              }`}
            >
              <div className="p-[20px_30px] space-y-2">
                <Link>
                  <button
                    className="bg-yellow-200 text-sm p-[5px_10px] rounded-md dark:text-black"
                    onClick={handleGoBack}
                  >
                    Back
                  </button>
                </Link>
                <h1 className="text-2xl font-bold text-center mb-4 dark:text-white">
                  My Repo Details
                </h1>
                <div className="flex gap-4 p-2 items-center border-t pt-4 pb-4 dark:bg-[#141D2F] dark:rounded-md dark:text-white">
                  <button className="bg-green-500 text-sm text-white p-[5px_10px] rounded-md dark:text-black">
                    {"Repo Name"}
                  </button>
                  <div>{repoName}</div>
                </div>
                <div className="flex gap-4 p-2 items-center border-t pt-4 pb-4 dark:bg-[#141D2F] dark:rounded-md dark:text-white">
                  <button className="bg-green-500 text-sm text-white p-[5px_10px] rounded-md dark:text-black">
                    {"< > Code"}
                  </button>
                  <div>{cloneUrl}</div>
                </div>
                <div className="flex gap-4 p-2 items-center border-t pt-4 pb-4 dark:bg-[#141D2F] dark:rounded-md dark:text-white">
                  <button className="bg-green-500 text-sm text-white p-[5px_10px] rounded-md dark:text-black">
                    {"Project Description"}
                  </button>
                  <div>{description}</div>
                </div>
                <div className="flex gap-4 p-2 items-center border-t pt-4 pb-4 dark:bg-[#141D2F] dark:rounded-md dark:text-white">
                  <button className="bg-green-500 text-sm text-white p-[5px_10px] rounded-md dark:text-black">
                    {"Date Created"}
                  </button>
                  <div>{dateCreted}</div>
                </div>
                <div className="flex gap-4 p-2 items-center border-t pt-4 pb-4 dark:bg-[#141D2F] dark:rounded-md dark:text-white">
                  <button className="bg-green-500 text-sm text-white p-[5px_10px] rounded-md dark:text-black">
                    {"SSH Url"}
                  </button>
                  <div>{sshUrl}</div>
                </div>
                <div className="flex gap-4 p-2 items-center border-t pt-4 pb-4 dark:bg-[#141D2F] dark:rounded-md dark:text-white">
                  <button className="bg-green-500 text-sm text-white p-[5px_10px] rounded-md dark:text-black">
                    {"Project Type"}
                  </button>
                  <div>{repoVisibility}</div>
                </div>
                <div className="flex gap-4 p-2 items-center border-t pt-4 pb-4 dark:bg-[#141D2F] dark:rounded-md dark:text-white">
                  <button className="bg-green-500 text-sm text-white p-[5px_10px] rounded-md dark:text-black">
                    {"Git Project Url"}
                  </button>
                  <div>{gitUrl}</div>
                </div>
                <div className="flex gap-4 p-2 items-center border-t pt-4 pb-4 dark:bg-[#141D2F] dark:rounded-md dark:text-white">
                  <button className="bg-green-500 text-sm text-white p-[5px_10px] rounded-md dark:text-black">
                    {"HTML Url"}
                  </button>
                  <div>{htmlUrl}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoContent;
