import DefaultLayout from '@/layout/DefaultLayout'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { AgGridReact } from 'ag-grid-react'
import UserTableAction from './component/UserTableAction'
import SwitchInput from '@/components/ui/Switch'
import { UserQueryDto } from '@/components/common/Interfaces/api.request-interface'
import Pagination from '@/components/common/ui/PaginationFooter'
import FilterUsers from '@/components/filters/FilterUsers'
import { FilterBar } from '@/components/filters'
import { radDateFormatter } from '@/utils'
import BreadCrumb from '@/components/common/ui/BreadCrumb'
import LoadingUI from '@/components/common/ui/Loading'
import { IUser, UserAPI, UserResponse } from '@/utils/api/user.api'


const UserList: React.FC = () => {
    const [state, setState] = React.useState<UserResponse>({
        count: 0,
        data: [],
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false)
    const [filter, setFilter] = useState<UserQueryDto>({});
    const [activeFilters, setActiveFilters] = useState<{ [key: string]: string | boolean | any }>({});

    const toggleFilterModal = () => {
        if (!state.count) {
            toast.warn('User Data is not available')
            return
        }
        setIsOpenFilter(!isOpenFilter)
    }
    const handleFilterChange = <K extends keyof UserQueryDto>(name: K, value: UserQueryDto[K]) => {
        setFilter({ ...filter, [name]: value });
    }

    const handleClearFilter = () => {
        setFilter({})
        setActiveFilters({})
        fetchUsers()
    }

    const colDefs: any = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            sortable: true,
            valueGetter: (params: { data: IUser }) => `${params?.data?.firstName} ${params?.data?.lastName}`
        },
        {
            field: 'phone',
            headerName: 'Phone',
            flex: 1,
            sortable: true,
            valueGetter: (params: { data: IUser }) => `${params?.data?.phoneNumber}`
        },
        { field: 'email', headerName: 'Email', flex: 1, sortable: true },
        {
            field: 'createdAt',
            headerName: 'Date of Birth',
            flex: 1,
            sortable: true,
            cellRenderer: (params: { data: IUser }) => {
                const date = params?.data?.dob as unknown as Date
                return (
                    <div className="flex items-center h-full">
                        {radDateFormatter(date)}
                    </div>
                );
            }
        },
        {
            field: 'isActive',
            headerName: 'Active',
            flex: 0.5,
            sortable: true,
            cellRenderer: (params: { data: any }) => {
                const active = !params.data.isActive as boolean;

                const handleSwitchChange = async () => {
                    const data = { email: params.data.email }
                    // const res = await UserMainAPI.toggleActivateAccount(data)
                    // if (res.status) {
                    //     toast.success(res.message)
                    // }
                    // fetchUsers()
                };

                return (
                    <div className="flex items-center h-full">
                        <SwitchInput
                            initialValue={active}
                            onChange={handleSwitchChange}
                        />
                    </div>
                );
            },
        },
        {
            field: 'Actions',
            flex: 0.6,
            filter: true,
            cellRenderer: (params: { data: any }) => {
                return <UserTableAction data={params.data} fetchUsers={fetchUsers} />;
            },
        },
    ];

    const fetchUsers = async (query?: UserQueryDto) => {
        try {
            setIsLoading(true)
            const res = await UserAPI.all({ ...query })
            if (res.status) {
                setState(res.result)
            }
        } catch (error: any) {
            toast.error(error.message || 'something went wrong', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000,
            })
        } finally {
            setIsLoading(false)
        }
    }


    const filterUserData = async () => {
        setActiveFilters(filter);
        await fetchUsers(filter);
    };

    React.useEffect(() => {
        fetchUsers()
    }, [])

    const handleFilterCancel = async (filterKey: string) => {
        const updatedFilters = { ...activeFilters };
        delete updatedFilters[filterKey];
        setActiveFilters(updatedFilters);
        setFilter(updatedFilters)
        await fetchUsers(updatedFilters);
    };


    return (
        <DefaultLayout heading='User'>
            <h2 className="text-title-md2 font-semibold text-black dark:text-white first-letter:uppercase">
                Users Page
            </h2>
        </DefaultLayout>
    )
}

export default UserList