import { NextPage } from "next"
import AboutMe from "../components/about-me"
import Container from "../components/container"
import Intro from "../components/intro"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import { Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import GdscCanvas from "../components/gdsc-canvas"
import GoliatCanvas from "../components/goliat-canvas"
import Menu from "../components/menu"
import { Model } from "../components/gdsc-model"

const Home: NextPage = () => {
  return (
    <>
      <Container>
      <br></br>  
      
      <Stack spacing={"0px"} justifyContent="center" alignItems="flex-start" px={{base: '5vw', md: '7.5vw'}} mt={{base: '12.5vh', md: '22.5vh'}}>      
        <Wrap>
          <WrapItem>
            <Intro/>
            <GdscCanvas></GdscCanvas>
          </WrapItem>
        </Wrap>
        </Stack>

        <AboutMe/>
        

        <br></br>
        <Menu></Menu>
        <br></br>
        <br></br>
        <Projects></Projects>
        <br></br>
      </Container>
    </>
  )
}

export default Home