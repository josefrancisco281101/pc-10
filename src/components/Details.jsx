import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Details() {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        padding: 2,
        maxWidth: { xs: "400px", md: "100%", marginTop: 40 },
        marginRight: { md: 10 },
      }}
    >
      <div style={{ color: "#8f949d" }}>
        <Typography variant="p" component="h4" gutterBottom>
          Sneaker Company
        </Typography>
      </div>

      <Typography variant="h4" component="h2" gutterBottom>
        Fall Limited Edition Sneakers
      </Typography>
      <div style={{ color: "#8f949d" }}>
        <Typography variant="body1" paragraph>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </Typography>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", md: "column" },
          alignItems: { sm: "center", md: "flex-start" },
          gap: 1,
          justifyContent: { sm: "space-between", md: "flex-start" },
          marginInline: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: { sm: "auto", md: "50%" },
          }}
        >
          <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
            $125.00
          </Typography>
          <Typography
            variant="subtitle1"
            component="h4"
            sx={{
              color: "white",
              background: " black",
              borderRadius: "5px",
              padding: "0px 6px",
            }}
          >
            50%
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="h5"
          sx={{
            textDecoration: "line-through",
            mt: { sm: 1, md: 2 },
            color: "#6f7279",
            width: { sm: "auto", md: "100%" },
          }}
        >
          $250.00
        </Typography>
      </Box>

      <Box sx={{ display: { sm: "block", md: "flex" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", md: "flex-start" },
            gap: 1,
            mt: 2,
            boxShadow: {
              xs: " 0px 0px 1px rgba(0, 0, 0, 0.5)",
              md: "none",
            },
          }}
        >
          <Button
            sx={{
              borderRadius: "10%",
              border: "none",
              color: "orange",
              fontSize: "20px",
            }}
            onClick={() => {
              if (value > 0) {
                setValue(value - 1);
              }
            }}
          >
            -
          </Button>
          <Typography variant="h6" component="p">
            {value === 0 ? 0 : value}
          </Typography>
          <Button
            sx={{
              borderRadius: "10%",
              border: "none",
              color: "orange",
              fontSize: "20px",
            }}
            onClick={() => setValue(value + 1)}
          >
            +
          </Button>
        </Box>

        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
            color: "black",
            background: "#ff7d1b",
            padding: "10px 15px",

            borderRadius: "8px",
            "&:hover": {
              background: "#ff7d1b",
            },
            width: { sm: "100%", md: "auto" },
          }}
        >
          <ShoppingCartIcon sx={{ mr: 1 }} />
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}
