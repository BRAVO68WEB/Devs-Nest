/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link, Card } from "theme-ui";
import { FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
import Widget from "components/footer/widget";

//Food
/*
  storeName: {
        type: String,
    },
    storeAddress: {
        type: String,
    },
    storePhone: {
        type: String,
    },
    location: {
        type: String,
    },
    <isInsideCampus>: {
        type: Boolean,
    },
    openTimes: {
        from:{s
            type: String,
        },
        to:{
            type: String,
        }
    storeDesp :{
        String
      }
    }
*/

const FoodLodging = ({ store }) => {
  return (
    <Card sx={styles.section}>
      {/* <Flex as='figure' sx={styles.avatar}>
        <Image src={member?.avatar} alt={member?.name} />
      </Flex> */}
      <Box sx={styles.about}>
        <Heading as='h3'>{store?.name}</Heading>
        <Text as='p'>{store?.description}</Text>
        <Box sx={styles.socialLinks}>
          {Object.entries(store.details).map((element, keys) => {
            return (
              <li>
                <ul>{element[0] + ": " + element[1]}</ul>
              </li>
            );
          })}
        </Box>
      </Box>
    </Card>
  );
};

export default FoodLodging;

const styles = {
  section: {
    minWidth: "30%",
    margin: "10px",
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
  about: {
    mt: [4],
    textAlign: ["center", null, null, "left"],
    h3: {
      color: "heading",
      fontFamily: "body",
      fontSize: [3, null, 17, null, 4],
    },
    p: {
      color: "#7589A1",
      letterSpacing: "-0.2px",
      mt: [2],
    },
  },
  socialLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["center", null, null, "left"],
    mt: [3],
    a: {
      display: "inline-flex",
      mr: [2],
    },
  },
};
