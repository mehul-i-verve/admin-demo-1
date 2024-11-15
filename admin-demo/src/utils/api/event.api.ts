import { MongoResponse } from '@/components/common/Interfaces';
import {
  api,
  handleRequest,
  createAuthorizationHeader,
  createAuthorizationFormDataHeader,
} from '.';

const prefix: string = 'event';

export interface IEvent extends MongoResponse {
  name: string;
  address: string;
  details: string;
  type: EventType;
  password: string;
  img: string;
  isActive: boolean;
}

export interface EventResponse {
  data: IEvent[];
  count: number;
}

export enum EventType {
  SocialGathering = 'Social Gathering',
  Workshop = 'Workshop',
  Party = 'Party',
  CulturalEvent = 'Cultural Event',
}

export interface NewEvent {
  name: string;
  address: string;
  details: string;
  type: EventType;
  password: string;
  img: string;
  isActive: boolean;
}

export interface EventQuery {
  page?: number;
  limit?: number;
  isActive?: boolean;
  type?: EventType;
}

export const EventAPI = {
  create: (data: FormData) =>
    handleRequest(
      api.post(`/${prefix}`, data, createAuthorizationFormDataHeader()),
    ),
  getAll: (query?: EventQuery) =>
    handleRequest(
      api.get(`/${prefix}`, { params: query, ...createAuthorizationHeader() }),
    ),
  delete: (id: number) =>
    handleRequest(api.delete(`/${prefix}/${id}`, createAuthorizationHeader())),
  update: (id: number, updateReason: Partial<NewEvent>) =>
    handleRequest(
      api.patch(
        `/${prefix}/${id}`,
        updateReason,
        createAuthorizationFormDataHeader(),
      ),
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
