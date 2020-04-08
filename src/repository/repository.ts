import { Helper } from "./model/helper";
import {
  HelpRequest,
  HelpRequestHelpers,
  Skill,
  OrganizationInfo,
} from "./model/helprequest";
import Chance from "chance";

/*

This file is mostly taken from a similar project written by @Jeremy Boy.
I adjusted some of them, but currently only getOrganisationInfo matches our needs

 */

export interface Repository {
  /**
   * create a helper
   *
   * @param helper the helper to be created. Set id: null to create new user
   */

  getOrganizationInfo(orgId: string): Promise<OrganizationInfo>;
  // createHelper(helper: Helper): Promise<Helper>;

  createHelper(helper: Helper): Promise<Helper>;

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
}

/**
 * Currently, this is just a proxy for Service. We could implement some fancy caching strategies here...
 */
export class RepositoryImpl implements Repository {
  getOrganizationInfo(orgId: string): Promise<OrganizationInfo> {
    return this.service.getOrganziationInfo(orgId);
  }

  constructor(private service: Service = new FetchService()) {}

  createHelper(helper: Helper): Promise<Helper> {
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
  createHelper(helper: Helper): Promise<Helper>;

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

  createHelper(helper: Helper): Promise<Helper> {
    return this.post(Endpoint.Helper, helper);
  }

  createHelpRequest(request: HelpRequest): Promise<HelpRequest> {
    return this.post(Endpoint.HelpRequest, request);
  }
  getOrganziationInfo(orgId: string): Promise<OrganizationInfo> {
    return Promise.resolve({
      id: 12,
      name: "DRK BERLIN",
      description:
        "Good organisation, only high motivated helpers here. And some more text could be here.",
      address: "Reichsdamm 12",
      email: "drk@berlin.de",
      phone: "015546546",
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
        {
          skill: { id: 4, name: "Erste Hilfe" },
          count: 2,
        },
        {
          skill: { id: 2, name: "Altenpflege" },
          count: 1,
        },
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

  getHelpRequests(): Promise<HelpRequest[]> {
    const MOCKED_HELPREQUESTS = [
      {
        id: 1,
        name: "Am Tannenbusch 13",
        created_at: "22.03.2020 17:12 Uhr",
        organisation_id: 17,
        date_start: "23.03.2020 14:00 Uhr",
        number_helpers: 5,
        roles: [],
        skills: [],
        requested_helpers: this.mockHelpers(),
        confirmed_helpers: this.mockHelpers(),
      },
      {
        id: 2,
        name: "Rapsacker 27",
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
    return Promise.resolve({
      id: 1,
      name: "Am Tannenbusch 13",
      created_at: "22.03.2020 17:12 Uhr",
      organisation_id: 17,
      date_start: "23.03.2020 14:00 Uhr",
      number_helpers: 5,
      roles: [],
      skills: [
        { id: 1, name: "Führerschein" },
        { id: 10, name: "Erste Hilfe Kurs" },
      ],
      requested_helpers: this.mockHelpers(),
      confirmed_helpers: this.mockHelpers(),
    });
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
