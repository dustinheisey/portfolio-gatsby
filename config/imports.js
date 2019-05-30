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
import Helmet from 'react-helmet'

// Global
import GlobalStyle, { media } from './global'

// Atoms
import Btn from '../src/components/elements/atoms/Btn'
import Input from '../src/components/elements/atoms/Input'
import Link from '../src/components/elements/atoms/Link'

// Molecules
import Blurb from '../src/components/elements/molecules/Blurb'
import Form from '../src/components/elements/molecules/Form'
import Grid from '../src/components/elements/molecules/Grid'
import Section from '../src/components/elements/molecules/Section'

// Layout
import Header from '../src/components/layout/header/Header'
import NavDesktop from '../src/components/layout/header/NavDesktop'
import NavMobile from '../src/components/layout/header/NavMobile'

import Footer from '../src/components/layout/footer/Footer'
import Copywrite from '../src/components/layout/footer/Copywrite'

import Bare from '../src/components/layout/layouts/Bare'
import Cover from '../src/components/layout/layouts/Cover'

import Coffee from '../src/components/layout/Coffee'
import SEO from '../src/components/layout/SEO'

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
  Input,
  Link,
  Blurb,
  Form,
  Grid,
  Section,
  Header,
  NavDesktop,
  NavMobile,
  Footer,
  Copywrite,
  Bare,
  Cover,
  Coffee,
  SEO,
  Icon
}
