import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  chakra,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub, IoMail } from 'react-icons/io5'
import Image from 'next/image'
import {
  JavascriptOriginal,
  ReactOriginalWordmark,
  JavaOriginalWordmark,
  NodejsOriginalWordmark,
  ExpressOriginalWordmark,
  SpringOriginalWordmark,
  PostgresqlOriginalWordmark,
  AmazonwebservicesOriginalWordmark,
  FirebasePlainWordmark,
} from 'devicons-react'



const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Champion of the people, as per consensus of the people.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jacob Clement
          </Heading>
          <p>Software Engineer, Creative</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/jacob.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          As a Software Engineer I bring extensive experience in developing advanced solutions for web-based technologies. My technical expertise shines through in leading code enhancements, optimizing processes, and collaborating with teams to deliver efficient client solutions. I am proficient in Java, Spring MVC/Spring Boot, Open API Generator, PostgreSQL, Docker, GitHub, and AWS, specializing in impactful software development.        </Paragraph>
        <SimpleGrid column={0}>
          <Heading as="h3" variant="section-title">
            Tech Stack I'm Currently
          </Heading>
          <Heading as="h3" variant="section-title" mt={-1}>
            Building With
          </Heading>
        </SimpleGrid>

        <SimpleGrid columns={{ base: '5', md: '9' }} spacing={9} paddingBlock={1} paddingInlineEnd={4}>
          <Box as={ReactOriginalWordmark} size="50" />
          <Box as={JavaOriginalWordmark} size="50" />
          <Box as={JavascriptOriginal} size="50" />
          <Box as={ExpressOriginalWordmark} size="50" />
          <Box as={SpringOriginalWordmark} size="50" />
          <Box as={PostgresqlOriginalWordmark} size="50" />
          <Box as={AmazonwebservicesOriginalWordmark} size="50" />
          <Box as={NodejsOriginalWordmark} size="50" />
          <Box as={FirebasePlainWordmark} size="50" />
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="ghost">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2023 - Present</BioYear>
          Software Engineer - Mantel Group
        </BioSection>
        <BioSection>
          <BioYear>2022 - 2023</BioYear>
          Graduate Process Engineer - The Arnotts Group
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Graduated from The University Of Adelaide with a Bachelor of Process Engineering achieving first class honours.
        </BioSection>
        <BioSection>
          <BioYear>2020 - 2021</BioYear>
          STEM ambassador - The University of Adelaide
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Recipient of The Peoples Choice Award for honours research
        </BioSection>
        <BioSection>
          <BioYear>2019 - 2020</BioYear>
          Engineering Internship - The GFG Liberty Steelworks
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Basketball,{' '}
          <Link href="https://unfdcentral.com/artists/sleep-talk/" target="_blank">
            Music
          </Link>
          , Golf, Film, Politics and aiming for the stars and landing wherever my Nissan X-trail can get me.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Get In Touch
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ThePeoplesChamp" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ThePeoplesChamp
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/jacob-clement1/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Jacob Clement
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto: jacob.clement1870@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                @Jacob Clement
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout >
)

export default Home
export { getServerSideProps } from '../components/chakra'
