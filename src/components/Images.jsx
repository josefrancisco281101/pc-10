import React, { useState } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";

export default function Images() {
  const images = [
    { id: "1", img: "../../images/image-product-1.jpg" },
    { id: "2", img: "../../images/image-product-2.jpg" },
    { id: "3", img: "../../images/image-product-3.jpg" },
    { id: "4", img: "../../images/image-product-4.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].img);

  return (
    <Box
      sx={{
        padding: 2,
        maxWidth: { xs: 350, md: 400 },

        margin: { xs: "0 auto", md: "0" },
        px: { xs: 0, md: 20 },
      }}
    >
      <Box sx={{ mb: 2 }}>
        <img
          src={selectedImage}
          alt="Selected"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>
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
            sx={{ width: { xs: 70, md: 82 }, flexShrink: 0 }}
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
                  borderRadius: "8px",

                  opacity: selectedImage === image.img ? "0.5 " : "1",
                  transition: "opacity 0.3s ease",
                }}
              />
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
