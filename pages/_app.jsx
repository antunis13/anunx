import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '../src/theme'
import { ToastyProvider } from '../src/contexts/Toasty'
import { SessionProvider } from "next-auth/react"

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <ToastyProvider>
            <Component {...pageProps} />
            <CssBaseline />
          </ToastyProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}