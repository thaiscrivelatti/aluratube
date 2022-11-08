import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { assets } from "../assets";

function HomePage() {
  const estiloHomePage = {
    // backgroundColor: "red",
  };

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;

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
    border: 1px solid red;
    margin: 10px 20px;
  }
`;

const StyledBanner = styled.div`
  background-color: gray;
  background-image: url(${config.bannerUrl});
  height: 230px;
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
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2> {playlistName} </h2>
            <div>
              {videos.map((video: any) => {
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
