import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon, Icon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import { IoLogoGithub } from 'react-icons/io5'


const Work = () => (
  <Layout title="HouseHunter">
    <Container>
      <Title>
        House Hunter <Badge>2022</Badge>
      </Title>
      <P>
        A Marketplace where landlords can post their houses up for either sale or rent and prospective tentants/future landlords can look for real estate to purchase/rent.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://house-hunter-omega.vercel.app/" isExternal>
            House Hunter - Web <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase</span>
        </ListItem>
        <ListItem listStylePos="inline" >
          <Meta>Source</Meta>
          <Link href="https://github.com/ThePeoplesChamp/House-Hunter" isExternal>
            House Hunter <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/househunter_00.jpg" alt="House Hunter" />
      <SimpleGrid columns={2} spacing={2} >
        <WorkImage src="/images/works/househunter_01.jpg" alt="House Hunter" />
        <WorkImage src="/images/works/househunter_03.jpg" alt="House Hunter" />
      </SimpleGrid>
      <WorkImage src="/images/works/househunter_02.jpg" alt="House Hunter" />
      <SimpleGrid columns={2} spacing={2} >
        <WorkImage src="/images/works/househunter_04.jpg" alt="House Hunter" />
        <WorkImage src="/images/works/househunter_06.jpg" alt="House Hunter" />
      </SimpleGrid>
      <WorkImage src="/images/works/househunter_05.jpg" alt="House Hunter" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
