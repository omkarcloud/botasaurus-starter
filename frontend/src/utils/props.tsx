import Api from './api'
import { wrapAxiosErrors } from '../components/AxiosErrorHoc'
import Links from './data/links'

function wrapInProps(config: any) {
    return {
        props: config,
    }
}

export const homeServerSideProps = wrapAxiosErrors(async () => {
    const config = await Api.getApiConfig()
    return wrapInProps(config)
  })


  export const outputServerSideProps =   wrapAxiosErrors(async () => {
    const [tasks, config] = await Promise.all([Api.getTasksForUiDisplay(), Api.getApiConfig()]);
  
    return {
      props: { ...config, tasks: tasks.data },
    }
  })

  export const outputTaskServerSideProps  =  wrapAxiosErrors(async ({
    params,
  }) => {
    try {
      const id = (params as any).taskId
      const config = await Api.getApiConfig()
  
      const { data } = await Api.getUiTaskResults(id, {
        "per_page": 25,
        "page": 1,
      }, true)
  
  
      return {
        props: {...config,  response: data, taskId: id },
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return {
          redirect: { destination: Links.notFound, permanent: false },
        }
      } 
      else {
        throw error
      }
    }
  })