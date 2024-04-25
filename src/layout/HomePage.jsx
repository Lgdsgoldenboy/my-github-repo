import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReactComponent as DarkIcon } from "../assets/svg/DarkIcon.svg";
import { ReactComponent as Lighthcon } from "../assets/svg/lightIcon.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/searchIcon.svg";
import { ReactComponent as LocateIcon } from "../assets/svg/locationIcon.svg";
import { ReactComponent as UrlIcons } from "../assets/svg/urlIcon.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitterIcon.svg";
import { userFn } from "../utils/users";
import { ReactComponent as OfficeIcon } from "../assets/svg/officeBuildingIcon.svg";
import { Link } from "react-router-dom";
import avatar from "../assets/img/Bitmap.png";
import dayjs from "dayjs";
import "./HomePage.css";
// import axios from "axios";

// const baseURL = `https://api.github.com/users`;

const HomePage = () => {
  const [themes, setThemes] = useState("light");
  const [username, setUsername] = useState("default1");
  const [error, setError] = useState(null);
  const [queryEnabled, setQueryEnabled] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [userData, setUserData] = useState({});

  // const {
  //   avatar_url,
  //   login,
  //   twitter_username,
  //   bio,
  //   created_at,
  //   public_repos,
  //   followers,
  //   following,
  //   location,
  //   blog,
  //   organizations_url,
  // } = userData;

  // console.log({ userData });

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

  const handleSearchOnChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value !== "") {
      setError("");
    } else if (e.target.value === "") {
      setError("type a text");
    }
  };

  // const getGithubUser = async () => {
  //   setLoading(true);
  //   await axios
  //     .get(`${baseURL}/${username}`)
  //     .then((res) => {
  //       if (res) {
  //         setUserData(res?.data);
  //       }
  //     })
  //     .catch((err) => {
  //       setError(err?.response?.data?.message);
  //       setTextContent("This is an error");
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  const {
    data: userDetails,
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["getSingleUser"],
    queryFn: () => userFn(username),
    // enabled: queryEnabled,
    onSuccess: (data) => {
      console.log("USer: ", data);
    },
    onError: (err) => {
      console.log("Err: ", err);
    },
  });
  const seacrUser = () => {
    refetch();
  };

  // const {
  //   data: repoDetails,
  //   isLoading: repoLoading,
  // } = useQuery({
  //   queryKey: ["getSingleUser"],
  //   queryFn: () => userFn(username),
  //   onSuccess: (data) => {
  //     console.log("USer: ", data);
  //   },
  //   onError: (err) => {
  //     console.log("Err: ", err);
  //   },
  // });

  const {
    avatar_url,
    login,
    twitter_username,
    bio,
    created_at,
    public_repos,
    followers,
    following,
    location,
    blog,
    organizations_url,
  } = userDetails?.data ?? {};

  return (
    <>
      <div
        className={`min-h-screen font-mono font-light cont ${
          themes === "dark" ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
        }`}
      >
        <div className="max-w-[767px] mx-auto pt-[50px] px-[20px] cont1">
          <div className="flex items-center justify-between cont2">
            <h5 className="text-[#222731] text-3xl font-bold md:text-xl md:font-semibold dark:text-white">
              <p className="text-[#0079FF]">
                {/* {`${twitter_username ? `${twitter_username}` : "Github"}`} */}
                {`${
                  twitter_username !== null ? `${twitter_username}` : "Github"
                }`}

                {/* {`${twitter_username?.trim() || "Github"}`} */}

                {/* {`Github`} */}
              </p>
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
          <div className="relative mt-[3rem]">
            <SearchIcon className="absolute left-2 top-4 dark:bg-transparent" />
            <input
              type="text"
              placeholder="Search Github Username..."
              className="w-full h-[3.5rem] bg-white rounded-[10px] border-0 outline-0 p-[0_3rem] shadow-xl text-[#4B6A9B] dark:text-white dark:bg-[#1E2A47]"
              onChange={handleSearchOnChange}
            />
            <button
              className={`absolute right-2 top-1.5 bg-[#0079FF] w-[5rem] h-[2.8rem] rounded-[10px] text-white ${
                userLoading ? "text-xs w-[7rem]" : ""
              } ${
                error
                  ? "bg-[#0079FF20] cursor-not-allowed dark:bg-[#0079FF10] dark:text-slate-700"
                  : ""
              }`}
              onClick={seacrUser}
              disabled={error}
            >
              {userLoading ? "Searching....." : "Search"}
            </button>
            <p className="absolute right-[20%] top-[15px] text-red-500">
              {error}
            </p>
          </div>
          {/* <p className="text-yellow-600">{textContent}</p> */}
          <div className="relative bg-white mt-[2rem] flex md:gap-2 shadow-xl h-[60vh] md:h-[60vh] dark:bg-[#1E2A47] rounded-[10px]">
            <div className="m-[10px] ml-[30px] md:ml-[7rem] lg:ml-[30px]">
              <img
                src={avatar_url ? avatar_url : avatar}
                alt="github-user-profile-picture"
                className="h-[90px] w-[90px] rounded-full object-center m-3 md:h-[120px] md:w-[120px] md:rounded-full"
              />
            </div>
            <div className="m-[10px] w-full pr-[20px]">
              <div className="flex flex-col justify-between md:flex-col lg:flex-row">
                <div className="mt-[10px] md:mb-[12px]">
                  <Link
                    to={`/repo`}
                    state={{
                      userName: username,
                    }}
                  >
                    <p className="text-lg md:text-2xl font-semibold text-[#2B3442] mb-[5px] dark:text-white">
                      {login ? login : "The Octocrat"}
                    </p>
                    <p className="text-[#0079FF]">
                      {`${twitter_username ? `@${twitter_username}` : "@none"}`}
                    </p>
                  </Link>
                </div>
                <div className="text-[#697C9A] mt-[10px] md:mr-[25px] dark:text-white">
                  <span>Joined </span>
                  <span>{dayjs(created_at).format("DD-MMM-YYYY")}</span>
                </div>
              </div>
              <div className="absolute top-[18%] left-10 w-[70%] mt-[30px] md:left-[18%] lg:relative lg:-mt-[90px] lg:w-full lg:-ml-[6rem]">
                <p className="text-[#697C9A] my-[1.5rem] md:mb-[20px]">
                  {bio ? bio?.trim() : "This Profile has no bio."}
                </p>
              </div>
              <div className="absolute top-[50%] left-10 w-[70%] md:w-[70%] md:top-[48%] xsm:p-[10px_20px] md:left-[18%] bg-[#F6F8FF] flex justify-evenly md:py-[1rem] rounded-[10px] lg:relative lg:-mt-[6.5rem] lg:w-full lg:-ml-[6rem] dark:bg-[#141D2F]">
                <div>
                  <div className="text-md text-[#697C9A] font-bold">Repos</div>
                  <div className="font-bold text-2xl text-[#2B3442] dark:text-white">
                    {public_repos || 0}
                  </div>
                </div>
                <div>
                  <div className="text-md text-[#697C9A] font-bold">
                    Followers
                  </div>
                  <div className="font-bold text-2xl text-[#2B3442] dark:text-white">
                    {followers || 0}
                  </div>
                </div>
                <div>
                  <div className="text-md text-[#697C9A] font-bold">
                    Following
                  </div>
                  <div className="font-bold text-2xl text-[#2B3442] dark:text-white">
                    {following || 0}
                  </div>
                </div>
              </div>
              <div className="grid absolute top-[65%] left-10 w-[70%] grid-cols-1 md:top-[70%] md:left-[18%] md:grid-cols-2 mt-[2rem] mb-[1rem] lg:relative lg:-mt-[45px] lg:w-full lg:-ml-[6rem]">
                <div className="flex gap-5 items-center mb-[1rem]">
                  <LocateIcon className="dark:bg-[#FFFFFF]" />
                  <div className="text-md text-[#697C9A] font-light">
                    {location || "nill"}
                  </div>
                </div>
                <div className="flex gap-5 items-center mb-[1rem]">
                  <TwitterIcon className="dark:bg-[#FFFFFF]" />
                  <div className="text-md text-[#697C9A] font-light">
                    {`${twitter_username ? `@${twitter_username}` : "none"}`}
                  </div>
                </div>
                <div className="flex gap-5 items-center mb-[1rem]">
                  <UrlIcons className="dark:bg-[#FFFFFF]" />
                  <div className="text-md text-[#697C9A] truncate font-light w-[160px]">
                    {blog || "nill"}
                  </div>
                </div>
                <div className="flex gap-5 items-center w-[50%]">
                  <OfficeIcon className="dark:bg-[#FFFFFF]" />
                  <div className="text-md text-[#697C9A] truncate font-light w-full">
                    {organizations_url || "nill"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
