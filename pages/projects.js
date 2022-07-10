import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbAusCamp from '../public/images/works/auscamp_00.JPG'
import thumbGitFriend from '../public/images/works/gitfriend_00.JPG'
import thumbHouseHunters from '../public/images/works/househunter_00.JPG'
import thumbTechSupport from '../public/images/works/techsupport_000.JPG'


const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="auscamp" title="AusCamp" thumbnail={thumbAusCamp}>
            An Australian camping blog where users can post, edit, review and view camping sites all over the country.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="gitfriend"
            title="GitFriend"
            thumbnail={thumbGitFriend}>
            A website that allows you to search up your friends on GitHub.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="househunter"
            title="House Hunter"
            thumbnail={thumbHouseHunters}>
            A Marketplace for real estate.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="techsupport" thumbnail={thumbTechSupport} title="Tech Support">
            A tech support ticketing system that allows employees to submit issues to their IT department.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
