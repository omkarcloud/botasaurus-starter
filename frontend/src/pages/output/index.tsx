import { GetServerSideProps } from 'next/types'
import OutputComponent from '../../components/OutputComponent/OutputComponent'
import Seo from '../../components/Seo'
import AuthedDashboard from '../../components/AuthedDashboard'
import Api from '../../utils/api'
import AxiosErrorHoc, { wrapAxiosErrors } from '../../components/AxiosErrorHoc'

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
export const getServerSideProps: GetServerSideProps = wrapAxiosErrors(async ({}) => {
  const [tasks, config] = await Promise.all([Api.getTasksForUiDisplay(), Api.getApiConfig()]);

  return {
    props: { ...config, tasks: tasks.data },
  }

})
export default AxiosErrorHoc(Page)
