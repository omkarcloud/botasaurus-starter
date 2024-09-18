import ApiIntegrationComponent from '../components/ApiIntegrationComponent/ApiIntegrationComponent';
import AuthedDashboard from '../components/AuthedDashboard';
import Description from '../components/Description/Description';
import Tabs, { TabsId } from '../components/PagesTabs/PagesTabs';
import Seo from '../components/Seo';
import { Container, TabWrapper } from '../components/Wrappers';
import { create_title } from '../utils/common';
import { homeServerSideProps } from '../utils/props';

const Page = ({ ...props }: any) => {
  return (
    <>
      <Seo {...props} title={create_title(props, 'Api')} />
      <AuthedDashboard {...props}>
        <Container>
          <Description {...props} />
          <Tabs initialSelectedTab={TabsId.API_INTEGRATION} />
          <TabWrapper>
            <ApiIntegrationComponent {...props} />
          </TabWrapper>
        </Container>
      </AuthedDashboard>
    </>
  )
}

export const getServerSideProps= homeServerSideProps

export default Page
