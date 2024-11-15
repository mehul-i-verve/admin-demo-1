import DefaultLayout from '@/layout/DefaultLayout'
import BreadCrumb from '@/components/common/ui/BreadCrumb'

const InterestList = () => {

  return (
    <DefaultLayout heading='Interest'>
      <div className="container">
        <BreadCrumb pageName='Interest' />
        <h2 className="text-title-md2 font-semibold text-black dark:text-white first-letter:uppercase">
          Interest Page
        </h2>
      </div>
    </DefaultLayout>
  )
}

export default InterestList