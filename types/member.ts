export interface MemberAddress {
  businessName: string;
  street: string;
  street2?: string;
  postcode: string;
  city: string;
  region: string;
}

export interface Member {
  id: string;
  businessName: string;
  genre: string; // Region/Location
  category: 'Dealer' | 'Garage' | 'Car Transporter' | 'Service Provider' | 'Importer';
  shortDescription: string;
  longDescription: string;
  website?: string;
  phone: string;
  address: MemberAddress;
  services: string[];
  verified: boolean;
  yearJoined: number;
  featured?: boolean;
}

export interface MembersData {
  members: Member[];
}