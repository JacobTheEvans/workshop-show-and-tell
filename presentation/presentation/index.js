import React, { Component } from 'react'
import createTheme from 'spectacle/lib/themes/default'
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Slide,
  Text,
  CodePane
} from 'spectacle'

require('normalize.css')

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quaternary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

class Presentation extends Component {
  render () {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Workshop Show and Tell
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' textSize={40} bold>
            By Jacob Evans
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary'>
          <Heading size={5} textColor='primary' caps>Who Am I?</Heading>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
            I am Jacob Evans. I have a passion for programming and an overwhelming zeal when it comes to learning. I am an avid Linux user, a supporter of open source software, and an advocate of using technology to improve the world. I currently work at Cybus GmbH as a NodeJS IoT Developer.
          </Text>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={20} textColor='secondary'>
          Jacob Evans (@jacobtheevans)
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={4} textColor='secondary' caps>What will be covered</Heading>
          <List>
            <ListItem>Docker</ListItem>
            <ListItem>MQTT</ListItem>
            <ListItem>GraphQL</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading size={5} textColor='secondary' caps>What is docker?</Heading>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
            Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>Where is it used?</Heading>
          <List>
            <ListItem>PayPal</ListItem>
            <ListItem>Visa</ListItem>
            <ListItem>Expedia</ListItem>
            <ListItem>Splunk</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading size={5} textColor='secondary' caps>Why do we need it?</Heading>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
            Docker enables you to rapidly deploy server environments in containers. This allows secure isolated applications that can be easily integrate into CI, CD and easily scale.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Docker Examples
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading size={5} textColor='secondary' caps>What is MQTT?</Heading>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
          MQTT or Message Queuing Telemetry Transport is a lightweight publish (send a message) subscribe (wait for a message) protocol. It was designed to be used on networks that have low-bandwidth, high-latency and could be unreliable. Since it was designed with these constraints in mind its perfect to send data between devices and is very common in the IoT world.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>Where is it used?</Heading>
          <List>
            <ListItem>Facebook Messenger</ListItem>
            <ListItem>Microsoft Azure </ListItem>
            <ListItem>Amazon IoT</ListItem>
            <ListItem>IECC</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading size={5} textColor='secondary' caps>Why do we need it?</Heading>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
            GraphQL is a query language for APIs. It is also the server-side software that executes those queries by using a type system you define for your data. GraphQL is not tied to an implementation or language is it just a specification. It is also not owned by Facebook but is an open source specification. It has a large community that support it with many implementations in many languages.
           </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            MQTT Examples
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading size={5} textColor='secondary' caps>What is GraphQL?</Heading>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
          GraphQL is a query language for APIs. It is also the server-side software that executes those queries by using a type system you define for your data. GraphQL is not tied to an implementation or language is it just a specification. It is also not owned by Facebook but is an open source specification. It has a large community that support it with many implementations in many languages.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>Where is it used?</Heading>
          <List>
            <ListItem>Github</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>Twitter</ListItem>
            <ListItem>Pinterest</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading size={5} textColor='secondary' caps>Why do we need it?</Heading>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
            GraphQL APIs have a strongly typed schema, that allow us to query and publish only the data we need not build state from many requests. This allows developers to build APIs that are easy to consume from and update.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            GraphQL Examples
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>Thanks for your time</Heading>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
          Jacob Evans (@jacobtheevans)
          </Text>
        </Slide>
      </Deck>
    )
  }
}

export default Presentation
