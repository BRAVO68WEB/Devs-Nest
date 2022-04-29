import React,{useState,useEffect} from "react"
import {
  ThemeProvider,
  Box,
  Grid,
  Heading,
  Flex,
  NavLink,
  Divider,
  Button,
  IconButton,
} from "theme-ui";
import theme from "theme";
import axios from "axios";
import FoodLodging from "components/cards/food-lodging";
import thumb1 from "assets/images/blog/1.png";
import thumb2 from "assets/images/blog/2.png";
import thumb3 from "assets/images/blog/3.png";
import thumb4 from "assets/images/blog/4.png";

import avatar1 from "assets/images/team/member1.png";
import avatar2 from "assets/images/team/member2.png";
import avatar3 from "assets/images/team/member3.png";
import avatar4 from "assets/images/team/member4.png";
import arrowRight from "assets/images/icons/arrow-right.png";
import profile from "assets/images/logout.png";
import user from "./api/user";
import Transportaion from "components/transportationForm";
import BlogPost from "components/cards/blog-post";

export default function IndexPage() {
  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");

    console.log(user);
  };

  const [route, setRoute] = useState(0);

  //Transportaion
  /*
  StreamType:{
        type: String,
        enum:["FromUniversity", "ToUniversity"],
    },
    FromLocation: {
        type: String,
        enum : ['Phagwara Railway Stn.', 'Phagwara Bustop','Jhalander Cantt','Jhalander Stn.', "Chandidar Airport", null]
    },
    ToLocation: {
        type: String,
        enum : ['Phagwara Railway Stn.', 'Phagwara Busstop','Jhalander Cantt','Jhalander Stn.', "Chandidar Airport", null]
    },
    Date: {
        type: Date,
    },
    Time: {
        type: String,
    },
    NoOfPassengers: {
        type: Number,
    },
    NoOfLuggage: {
        type: Number,
    },
    Name: {
        type: String,
    },
    PhoneNumber: {
        type: String,
    },
    RegistrationNo: {
        type: Number,
    },
    isAttended: {
        type: Boolean,
        default: false
    }
  */

const food_data = [
    {
      id: 1,
      name: "Emmalee Mclain 1",
      description: "Product Designer",
      details: {
        location: "Bengali",
        phone: "423525",
        address: "Hamet 33",
        isInsideCapus: false,
        openFrom: "8am",
        openTill: "9pm",
      },
    },
    {
      id: 2,
      name: "Emmalee Mclain 2",
      description: "Product Designer",
      details: {
        location: "Bengali",
        phone: "423525",
        address: "Hamet 33",
        isInsideCapus: false,
        openFrom: "8am",
        openTill: "9pm",
      },
    },
    {
      id: 3,
      name: "Emmalee Mclain",
      description: "Product Designer",
      details: {
        location: "Bengali",
        phone: "423525",
        address: "Hamet 33",
        isInsideCapus: false,
        openFrom: "8am",
        openTill: "9pm",
      },
    },
    {
      id: 4,
      name: "Emmalee Mclain",
      description: "Product Designer",
      details: {
        location: "Bengali",
        phone: "423525",
        address: "Hamet 33",
        isInsideCapus: false,
        openFrom: "8am",
        openTill: "9pm",
      },
    },
  ];


  // const [blogs,setBlogs] = useState([])
  // useEffect(() => {
  //   console.log('requesting')
  //   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/view`).then(res => {setBlogs(res.data)}).catch(err => {
  //     console.error(err)
  //   })
  // }, [])
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={styles.main}>
        <Flex sx={{ justifyContent: "flex-end", width: "80%" }}>
          <IconButton aria-label='Toggle dark mode' onClick={handleLogOut}>
            <img src={profile} />
          </IconButton>
        </Flex>
        <Heading>Code Village</Heading>
        <Heading as='h3'>Welcome to our Schools Marketplace</Heading>
        <Divider />
        <Flex
          sx={{
            minWidth: "60%",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button sx={styles.main.nav} onClick={() => setRoute(0)}>
            Food
          </Button>
          <Button sx={styles.main.nav} onClick={() => setRoute(1)}>
            Transportatin
          </Button>
          <Button
            sx={styles.main.nav}
            onClick={() => setRoute(2)}
            disabled={true}
          >
            MarketPlace
          </Button>
          <Button
            sx={styles.main.nav}
            onClick={() => setRoute(3)}
            disabled={true}
          >
            Residence
          </Button>
          <Button sx={styles.main.nav} onClick={() => setRoute(4)}>
            Blog
          </Button>
        </Flex>
        <Divider />
        <Box>Results</Box>
        <Divider />
        {route === 0 ? (
          <Flex sx={styles.main.marketContainer}>
            {food_data.map((member, key) => {
              return <FoodLodging key={key} store={member} />;
            })}
          </Flex>
        ) : route === 1 ? (
          <Flex sx={styles.main.transportationContainer}>
            <Transportaion />
          </Flex>
        ) : route === 2 ? (
          <Flex sx={styles.main.marketContainer}></Flex>
        ) : route === 3 ? (
          <Flex sx={styles.main.marketContainer}></Flex>
        ) : route === 4 ? (
          <Flex sx={styles.main.marketContainer}>
            {blogs.map((member, key) => {
              return <BlogPost post={member} />;
            })}
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </ThemeProvider>
  );
}

const styles = {
  main: {
    padding: "2rem 1rem",
    alignItems: "center",
    flexDirection: "column",

    marketContainer: {
      flexWrap: "wrap",
      justifyContent: "center",
    },

    transportationContainer: {
      width: "100%",
    },

    nav: {
      margin: "0 10px",
    },
  },
};
