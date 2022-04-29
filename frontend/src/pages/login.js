import axios from "axios";
import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import Router from "next/router";
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Slider,
  Checkbox,
  Flex,
  Box,
  Button,
  Image,
  Link,
} from "theme-ui";
import theme from "theme";

export default function Home() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggle = () => {
    console.log("toggled");
    setLogin(!login);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { username, password };

    const user = await axios.post("/api/auth/login", credentials);

    console.log(user);
    Router.push("/home");
  };

  const handleGetUser = async () => {
    const user = await axios.get("/api/user");

    console.log(user);
  }

  return (
    <ThemeProvider theme={theme}>
      <Flex sx={styles.main}>
        <Box as='form' onSubmit={handleSubmit} sx={styles.main.formWrapper}>
          <Button
            sx={styles.main.formWrapper.back}
            onClick={() => Router.push("/")}
          >
            Go Back
          </Button>
          <Image
            src={
              "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000"
            }
            sx={styles.main.formWrapper.image}
          />
          <Checkbox defaultChecked={true} onClick={toggle}/>
          <Label htmlFor='email'>Email</Label>
          <Input
            name='email'
            id='email'
            mb={3}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            mb={3}
            onChange={(e) => setPassword(e.target.value)}
             />
          <Button sx={styles.main.formWrapper.submit}>Login or Signup</Button>
        </Box>
      </Flex>
    </ThemeProvider>
  );
}


const styles = {
  main: {
    padding: "1em",
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    formWrapper: {
      maxWidth: "30%",
      submit: {
        width: "100%",
      },
      image: {
        maxWidth: "100%",
      },
      back: {
        maxWidth: "30%",
        margin: "1rem 0",
        backgroundColor: "#0A8080",
        textAlign: "center",
        borderRadius: "5px",
        padding: "1rem",
      },
    },
  }
};
