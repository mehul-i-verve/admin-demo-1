import DefaultLayout from '@/layout/DefaultLayout'
import BreadCrumb from '@/components/common/ui/BreadCrumb'

const Admin = () => {

    return (
        <DefaultLayout heading='admin'>
            <div className="container">
                <BreadCrumb pageName='admin' />
                <h2 className="text-title-md2 font-semibold text-black dark:text-white first-letter:uppercase">
                    Admin Page
                </h2>
            </div>
        </DefaultLayout>
    )
}

export default Admin