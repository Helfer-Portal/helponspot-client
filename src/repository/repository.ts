import { Helper, NewHelperPostRequest } from "./model/helper";
import {
  HelpRequest,
  HelpRequestHelpers,
  Skill,
  OrganizationInfo,
  UserInfo,
} from "./model/helprequest";
import Chance from "chance";

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
  createHelpRequest(request: HelpRequest): Promise<HelpRequest>;

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
  getHelpRequestById(id: number): Promise<HelpRequest>;

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

  createHelpRequest(request: HelpRequest): Promise<HelpRequest> {
    return this.service.createHelpRequest(request);
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

  getHelpRequestById(id: number): Promise<HelpRequest> {
    return this.service.getHelpRequestById(id);
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
  createHelpRequest(request: HelpRequest): Promise<HelpRequest>;

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

  getHelpRequestById(id: number): Promise<HelpRequest>;

  getOrganziationInfo(orgId: string): Promise<OrganizationInfo>;

  getUserInfo(userId: string): Promise<UserInfo>;

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
    invokeUrl:
      "https://cors-anywhere.herokuapp.com/https://js7pyl1b87.execute-api.eu-central-1.amazonaws.com/dev",
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
      let res = await this.apigClient.invokeApi(
        { userId: userId },
        "/users/{userId}",
        "get"
      );
      if (res.data) {
        return res.data;
      } else {
        throw new Error("failed to fetch user Information");
      }
    } catch (error) {
      return error;
    }
  }

  async patchUserInfo(userInfo: UserInfo): Promise<UserInfo> {
    try {
      let userInfoWithQualificationKeys = {
        ...userInfo,
        qualifications: userInfo.qualifications.map((el) => el.key),
      };
      const { id, ...userInfoWithoutId } = userInfoWithQualificationKeys;
      console.log("payload: ", userInfoWithoutId);
      let res = await this.apigClient.invokeApi(
        { userId: userInfo.id },
        "/users/{userId}",
        "patch",
        {},
        userInfoWithoutId
      );
      if (res.data) {
        return res;
      } else {
        throw new Error("failed to fetch user Information");
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
    console.log(helper);
    let res = await this.apigClient.invokeApi({}, "/users", "post", {}, helper);
    console.log(res);
    return {
      name: "",
      email: "",
      postcode: "",
      phone: "",
    };
  }

  createHelpRequest(request: HelpRequest): Promise<HelpRequest> {
    return this.post(Endpoint.HelpRequest, request);
  }
  async getOrganziationInfo(orgId: string): Promise<OrganizationInfo> {
    let res = await this.apigClient.invokeApi({}, "/organisations", "get");
    console.log(res);
    let [mockOrg] = res.data;

    // we use the first organisation until we have authentification
    res = await this.apigClient.invokeApi(
      { organisationId: mockOrg.id },
      "/organisations/{organisationId}",
      "get"
    );

    if (res.status === 200) {
      let [orgData] = res.data;
      return Promise.resolve({
        id: orgData.id,
        name: orgData.name,
        description:
          orgData.teaser ||
          "Good organisation, only high motivated helpers here. And some more text could be here.",
        address: orgData.street || "no address given",
        email: orgData.responsibles[0].email,
        phone: String(this.chance.integer({ min: 10000000, max: 100000000 })),
      });
    }
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

  async getHelpRequests(): Promise<HelpRequest[]> {
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

  getHelpRequestById(id: number): Promise<HelpRequest> {
    const temp = async () => {
      let requests: HelpRequest[] = await this.getHelpRequests();
      requests = requests.filter((el) => {
        return el.id == id;
      });
      return requests[0];
    };

    let ours = temp();

    return Promise.resolve(ours);
  }

  async getQualifications(): Promise<Skill[]> {
    try {
      let res = await this.apigClient.invokeApi({}, "/qualifications", "get");
      if (res.status == 200) {
        let qualifications: Skill[] = res.data.map((el) => ({
          id: el.id,
          name: el.name,
          key: el.key,
        }));
        console.log(qualifications);
        return qualifications;
      }
      throw new Error();
    } catch (err) {
      return err;
    }
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
