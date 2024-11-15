import DefaultLayout from '@/layout/DefaultLayout'
import BreadCrumb from '@/components/common/ui/BreadCrumb'

const PlaceList = () => {

  return (
    <DefaultLayout heading='Place'>
      <div className="container">
        <BreadCrumb pageName='Place' />
        <h2 className="text-title-md2 font-semibold text-black dark:text-white first-letter:uppercase">
          Place Page
        </h2>
      </div>
    </DefaultLayout>
  )
}

export default PlaceList