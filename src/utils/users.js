import Axios from "./axios";
import axios from "axios";

export const userFn = async (username) => {
  const res = await Axios.get(`users/${username}`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return res;
};

export const repoFn = async (username) => {
  const res = await Axios.get(`users/${username}/repos`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return res;
};

export const repoContentFn = async (username, repoName) => {
    const res = await Axios.get(`users/${username}/repos/${repoName}`, {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    return res;
  };
