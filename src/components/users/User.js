import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Repos from "../repos/Repos";

const User = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [repos, setRepos] = useState([]);

  const getUser = async (userName) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      const data = response.data;
      setUsers(data);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log("Error fetching user: ", error.message);
    }
  };

  const getUserRepos = async (id) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${id}/repos`
      );
      setRepos(response.data);
    } catch (error) {
      console.log("Error fetching user repositories: ", error.message);
    }
  };

  useEffect(() => {
    getUser(id);
    getUserRepos(id);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = users;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt={name}
            className="round-ing"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio: </h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noopere noreferrer"
          >
            Show Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  <a href={blog} target="_blank" rel="noopener noreferrer">
                    {blog}
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
<div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Responsitory: {public_repos}</div>
        <div className="badge badge-dark">Gifts: {public_gists}</div>
      </div>
      <div className="card text-center">
        <Repos props={repos} />
      </div>
    </Fragment>
  );
};
export default User;