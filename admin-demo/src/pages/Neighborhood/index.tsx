import DefaultLayout from '@/layout/DefaultLayout'
import BreadCrumb from '@/components/common/ui/BreadCrumb'


const NeighborhoodList = () => {

  return (
    <DefaultLayout heading='Neighborhood'>
      <div className="container">
        <BreadCrumb pageName='Neighborhood' />
        <h2 className="text-title-md2 font-semibold text-black dark:text-white first-letter:uppercase">
          Neighborhood Page
        </h2>
      </div>
    </DefaultLayout>
  )
}

export default NeighborhoodList