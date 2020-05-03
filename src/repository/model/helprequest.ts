import { Helper } from "./helper";
export interface HelpRequest {
  id: number;
  name: string;
  created_at: string;
  date_start: string;
  organisation_id: number;
  organisation?: OrganizationInfo;
  description?: string;
  number_helpers: number;
  skills: Skill[];
  requested_helpers: Helper[];
  confirmed_helpers: Helper[];
  address: Address;
}

export interface Address {
  id: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  country: string;
  point: Point;
}

export interface Point {
  type: string;
  coordinates: string;
}

export interface Skill {
  id: string;
  name: string;
  key?: string;
}

export interface AvailableSkill {
  skill: Skill;
  count: number;
}

export interface HelpRequestHelpers {
  count: number;
  skills: AvailableSkill[];
}

export type SkillKeys = string;

export interface PostRequest {
  title: string;
  address: PostAddress;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  qualifications: SkillKeys[];
}

export interface PostAddress {
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  country: string;
}

export type UUID = string;

export interface PostOrganisation {
  address: PostAddress;
  name: string;
  responsibles: [UUID];
  logoPath: string;
}

export interface OrganizationInfo {
  id: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  isGPSLocationAllowed: boolean;
  email: string;
  avatar: string;
  travellingDistance: any;
  qualifications: Skill[];
  organisations: OrganizationInfo[];
  createdTime: string;
  updateTime: string;
  address: any;
}
