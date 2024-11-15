import { MongoResponse } from '@/components/common/Interfaces';
import { api, createAuthorizationHeader, handleRequest } from '.';

const prefix: string = '/admin';

export interface IAdmin extends MongoResponse {
  id: number;
  email?: string;
  firstName?: string;
  lastName: string;
  phoneNumber?: string;
  dob?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  isMobileVerified?: boolean;
}

export interface AdminResponse {
  data: IAdmin[];
  count: number;
}

export interface CurrentUser {
  token: string;
  admin: IAdmin;
}

export interface AdminLogin {
  email: string;
  password: string;
}

export interface NewAdmin {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dob: string;
  password: string;
  isActive?: boolean;
}

export const AdminAPI = {
  login: (login: AdminLogin) =>
    handleRequest(api.post(`${prefix}/login`, login)),
  addNew: (newAdminData: NewAdmin) =>
    handleRequest(
      api.post(`${prefix}`, newAdminData, createAuthorizationHeader()),
    ),

  update: (id: number, update: Partial<NewAdmin>) =>
    handleRequest(
      api.patch(`${prefix}/${id}`, update, createAuthorizationHeader()),
    ),

  getAll: (query?: any) => {
    return handleRequest(api.get('/admin', createAuthorizationHeader()));
  },

  deleteById: (id: number) =>
    handleRequest(api.delete(`${prefix}/${id}`, createAuthorizationHeader())),
};
