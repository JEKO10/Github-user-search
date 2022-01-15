import { useState } from "react";
import SearchImg from "../images/icon-search.svg";
import Location from "../images/icon-location.svg";
import Twitter from "../images/icon-twitter.svg";
import Blog from "../images/icon-website.svg";
import Company from "../images/icon-company.svg";

function User({ isDark }) {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${query}`);
      const data = await response.json();
      setUser(data);
      if (user !== []) {
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className={isDark ? `searchBar dark` : "searchBar"}>
        <img src={SearchImg} alt="IMG" />
        <input
          className={isDark ? `dark darkText` : ""}
          type="text"
          placeholder="Search GitHub username..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            fetchData();
            setQuery("");
            setTimeout(() => {
              setIsClicked(true);
            }, 500);
          }}
        >
          Search
        </button>
      </section>
      {user.length !== 0 &&
      user.message !== "Not Found" &&
      isLoading === false ? (
        <section className={isDark ? `user dark` : "user"}>
          <img src={user.avatar_url} alt="IMG" />
          <div>
            <div className="name">
              <div>
                <h1 className={isDark ? `darkText` : ""}>{user.name}</h1>
                <a href={user.html_url} target="__blank">
                  @{user.login}
                </a>
                <h1 className={isDark ? `darkText` : ""} id="bio">
                  {user.bio === null ? "This profile has no bio." : user.bio}
                </h1>
              </div>
              <h1 className={isDark ? `darkText` : ""} id="date">
                Joined {user.created_at.slice(0, -10)}
              </h1>
            </div>
            <div className={isDark ? `reposInfo darkRepo` : "reposInfo"}>
              <div>
                <h2 className={isDark ? `darkText` : ""}>Repo</h2>
                <h1 className={isDark ? `darkText` : ""}>
                  {user.public_repos}
                </h1>
              </div>
              <div>
                <h2 className={isDark ? `darkText` : ""}>Followers</h2>
                <h1 className={isDark ? `darkText` : ""}>{user.followers}</h1>
              </div>
              <div>
                <h2 className={isDark ? `darkText` : ""}>Following</h2>
                <h1 className={isDark ? `darkText` : ""}>{user.following}</h1>
              </div>
            </div>
            <div className="basicInfo">
              <div>
                <h1 className={isDark ? `darkText` : ""}>
                  <img src={Location} alt="IMG" />
                  {user.location === null ? "No Location" : user.location}
                </h1>
                <h1 className={isDark ? `darkText` : ""}>
                  <img src={Twitter} alt="IMG" />
                  {user.twitter_username !== null ? (
                    <a
                      href={`https://twitter.com/${user.twitter_username}`}
                      target="__blank"
                    >
                      {"@" + user.twitter_username}
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </h1>
              </div>
              <div>
                <h1 className={isDark ? `darkText` : ""}>
                  <img src={Blog} alt="IMG" />
                  {user.blog !== "" ? (
                    <a
                      href={
                        user.blog.startsWith("h")
                          ? `${user.blog}`
                          : `https://${user.blog}`
                      }
                      target="__blank"
                    >
                      {user.blog}
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </h1>
                <h1 className={isDark ? `darkText` : ""}>
                  <img src={Company} alt="IMG" />
                  {user.company === null ? "No Company" : user.company}
                </h1>
              </div>
            </div>
          </div>
        </section>
      ) : isLoading === true ? (
        <div>
          {isClicked === false ? (
            ""
          ) : (
            <div>
              <div className="loading"></div>
              <h6 id="errorLoading">
                *If it`s loading long, it`s not avalible at the moment. :(
              </h6>
            </div>
          )}
        </div>
      ) : (
        <h1 id="error">
          {isClicked === false ? "" : "No user match input value!"}
        </h1>
      )}
    </>
  );
}

export default User;
