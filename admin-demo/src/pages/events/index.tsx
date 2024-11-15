import DefaultLayout from '@/layout/DefaultLayout'
import BreadCrumb from '@/components/common/ui/BreadCrumb'

const EventList = () => {

  return (
    <DefaultLayout heading='Event'>
      <div className="container">
        <BreadCrumb pageName='Event' />
        <h2 className="text-title-md2 font-semibold text-black dark:text-white first-letter:uppercase">
          Event Page
        </h2>
      </div>
    </DefaultLayout>
  )
}

export default EventList