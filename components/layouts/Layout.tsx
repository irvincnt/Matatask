import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string
  children: any
}

export const Layout:FC<Props> = ({title = 'Open Jira', children}) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar></Navbar>
      {/* Sidebar */}

      <Box sx={{padding: '10px 20px'}}>
        {children}
      </Box>
    </Box>
  )
}
// <></>