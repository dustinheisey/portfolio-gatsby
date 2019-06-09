// External
import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'
import AccordionCSS from 'react-accessible-accordion/dist/fancy-example.css'
import { Helmet } from 'react-helmet'

// Global
import GlobalStyle, { media } from './global'

// Atoms
import Btn from '../src/components/elements/atoms/Btn'
import Link from '../src/components/elements/atoms/Link'

// Molecules
import Blurb from '../src/components/elements/molecules/Blurb'
import Grid from '../src/components/elements/molecules/Grid'
import Section from '../src/components/elements/molecules/Section'

// Layout
import Header from '../src/components/layout/header/Header'
import NavDesktop from '../src/components/layout/header/NavDesktop'
import NavMobile from '../src/components/layout/header/NavMobile'
import NavMobileLight from '../src/components/layout/header/NavMobileLight'

import Footer from '../src/components/layout/footer/Footer'
import Copywrite from '../src/components/layout/footer/Copywrite'

import Bare from '../src/components/layout/Default'
import Cover from '../src/components/layout/Cover'

import Coffee from '../src/components/layout/footer/Call'
import SEO from '../src/components/layout/header/SEO'

import Icon from '../src/media/svg/inline/example-icon.svg'

export {
  React,
  Component,
  styled,
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionCSS,
  Helmet,
  GlobalStyle,
  media,
  Btn,
  Link,
  Blurb,
  Grid,
  Section,
  Header,
  NavDesktop,
  NavMobile,
  NavMobileLight,
  Footer,
  Copywrite,
  Bare,
  Cover,
  Coffee,
  SEO,
  Icon
}
