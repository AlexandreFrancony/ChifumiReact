import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Chifumia2 from "./Chi-fu-mi-a2.png";
import Chifumialone from "./Chi-fu-mi-alone.png";
import "./styles.css";

function GameList() {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const images = [
    {
      url: "./Chi-fu-mi-a2.png",
      title: "Game ready",
      width: "100%",
    },
    // {
    //     url: "./Chi-fu-mi-alone.png",
    //     title: "Game ready",
    //     width: "100%",
    // },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  useEffect(() => {
    fetch("http://fauques.freeboxos.fr:3000/matches", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoaded(true);
        setGames(data.reverse());
      });
  }, []);

  if (!isLoaded) {
    return <div className="Nomacth">No match for now... Create a match !</div>;
  } else {
    return (
      <div className="game-wrap">
        {games.map((game) => (
          <div className="game" key={game._id}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                minWidth: 300,
                width: "100%",
              }}
            >
              {images.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}
                >
                  {game.user2 ? (
                    <Link to={`/partylist/${game._id}`}>
                      <ImageSrc
                        style={{ backgroundImage: `url(${Chifumia2})` }}
                      />
                      <ImageBackdrop className="MuiImageBackdrop-root" />
                      <Image>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="grey.800"
                          sx={{
                            position: "relative",
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                          }}
                        >
                          <div className="game-players">
                            <p>{image.title}</p>
                          </div>
                          <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                      </Image>
                    </Link>
                  ) : (
                    <Link to={`/partylist`}>
                      <ImageSrc
                        style={{ backgroundImage: `url(${Chifumialone})` }}
                      />
                      <ImageBackdrop className="MuiImageBackdrop-root" />
                      <Image>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="error"
                          sx={{
                            position: "relative",
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                          }}
                        >
                          <div className="game-players">
                            <p>Game not ready</p>
                          </div>
                          <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                      </Image>
                    </Link>
                  )}
                </ImageButton>
              ))}
            </Box>
            <div className="game-players">
              <p>
                Player 1 : <br></br>
                {game.user1.username}
              </p>
            </div>
            <div className="game-players">
              <p>
                Player 2 : <br></br>
                {game.user2
                  ? game.user2.username
                  : "Waiting for another player..."}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default GameList;
