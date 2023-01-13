import {
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import Checkbox from "@mui/material/Checkbox";
import Photo1 from "../Assets/Images/photo1.png";
import Photo2 from "../Assets/Images/photo2.png"
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { useState } from "react";

export default function Checkout() {
  let [initialValue, setinitialValue] = useState(0);
  const country = [
    {
      label: "Philippines",
      value: "Ph",
    },
    {
      label: "Malaysia",
      value: "My",
    },
    {
      label: "Taiwan",
      value: "Tw",
    },
    {
      label: "Your country...",
      value: "country",
    },
  ];
  const style = {
    mainCon: {
      margin: "64px 240px",
    },
    subCon: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "70px",
      "@media only screen and (max-width : 400px)" : {
        flexDirection : "column-reverse"
      }
    },
    infoCon: {
      maxWidth: "465px",
    },
    title: {
      fontSize: "36px",
      fontFamily: "Montserrat",
      color: "#4E5150",
    },
    subTitle: {
      fontSize: "18px",
      fontFamily: "Montserrat",
      color: "#333333",
    },
    inputField: {
      width: "465px",
      height: "56px",
      borderRadius: "12px",
      [`& fieldset`]: {
        borderRadius: "12px",
        border: "1px solid #828282",
      },
      "& input::placeholder": {
        fontFamily: "Montserrat",
        color: "#828282",
        fontSize: "16px",
      },
    },
    inputFieldLast: {
      width: "217px",
      height: "56px",
      borderRadius: "12px",
      [`& fieldset`]: {
        borderRadius: "12px",
        border: "1px solid #828282",
      },
    },
    lastField: {
      display: "flex",
      justifyContent: "space-between",
    },
    checkText: {
      fontFamily: "Montserrat",
      fontSize: "12px",
      color: "#4F4F4F",
    },
    buttonCon: {
      display: "flex",
      justifyContent: "right",
    },
    button: {
      padding: "12px 45px",
      backgroundColor: "#F2994A",
      borderRadius: "12px",
      color: "#FFFFFF",
      fontFamily: "Montserrat",
      fontSize: "16px",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#EF7E1A",
      },
    },
    paper: {
      minWidth: "383px",
      minHeight: "535px",
      backgroundColor: "#F2F2F2",
      borderRadius: "12px",
    },
    productCon: {
      padding: "1px 29px",
    },
    productSubCon:{
      display : "flex",
      justifyContent : "space-between",
      marginTop : "33px"
    },
    products: {
      width: "145.7px",
      height: "135.91px",
      borderRadius: "12px",
    },
    productName : {
      fontSize : "16px",
      fontFamily : "Montserrat"
    },
    priceCon : {
      display : "flex",
      justifyContent : "space-between"
    },
    price : {
      fontSize : "16px",
      fontFamily : "Montserrat",
      color : "#F2994A"
    },
    discountedPrice : {
      fontSize : "12px",
      fontFamily : "Montserrat",
      textDecorationLine : "line-through"
    },
    productQuantity: {
      width: "134.25px",
      [`& fieldset`]: {
        borderRadius: "12px",
        border: "1px solid #828282",
        
      },
    },
    iconButton : {
      fontSize : "21px"
    }
  };
  const handleChangeRemove = () => {
    if (initialValue <= 0) {
      setinitialValue((initialValue = 0));
    } else {
      setinitialValue(initialValue - 1);
    }
  };
  const handleChangeAdd = () => {
    setinitialValue(initialValue + 1);
  };
  return (
    <Box sx={style.mainCon}>
      <Typography sx={style.title}>Checkout</Typography>
      <Box sx={style.subCon}>
        <Box sx={style.infoCon}>
          <Typography sx={style.subTitle}>Contact Information</Typography>
          <Box>
            <Typography>E-mail</Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email..."
              sx={style.inputField}
              InputProps={{
                style: { fontFamily: "Montserrat", fontSize: "16px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Typography>Phone</Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your phone..."
              sx={style.inputField}
              InputProps={{
                style: { fontFamily: "Montserrat", fontSize: "16px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <Typography sx={style.subTitle}>Shipping address</Typography>
            <Typography>Fullname</Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your fullname..."
              sx={style.inputField}
              InputProps={{
                style: { fontFamily: "Montserrat", fontSize: "16px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Typography>Address</Typography>
            <TextField
              variant="outlined"
              placeholder="Your address..."
              sx={style.inputField}
              InputProps={{
                style: { fontFamily: "Montserrat", fontSize: "16px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Typography>City</Typography>
            <TextField
              variant="outlined"
              placeholder="Your city..."
              sx={style.inputField}
              InputProps={{
                style: { fontFamily: "Montserrat", fontSize: "16px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={style.lastField}>
              <Box>
                <Typography>Country</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Your country..."
                  sx={style.inputFieldLast}
                  InputProps={{
                    style: { fontFamily: "Montserrat", fontSize: "16px" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <PublicIcon />
                      </InputAdornment>
                    ),
                  }}
                  select
                  defaultValue="country"
                >
                  {country.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box>
                <Typography>Postal code</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Your postal code..."
                  sx={style.inputFieldLast}
                  InputProps={{
                    style: { fontFamily: "Montserrat", fontSize: "16px" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <MarkunreadMailboxIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
            <FormControl>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography sx={style.checkText}>
                    Save this information for next time
                  </Typography>
                }
                labelPlacement="end"
              />
            </FormControl>
            <Box sx={style.buttonCon}>
              <Button variant="filled" sx={style.button}>
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Paper sx={style.paper}>
            <Box sx={style.productCon}>
              <Box sx = {style.productSubCon}>
                <Box component="img" src={Photo1} sx={style.products}></Box>
                <Box>
                  <Typography sx = {style.productName}>Vintage Bag</Typography>
                  <Box sx = {style.priceCon}>
                    <Typography sx = {style.price}>$54.99</Typography>
                    <Typography sx = {style.discountedPrice}>$94.99</Typography>
                  </Box>
                  <TextField
                    sx={style.productQuantity}
                    value={initialValue}
                    inputProps={{ style: { textAlign: "center" } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment>
                          <IconButton onClick={handleChangeRemove}>
                            <IndeterminateCheckBoxIcon  sx = {style.iconButton}/>
                          </IconButton>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment>
                          <IconButton onClick={handleChangeAdd}>
                            <AddBoxIcon sx = {style.iconButton} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                </Box>
              </Box>
              <Box>
              </Box>
              <Box sx = {style.productSubCon}>
              <Box component="img" src={Photo2} sx={style.products}></Box>
                <Box>
                  <Typography sx = {style.productName}>Levi shoes</Typography>
                  <Box sx = {style.priceCon}>
                    <Typography sx = {style.price}>$74.99</Typography>
                    <Typography sx = {style.discountedPrice}>$124.99</Typography>
                  </Box>
                  <TextField
                    sx={style.productQuantity}
                    value={initialValue}
                    inputProps={{ style: { textAlign: "center" } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment>
                          <IconButton onClick={handleChangeRemove}>
                            <IndeterminateCheckBoxIcon sx = {style.iconButton} />
                          </IconButton>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment>
                          <IconButton onClick={handleChangeAdd}>
                            <AddBoxIcon sx = {style.iconButton} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
