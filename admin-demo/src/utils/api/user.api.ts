import { MongoResponse } from '@/components/common/Interfaces';
import { api, handleRequest, createAuthorizationHeader } from '.';

const prefix: string = 'user';

export interface IUser extends MongoResponse {
  dob: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
}
export interface UserResponse{
  data: IUser[];
  count: number;
}

export const UserAPI = {
  deleteUserRequest: (data: { email: string }) =>
    handleRequest(api.delete(`/${prefix}/${data.email}`)),
  toggleActivateAccount: (data: { email: string }) =>
    handleRequest(api.post(`/${prefix}/deactivate-account`, data, createAuthorizationHeader())),
  delete: (id: string) => handleRequest(api.delete(`/${prefix}/${id}`, createAuthorizationHeader())),
  all: (query: any) => handleRequest(api.get(`/${prefix}/all`, createAuthorizationHeader())),
  updateStatus: (id: number, status: boolean) => {
    return handleRequest(
      api.patch(
        `/${prefix}/${id}`,
        { isActive: status },
        createAuthorizationHeader(),
      ),
    );
  },
};
