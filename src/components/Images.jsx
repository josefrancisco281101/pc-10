import React, { useState } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Images() {
  const images = [
    { id: "1", img: "../../images/image-product-1.jpg" },
    { id: "2", img: "../../images/image-product-2.jpg" },
    { id: "3", img: "../../images/image-product-3.jpg" },
    { id: "4", img: "../../images/image-product-4.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].img);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handlePrevImage = () => {
    const currentIndex = images.findIndex(
      (image) => image.img === selectedImage
    );
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex].img);
  };

  const handleNextImage = () => {
    const currentIndex = images.findIndex(
      (image) => image.img === selectedImage
    );
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].img);
  };

  return (
    <>
      <Box
        sx={{
          padding: 2,
          maxWidth: { xs: 350, md: 400 },
          margin: { xs: "0 auto", md: "0" },
          px: { xs: 0, md: 20 },
          position: "relative",
        }}
      >
        <IconButton
          onClick={handlePrevImage}
          sx={{
            display: { md: "none" },
            position: "absolute",
            left: 2,
            top: "50%",
            transform: "translateY(-110%)",
            bgcolor: "white",
            color: "black",
            borderRadius: "100%",

            zIndex: 1,
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box sx={{ mb: 2 }}>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "100%", borderRadius: "8px", cursor: "pointer" }}
            onClick={handleImageClick}
          />
        </Box>
        <IconButton
          onClick={handleNextImage}
          sx={{
            display: { md: "none" },
            position: "absolute",
            right: 2,
            top: "50%",
            transform: "translateY(-110%)",
            bgcolor: "white",
            color: "black",
            borderRadius: "100%",
            zIndex: 1,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            px: 2,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {images.map((image) => (
            <Box
              key={image.id}
              onClick={() => setSelectedImage(image.img)}
              sx={{
                width: { xs: 70, md: 80 },
                flexShrink: 0,
                display: { sm: "none", md: "flex" },
              }}
            >
              <div
                style={{
                  border:
                    selectedImage === image.img ? "2px solid orange" : "none",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image.img}
                  alt={`Thumbnail ${image.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                    borderRadius: "7px",
                    opacity: selectedImage === image.img ? "0.5 " : "1",
                    transition: "opacity 0.3s ease",
                  }}
                />
              </div>
            </Box>
          ))}
        </Box>
      </Box>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "60%",
            maxHeight: "100%",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              marginRight: "23%",
            }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              marginLeft: "21.4%",
              bgcolor: "white",
              color: "black",
              borderRadius: "50%",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              width: "50%",

              borderRadius: "8px",
              marginLeft: "25%",
              marginTop: "8%",
            }}
          />
          <IconButton
            onClick={handleNextImage}
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              marginRight: "21.4%",
              bgcolor: "white",
              color: "black",
              borderRadius: "50%",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 2,
              px: 2,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },

              marginLeft: "25%",
              marginTop: "3%",
            }}
          >
            {images.map((image) => (
              <Box
                key={image.id}
                onClick={() => setSelectedImage(image.img)}
                sx={{ width: { xs: 70, md: 80 }, flexShrink: 0 }}
              >
                <div
                  style={{
                    border:
                      selectedImage === image.img ? "2px solid orange" : "none",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={image.img}
                    alt={`Thumbnail ${image.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      cursor: "pointer",
                      borderRadius: "7px",
                      opacity: selectedImage === image.img ? "0.5 " : "1",
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </div>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
