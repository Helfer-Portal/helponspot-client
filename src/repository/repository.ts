import { Helper, NewHelperPostRequest } from "./model/helper";
import {
  HelpRequest,
  HelpRequestHelpers,
  Skill,
  OrganizationInfo,
  UserInfo,
  PostOrganisation,
  PostAddress,
  UUID,
  PostRequest,
} from "./model/helprequest";
import Chance from "chance";

import axios from "axios";

/*

This file is mostly taken from a similar project written by @Jeremy Boy.
I adjusted some of them, but currently only getOrganisationInfo matches our needs

 */

export interface Repository {
  getOrganizationInfo(orgId: string): Promise<OrganizationInfo>;
  // createHelper(helper: Helper): Promise<Helper>;

  /**
   *
   * @param userId
   */
  getUserInfo(userId: string): Promise<UserInfo>;

  getUserInfoByEmail(email: string): Promise<UserInfo>;

  patchUserInfo(userInfo: UserInfo): Promise<UserInfo>;

  /**
   * returns empty array if no org exists
   * @param userId
   */
  returnUsersOrganisations(userId: string): Promise<OrganizationInfo[]>;

  // createHelper(helper: Helper): Promise<Helper>;
  createHelper(helper: NewHelperPostRequest): Promise<Helper>;

  /**
   * create help request
   *
   * @param request the HelpRequest to be created
   */
  postRequest(orgId: UUID, reqData: PostRequest): Promise<HelpRequest>;

  postOrganisation(ordData: PostOrganisation): Promise<OrganizationInfo>;

  /**
   * find helpers
   *
   * @param matching The filter to apply
   */
  findHelpers(matching: HelperSearchDefinition): Promise<HelpRequestHelpers>;

  /**
   * notify helpers
   *
   * @param matching The filter to apply
   */
  notifyHelpers(matching: HelperSearchDefinition): Promise<any>;

  getHelpRequests(): Promise<HelpRequest[]>;

  /**
   * Returns the help requests details
   * @param id Help Request ID
   */
  getHelpRequestById(uuid: string): Promise<HelpRequest>;

  getHelpRequestsForUserId(uuid: string): Promise<HelpRequest[]>;

  /**
   * Returns all available skills
   */
  getQualifications(): Promise<Skill[]>;
}

/**
 * Currently, this is just a proxy for Service. We could implement some fancy caching strategies here...
 */
export class RepositoryImpl implements Repository {
  getUserInfo(userId: string) {
    return this.service.getUserInfo(userId);
  }

  getUserInfoByEmail(email: string) {
    return this.service.getUserInfoByEmail(email);
  }

  patchUserInfo(userInfo: UserInfo) {
    return this.service.patchUserInfo(userInfo);
  }

  getOrganizationInfo(orgId: string): Promise<OrganizationInfo> {
    return this.service.getOrganziationInfo(orgId);
  }

  returnUsersOrganisations(userId: string) {
    return this.service.returnUsersOrganisationIfExists(userId);
  }

  constructor(private service: Service = new FetchService()) {}

  // createHelper(helper: Helper): Promise<Helper> {
  //   return this.service.createHelper(helper);
  // }
  createHelper(helper: NewHelperPostRequest): Promise<Helper> {
    return this.service.createHelper(helper);
  }

  postRequest(orgId: UUID, reqData: PostRequest): Promise<HelpRequest> {
    return this.service.postRequest(orgId, reqData);
  }

  postOrganisation(orgData: PostOrganisation): Promise<OrganizationInfo> {
    return this.service.postOrganisation(orgData);
  }

  findHelpers(matching: HelperSearchDefinition): Promise<HelpRequestHelpers> {
    // TODO: we could add some fancy caching strategies here and only fetch using `service` if data doesn't exist or expired
    return this.service.findHelpers(matching);
  }

  notifyHelpers(matching: HelperSearchDefinition): Promise<any> {
    return this.service.notifyHelpers(matching);
  }

  getHelpRequests(): Promise<HelpRequest[]> {
    return this.service.getHelpRequests();
  }

  getHelpRequestById(uuid: string): Promise<HelpRequest> {
    return this.service.getHelpRequestById(uuid);
  }

  getHelpRequestsForUserId(uuid: string): Promise<HelpRequest[]> {
    return this.service.getHelpRequestsForUserId(uuid);
  }

  getQualifications(): Promise<Skill[]> {
    return this.service.getQualifications();
  }
}

enum Endpoint {
  Helper = "helper",
  HelpRequest = "HelpRequest",
}

/**
 * A service that can be used to fetch data
 */
export interface Service {
  /**
   * Create a helper
   *
   * @param helper
   */
  // createHelper(helper: Helper): Promise<Helper>;
  createHelper(helper: NewHelperPostRequest): Promise<Helper>;

  /**
   * Create a help request
   * @param request
   */
  postRequest(orgId: UUID, reqData: PostRequest): Promise<HelpRequest>;

  postOrganisation(orgData: PostOrganisation): Promise<OrganizationInfo>;

  /**
   * find helpers for request
   * @param matching The filter to apply
   */
  findHelpers(matching: HelperSearchDefinition): Promise<HelpRequestHelpers>;

  /**
   * notify helpers matching a previously specified search definition
   * @param matching The filter to apply
   */
  notifyHelpers(matching: HelperSearchDefinition): Promise<any>;

  getHelpRequests(): Promise<HelpRequest[]>;

  getHelpRequestById(uuid: string): Promise<HelpRequest>;

  getHelpRequestsForUserId(uuid: string): Promise<HelpRequest[]>;

  getOrganziationInfo(orgId: string): Promise<OrganizationInfo>;

  getUserInfo(userId: string): Promise<UserInfo>;

  getUserInfoByEmail(email: string): Promise<UserInfo>;

  patchUserInfo(userInfo: UserInfo): Promise<UserInfo>;

  returnUsersOrganisationIfExists(userId: string): Promise<OrganizationInfo[]>;

  getQualifications(): Promise<Skill[]>;
}

/**
 * An object which represents a query for helpers
 */
export interface HelperSearchDefinition {
  /**
   * the event's latitude
   */
  latitude: number;
  /**
   * the event's longitude
   */
  longitude: number;
  /**
   * required skills for this event
   */
  requiredSkills: Skill[];
}

class FetchService implements Service {
  static HOST = "http://127.0.0.1/";
  static ENDPOINT_PREFIX = "api/v1/";

  private chance = new Chance.Chance();
  static config = {
    invokeUrl: "https://js7pyl1b87.execute-api.eu-central-1.amazonaws.com/dev",
  };
  static apigClientFactory = require("aws-api-gateway-client").default;
  private apigClient;

  constructor() {
    this.apigClient = FetchService.apigClientFactory.newClient(
      FetchService.config
    );
  }

  async getUserInfo(userId: string): Promise<UserInfo> {
    try {
      let res = await axios.get("/users/" + userId);
      if (res.data) {
        return res.data;
      } else {
        throw new Error("failed to fetch user Information");
      }
    } catch (error) {
      return error;
    }
  }

  async getUserInfoByEmail(email: string): Promise<UserInfo> {
    try {
      console.log("sending with email: ", email);
      let res = await axios.get("/users/" + email);
      console.log("debug: ", res);
      if (res.data) {
        return res.data;
      } else {
        throw new Error("Failed to get user by email");
      }
    } catch (err) {
      console.log(err.response);
    }
  }

  async patchUserInfo(userInfo: UserInfo): Promise<UserInfo> {
    let qualifications;
    // mandatory fields: qualification, firstName, lastName
    // only send other fields if they are actually present, otherwise they are overwritten in the db with null values
    try {
      if (
        userInfo.qualifications === null ||
        userInfo.qualifications === undefined
      ) {
        qualifications = [];
      } else {
        qualifications = userInfo.qualifications.map((el) => el.key);
      }
      let payload = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        qualifications: qualifications,

        ...(userInfo.isGPSLocationAllowed && {
          isGPSLocationAllowed: userInfo.isGPSLocationAllowed,
        }),
        ...(userInfo.address && {
          address: {
            ...(userInfo.address.street && { street: userInfo.address.street }),
            ...(userInfo.address.houseNumber && {
              houseNumber: userInfo.address.houseNumber,
            }),
            ...(userInfo.address.city && { city: userInfo.address.city }),
            ...(userInfo.address.postalCode && {
              postalCode: userInfo.address.postalCode,
            }),
            ...(userInfo.address.country && {
              country: userInfo.address.country,
            }),
            ...(userInfo.address.point && { point: userInfo.address.point }),
          },
        }),
        ...(userInfo.qualifications && {
          qualifications: userInfo.qualifications.map((el) => el.key),
        }),
        ...(userInfo.avatar && { avatar: userInfo.avatar }),
      };
      console.log("payload: ", payload);

      let res = await axios.patch("/users/" + userInfo.id, payload);
      console.log("ress", res);
      if (res.data && res.status === 200) {
        return res.data;
      } else {
        throw new Error("failed to fetch user Information: " + res.status);
      }
    } catch (error) {
      return error;
    }
  }

  async returnUsersOrganisationIfExists(
    userId: string
  ): Promise<OrganizationInfo[]> {
    try {
      let userInfo = await this.getUserInfo(userId);
      if (userInfo.organisations) {
        return userInfo.organisations;
      } else {
        return [];
      }
    } catch (err) {
      return err;
    }
  }

  // createHelper(helper: Helper): Promise<Helper> {
  //   return this.post(Endpoint.Helper, helper);
  // }
  async createHelper(helper: NewHelperPostRequest): Promise<Helper> {
    console.log("helper", helper);
    let res = await this.apigClient.invokeApi({}, "/users", "post", {}, helper);
    console.log("res", res);
    return {
      name: "",
      email: "",
      postcode: "",
      phone: "",
    };
  }

  async postRequest(orgId: UUID, reqData: PostRequest): Promise<HelpRequest> {
    try {
      let res = await axios.post(
        "/organisations/" + orgId + "/requests",
        reqData
      );
      return res.data;
    } catch (err) {}
  }

  async postOrganisation(orgData: PostOrganisation): Promise<OrganizationInfo> {
    let res = await axios.post("/organisations", orgData);
    if (res) {
      return res.data;
    }
  }

  async getOrganziationInfo(orgId: string): Promise<OrganizationInfo> {
    let res = await axios.get("/organisations/" + orgId);

    let orgData = res.data;
    return Promise.resolve({
      id: orgData.id,
      name: orgData.name,
      description:
        orgData.teaser ||
        "Good organisation, only high motivated helpers here. And some more text could be here.",
      address: orgData.address.city || "no address given",
      email: orgData.responsibles[0].email,
      phone: String(this.chance.integer({ min: 10000000, max: 100000000 })),
    });
  }

  findHelpers(matching: HelperSearchDefinition): Promise<HelpRequestHelpers> {
    const DEFAULT_LOC = { lat: 52.5186, lng: 13.3761 };

    let lat = Math.floor(matching.latitude * 10000) / 10000;
    let long = Math.floor(matching.longitude * 10000) / 10000;
    let helperCount =
      DEFAULT_LOC.lat == lat && DEFAULT_LOC.lng == long ? 12 : 7;

    return Promise.resolve({
      count: helperCount,
      skills: [
        // {
        //   skill: { id: "4", name: "Erste Hilfe" },
        //   count: 2,
        // },
        // {
        //   skill: { id: "2", name: "Altenpflege" },
        //   count: 1,
        // },
      ],
    });
  }

  notifyHelpers(matching: HelperSearchDefinition): Promise<any> {
    return Promise.resolve();
  }

  private mockHelper(chance: Chance.Chance): Helper {
    return {
      id: chance.integer({ min: 1, max: 100000 }),
      name: chance.name(),
      email: chance.email(),
      phone: chance.phone({ country: "uk", mobile: true }),
      postcode: chance.postcode(),
    };
  }

  private mockHelpers(): Helper[] {
    let chance = new Chance.Chance();

    let length = chance.integer({ min: 2, max: 20 });

    let arr = new Array(length);

    for (let i = 0; i < length; ++i) {
      arr[i] = this.mockHelper(chance);
    }
    return arr;
  }

  async getHelpRequests(): Promise<any[]> {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://js7pyl1b87.execute-api.eu-central-1.amazonaws.com/dev/qualifications"
    );
    const data = await response.json();
    console.log(data);
    const skills = data.map((el) => {
      return { id: el.id, name: el.name };
    });

    const MOCKED_HELPREQUESTS = [
      {
        id: 1,
        name: "Helft tragen und transportieren",
        created_at: "22.03.2020 17:12 Uhr",
        organisation_id: 17,
        date_start: "23.03.2020 14:00 Uhr",
        number_helpers: 5,
        roles: [],
        skills: [...skills],
        requested_helpers: this.mockHelpers(),
        confirmed_helpers: this.mockHelpers(),
      },
      {
        id: 2,
        name: "Blutspender gesucht",
        created_at: "22.03.2020 17:12 Uhr",
        date_start: "23.03.2020 14:00 Uhr",
        organisation_id: 17,
        number_helpers: 5,
        roles: [],
        skills: [...skills],
        requested_helpers: this.mockHelpers(),
        confirmed_helpers: this.mockHelpers(),
      },
      {
        id: 2,
        name: "Blutspender gesucht",
        created_at: "22.03.2020 17:12 Uhr",
        date_start: "23.03.2020 14:00 Uhr",
        organisation_id: 17,
        number_helpers: 5,
        roles: [],
        skills: [],
        requested_helpers: this.mockHelpers(),
        confirmed_helpers: this.mockHelpers(),
      },
      {
        id: 2,
        name: "Blutspender gesucht",
        created_at: "22.03.2020 17:12 Uhr",
        date_start: "23.03.2020 14:00 Uhr",
        organisation_id: 17,
        number_helpers: 5,
        roles: [],
        skills: [],
        requested_helpers: this.mockHelpers(),
        confirmed_helpers: this.mockHelpers(),
      },
    ];

    return this.get(Endpoint.HelpRequest, MOCKED_HELPREQUESTS);
  }

  async getHelpRequestById(uuid: string): Promise<HelpRequest> {
    try {
      let res = await axios.get("/requests/" + uuid);
      console.log(res);
      let req = res.data;
      return {
        id: req.id,
        name: req.title,
        description: req.description,
        created_at: req.createTime,
        date_start: req.startDate,
        organisation_id: req.organisation,
        organisation: req.organisation,
        number_helpers: 0,
        skills: req.qualifications,
        requested_helpers: [],
        confirmed_helpers: [],
        address: req.address,
      };
    } catch (err) {
      console.log(err);
    }
  }

  async getHelpRequestsForUserId(uuid: string): Promise<HelpRequest[]> {
    try {
      let res = await axios.get("/users/" + uuid + "/requests");
      return res.data.map((req) => {
        return {
          id: req.id,
          name: req.title,
          created_at: req.createTime,
          date_start: req.startDate,
          organisation_id: "",
          number_helpers: 0,
          skills: req.qualifications,
          requested_helpers: [],
        };
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getQualifications(): Promise<Skill[]> {
    let res = await axios.get("/qualifications");
    console.log(res);

    let qualifications: Skill[] = res.data.map((el) => ({
      id: el.id,
      name: el.name,
      key: el.key,
    }));
    console.log(qualifications);
    return qualifications;
  }

  private get<T>(endpoint: Endpoint, mockValue: T): Promise<T> {
    return Promise.resolve(mockValue);
  }

  private post<R>(endpoint: Endpoint, body: any): Promise<R> {
    // just act as if id was set by the backend :)
    let response = Object.assign({}, body);
    response.id = 1;
    return Promise.resolve(response);

    // TODO: actually perform network request

    /*return fetch(RepositoryImpl.HOST + RepositoryImpl.ENDPOINT_PREFIX + endpoint.toString(), {
            body: body,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json() as Promise<R>)*/
  }
}

export default RepositoryImpl;
