import {Helper} from "./helper"
export interface HelpRequest {
    id: number;
    name: string;
    created_at: string;
    date_start: string;
    organisation_id: number;
    number_helpers:number
    skills: Skill[];
    requested_helpers: Helper[];
    confirmed_helpers: Helper[];
}

export interface Skill {
    id: number;
    name: string;
}

export interface AvailableSkill {
    skill: Skill;
    count: number;
}

export interface HelpRequestHelpers {
    count: number;
    skills: AvailableSkill[];
}
export interface OrganizationInfo {
    id:number;
    name:string;
    description:string;
    email:string;
    phone:string;
    address:string;


}
