import { MongoResponse } from '@/components/common/Interfaces';
import { api, handleRequest, createAuthorizationHeader } from '.';

const prefix: string = 'neighbor';

export interface INeighborhood extends MongoResponse {
  placeId: number;
  name: string;
  city: string;
  state: string;
  north: string;
  south: string;
  east: string;
  west: string;
  activate: string;
  isActive: boolean;
}
export interface NeighborhoodResponse {
  data: INeighborhood[];
  count: number;
}

export interface NewNeighborhood {
  placeId: number;
  name: string;
  city: string;
  state: string;
  north: string;
  south: string;
  east: string;
  west: string;
  activate: string;
  isActive: boolean;
}

export interface NeighborhoodQuery {
  page?: number;
  limit?: number;
  state?: string;
}

export const NeighborhoodAPI = {
  create: (data: NewNeighborhood) =>
    handleRequest(api.post(`/${prefix}`, data, createAuthorizationHeader())),
  getAll: (query?: NeighborhoodQuery) =>
    handleRequest(
      api.get(`/${prefix}`, { params: query, ...createAuthorizationHeader() }),
    ),
  delete: (id: number) =>
    handleRequest(api.delete(`/${prefix}/${id}`, createAuthorizationHeader())),
  update: (id: number, updateReason: Partial<NewNeighborhood>) =>
    handleRequest(
      api.patch(`/${prefix}/${id}`, updateReason, createAuthorizationHeader()),
    ),
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
