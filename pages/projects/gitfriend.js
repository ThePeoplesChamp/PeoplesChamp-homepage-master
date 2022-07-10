import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon, Icon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import { IoLogoGithub } from 'react-icons/io5'


const Work = () => (
  <Layout title="GitFriend">
    <Container>
      <Title>
        GitFriend <Badge>2022</Badge>
      </Title>
      <P>
        A website that allows you to search up your friends on GitHub.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://gitfriend-finder.vercel.app/" isExternal>
            GitFriend - Web <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Tailwind CSS, DaisyUI</span>
        </ListItem>
        <ListItem listStylePos="inline" >
          <Meta>Source</Meta>
          <Link href="https://github.com/ThePeoplesChamp/Gitfriend-Finder" isExternal>
            GitFriend <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/gitfriend_00.JPG" alt="GitFriend" />
      <WorkImage src="/images/works/gitfriend_01.JPG" alt="GitFriend" />
      <WorkImage src="/images/works/gitfriend_02.JPG" alt="GitFriend" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
