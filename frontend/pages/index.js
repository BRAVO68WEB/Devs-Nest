import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "../theme";
import Layout from "../components/layout";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>

        </Layout>
      </StickyProvider>
    </ThemeProvider>
  )
}
