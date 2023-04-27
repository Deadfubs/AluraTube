import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/TimeLine";

function HomePage() {
  //   console.log(config.playlists);
  const estilosDaHomePage = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    //backgroundColor: "red"
  };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        {/*Prop Drilling*/}
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
          {" "}
          Conteúdo{" "}
        </TimeLine>
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  img {
    width: 88px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    /* margin-top: 50px; */
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner {
    width: 100%;
    height: 230px;
    background-image: url(${config.bg});
    background-size: cover;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <section className="banner" />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine({ searchValue, ...props }) {
  //   console.log("Dentro do componente", props.playlists);
  const playlistsNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistsNames.map(function (playlistName) {
        const videos = props.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map(function (video) {
                  return (
                    <a href={video.url}>
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
