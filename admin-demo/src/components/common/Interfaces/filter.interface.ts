import { EventType } from "@/utils/api/event.api";
import { PlaceCategory } from "@/utils/api/place.api";

export interface FilterCancelTripReason {
  reason?: string | undefined;
  isActive?: boolean | undefined;
}

export interface FilterAdminQuery {
  name?: string | undefined;
  email?: string | undefined;
  isActive?: boolean | undefined;
}

export interface FilterAppVersion {
  versionNumber?: number;
}

export interface IFilterCar {
  name?: string | undefined;
  isActive?: boolean| undefined;
}
export interface FilterCarModel extends IFilterCar {
  carCompany?: string | undefined;
  carCompanyName?: string | undefined;
}

export interface IFilterFAQ {
  isActive?: boolean;
  title?: string;
  description?: string;
}

export interface FilterEventQuery {
  address?: string | undefined;
  type?: EventType | undefined;
  isActive?: boolean | undefined;
}

export interface FilterPlaceQuery {
  name?: string | undefined;
  category?: PlaceCategory | undefined;
  isActive?: boolean | undefined;
}

export interface FilterNeighborQuery {
  name?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  isActive?: boolean | undefined;
}

export interface FilterInterestQuery {
  name?: string | undefined;
}