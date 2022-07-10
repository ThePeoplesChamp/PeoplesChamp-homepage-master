import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon, Icon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'


const Project = () => (
  <Layout title="Tech Support">
    <Container>
      <Title>
        Support Tickets <Badge>2022</Badge>
      </Title>
      <P>
        A tech support ticketing system that allows employees to submit issues to their IT department.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://championtickets.herokuapp.com/" isExternal>
            Tech Support - Web <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MongoDB, Express, React, Node.js</span>
        </ListItem>
        <ListItem listStylePos="inline" >
          <Meta>Source</Meta>
          <Link href="https://github.com/ThePeoplesChamp/Support-Ticket-React" isExternal>
            Tech Support <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/techsupport_00.JPG" alt="Tech Support" />
      <WorkImage src="/images/works/techsupport_01.JPG" alt="Tech Support" />
      <WorkImage src="/images/works/techsupport_02.JPG" alt="Tech Support" />
      <WorkImage src="/images/works/techsupport_03.JPG" alt="Tech Support" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
