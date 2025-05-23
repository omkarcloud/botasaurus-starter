import AuthedDashboard from '../components/AuthedDashboard'
import Description from '../components/Description/Description'
import InputComponent from '../components/InputComponent/InputComponent'
import Tabs, { TabsId } from '../components/PagesTabs/PagesTabs'
import Seo from '../components/Seo'
import { Container, TabWrapper } from '../components/Wrappers'
import { create_title } from '../utils/common'
import { homeServerSideProps } from '../utils/props'

// Create a Container Component adds padding
const Page = ({ ...props }: any) => {
  return (
    <>
      <Seo {...props} title={create_title(props, 'Home')} />
      <AuthedDashboard {...props}>
        <Container>
          <Description {...props} />
          <Tabs initialSelectedTab={TabsId.INPUT} />
          <TabWrapper>
            <InputComponent {...props} />
          </TabWrapper>
        </Container>
      </AuthedDashboard>    </>
  )
}
export const getServerSideProps = homeServerSideProps

export default Page

