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
  Checkbox,
  Slider,
  Flex,
  Box,
  Button,
  Image,
  Link,
} from "theme-ui";
import theme from "theme";

export default function Transportaion() {
  const [] = useState();
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={styles.main}>
        <Box
          as='form'
          onSubmit={(e) => e.preventDefault()}
          sx={styles.main.formWrapper}
        >
          <Label htmlFor='username'>Username</Label>
          <Input name='username' id='username' mb={3} />
          <Label htmlFor='password'>Password</Label>
          <Input type='password' name='password' id='password' mb={3} />
          <Box>
            <Label mb={3}>
              <Checkbox />
              Remember me
            </Label>
          </Box>
          <Label htmlFor='sound'>Sound</Label>
          <Select name='sound' id='sound' mb={3}>
            <option>Beep</option>
            <option>Boop</option>
            <option>Blip</option>
          </Select>
          <Label htmlFor='comment'>Comment</Label>
          <Textarea name='comment' id='comment' rows={6} mb={3} />
          <Flex mb={3}>
            <Label>
              <Radio name='letter' /> Alpha
            </Label>
            <Label>
              <Radio name='letter' /> Bravo
            </Label>
            <Label>
              <Radio name='letter' /> Charlie
            </Label>
          </Flex>
          <Label>Slider</Label>
          <Slider mb={3} />
          <Button>Submit</Button>
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
    alignItems: "center",
    justifyContent: "center",
    formWrapper: {
      width: "80%",
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
  },
};
