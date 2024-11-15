import { MongoResponse } from '@/components/common/Interfaces';
import { api, handleRequest, createAuthorizationHeader,createAuthorizationFormDataHeader } from '.';

const prefix: string = 'place';

export interface IPlace extends MongoResponse {
  name: string;
  description: string;
  category: PlaceCategory;
  password: string;
  img: string;
  isActive: boolean;
}
export interface PlaceResponse {
  data: IPlace[];
  count: number;
}

export enum PlaceCategory {
  Hotel = 'Hotel',
  PartyPlot = 'Party plot',
  Resort = 'Resort',
}

export interface NewPlace {
  name: string;
  description: string;
  category: PlaceCategory;
  password: string;
  img: string;
  isActive: boolean;
}
export interface PlaceQuery{
  page?: number;
  limit?: number;
  isActive?: boolean;
  category?: PlaceCategory;
}
export const PlaceAPI = {
  create: (data: FormData) =>
    handleRequest(api.post(`/${prefix}`, data, createAuthorizationFormDataHeader())),
  getAll: (query?: PlaceQuery) =>
    handleRequest(
      api.get(`/${prefix}`, { params: query, ...createAuthorizationHeader() }),
    ),
  delete: (id: number) => handleRequest(api.delete(`/${prefix}/${id}`, createAuthorizationHeader())),
  update: (id: number, updateReason: FormData | Partial<NewPlace>) =>
    handleRequest(
      api.patch(`/${prefix}/${id}`, updateReason, createAuthorizationFormDataHeader()),
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
