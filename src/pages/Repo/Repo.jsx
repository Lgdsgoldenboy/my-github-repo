import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { repoFn } from "../../utils/users";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as DarkIcon } from "../../assets/svg/DarkIcon.svg";
import { ReactComponent as Lighthcon } from "../../assets/svg/lightIcon.svg";
import dayjs from "dayjs";

const Repo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back by one step in the history stack
  };
  const { userName } = location.state ?? {};
  const [themes, setThemes] = useState("light");
  const [repoData, setRepoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3);

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

  const totalPages = Math.ceil(repoData?.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageRepo = repoData?.slice(startIndex, endIndex);
  const maxLength = 29


  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const { data: repoDetails, isLoading: repoLoading } = useQuery({
    queryKey: ["getSingleUser"],
    queryFn: () => repoFn(userName),
    onSuccess: (data) => {
      console.log("Repo: ", data);
      setRepoData(data?.data);
    },
    onError: (err) => {
      console.log("Err: ", err);
    },
  });

  console.log({
    repoDetails,
    repoLoading,
    userName,
    repoData,
    currentPageRepo,
  });

  return (
    <div>
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
                true ? `Noble Udoesit` : "Github"
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
            <div className="p-[20px_30px] space-y-4">
              <Link>
                <button
                  className="bg-yellow-200 text-sm p-[5px_10px] rounded-md dark:text-black"
                  onClick={handleGoBack}
                >
                  Back
                </button>
              </Link>
              <h1 className="text-2xl font-bold text-center mb-4">
                My Repo Details
              </h1>
              {repoDetails?.data.length > 0 ? (
                currentPageRepo?.map(
                  ({
                    id,
                    name,
                    language,
                    visibility,
                    updated_at,
                    created_at,
                    html_url,
                    description,
                    git_url,
                    ssh_url,
                    clone_url,
                  }) => (
                    <div
                      key={id}
                      className={`flex items-center p-3 rounded-md ${
                        themes === "dark" ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
                      } dark:text-white`}
                    >
                      <div className="grid w-[90%] grid-cols-1 md: md: md:grid-cols-2 lg: lg:lg: lg:">
                        <div className="text-md text-blue-500 font-semibold">
                          {name.length >= maxLength ? `${name.slice(0, maxLength)}...` : name || "Challenge-2 Project"}
                        </div>
                        <button className="text-[10px] text-black font-bold rounded-full border-2 border-black w-[50px] dark:text-white dark:border-white">
                          {visibility || "public"}
                        </button>
                        <div className="flex gap-2 items-center">
                          <div className="p-2 bg-yellow-200 rounded-full w-[2px] h-[2px]"></div>
                          <div className="font-bold text-md text-black dark:text-white">
                            {language || "HTML"}
                          </div>
                          <p className="text-[#697C9A] mt-[10px] md:mr-[25px] dark:text-white ml-5">
                            <span>Updated </span>
                            <span>
                              {dayjs(updated_at).format("DD-MMM-YYYY")}
                            </span>
                          </p>
                        </div>
                      </div>
                      <Link
                        to="/repo-content"
                        state={{
                          userName: userName,
                          repoName: name,
                          repoVisibility: visibility,
                          dateCreted: created_at,
                          htmlUrl: html_url,
                          gitUrl: git_url,
                          sshUrl: ssh_url,
                          cloneUrl: clone_url,
                          description: description,
                        }}
                      >
                        <button className="bg-yellow-200 text-sm p-[5px_10px] rounded-md dark:text-black">
                          View
                        </button>
                      </Link>
                    </div>
                  )
                )
              ) : (
                <div className="p-10">
                  <h1 className={`font-semibold mb-1 text-lg`}>
                    No Repository Found
                  </h1>
                  <p>
                    You have no repo, please click the link below to create a
                    repo.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`flex items-center justify-between cont2 p-3 rounded-lg ${
                themes === "dark" ? "bg-[#243454]" : "bg-white"
              }`}
            >
              <button
                className={`ml-5 bg-blue-200 text-sm p-[5px_10px] rounded-md dark:text-white ${
                  currentPage === 1 ? "cursor-not-allowed" : ""
                }`}
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="dark:text-white">
                {currentPage} of {totalPages}
              </span>
              <button
                className={`mr-4 bg-blue-200 text-sm p-[5px_10px] rounded-md dark:text-white ${
                  currentPage === totalPages ? "cursor-not-allowed" : ""
                }`}
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {repoLoading ? <p>{"Please wait while we fetch your file"}</p> : null}
    </div>
  );
};

export default Repo;
