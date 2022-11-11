import { useState } from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { Props } from "next/script";

function HomePage() {
  const estiloHomePage = {
    // backgroundColor: "red",
  };

  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Header />
        <Timeline playlists={config.playlists} searchValue={searchValue}/>
      </div>
    </>
  );
}

/** Components */
const StyledHeader = styled.section`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 20px;
  }
  .user-info {
    display: flex;
    align-items: center;
    margin: 10px 20px;
  } 
`;

const StyledBanner = styled.div`
  background-color: gray;
  background-image: url(${config.bannerUrl});
  background-position: center;
  background-size: cover;
  height: 300px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props: any) {
  const { searchValue } = props;
  const { playlists } = props;

  const playlistNames = Object.keys(playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2> {playlistName} </h2>
            <div>
              {videos.filter((video: any)=>{
                // "Normalize" strings to lower case, so the search is not case sensitive
                const titleNormalized = video.title.toLowerCase();
                const searchNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchNormalized);
              }).map((video: any) => {
                return (
                  <a href={video.url} key={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

export default HomePage;