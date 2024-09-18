import AboutComponent from '../components/AboutComponent/AboutComponent';
import AuthedDashboard from '../components/AuthedDashboard';
import Description from '../components/Description/Description';
import Tabs, { TabsId } from '../components/PagesTabs/PagesTabs';
import Seo from '../components/Seo';
import { Container, TabWrapper } from '../components/Wrappers';
import { create_title } from '../utils/common';
import { homeServerSideProps } from '../utils/props';

const Page = ({ ...props }: any) => {
  const markdownContent = props.readme

  return (
    <>
      <Seo {...props} title={create_title(props, 'About')} />

      <AuthedDashboard {...props}>
        <Container>
          <Description {...props} />
          <Tabs initialSelectedTab={TabsId.ABOUT} />
          <TabWrapper>
            <AboutComponent markdownContent={markdownContent} />
          </TabWrapper>
        </Container>
      </AuthedDashboard>
    </>
  )
}

export const getServerSideProps= homeServerSideProps

export default Page
