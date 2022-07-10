import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { DiReact } from 'react-icons/di'
import { ExternalLinkIcon, Icon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'


const Project = () => (
  <Layout title="AusCamp">
    <Container>
      <Title>
        AusCamp <Badge>2022</Badge>
      </Title>
      <P>
        An Australian camping blog where users can post, edit, review and view camping sites all over the country.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tranquil-mesa-55233.herokuapp.com/" isExternal>
            AusCamp - Web <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, Bootstrap, MongoDB, Mongoose, Express, NodeJS, EJS <Icon as={DiReact} /></span>
        </ListItem>
        <ListItem listStylePos="inline" >
          <Meta>Source</Meta>
          <Link href="https://github.com/ThePeoplesChamp/AusCamp" isExternal>
            AusCamp <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/auscamp_00.jpg" alt="AusCamp" />
      <WorkImage src="/images/works/auscamp_01.jpg" alt="AusCamp" />
      <WorkImage src="/images/works/auscamp_02.jpg" alt="AusCamp" />
      <WorkImage src="/images/works/auscamp_03.jpg" alt="AusCamp" />

    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
