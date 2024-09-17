import OutputComponent from '../../components/OutputComponent/OutputComponent'
import Seo from '../../components/Seo'
import AuthedDashboard from '../../components/AuthedDashboard'
import AxiosErrorHoc, { wrapAxiosErrors } from '../../components/AxiosErrorHoc'
import { outputServerSideProps } from '../../utils/props'

const Page = ({ tasks, ...props }: any) => {
  return (
    <>
      <Seo {...props} title={'Output'} />

      <AuthedDashboard {...props}>
      <OutputComponent {...props} tasks={tasks} />
        
      </AuthedDashboard>
    </>
  )
}
export const getServerSideProps= outputServerSideProps
export default AxiosErrorHoc(Page)
