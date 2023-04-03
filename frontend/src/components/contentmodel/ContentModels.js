import * as React from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Fade from "@mui/material/Fade";
import Button from "@mui/base/ButtonUnstyled";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  unavailable,
  unavailableLandscape,
  img_500,
  img_300,
} from "../config/config";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import YouTube from '@mui/icons-material/YouTube';
import "./ContentModel2.css";
import Carousel from "./Carousel/Carousel";
const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

BackdropUnstyled.propTypes = {
  open: PropTypes.bool,
};

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: "80%",
  height: "70%", // check karo size nahi sahi hai
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 900,  // check karo size nahi sahi hai
  backgroundColor: "#39445a",
  border: "2px solid #282c34",
  color: "white",
  borderRadius: "10px",
  boxShadow: 24,
  padding: theme.spacing(1, 1, 3),
});

export default function ContentModels({ children, media_type, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setcontnet] = useState("");
  const [video, setvideo] = useState("");
  const fetchdata = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setcontnet(data);
    // console.log(data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setvideo(data.results[0]?.key);
    //  console.log(data.results[0]?.key)
    // console.log(data.results[0]);
  };
  useEffect(() => {
    fetchdata();
    fetchVideo();
  }, []);

  return (
    <>
      <div onClick={handleOpen} className="media">
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <Fade in={open}>
          {content && (
            <Box sx={style}>
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>

                  <div>
                    <Carousel id={id} media_type={media_type} />
                  </div>

                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#7a1818",
                      color: "white",
                      border: "1px solid white",
                      padding: "4px",
                      borderRadius: "5px",
                      textAlign: "center",
                      textDecoration:'none',
                      width:'160px',
                      alignSelf:'center'
                      
                    }}
                    className="youtube_button"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    <YouTubeIcon></YouTubeIcon><br></br>
                     Watch the Trailer
                  </Button>
                </div>
              </div>
            </Box>
          )}
        </Fade>
      </Modal>
    </>
  );
}
