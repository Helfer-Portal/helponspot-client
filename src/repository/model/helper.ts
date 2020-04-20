export interface Helper {
  id?: number;
  name: string;
  email: string;
  phone: string;
  postcode: string;
}

export interface NewHelperPostRequest {
  lastName: string;
  firstName: string;
  email: string;
  isGPSLocationAllowed: boolean;
  address: {
    street: string;
    houseNumber: string;
    postalCode: string;
    city: string;
    country: string;
  };
  qualifications: string[];
  avatar: string;
}
