import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '../src/theme'

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}