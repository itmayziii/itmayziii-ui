/* eslint-disable */
// @ts-nocheck
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  contact?: Maybe<ContactAccess>;
  headshots?: Maybe<HeadshotsAccess>;
  home?: Maybe<HomeAccess>;
  machines?: Maybe<MachinesAccess>;
  nav?: Maybe<NavAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  user_info?: Maybe<User_InfoAccess>;
  users?: Maybe<UsersAccess>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Contact_Details>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactDocAccessFields = {
  __typename?: 'ContactDocAccessFields';
  createdAt?: Maybe<ContactDocAccessFields_CreatedAt>;
  details?: Maybe<ContactDocAccessFields_Details>;
  title?: Maybe<ContactDocAccessFields_Title>;
  updatedAt?: Maybe<ContactDocAccessFields_UpdatedAt>;
};

export type ContactDocAccessFields_CreatedAt = {
  __typename?: 'ContactDocAccessFields_createdAt';
  create?: Maybe<ContactDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ContactDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ContactDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ContactDocAccessFields_CreatedAt_Update>;
};

export type ContactDocAccessFields_CreatedAt_Create = {
  __typename?: 'ContactDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ContactDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_CreatedAt_Read = {
  __typename?: 'ContactDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_CreatedAt_Update = {
  __typename?: 'ContactDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details = {
  __typename?: 'ContactDocAccessFields_details';
  create?: Maybe<ContactDocAccessFields_Details_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Delete>;
  fields?: Maybe<ContactDocAccessFields_Details_Fields>;
  read?: Maybe<ContactDocAccessFields_Details_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Update>;
};

export type ContactDocAccessFields_Details_Create = {
  __typename?: 'ContactDocAccessFields_details_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Delete = {
  __typename?: 'ContactDocAccessFields_details_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Fields = {
  __typename?: 'ContactDocAccessFields_details_Fields';
  email?: Maybe<ContactDocAccessFields_Details_Email>;
  location?: Maybe<ContactDocAccessFields_Details_Location>;
  map?: Maybe<ContactDocAccessFields_Details_Map>;
};

export type ContactDocAccessFields_Details_Read = {
  __typename?: 'ContactDocAccessFields_details_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Update = {
  __typename?: 'ContactDocAccessFields_details_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email = {
  __typename?: 'ContactDocAccessFields_details_email';
  create?: Maybe<ContactDocAccessFields_Details_Email_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Email_Delete>;
  fields?: Maybe<ContactDocAccessFields_Details_Email_Fields>;
  read?: Maybe<ContactDocAccessFields_Details_Email_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Email_Update>;
};

export type ContactDocAccessFields_Details_Email_Create = {
  __typename?: 'ContactDocAccessFields_details_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Delete = {
  __typename?: 'ContactDocAccessFields_details_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Fields = {
  __typename?: 'ContactDocAccessFields_details_email_Fields';
  description?: Maybe<ContactDocAccessFields_Details_Email_Description>;
  email?: Maybe<ContactDocAccessFields_Details_Email_Email>;
  icon?: Maybe<ContactDocAccessFields_Details_Email_Icon>;
};

export type ContactDocAccessFields_Details_Email_Read = {
  __typename?: 'ContactDocAccessFields_details_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Update = {
  __typename?: 'ContactDocAccessFields_details_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Description = {
  __typename?: 'ContactDocAccessFields_details_email_description';
  create?: Maybe<ContactDocAccessFields_Details_Email_Description_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Email_Description_Delete>;
  read?: Maybe<ContactDocAccessFields_Details_Email_Description_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Email_Description_Update>;
};

export type ContactDocAccessFields_Details_Email_Description_Create = {
  __typename?: 'ContactDocAccessFields_details_email_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Description_Delete = {
  __typename?: 'ContactDocAccessFields_details_email_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Description_Read = {
  __typename?: 'ContactDocAccessFields_details_email_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Description_Update = {
  __typename?: 'ContactDocAccessFields_details_email_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Email = {
  __typename?: 'ContactDocAccessFields_details_email_email';
  create?: Maybe<ContactDocAccessFields_Details_Email_Email_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Email_Email_Delete>;
  read?: Maybe<ContactDocAccessFields_Details_Email_Email_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Email_Email_Update>;
};

export type ContactDocAccessFields_Details_Email_Email_Create = {
  __typename?: 'ContactDocAccessFields_details_email_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Email_Delete = {
  __typename?: 'ContactDocAccessFields_details_email_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Email_Read = {
  __typename?: 'ContactDocAccessFields_details_email_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Email_Update = {
  __typename?: 'ContactDocAccessFields_details_email_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Icon = {
  __typename?: 'ContactDocAccessFields_details_email_icon';
  create?: Maybe<ContactDocAccessFields_Details_Email_Icon_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Email_Icon_Delete>;
  read?: Maybe<ContactDocAccessFields_Details_Email_Icon_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Email_Icon_Update>;
};

export type ContactDocAccessFields_Details_Email_Icon_Create = {
  __typename?: 'ContactDocAccessFields_details_email_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Icon_Delete = {
  __typename?: 'ContactDocAccessFields_details_email_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Icon_Read = {
  __typename?: 'ContactDocAccessFields_details_email_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Email_Icon_Update = {
  __typename?: 'ContactDocAccessFields_details_email_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location = {
  __typename?: 'ContactDocAccessFields_details_location';
  create?: Maybe<ContactDocAccessFields_Details_Location_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Location_Delete>;
  fields?: Maybe<ContactDocAccessFields_Details_Location_Fields>;
  read?: Maybe<ContactDocAccessFields_Details_Location_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Location_Update>;
};

export type ContactDocAccessFields_Details_Location_Create = {
  __typename?: 'ContactDocAccessFields_details_location_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Delete = {
  __typename?: 'ContactDocAccessFields_details_location_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Fields = {
  __typename?: 'ContactDocAccessFields_details_location_Fields';
  description?: Maybe<ContactDocAccessFields_Details_Location_Description>;
  icon?: Maybe<ContactDocAccessFields_Details_Location_Icon>;
  title?: Maybe<ContactDocAccessFields_Details_Location_Title>;
};

export type ContactDocAccessFields_Details_Location_Read = {
  __typename?: 'ContactDocAccessFields_details_location_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Update = {
  __typename?: 'ContactDocAccessFields_details_location_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Description = {
  __typename?: 'ContactDocAccessFields_details_location_description';
  create?: Maybe<ContactDocAccessFields_Details_Location_Description_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Location_Description_Delete>;
  read?: Maybe<ContactDocAccessFields_Details_Location_Description_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Location_Description_Update>;
};

export type ContactDocAccessFields_Details_Location_Description_Create = {
  __typename?: 'ContactDocAccessFields_details_location_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Description_Delete = {
  __typename?: 'ContactDocAccessFields_details_location_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Description_Read = {
  __typename?: 'ContactDocAccessFields_details_location_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Description_Update = {
  __typename?: 'ContactDocAccessFields_details_location_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Icon = {
  __typename?: 'ContactDocAccessFields_details_location_icon';
  create?: Maybe<ContactDocAccessFields_Details_Location_Icon_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Location_Icon_Delete>;
  read?: Maybe<ContactDocAccessFields_Details_Location_Icon_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Location_Icon_Update>;
};

export type ContactDocAccessFields_Details_Location_Icon_Create = {
  __typename?: 'ContactDocAccessFields_details_location_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Icon_Delete = {
  __typename?: 'ContactDocAccessFields_details_location_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Icon_Read = {
  __typename?: 'ContactDocAccessFields_details_location_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Icon_Update = {
  __typename?: 'ContactDocAccessFields_details_location_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Title = {
  __typename?: 'ContactDocAccessFields_details_location_title';
  create?: Maybe<ContactDocAccessFields_Details_Location_Title_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Location_Title_Delete>;
  read?: Maybe<ContactDocAccessFields_Details_Location_Title_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Location_Title_Update>;
};

export type ContactDocAccessFields_Details_Location_Title_Create = {
  __typename?: 'ContactDocAccessFields_details_location_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Title_Delete = {
  __typename?: 'ContactDocAccessFields_details_location_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Title_Read = {
  __typename?: 'ContactDocAccessFields_details_location_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Location_Title_Update = {
  __typename?: 'ContactDocAccessFields_details_location_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map = {
  __typename?: 'ContactDocAccessFields_details_map';
  create?: Maybe<ContactDocAccessFields_Details_Map_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Map_Delete>;
  fields?: Maybe<ContactDocAccessFields_Details_Map_Fields>;
  read?: Maybe<ContactDocAccessFields_Details_Map_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Map_Update>;
};

export type ContactDocAccessFields_Details_Map_Create = {
  __typename?: 'ContactDocAccessFields_details_map_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Delete = {
  __typename?: 'ContactDocAccessFields_details_map_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Fields = {
  __typename?: 'ContactDocAccessFields_details_map_Fields';
  alt?: Maybe<ContactDocAccessFields_Details_Map_Alt>;
  link?: Maybe<ContactDocAccessFields_Details_Map_Link>;
};

export type ContactDocAccessFields_Details_Map_Read = {
  __typename?: 'ContactDocAccessFields_details_map_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Update = {
  __typename?: 'ContactDocAccessFields_details_map_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Alt = {
  __typename?: 'ContactDocAccessFields_details_map_alt';
  create?: Maybe<ContactDocAccessFields_Details_Map_Alt_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Map_Alt_Delete>;
  read?: Maybe<ContactDocAccessFields_Details_Map_Alt_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Map_Alt_Update>;
};

export type ContactDocAccessFields_Details_Map_Alt_Create = {
  __typename?: 'ContactDocAccessFields_details_map_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Alt_Delete = {
  __typename?: 'ContactDocAccessFields_details_map_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Alt_Read = {
  __typename?: 'ContactDocAccessFields_details_map_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Alt_Update = {
  __typename?: 'ContactDocAccessFields_details_map_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Link = {
  __typename?: 'ContactDocAccessFields_details_map_link';
  create?: Maybe<ContactDocAccessFields_Details_Map_Link_Create>;
  delete?: Maybe<ContactDocAccessFields_Details_Map_Link_Delete>;
  read?: Maybe<ContactDocAccessFields_Details_Map_Link_Read>;
  update?: Maybe<ContactDocAccessFields_Details_Map_Link_Update>;
};

export type ContactDocAccessFields_Details_Map_Link_Create = {
  __typename?: 'ContactDocAccessFields_details_map_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Link_Delete = {
  __typename?: 'ContactDocAccessFields_details_map_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Link_Read = {
  __typename?: 'ContactDocAccessFields_details_map_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Details_Map_Link_Update = {
  __typename?: 'ContactDocAccessFields_details_map_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Title = {
  __typename?: 'ContactDocAccessFields_title';
  create?: Maybe<ContactDocAccessFields_Title_Create>;
  delete?: Maybe<ContactDocAccessFields_Title_Delete>;
  read?: Maybe<ContactDocAccessFields_Title_Read>;
  update?: Maybe<ContactDocAccessFields_Title_Update>;
};

export type ContactDocAccessFields_Title_Create = {
  __typename?: 'ContactDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Title_Delete = {
  __typename?: 'ContactDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Title_Read = {
  __typename?: 'ContactDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_Title_Update = {
  __typename?: 'ContactDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_UpdatedAt = {
  __typename?: 'ContactDocAccessFields_updatedAt';
  create?: Maybe<ContactDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ContactDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ContactDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ContactDocAccessFields_UpdatedAt_Update>;
};

export type ContactDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ContactDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ContactDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ContactDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ContactDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields = {
  __typename?: 'ContactFields';
  createdAt?: Maybe<ContactFields_CreatedAt>;
  details?: Maybe<ContactFields_Details>;
  title?: Maybe<ContactFields_Title>;
  updatedAt?: Maybe<ContactFields_UpdatedAt>;
};

export type ContactFields_CreatedAt = {
  __typename?: 'ContactFields_createdAt';
  create?: Maybe<ContactFields_CreatedAt_Create>;
  delete?: Maybe<ContactFields_CreatedAt_Delete>;
  read?: Maybe<ContactFields_CreatedAt_Read>;
  update?: Maybe<ContactFields_CreatedAt_Update>;
};

export type ContactFields_CreatedAt_Create = {
  __typename?: 'ContactFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_CreatedAt_Delete = {
  __typename?: 'ContactFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_CreatedAt_Read = {
  __typename?: 'ContactFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_CreatedAt_Update = {
  __typename?: 'ContactFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details = {
  __typename?: 'ContactFields_details';
  create?: Maybe<ContactFields_Details_Create>;
  delete?: Maybe<ContactFields_Details_Delete>;
  fields?: Maybe<ContactFields_Details_Fields>;
  read?: Maybe<ContactFields_Details_Read>;
  update?: Maybe<ContactFields_Details_Update>;
};

export type ContactFields_Details_Create = {
  __typename?: 'ContactFields_details_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Delete = {
  __typename?: 'ContactFields_details_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Fields = {
  __typename?: 'ContactFields_details_Fields';
  email?: Maybe<ContactFields_Details_Email>;
  location?: Maybe<ContactFields_Details_Location>;
  map?: Maybe<ContactFields_Details_Map>;
};

export type ContactFields_Details_Read = {
  __typename?: 'ContactFields_details_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Update = {
  __typename?: 'ContactFields_details_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email = {
  __typename?: 'ContactFields_details_email';
  create?: Maybe<ContactFields_Details_Email_Create>;
  delete?: Maybe<ContactFields_Details_Email_Delete>;
  fields?: Maybe<ContactFields_Details_Email_Fields>;
  read?: Maybe<ContactFields_Details_Email_Read>;
  update?: Maybe<ContactFields_Details_Email_Update>;
};

export type ContactFields_Details_Email_Create = {
  __typename?: 'ContactFields_details_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Delete = {
  __typename?: 'ContactFields_details_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Fields = {
  __typename?: 'ContactFields_details_email_Fields';
  description?: Maybe<ContactFields_Details_Email_Description>;
  email?: Maybe<ContactFields_Details_Email_Email>;
  icon?: Maybe<ContactFields_Details_Email_Icon>;
};

export type ContactFields_Details_Email_Read = {
  __typename?: 'ContactFields_details_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Update = {
  __typename?: 'ContactFields_details_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Description = {
  __typename?: 'ContactFields_details_email_description';
  create?: Maybe<ContactFields_Details_Email_Description_Create>;
  delete?: Maybe<ContactFields_Details_Email_Description_Delete>;
  read?: Maybe<ContactFields_Details_Email_Description_Read>;
  update?: Maybe<ContactFields_Details_Email_Description_Update>;
};

export type ContactFields_Details_Email_Description_Create = {
  __typename?: 'ContactFields_details_email_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Description_Delete = {
  __typename?: 'ContactFields_details_email_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Description_Read = {
  __typename?: 'ContactFields_details_email_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Description_Update = {
  __typename?: 'ContactFields_details_email_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Email = {
  __typename?: 'ContactFields_details_email_email';
  create?: Maybe<ContactFields_Details_Email_Email_Create>;
  delete?: Maybe<ContactFields_Details_Email_Email_Delete>;
  read?: Maybe<ContactFields_Details_Email_Email_Read>;
  update?: Maybe<ContactFields_Details_Email_Email_Update>;
};

export type ContactFields_Details_Email_Email_Create = {
  __typename?: 'ContactFields_details_email_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Email_Delete = {
  __typename?: 'ContactFields_details_email_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Email_Read = {
  __typename?: 'ContactFields_details_email_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Email_Update = {
  __typename?: 'ContactFields_details_email_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Icon = {
  __typename?: 'ContactFields_details_email_icon';
  create?: Maybe<ContactFields_Details_Email_Icon_Create>;
  delete?: Maybe<ContactFields_Details_Email_Icon_Delete>;
  read?: Maybe<ContactFields_Details_Email_Icon_Read>;
  update?: Maybe<ContactFields_Details_Email_Icon_Update>;
};

export type ContactFields_Details_Email_Icon_Create = {
  __typename?: 'ContactFields_details_email_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Icon_Delete = {
  __typename?: 'ContactFields_details_email_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Icon_Read = {
  __typename?: 'ContactFields_details_email_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Email_Icon_Update = {
  __typename?: 'ContactFields_details_email_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location = {
  __typename?: 'ContactFields_details_location';
  create?: Maybe<ContactFields_Details_Location_Create>;
  delete?: Maybe<ContactFields_Details_Location_Delete>;
  fields?: Maybe<ContactFields_Details_Location_Fields>;
  read?: Maybe<ContactFields_Details_Location_Read>;
  update?: Maybe<ContactFields_Details_Location_Update>;
};

export type ContactFields_Details_Location_Create = {
  __typename?: 'ContactFields_details_location_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Delete = {
  __typename?: 'ContactFields_details_location_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Fields = {
  __typename?: 'ContactFields_details_location_Fields';
  description?: Maybe<ContactFields_Details_Location_Description>;
  icon?: Maybe<ContactFields_Details_Location_Icon>;
  title?: Maybe<ContactFields_Details_Location_Title>;
};

export type ContactFields_Details_Location_Read = {
  __typename?: 'ContactFields_details_location_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Update = {
  __typename?: 'ContactFields_details_location_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Description = {
  __typename?: 'ContactFields_details_location_description';
  create?: Maybe<ContactFields_Details_Location_Description_Create>;
  delete?: Maybe<ContactFields_Details_Location_Description_Delete>;
  read?: Maybe<ContactFields_Details_Location_Description_Read>;
  update?: Maybe<ContactFields_Details_Location_Description_Update>;
};

export type ContactFields_Details_Location_Description_Create = {
  __typename?: 'ContactFields_details_location_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Description_Delete = {
  __typename?: 'ContactFields_details_location_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Description_Read = {
  __typename?: 'ContactFields_details_location_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Description_Update = {
  __typename?: 'ContactFields_details_location_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Icon = {
  __typename?: 'ContactFields_details_location_icon';
  create?: Maybe<ContactFields_Details_Location_Icon_Create>;
  delete?: Maybe<ContactFields_Details_Location_Icon_Delete>;
  read?: Maybe<ContactFields_Details_Location_Icon_Read>;
  update?: Maybe<ContactFields_Details_Location_Icon_Update>;
};

export type ContactFields_Details_Location_Icon_Create = {
  __typename?: 'ContactFields_details_location_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Icon_Delete = {
  __typename?: 'ContactFields_details_location_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Icon_Read = {
  __typename?: 'ContactFields_details_location_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Icon_Update = {
  __typename?: 'ContactFields_details_location_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Title = {
  __typename?: 'ContactFields_details_location_title';
  create?: Maybe<ContactFields_Details_Location_Title_Create>;
  delete?: Maybe<ContactFields_Details_Location_Title_Delete>;
  read?: Maybe<ContactFields_Details_Location_Title_Read>;
  update?: Maybe<ContactFields_Details_Location_Title_Update>;
};

export type ContactFields_Details_Location_Title_Create = {
  __typename?: 'ContactFields_details_location_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Title_Delete = {
  __typename?: 'ContactFields_details_location_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Title_Read = {
  __typename?: 'ContactFields_details_location_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Location_Title_Update = {
  __typename?: 'ContactFields_details_location_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map = {
  __typename?: 'ContactFields_details_map';
  create?: Maybe<ContactFields_Details_Map_Create>;
  delete?: Maybe<ContactFields_Details_Map_Delete>;
  fields?: Maybe<ContactFields_Details_Map_Fields>;
  read?: Maybe<ContactFields_Details_Map_Read>;
  update?: Maybe<ContactFields_Details_Map_Update>;
};

export type ContactFields_Details_Map_Create = {
  __typename?: 'ContactFields_details_map_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Delete = {
  __typename?: 'ContactFields_details_map_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Fields = {
  __typename?: 'ContactFields_details_map_Fields';
  alt?: Maybe<ContactFields_Details_Map_Alt>;
  link?: Maybe<ContactFields_Details_Map_Link>;
};

export type ContactFields_Details_Map_Read = {
  __typename?: 'ContactFields_details_map_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Update = {
  __typename?: 'ContactFields_details_map_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Alt = {
  __typename?: 'ContactFields_details_map_alt';
  create?: Maybe<ContactFields_Details_Map_Alt_Create>;
  delete?: Maybe<ContactFields_Details_Map_Alt_Delete>;
  read?: Maybe<ContactFields_Details_Map_Alt_Read>;
  update?: Maybe<ContactFields_Details_Map_Alt_Update>;
};

export type ContactFields_Details_Map_Alt_Create = {
  __typename?: 'ContactFields_details_map_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Alt_Delete = {
  __typename?: 'ContactFields_details_map_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Alt_Read = {
  __typename?: 'ContactFields_details_map_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Alt_Update = {
  __typename?: 'ContactFields_details_map_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Link = {
  __typename?: 'ContactFields_details_map_link';
  create?: Maybe<ContactFields_Details_Map_Link_Create>;
  delete?: Maybe<ContactFields_Details_Map_Link_Delete>;
  read?: Maybe<ContactFields_Details_Map_Link_Read>;
  update?: Maybe<ContactFields_Details_Map_Link_Update>;
};

export type ContactFields_Details_Map_Link_Create = {
  __typename?: 'ContactFields_details_map_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Link_Delete = {
  __typename?: 'ContactFields_details_map_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Link_Read = {
  __typename?: 'ContactFields_details_map_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Details_Map_Link_Update = {
  __typename?: 'ContactFields_details_map_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Title = {
  __typename?: 'ContactFields_title';
  create?: Maybe<ContactFields_Title_Create>;
  delete?: Maybe<ContactFields_Title_Delete>;
  read?: Maybe<ContactFields_Title_Read>;
  update?: Maybe<ContactFields_Title_Update>;
};

export type ContactFields_Title_Create = {
  __typename?: 'ContactFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Title_Delete = {
  __typename?: 'ContactFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Title_Read = {
  __typename?: 'ContactFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_Title_Update = {
  __typename?: 'ContactFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_UpdatedAt = {
  __typename?: 'ContactFields_updatedAt';
  create?: Maybe<ContactFields_UpdatedAt_Create>;
  delete?: Maybe<ContactFields_UpdatedAt_Delete>;
  read?: Maybe<ContactFields_UpdatedAt_Read>;
  update?: Maybe<ContactFields_UpdatedAt_Update>;
};

export type ContactFields_UpdatedAt_Create = {
  __typename?: 'ContactFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_UpdatedAt_Delete = {
  __typename?: 'ContactFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_UpdatedAt_Read = {
  __typename?: 'ContactFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactFields_UpdatedAt_Update = {
  __typename?: 'ContactFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactReadAccess = {
  __typename?: 'ContactReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactReadDocAccess = {
  __typename?: 'ContactReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactUpdateAccess = {
  __typename?: 'ContactUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactUpdateDocAccess = {
  __typename?: 'ContactUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Contact_Details = {
  __typename?: 'Contact_Details';
  email?: Maybe<Contact_Details_Email>;
  location?: Maybe<Contact_Details_Location>;
  map?: Maybe<Contact_Details_Map>;
};

export type Contact_Details_Email = {
  __typename?: 'Contact_Details_Email';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  icon?: Maybe<Contact_Details_Email_Icon>;
};

export enum Contact_Details_Email_Icon {
  Angular = 'angular',
  Api = 'api',
  Astro = 'astro',
  Code = 'code',
  Computer = 'computer',
  Construction = 'construction',
  Docker = 'docker',
  Gcp = 'gcp',
  Github = 'github',
  Go = 'go',
  Java = 'java',
  Javascript = 'javascript',
  LinkedIn = 'linkedIn',
  Mail = 'mail',
  Map = 'map',
  Nextjs = 'nextjs',
  Nodejs = 'nodejs',
  Php = 'php',
  React = 'react',
  Ruby = 'ruby',
  Terraform = 'terraform',
  Twitter = 'twitter',
  Typescript = 'typescript',
  Vue = 'vue'
}

export enum Contact_Details_Email_Icon_MutationInput {
  Angular = 'angular',
  Api = 'api',
  Astro = 'astro',
  Code = 'code',
  Computer = 'computer',
  Construction = 'construction',
  Docker = 'docker',
  Gcp = 'gcp',
  Github = 'github',
  Go = 'go',
  Java = 'java',
  Javascript = 'javascript',
  LinkedIn = 'linkedIn',
  Mail = 'mail',
  Map = 'map',
  Nextjs = 'nextjs',
  Nodejs = 'nodejs',
  Php = 'php',
  React = 'react',
  Ruby = 'ruby',
  Terraform = 'terraform',
  Twitter = 'twitter',
  Typescript = 'typescript',
  Vue = 'vue'
}

export type Contact_Details_Location = {
  __typename?: 'Contact_Details_Location';
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Contact_Details_Location_Icon>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum Contact_Details_Location_Icon {
  Angular = 'angular',
  Api = 'api',
  Astro = 'astro',
  Code = 'code',
  Computer = 'computer',
  Construction = 'construction',
  Docker = 'docker',
  Gcp = 'gcp',
  Github = 'github',
  Go = 'go',
  Java = 'java',
  Javascript = 'javascript',
  LinkedIn = 'linkedIn',
  Mail = 'mail',
  Map = 'map',
  Nextjs = 'nextjs',
  Nodejs = 'nodejs',
  Php = 'php',
  React = 'react',
  Ruby = 'ruby',
  Terraform = 'terraform',
  Twitter = 'twitter',
  Typescript = 'typescript',
  Vue = 'vue'
}

export enum Contact_Details_Location_Icon_MutationInput {
  Angular = 'angular',
  Api = 'api',
  Astro = 'astro',
  Code = 'code',
  Computer = 'computer',
  Construction = 'construction',
  Docker = 'docker',
  Gcp = 'gcp',
  Github = 'github',
  Go = 'go',
  Java = 'java',
  Javascript = 'javascript',
  LinkedIn = 'linkedIn',
  Mail = 'mail',
  Map = 'map',
  Nextjs = 'nextjs',
  Nodejs = 'nodejs',
  Php = 'php',
  React = 'react',
  Ruby = 'ruby',
  Terraform = 'terraform',
  Twitter = 'twitter',
  Typescript = 'typescript',
  Vue = 'vue'
}

export type Contact_Details_Map = {
  __typename?: 'Contact_Details_Map';
  alt?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
};

export type Headshot = {
  __typename?: 'Headshot';
  alt: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  sizes?: Maybe<Headshot_Sizes>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes = {
  __typename?: 'Headshot_Sizes';
  mobile?: Maybe<Headshot_Sizes_Mobile>;
  mobile1_5x?: Maybe<Headshot_Sizes_Mobile1_5x>;
  mobile2x?: Maybe<Headshot_Sizes_Mobile2x>;
  mobile3x?: Maybe<Headshot_Sizes_Mobile3x>;
  mobile4x?: Maybe<Headshot_Sizes_Mobile4x>;
  mobileAvif?: Maybe<Headshot_Sizes_MobileAvif>;
  mobileAvif1_5x?: Maybe<Headshot_Sizes_MobileAvif1_5x>;
  mobileAvif2x?: Maybe<Headshot_Sizes_MobileAvif2x>;
  mobileAvif3x?: Maybe<Headshot_Sizes_MobileAvif3x>;
  mobileAvif4x?: Maybe<Headshot_Sizes_MobileAvif4x>;
  mobileWebp?: Maybe<Headshot_Sizes_MobileWebp>;
  mobileWebp1_5x?: Maybe<Headshot_Sizes_MobileWebp1_5x>;
  mobileWebp2x?: Maybe<Headshot_Sizes_MobileWebp2x>;
  mobileWebp3x?: Maybe<Headshot_Sizes_MobileWebp3x>;
  mobileWebp4x?: Maybe<Headshot_Sizes_MobileWebp4x>;
  thumbnail?: Maybe<Headshot_Sizes_Thumbnail>;
  thumbnailAvif?: Maybe<Headshot_Sizes_ThumbnailAvif>;
  thumbnailWebp?: Maybe<Headshot_Sizes_ThumbnailWebp>;
};

export type Headshot_Sizes_Mobile = {
  __typename?: 'Headshot_Sizes_Mobile';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_Mobile1_5x = {
  __typename?: 'Headshot_Sizes_Mobile1_5x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_Mobile2x = {
  __typename?: 'Headshot_Sizes_Mobile2x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_Mobile3x = {
  __typename?: 'Headshot_Sizes_Mobile3x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_Mobile4x = {
  __typename?: 'Headshot_Sizes_Mobile4x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_MobileAvif = {
  __typename?: 'Headshot_Sizes_MobileAvif';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_MobileAvif1_5x = {
  __typename?: 'Headshot_Sizes_MobileAvif1_5x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_MobileAvif2x = {
  __typename?: 'Headshot_Sizes_MobileAvif2x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_MobileAvif3x = {
  __typename?: 'Headshot_Sizes_MobileAvif3x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_MobileAvif4x = {
  __typename?: 'Headshot_Sizes_MobileAvif4x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_MobileWebp = {
  __typename?: 'Headshot_Sizes_MobileWebp';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_MobileWebp1_5x = {
  __typename?: 'Headshot_Sizes_MobileWebp1_5x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_MobileWebp2x = {
  __typename?: 'Headshot_Sizes_MobileWebp2x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_MobileWebp3x = {
  __typename?: 'Headshot_Sizes_MobileWebp3x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_MobileWebp4x = {
  __typename?: 'Headshot_Sizes_MobileWebp4x';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_Thumbnail = {
  __typename?: 'Headshot_Sizes_Thumbnail';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_ThumbnailAvif = {
  __typename?: 'Headshot_Sizes_ThumbnailAvif';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Sizes_ThumbnailWebp = {
  __typename?: 'Headshot_Sizes_ThumbnailWebp';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Headshot_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Headshot_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile1_5x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile1_5x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile1_5x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile1_5x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile1_5x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile1_5x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile2x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile2x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile2x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile2x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile2x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile2x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile3x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile3x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile3x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile3x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile3x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile3x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile4x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile4x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile4x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile4x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile4x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile4x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif1_5x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif1_5x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif1_5x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif1_5x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif1_5x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif1_5x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif2x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif2x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif2x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif2x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif2x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif2x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif3x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif3x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif3x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif3x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif3x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif3x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif4x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif4x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif4x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif4x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif4x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif4x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileAvif__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileAvif__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp1_5x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp1_5x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp1_5x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp1_5x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp1_5x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp1_5x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp2x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp2x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp2x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp2x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp2x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp2x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp3x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp3x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp3x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp3x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp3x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp3x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp4x__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp4x__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp4x__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp4x__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp4x__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp4x__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__MobileWebp__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__MobileWebp__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Mobile__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Mobile__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__ThumbnailAvif__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__ThumbnailAvif__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__ThumbnailAvif__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__ThumbnailAvif__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__ThumbnailAvif__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__ThumbnailAvif__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__ThumbnailWebp__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__ThumbnailWebp__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__ThumbnailWebp__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__ThumbnailWebp__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__ThumbnailWebp__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__ThumbnailWebp__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshot_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Headshot_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Headshot_Where = {
  AND?: InputMaybe<Array<InputMaybe<Headshot_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Headshot_Where_Or>>>;
  alt?: InputMaybe<Headshot_Alt_Operator>;
  createdAt?: InputMaybe<Headshot_CreatedAt_Operator>;
  filename?: InputMaybe<Headshot_Filename_Operator>;
  filesize?: InputMaybe<Headshot_Filesize_Operator>;
  height?: InputMaybe<Headshot_Height_Operator>;
  id?: InputMaybe<Headshot_Id_Operator>;
  mimeType?: InputMaybe<Headshot_MimeType_Operator>;
  name?: InputMaybe<Headshot_Name_Operator>;
  sizes__mobile1_5x__filename?: InputMaybe<Headshot_Sizes__Mobile1_5x__Filename_Operator>;
  sizes__mobile1_5x__filesize?: InputMaybe<Headshot_Sizes__Mobile1_5x__Filesize_Operator>;
  sizes__mobile1_5x__height?: InputMaybe<Headshot_Sizes__Mobile1_5x__Height_Operator>;
  sizes__mobile1_5x__mimeType?: InputMaybe<Headshot_Sizes__Mobile1_5x__MimeType_Operator>;
  sizes__mobile1_5x__url?: InputMaybe<Headshot_Sizes__Mobile1_5x__Url_Operator>;
  sizes__mobile1_5x__width?: InputMaybe<Headshot_Sizes__Mobile1_5x__Width_Operator>;
  sizes__mobile2x__filename?: InputMaybe<Headshot_Sizes__Mobile2x__Filename_Operator>;
  sizes__mobile2x__filesize?: InputMaybe<Headshot_Sizes__Mobile2x__Filesize_Operator>;
  sizes__mobile2x__height?: InputMaybe<Headshot_Sizes__Mobile2x__Height_Operator>;
  sizes__mobile2x__mimeType?: InputMaybe<Headshot_Sizes__Mobile2x__MimeType_Operator>;
  sizes__mobile2x__url?: InputMaybe<Headshot_Sizes__Mobile2x__Url_Operator>;
  sizes__mobile2x__width?: InputMaybe<Headshot_Sizes__Mobile2x__Width_Operator>;
  sizes__mobile3x__filename?: InputMaybe<Headshot_Sizes__Mobile3x__Filename_Operator>;
  sizes__mobile3x__filesize?: InputMaybe<Headshot_Sizes__Mobile3x__Filesize_Operator>;
  sizes__mobile3x__height?: InputMaybe<Headshot_Sizes__Mobile3x__Height_Operator>;
  sizes__mobile3x__mimeType?: InputMaybe<Headshot_Sizes__Mobile3x__MimeType_Operator>;
  sizes__mobile3x__url?: InputMaybe<Headshot_Sizes__Mobile3x__Url_Operator>;
  sizes__mobile3x__width?: InputMaybe<Headshot_Sizes__Mobile3x__Width_Operator>;
  sizes__mobile4x__filename?: InputMaybe<Headshot_Sizes__Mobile4x__Filename_Operator>;
  sizes__mobile4x__filesize?: InputMaybe<Headshot_Sizes__Mobile4x__Filesize_Operator>;
  sizes__mobile4x__height?: InputMaybe<Headshot_Sizes__Mobile4x__Height_Operator>;
  sizes__mobile4x__mimeType?: InputMaybe<Headshot_Sizes__Mobile4x__MimeType_Operator>;
  sizes__mobile4x__url?: InputMaybe<Headshot_Sizes__Mobile4x__Url_Operator>;
  sizes__mobile4x__width?: InputMaybe<Headshot_Sizes__Mobile4x__Width_Operator>;
  sizes__mobileAvif1_5x__filename?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Filename_Operator>;
  sizes__mobileAvif1_5x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Filesize_Operator>;
  sizes__mobileAvif1_5x__height?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Height_Operator>;
  sizes__mobileAvif1_5x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__MimeType_Operator>;
  sizes__mobileAvif1_5x__url?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Url_Operator>;
  sizes__mobileAvif1_5x__width?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Width_Operator>;
  sizes__mobileAvif2x__filename?: InputMaybe<Headshot_Sizes__MobileAvif2x__Filename_Operator>;
  sizes__mobileAvif2x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif2x__Filesize_Operator>;
  sizes__mobileAvif2x__height?: InputMaybe<Headshot_Sizes__MobileAvif2x__Height_Operator>;
  sizes__mobileAvif2x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif2x__MimeType_Operator>;
  sizes__mobileAvif2x__url?: InputMaybe<Headshot_Sizes__MobileAvif2x__Url_Operator>;
  sizes__mobileAvif2x__width?: InputMaybe<Headshot_Sizes__MobileAvif2x__Width_Operator>;
  sizes__mobileAvif3x__filename?: InputMaybe<Headshot_Sizes__MobileAvif3x__Filename_Operator>;
  sizes__mobileAvif3x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif3x__Filesize_Operator>;
  sizes__mobileAvif3x__height?: InputMaybe<Headshot_Sizes__MobileAvif3x__Height_Operator>;
  sizes__mobileAvif3x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif3x__MimeType_Operator>;
  sizes__mobileAvif3x__url?: InputMaybe<Headshot_Sizes__MobileAvif3x__Url_Operator>;
  sizes__mobileAvif3x__width?: InputMaybe<Headshot_Sizes__MobileAvif3x__Width_Operator>;
  sizes__mobileAvif4x__filename?: InputMaybe<Headshot_Sizes__MobileAvif4x__Filename_Operator>;
  sizes__mobileAvif4x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif4x__Filesize_Operator>;
  sizes__mobileAvif4x__height?: InputMaybe<Headshot_Sizes__MobileAvif4x__Height_Operator>;
  sizes__mobileAvif4x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif4x__MimeType_Operator>;
  sizes__mobileAvif4x__url?: InputMaybe<Headshot_Sizes__MobileAvif4x__Url_Operator>;
  sizes__mobileAvif4x__width?: InputMaybe<Headshot_Sizes__MobileAvif4x__Width_Operator>;
  sizes__mobileAvif__filename?: InputMaybe<Headshot_Sizes__MobileAvif__Filename_Operator>;
  sizes__mobileAvif__filesize?: InputMaybe<Headshot_Sizes__MobileAvif__Filesize_Operator>;
  sizes__mobileAvif__height?: InputMaybe<Headshot_Sizes__MobileAvif__Height_Operator>;
  sizes__mobileAvif__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif__MimeType_Operator>;
  sizes__mobileAvif__url?: InputMaybe<Headshot_Sizes__MobileAvif__Url_Operator>;
  sizes__mobileAvif__width?: InputMaybe<Headshot_Sizes__MobileAvif__Width_Operator>;
  sizes__mobileWebp1_5x__filename?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Filename_Operator>;
  sizes__mobileWebp1_5x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Filesize_Operator>;
  sizes__mobileWebp1_5x__height?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Height_Operator>;
  sizes__mobileWebp1_5x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__MimeType_Operator>;
  sizes__mobileWebp1_5x__url?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Url_Operator>;
  sizes__mobileWebp1_5x__width?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Width_Operator>;
  sizes__mobileWebp2x__filename?: InputMaybe<Headshot_Sizes__MobileWebp2x__Filename_Operator>;
  sizes__mobileWebp2x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp2x__Filesize_Operator>;
  sizes__mobileWebp2x__height?: InputMaybe<Headshot_Sizes__MobileWebp2x__Height_Operator>;
  sizes__mobileWebp2x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp2x__MimeType_Operator>;
  sizes__mobileWebp2x__url?: InputMaybe<Headshot_Sizes__MobileWebp2x__Url_Operator>;
  sizes__mobileWebp2x__width?: InputMaybe<Headshot_Sizes__MobileWebp2x__Width_Operator>;
  sizes__mobileWebp3x__filename?: InputMaybe<Headshot_Sizes__MobileWebp3x__Filename_Operator>;
  sizes__mobileWebp3x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp3x__Filesize_Operator>;
  sizes__mobileWebp3x__height?: InputMaybe<Headshot_Sizes__MobileWebp3x__Height_Operator>;
  sizes__mobileWebp3x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp3x__MimeType_Operator>;
  sizes__mobileWebp3x__url?: InputMaybe<Headshot_Sizes__MobileWebp3x__Url_Operator>;
  sizes__mobileWebp3x__width?: InputMaybe<Headshot_Sizes__MobileWebp3x__Width_Operator>;
  sizes__mobileWebp4x__filename?: InputMaybe<Headshot_Sizes__MobileWebp4x__Filename_Operator>;
  sizes__mobileWebp4x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp4x__Filesize_Operator>;
  sizes__mobileWebp4x__height?: InputMaybe<Headshot_Sizes__MobileWebp4x__Height_Operator>;
  sizes__mobileWebp4x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp4x__MimeType_Operator>;
  sizes__mobileWebp4x__url?: InputMaybe<Headshot_Sizes__MobileWebp4x__Url_Operator>;
  sizes__mobileWebp4x__width?: InputMaybe<Headshot_Sizes__MobileWebp4x__Width_Operator>;
  sizes__mobileWebp__filename?: InputMaybe<Headshot_Sizes__MobileWebp__Filename_Operator>;
  sizes__mobileWebp__filesize?: InputMaybe<Headshot_Sizes__MobileWebp__Filesize_Operator>;
  sizes__mobileWebp__height?: InputMaybe<Headshot_Sizes__MobileWebp__Height_Operator>;
  sizes__mobileWebp__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp__MimeType_Operator>;
  sizes__mobileWebp__url?: InputMaybe<Headshot_Sizes__MobileWebp__Url_Operator>;
  sizes__mobileWebp__width?: InputMaybe<Headshot_Sizes__MobileWebp__Width_Operator>;
  sizes__mobile__filename?: InputMaybe<Headshot_Sizes__Mobile__Filename_Operator>;
  sizes__mobile__filesize?: InputMaybe<Headshot_Sizes__Mobile__Filesize_Operator>;
  sizes__mobile__height?: InputMaybe<Headshot_Sizes__Mobile__Height_Operator>;
  sizes__mobile__mimeType?: InputMaybe<Headshot_Sizes__Mobile__MimeType_Operator>;
  sizes__mobile__url?: InputMaybe<Headshot_Sizes__Mobile__Url_Operator>;
  sizes__mobile__width?: InputMaybe<Headshot_Sizes__Mobile__Width_Operator>;
  sizes__thumbnailAvif__filename?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Filename_Operator>;
  sizes__thumbnailAvif__filesize?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Filesize_Operator>;
  sizes__thumbnailAvif__height?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Height_Operator>;
  sizes__thumbnailAvif__mimeType?: InputMaybe<Headshot_Sizes__ThumbnailAvif__MimeType_Operator>;
  sizes__thumbnailAvif__url?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Url_Operator>;
  sizes__thumbnailAvif__width?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Width_Operator>;
  sizes__thumbnailWebp__filename?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Filename_Operator>;
  sizes__thumbnailWebp__filesize?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Filesize_Operator>;
  sizes__thumbnailWebp__height?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Height_Operator>;
  sizes__thumbnailWebp__mimeType?: InputMaybe<Headshot_Sizes__ThumbnailWebp__MimeType_Operator>;
  sizes__thumbnailWebp__url?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Url_Operator>;
  sizes__thumbnailWebp__width?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Headshot_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Headshot_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Headshot_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Headshot_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Headshot_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Headshot_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Headshot_UpdatedAt_Operator>;
  url?: InputMaybe<Headshot_Url_Operator>;
  width?: InputMaybe<Headshot_Width_Operator>;
};

export type Headshot_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Headshot_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Headshot_Where_Or>>>;
  alt?: InputMaybe<Headshot_Alt_Operator>;
  createdAt?: InputMaybe<Headshot_CreatedAt_Operator>;
  filename?: InputMaybe<Headshot_Filename_Operator>;
  filesize?: InputMaybe<Headshot_Filesize_Operator>;
  height?: InputMaybe<Headshot_Height_Operator>;
  id?: InputMaybe<Headshot_Id_Operator>;
  mimeType?: InputMaybe<Headshot_MimeType_Operator>;
  name?: InputMaybe<Headshot_Name_Operator>;
  sizes__mobile1_5x__filename?: InputMaybe<Headshot_Sizes__Mobile1_5x__Filename_Operator>;
  sizes__mobile1_5x__filesize?: InputMaybe<Headshot_Sizes__Mobile1_5x__Filesize_Operator>;
  sizes__mobile1_5x__height?: InputMaybe<Headshot_Sizes__Mobile1_5x__Height_Operator>;
  sizes__mobile1_5x__mimeType?: InputMaybe<Headshot_Sizes__Mobile1_5x__MimeType_Operator>;
  sizes__mobile1_5x__url?: InputMaybe<Headshot_Sizes__Mobile1_5x__Url_Operator>;
  sizes__mobile1_5x__width?: InputMaybe<Headshot_Sizes__Mobile1_5x__Width_Operator>;
  sizes__mobile2x__filename?: InputMaybe<Headshot_Sizes__Mobile2x__Filename_Operator>;
  sizes__mobile2x__filesize?: InputMaybe<Headshot_Sizes__Mobile2x__Filesize_Operator>;
  sizes__mobile2x__height?: InputMaybe<Headshot_Sizes__Mobile2x__Height_Operator>;
  sizes__mobile2x__mimeType?: InputMaybe<Headshot_Sizes__Mobile2x__MimeType_Operator>;
  sizes__mobile2x__url?: InputMaybe<Headshot_Sizes__Mobile2x__Url_Operator>;
  sizes__mobile2x__width?: InputMaybe<Headshot_Sizes__Mobile2x__Width_Operator>;
  sizes__mobile3x__filename?: InputMaybe<Headshot_Sizes__Mobile3x__Filename_Operator>;
  sizes__mobile3x__filesize?: InputMaybe<Headshot_Sizes__Mobile3x__Filesize_Operator>;
  sizes__mobile3x__height?: InputMaybe<Headshot_Sizes__Mobile3x__Height_Operator>;
  sizes__mobile3x__mimeType?: InputMaybe<Headshot_Sizes__Mobile3x__MimeType_Operator>;
  sizes__mobile3x__url?: InputMaybe<Headshot_Sizes__Mobile3x__Url_Operator>;
  sizes__mobile3x__width?: InputMaybe<Headshot_Sizes__Mobile3x__Width_Operator>;
  sizes__mobile4x__filename?: InputMaybe<Headshot_Sizes__Mobile4x__Filename_Operator>;
  sizes__mobile4x__filesize?: InputMaybe<Headshot_Sizes__Mobile4x__Filesize_Operator>;
  sizes__mobile4x__height?: InputMaybe<Headshot_Sizes__Mobile4x__Height_Operator>;
  sizes__mobile4x__mimeType?: InputMaybe<Headshot_Sizes__Mobile4x__MimeType_Operator>;
  sizes__mobile4x__url?: InputMaybe<Headshot_Sizes__Mobile4x__Url_Operator>;
  sizes__mobile4x__width?: InputMaybe<Headshot_Sizes__Mobile4x__Width_Operator>;
  sizes__mobileAvif1_5x__filename?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Filename_Operator>;
  sizes__mobileAvif1_5x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Filesize_Operator>;
  sizes__mobileAvif1_5x__height?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Height_Operator>;
  sizes__mobileAvif1_5x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__MimeType_Operator>;
  sizes__mobileAvif1_5x__url?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Url_Operator>;
  sizes__mobileAvif1_5x__width?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Width_Operator>;
  sizes__mobileAvif2x__filename?: InputMaybe<Headshot_Sizes__MobileAvif2x__Filename_Operator>;
  sizes__mobileAvif2x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif2x__Filesize_Operator>;
  sizes__mobileAvif2x__height?: InputMaybe<Headshot_Sizes__MobileAvif2x__Height_Operator>;
  sizes__mobileAvif2x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif2x__MimeType_Operator>;
  sizes__mobileAvif2x__url?: InputMaybe<Headshot_Sizes__MobileAvif2x__Url_Operator>;
  sizes__mobileAvif2x__width?: InputMaybe<Headshot_Sizes__MobileAvif2x__Width_Operator>;
  sizes__mobileAvif3x__filename?: InputMaybe<Headshot_Sizes__MobileAvif3x__Filename_Operator>;
  sizes__mobileAvif3x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif3x__Filesize_Operator>;
  sizes__mobileAvif3x__height?: InputMaybe<Headshot_Sizes__MobileAvif3x__Height_Operator>;
  sizes__mobileAvif3x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif3x__MimeType_Operator>;
  sizes__mobileAvif3x__url?: InputMaybe<Headshot_Sizes__MobileAvif3x__Url_Operator>;
  sizes__mobileAvif3x__width?: InputMaybe<Headshot_Sizes__MobileAvif3x__Width_Operator>;
  sizes__mobileAvif4x__filename?: InputMaybe<Headshot_Sizes__MobileAvif4x__Filename_Operator>;
  sizes__mobileAvif4x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif4x__Filesize_Operator>;
  sizes__mobileAvif4x__height?: InputMaybe<Headshot_Sizes__MobileAvif4x__Height_Operator>;
  sizes__mobileAvif4x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif4x__MimeType_Operator>;
  sizes__mobileAvif4x__url?: InputMaybe<Headshot_Sizes__MobileAvif4x__Url_Operator>;
  sizes__mobileAvif4x__width?: InputMaybe<Headshot_Sizes__MobileAvif4x__Width_Operator>;
  sizes__mobileAvif__filename?: InputMaybe<Headshot_Sizes__MobileAvif__Filename_Operator>;
  sizes__mobileAvif__filesize?: InputMaybe<Headshot_Sizes__MobileAvif__Filesize_Operator>;
  sizes__mobileAvif__height?: InputMaybe<Headshot_Sizes__MobileAvif__Height_Operator>;
  sizes__mobileAvif__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif__MimeType_Operator>;
  sizes__mobileAvif__url?: InputMaybe<Headshot_Sizes__MobileAvif__Url_Operator>;
  sizes__mobileAvif__width?: InputMaybe<Headshot_Sizes__MobileAvif__Width_Operator>;
  sizes__mobileWebp1_5x__filename?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Filename_Operator>;
  sizes__mobileWebp1_5x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Filesize_Operator>;
  sizes__mobileWebp1_5x__height?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Height_Operator>;
  sizes__mobileWebp1_5x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__MimeType_Operator>;
  sizes__mobileWebp1_5x__url?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Url_Operator>;
  sizes__mobileWebp1_5x__width?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Width_Operator>;
  sizes__mobileWebp2x__filename?: InputMaybe<Headshot_Sizes__MobileWebp2x__Filename_Operator>;
  sizes__mobileWebp2x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp2x__Filesize_Operator>;
  sizes__mobileWebp2x__height?: InputMaybe<Headshot_Sizes__MobileWebp2x__Height_Operator>;
  sizes__mobileWebp2x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp2x__MimeType_Operator>;
  sizes__mobileWebp2x__url?: InputMaybe<Headshot_Sizes__MobileWebp2x__Url_Operator>;
  sizes__mobileWebp2x__width?: InputMaybe<Headshot_Sizes__MobileWebp2x__Width_Operator>;
  sizes__mobileWebp3x__filename?: InputMaybe<Headshot_Sizes__MobileWebp3x__Filename_Operator>;
  sizes__mobileWebp3x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp3x__Filesize_Operator>;
  sizes__mobileWebp3x__height?: InputMaybe<Headshot_Sizes__MobileWebp3x__Height_Operator>;
  sizes__mobileWebp3x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp3x__MimeType_Operator>;
  sizes__mobileWebp3x__url?: InputMaybe<Headshot_Sizes__MobileWebp3x__Url_Operator>;
  sizes__mobileWebp3x__width?: InputMaybe<Headshot_Sizes__MobileWebp3x__Width_Operator>;
  sizes__mobileWebp4x__filename?: InputMaybe<Headshot_Sizes__MobileWebp4x__Filename_Operator>;
  sizes__mobileWebp4x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp4x__Filesize_Operator>;
  sizes__mobileWebp4x__height?: InputMaybe<Headshot_Sizes__MobileWebp4x__Height_Operator>;
  sizes__mobileWebp4x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp4x__MimeType_Operator>;
  sizes__mobileWebp4x__url?: InputMaybe<Headshot_Sizes__MobileWebp4x__Url_Operator>;
  sizes__mobileWebp4x__width?: InputMaybe<Headshot_Sizes__MobileWebp4x__Width_Operator>;
  sizes__mobileWebp__filename?: InputMaybe<Headshot_Sizes__MobileWebp__Filename_Operator>;
  sizes__mobileWebp__filesize?: InputMaybe<Headshot_Sizes__MobileWebp__Filesize_Operator>;
  sizes__mobileWebp__height?: InputMaybe<Headshot_Sizes__MobileWebp__Height_Operator>;
  sizes__mobileWebp__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp__MimeType_Operator>;
  sizes__mobileWebp__url?: InputMaybe<Headshot_Sizes__MobileWebp__Url_Operator>;
  sizes__mobileWebp__width?: InputMaybe<Headshot_Sizes__MobileWebp__Width_Operator>;
  sizes__mobile__filename?: InputMaybe<Headshot_Sizes__Mobile__Filename_Operator>;
  sizes__mobile__filesize?: InputMaybe<Headshot_Sizes__Mobile__Filesize_Operator>;
  sizes__mobile__height?: InputMaybe<Headshot_Sizes__Mobile__Height_Operator>;
  sizes__mobile__mimeType?: InputMaybe<Headshot_Sizes__Mobile__MimeType_Operator>;
  sizes__mobile__url?: InputMaybe<Headshot_Sizes__Mobile__Url_Operator>;
  sizes__mobile__width?: InputMaybe<Headshot_Sizes__Mobile__Width_Operator>;
  sizes__thumbnailAvif__filename?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Filename_Operator>;
  sizes__thumbnailAvif__filesize?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Filesize_Operator>;
  sizes__thumbnailAvif__height?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Height_Operator>;
  sizes__thumbnailAvif__mimeType?: InputMaybe<Headshot_Sizes__ThumbnailAvif__MimeType_Operator>;
  sizes__thumbnailAvif__url?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Url_Operator>;
  sizes__thumbnailAvif__width?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Width_Operator>;
  sizes__thumbnailWebp__filename?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Filename_Operator>;
  sizes__thumbnailWebp__filesize?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Filesize_Operator>;
  sizes__thumbnailWebp__height?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Height_Operator>;
  sizes__thumbnailWebp__mimeType?: InputMaybe<Headshot_Sizes__ThumbnailWebp__MimeType_Operator>;
  sizes__thumbnailWebp__url?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Url_Operator>;
  sizes__thumbnailWebp__width?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Headshot_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Headshot_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Headshot_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Headshot_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Headshot_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Headshot_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Headshot_UpdatedAt_Operator>;
  url?: InputMaybe<Headshot_Url_Operator>;
  width?: InputMaybe<Headshot_Width_Operator>;
};

export type Headshot_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Headshot_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Headshot_Where_Or>>>;
  alt?: InputMaybe<Headshot_Alt_Operator>;
  createdAt?: InputMaybe<Headshot_CreatedAt_Operator>;
  filename?: InputMaybe<Headshot_Filename_Operator>;
  filesize?: InputMaybe<Headshot_Filesize_Operator>;
  height?: InputMaybe<Headshot_Height_Operator>;
  id?: InputMaybe<Headshot_Id_Operator>;
  mimeType?: InputMaybe<Headshot_MimeType_Operator>;
  name?: InputMaybe<Headshot_Name_Operator>;
  sizes__mobile1_5x__filename?: InputMaybe<Headshot_Sizes__Mobile1_5x__Filename_Operator>;
  sizes__mobile1_5x__filesize?: InputMaybe<Headshot_Sizes__Mobile1_5x__Filesize_Operator>;
  sizes__mobile1_5x__height?: InputMaybe<Headshot_Sizes__Mobile1_5x__Height_Operator>;
  sizes__mobile1_5x__mimeType?: InputMaybe<Headshot_Sizes__Mobile1_5x__MimeType_Operator>;
  sizes__mobile1_5x__url?: InputMaybe<Headshot_Sizes__Mobile1_5x__Url_Operator>;
  sizes__mobile1_5x__width?: InputMaybe<Headshot_Sizes__Mobile1_5x__Width_Operator>;
  sizes__mobile2x__filename?: InputMaybe<Headshot_Sizes__Mobile2x__Filename_Operator>;
  sizes__mobile2x__filesize?: InputMaybe<Headshot_Sizes__Mobile2x__Filesize_Operator>;
  sizes__mobile2x__height?: InputMaybe<Headshot_Sizes__Mobile2x__Height_Operator>;
  sizes__mobile2x__mimeType?: InputMaybe<Headshot_Sizes__Mobile2x__MimeType_Operator>;
  sizes__mobile2x__url?: InputMaybe<Headshot_Sizes__Mobile2x__Url_Operator>;
  sizes__mobile2x__width?: InputMaybe<Headshot_Sizes__Mobile2x__Width_Operator>;
  sizes__mobile3x__filename?: InputMaybe<Headshot_Sizes__Mobile3x__Filename_Operator>;
  sizes__mobile3x__filesize?: InputMaybe<Headshot_Sizes__Mobile3x__Filesize_Operator>;
  sizes__mobile3x__height?: InputMaybe<Headshot_Sizes__Mobile3x__Height_Operator>;
  sizes__mobile3x__mimeType?: InputMaybe<Headshot_Sizes__Mobile3x__MimeType_Operator>;
  sizes__mobile3x__url?: InputMaybe<Headshot_Sizes__Mobile3x__Url_Operator>;
  sizes__mobile3x__width?: InputMaybe<Headshot_Sizes__Mobile3x__Width_Operator>;
  sizes__mobile4x__filename?: InputMaybe<Headshot_Sizes__Mobile4x__Filename_Operator>;
  sizes__mobile4x__filesize?: InputMaybe<Headshot_Sizes__Mobile4x__Filesize_Operator>;
  sizes__mobile4x__height?: InputMaybe<Headshot_Sizes__Mobile4x__Height_Operator>;
  sizes__mobile4x__mimeType?: InputMaybe<Headshot_Sizes__Mobile4x__MimeType_Operator>;
  sizes__mobile4x__url?: InputMaybe<Headshot_Sizes__Mobile4x__Url_Operator>;
  sizes__mobile4x__width?: InputMaybe<Headshot_Sizes__Mobile4x__Width_Operator>;
  sizes__mobileAvif1_5x__filename?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Filename_Operator>;
  sizes__mobileAvif1_5x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Filesize_Operator>;
  sizes__mobileAvif1_5x__height?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Height_Operator>;
  sizes__mobileAvif1_5x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__MimeType_Operator>;
  sizes__mobileAvif1_5x__url?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Url_Operator>;
  sizes__mobileAvif1_5x__width?: InputMaybe<Headshot_Sizes__MobileAvif1_5x__Width_Operator>;
  sizes__mobileAvif2x__filename?: InputMaybe<Headshot_Sizes__MobileAvif2x__Filename_Operator>;
  sizes__mobileAvif2x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif2x__Filesize_Operator>;
  sizes__mobileAvif2x__height?: InputMaybe<Headshot_Sizes__MobileAvif2x__Height_Operator>;
  sizes__mobileAvif2x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif2x__MimeType_Operator>;
  sizes__mobileAvif2x__url?: InputMaybe<Headshot_Sizes__MobileAvif2x__Url_Operator>;
  sizes__mobileAvif2x__width?: InputMaybe<Headshot_Sizes__MobileAvif2x__Width_Operator>;
  sizes__mobileAvif3x__filename?: InputMaybe<Headshot_Sizes__MobileAvif3x__Filename_Operator>;
  sizes__mobileAvif3x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif3x__Filesize_Operator>;
  sizes__mobileAvif3x__height?: InputMaybe<Headshot_Sizes__MobileAvif3x__Height_Operator>;
  sizes__mobileAvif3x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif3x__MimeType_Operator>;
  sizes__mobileAvif3x__url?: InputMaybe<Headshot_Sizes__MobileAvif3x__Url_Operator>;
  sizes__mobileAvif3x__width?: InputMaybe<Headshot_Sizes__MobileAvif3x__Width_Operator>;
  sizes__mobileAvif4x__filename?: InputMaybe<Headshot_Sizes__MobileAvif4x__Filename_Operator>;
  sizes__mobileAvif4x__filesize?: InputMaybe<Headshot_Sizes__MobileAvif4x__Filesize_Operator>;
  sizes__mobileAvif4x__height?: InputMaybe<Headshot_Sizes__MobileAvif4x__Height_Operator>;
  sizes__mobileAvif4x__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif4x__MimeType_Operator>;
  sizes__mobileAvif4x__url?: InputMaybe<Headshot_Sizes__MobileAvif4x__Url_Operator>;
  sizes__mobileAvif4x__width?: InputMaybe<Headshot_Sizes__MobileAvif4x__Width_Operator>;
  sizes__mobileAvif__filename?: InputMaybe<Headshot_Sizes__MobileAvif__Filename_Operator>;
  sizes__mobileAvif__filesize?: InputMaybe<Headshot_Sizes__MobileAvif__Filesize_Operator>;
  sizes__mobileAvif__height?: InputMaybe<Headshot_Sizes__MobileAvif__Height_Operator>;
  sizes__mobileAvif__mimeType?: InputMaybe<Headshot_Sizes__MobileAvif__MimeType_Operator>;
  sizes__mobileAvif__url?: InputMaybe<Headshot_Sizes__MobileAvif__Url_Operator>;
  sizes__mobileAvif__width?: InputMaybe<Headshot_Sizes__MobileAvif__Width_Operator>;
  sizes__mobileWebp1_5x__filename?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Filename_Operator>;
  sizes__mobileWebp1_5x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Filesize_Operator>;
  sizes__mobileWebp1_5x__height?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Height_Operator>;
  sizes__mobileWebp1_5x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__MimeType_Operator>;
  sizes__mobileWebp1_5x__url?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Url_Operator>;
  sizes__mobileWebp1_5x__width?: InputMaybe<Headshot_Sizes__MobileWebp1_5x__Width_Operator>;
  sizes__mobileWebp2x__filename?: InputMaybe<Headshot_Sizes__MobileWebp2x__Filename_Operator>;
  sizes__mobileWebp2x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp2x__Filesize_Operator>;
  sizes__mobileWebp2x__height?: InputMaybe<Headshot_Sizes__MobileWebp2x__Height_Operator>;
  sizes__mobileWebp2x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp2x__MimeType_Operator>;
  sizes__mobileWebp2x__url?: InputMaybe<Headshot_Sizes__MobileWebp2x__Url_Operator>;
  sizes__mobileWebp2x__width?: InputMaybe<Headshot_Sizes__MobileWebp2x__Width_Operator>;
  sizes__mobileWebp3x__filename?: InputMaybe<Headshot_Sizes__MobileWebp3x__Filename_Operator>;
  sizes__mobileWebp3x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp3x__Filesize_Operator>;
  sizes__mobileWebp3x__height?: InputMaybe<Headshot_Sizes__MobileWebp3x__Height_Operator>;
  sizes__mobileWebp3x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp3x__MimeType_Operator>;
  sizes__mobileWebp3x__url?: InputMaybe<Headshot_Sizes__MobileWebp3x__Url_Operator>;
  sizes__mobileWebp3x__width?: InputMaybe<Headshot_Sizes__MobileWebp3x__Width_Operator>;
  sizes__mobileWebp4x__filename?: InputMaybe<Headshot_Sizes__MobileWebp4x__Filename_Operator>;
  sizes__mobileWebp4x__filesize?: InputMaybe<Headshot_Sizes__MobileWebp4x__Filesize_Operator>;
  sizes__mobileWebp4x__height?: InputMaybe<Headshot_Sizes__MobileWebp4x__Height_Operator>;
  sizes__mobileWebp4x__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp4x__MimeType_Operator>;
  sizes__mobileWebp4x__url?: InputMaybe<Headshot_Sizes__MobileWebp4x__Url_Operator>;
  sizes__mobileWebp4x__width?: InputMaybe<Headshot_Sizes__MobileWebp4x__Width_Operator>;
  sizes__mobileWebp__filename?: InputMaybe<Headshot_Sizes__MobileWebp__Filename_Operator>;
  sizes__mobileWebp__filesize?: InputMaybe<Headshot_Sizes__MobileWebp__Filesize_Operator>;
  sizes__mobileWebp__height?: InputMaybe<Headshot_Sizes__MobileWebp__Height_Operator>;
  sizes__mobileWebp__mimeType?: InputMaybe<Headshot_Sizes__MobileWebp__MimeType_Operator>;
  sizes__mobileWebp__url?: InputMaybe<Headshot_Sizes__MobileWebp__Url_Operator>;
  sizes__mobileWebp__width?: InputMaybe<Headshot_Sizes__MobileWebp__Width_Operator>;
  sizes__mobile__filename?: InputMaybe<Headshot_Sizes__Mobile__Filename_Operator>;
  sizes__mobile__filesize?: InputMaybe<Headshot_Sizes__Mobile__Filesize_Operator>;
  sizes__mobile__height?: InputMaybe<Headshot_Sizes__Mobile__Height_Operator>;
  sizes__mobile__mimeType?: InputMaybe<Headshot_Sizes__Mobile__MimeType_Operator>;
  sizes__mobile__url?: InputMaybe<Headshot_Sizes__Mobile__Url_Operator>;
  sizes__mobile__width?: InputMaybe<Headshot_Sizes__Mobile__Width_Operator>;
  sizes__thumbnailAvif__filename?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Filename_Operator>;
  sizes__thumbnailAvif__filesize?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Filesize_Operator>;
  sizes__thumbnailAvif__height?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Height_Operator>;
  sizes__thumbnailAvif__mimeType?: InputMaybe<Headshot_Sizes__ThumbnailAvif__MimeType_Operator>;
  sizes__thumbnailAvif__url?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Url_Operator>;
  sizes__thumbnailAvif__width?: InputMaybe<Headshot_Sizes__ThumbnailAvif__Width_Operator>;
  sizes__thumbnailWebp__filename?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Filename_Operator>;
  sizes__thumbnailWebp__filesize?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Filesize_Operator>;
  sizes__thumbnailWebp__height?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Height_Operator>;
  sizes__thumbnailWebp__mimeType?: InputMaybe<Headshot_Sizes__ThumbnailWebp__MimeType_Operator>;
  sizes__thumbnailWebp__url?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Url_Operator>;
  sizes__thumbnailWebp__width?: InputMaybe<Headshot_Sizes__ThumbnailWebp__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Headshot_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Headshot_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Headshot_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Headshot_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Headshot_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Headshot_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Headshot_UpdatedAt_Operator>;
  url?: InputMaybe<Headshot_Url_Operator>;
  width?: InputMaybe<Headshot_Width_Operator>;
};

export type Headshot_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Headshots = {
  __typename?: 'Headshots';
  docs?: Maybe<Array<Maybe<Headshot>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type HeadshotsCreateAccess = {
  __typename?: 'HeadshotsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeadshotsCreateDocAccess = {
  __typename?: 'HeadshotsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeadshotsDeleteAccess = {
  __typename?: 'HeadshotsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeadshotsDeleteDocAccess = {
  __typename?: 'HeadshotsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeadshotsDocAccessFields = {
  __typename?: 'HeadshotsDocAccessFields';
  alt?: Maybe<HeadshotsDocAccessFields_Alt>;
  createdAt?: Maybe<HeadshotsDocAccessFields_CreatedAt>;
  filename?: Maybe<HeadshotsDocAccessFields_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_MimeType>;
  name?: Maybe<HeadshotsDocAccessFields_Name>;
  sizes?: Maybe<HeadshotsDocAccessFields_Sizes>;
  updatedAt?: Maybe<HeadshotsDocAccessFields_UpdatedAt>;
  url?: Maybe<HeadshotsDocAccessFields_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Width>;
};

export type HeadshotsDocAccessFields_Alt = {
  __typename?: 'HeadshotsDocAccessFields_alt';
  create?: Maybe<HeadshotsDocAccessFields_Alt_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Alt_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Alt_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Alt_Update>;
};

export type HeadshotsDocAccessFields_Alt_Create = {
  __typename?: 'HeadshotsDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Alt_Delete = {
  __typename?: 'HeadshotsDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Alt_Read = {
  __typename?: 'HeadshotsDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Alt_Update = {
  __typename?: 'HeadshotsDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_CreatedAt = {
  __typename?: 'HeadshotsDocAccessFields_createdAt';
  create?: Maybe<HeadshotsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<HeadshotsDocAccessFields_CreatedAt_Update>;
};

export type HeadshotsDocAccessFields_CreatedAt_Create = {
  __typename?: 'HeadshotsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HeadshotsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_CreatedAt_Read = {
  __typename?: 'HeadshotsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_CreatedAt_Update = {
  __typename?: 'HeadshotsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Filename = {
  __typename?: 'HeadshotsDocAccessFields_filename';
  create?: Maybe<HeadshotsDocAccessFields_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Filename_Update>;
};

export type HeadshotsDocAccessFields_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Height = {
  __typename?: 'HeadshotsDocAccessFields_height';
  create?: Maybe<HeadshotsDocAccessFields_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Height_Update>;
};

export type HeadshotsDocAccessFields_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_MimeType_Update>;
};

export type HeadshotsDocAccessFields_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Name = {
  __typename?: 'HeadshotsDocAccessFields_name';
  create?: Maybe<HeadshotsDocAccessFields_Name_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Name_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Name_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Name_Update>;
};

export type HeadshotsDocAccessFields_Name_Create = {
  __typename?: 'HeadshotsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Name_Delete = {
  __typename?: 'HeadshotsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Name_Read = {
  __typename?: 'HeadshotsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Name_Update = {
  __typename?: 'HeadshotsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes = {
  __typename?: 'HeadshotsDocAccessFields_sizes';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_Fields';
  mobile?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile>;
  mobile1_5x?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x>;
  mobile2x?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x>;
  mobile3x?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x>;
  mobile4x?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x>;
  mobileAvif?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif>;
  mobileAvif1_5x?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x>;
  mobileAvif2x?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x>;
  mobileAvif3x?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x>;
  mobileAvif4x?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x>;
  mobileWebp?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp>;
  mobileWebp1_5x?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x>;
  mobileWebp2x?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x>;
  mobileWebp3x?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x>;
  mobileWebp4x?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x>;
  thumbnail?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail>;
  thumbnailAvif?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif>;
  thumbnailWebp?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp>;
};

export type HeadshotsDocAccessFields_Sizes_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile1_5x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile1_5x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile1_5x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile2x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile2x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile2x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile3x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile3x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile3x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile4x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile4x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile4x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif1_5x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif1_5x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif2x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif2x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif2x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif3x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif3x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif3x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif4x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif4x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif4x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Width>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileAvif_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileAvif_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileAvif_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp1_5x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp1_5x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp2x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp2x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp2x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp3x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp3x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp3x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Width>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp4x_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp4x_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp4x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Width>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_MobileWebp_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_MobileWebp_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobileWebp_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Width>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Mobile_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Mobile_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_mobile_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Width>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailAvif_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailAvif_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Delete>;
  fields?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Fields>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Width>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_ThumbnailWebp_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnailWebp_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Fields = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Width>;
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Filename = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Height = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Url = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Width = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_UpdatedAt = {
  __typename?: 'HeadshotsDocAccessFields_updatedAt';
  create?: Maybe<HeadshotsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<HeadshotsDocAccessFields_UpdatedAt_Update>;
};

export type HeadshotsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'HeadshotsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HeadshotsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HeadshotsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HeadshotsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Url = {
  __typename?: 'HeadshotsDocAccessFields_url';
  create?: Maybe<HeadshotsDocAccessFields_Url_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Url_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Url_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Url_Update>;
};

export type HeadshotsDocAccessFields_Url_Create = {
  __typename?: 'HeadshotsDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Url_Delete = {
  __typename?: 'HeadshotsDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Url_Read = {
  __typename?: 'HeadshotsDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Url_Update = {
  __typename?: 'HeadshotsDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Width = {
  __typename?: 'HeadshotsDocAccessFields_width';
  create?: Maybe<HeadshotsDocAccessFields_Width_Create>;
  delete?: Maybe<HeadshotsDocAccessFields_Width_Delete>;
  read?: Maybe<HeadshotsDocAccessFields_Width_Read>;
  update?: Maybe<HeadshotsDocAccessFields_Width_Update>;
};

export type HeadshotsDocAccessFields_Width_Create = {
  __typename?: 'HeadshotsDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Width_Delete = {
  __typename?: 'HeadshotsDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Width_Read = {
  __typename?: 'HeadshotsDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsDocAccessFields_Width_Update = {
  __typename?: 'HeadshotsDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields = {
  __typename?: 'HeadshotsFields';
  alt?: Maybe<HeadshotsFields_Alt>;
  createdAt?: Maybe<HeadshotsFields_CreatedAt>;
  filename?: Maybe<HeadshotsFields_Filename>;
  filesize?: Maybe<HeadshotsFields_Filesize>;
  height?: Maybe<HeadshotsFields_Height>;
  mimeType?: Maybe<HeadshotsFields_MimeType>;
  name?: Maybe<HeadshotsFields_Name>;
  sizes?: Maybe<HeadshotsFields_Sizes>;
  updatedAt?: Maybe<HeadshotsFields_UpdatedAt>;
  url?: Maybe<HeadshotsFields_Url>;
  width?: Maybe<HeadshotsFields_Width>;
};

export type HeadshotsFields_Alt = {
  __typename?: 'HeadshotsFields_alt';
  create?: Maybe<HeadshotsFields_Alt_Create>;
  delete?: Maybe<HeadshotsFields_Alt_Delete>;
  read?: Maybe<HeadshotsFields_Alt_Read>;
  update?: Maybe<HeadshotsFields_Alt_Update>;
};

export type HeadshotsFields_Alt_Create = {
  __typename?: 'HeadshotsFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Alt_Delete = {
  __typename?: 'HeadshotsFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Alt_Read = {
  __typename?: 'HeadshotsFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Alt_Update = {
  __typename?: 'HeadshotsFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_CreatedAt = {
  __typename?: 'HeadshotsFields_createdAt';
  create?: Maybe<HeadshotsFields_CreatedAt_Create>;
  delete?: Maybe<HeadshotsFields_CreatedAt_Delete>;
  read?: Maybe<HeadshotsFields_CreatedAt_Read>;
  update?: Maybe<HeadshotsFields_CreatedAt_Update>;
};

export type HeadshotsFields_CreatedAt_Create = {
  __typename?: 'HeadshotsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_CreatedAt_Delete = {
  __typename?: 'HeadshotsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_CreatedAt_Read = {
  __typename?: 'HeadshotsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_CreatedAt_Update = {
  __typename?: 'HeadshotsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Filename = {
  __typename?: 'HeadshotsFields_filename';
  create?: Maybe<HeadshotsFields_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Filename_Read>;
  update?: Maybe<HeadshotsFields_Filename_Update>;
};

export type HeadshotsFields_Filename_Create = {
  __typename?: 'HeadshotsFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Filename_Delete = {
  __typename?: 'HeadshotsFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Filename_Read = {
  __typename?: 'HeadshotsFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Filename_Update = {
  __typename?: 'HeadshotsFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Filesize = {
  __typename?: 'HeadshotsFields_filesize';
  create?: Maybe<HeadshotsFields_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Filesize_Update>;
};

export type HeadshotsFields_Filesize_Create = {
  __typename?: 'HeadshotsFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Filesize_Delete = {
  __typename?: 'HeadshotsFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Filesize_Read = {
  __typename?: 'HeadshotsFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Filesize_Update = {
  __typename?: 'HeadshotsFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Height = {
  __typename?: 'HeadshotsFields_height';
  create?: Maybe<HeadshotsFields_Height_Create>;
  delete?: Maybe<HeadshotsFields_Height_Delete>;
  read?: Maybe<HeadshotsFields_Height_Read>;
  update?: Maybe<HeadshotsFields_Height_Update>;
};

export type HeadshotsFields_Height_Create = {
  __typename?: 'HeadshotsFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Height_Delete = {
  __typename?: 'HeadshotsFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Height_Read = {
  __typename?: 'HeadshotsFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Height_Update = {
  __typename?: 'HeadshotsFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_MimeType = {
  __typename?: 'HeadshotsFields_mimeType';
  create?: Maybe<HeadshotsFields_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_MimeType_Read>;
  update?: Maybe<HeadshotsFields_MimeType_Update>;
};

export type HeadshotsFields_MimeType_Create = {
  __typename?: 'HeadshotsFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_MimeType_Delete = {
  __typename?: 'HeadshotsFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_MimeType_Read = {
  __typename?: 'HeadshotsFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_MimeType_Update = {
  __typename?: 'HeadshotsFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Name = {
  __typename?: 'HeadshotsFields_name';
  create?: Maybe<HeadshotsFields_Name_Create>;
  delete?: Maybe<HeadshotsFields_Name_Delete>;
  read?: Maybe<HeadshotsFields_Name_Read>;
  update?: Maybe<HeadshotsFields_Name_Update>;
};

export type HeadshotsFields_Name_Create = {
  __typename?: 'HeadshotsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Name_Delete = {
  __typename?: 'HeadshotsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Name_Read = {
  __typename?: 'HeadshotsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Name_Update = {
  __typename?: 'HeadshotsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes = {
  __typename?: 'HeadshotsFields_sizes';
  create?: Maybe<HeadshotsFields_Sizes_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Update>;
};

export type HeadshotsFields_Sizes_Create = {
  __typename?: 'HeadshotsFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Delete = {
  __typename?: 'HeadshotsFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Fields = {
  __typename?: 'HeadshotsFields_sizes_Fields';
  mobile?: Maybe<HeadshotsFields_Sizes_Mobile>;
  mobile1_5x?: Maybe<HeadshotsFields_Sizes_Mobile1_5x>;
  mobile2x?: Maybe<HeadshotsFields_Sizes_Mobile2x>;
  mobile3x?: Maybe<HeadshotsFields_Sizes_Mobile3x>;
  mobile4x?: Maybe<HeadshotsFields_Sizes_Mobile4x>;
  mobileAvif?: Maybe<HeadshotsFields_Sizes_MobileAvif>;
  mobileAvif1_5x?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x>;
  mobileAvif2x?: Maybe<HeadshotsFields_Sizes_MobileAvif2x>;
  mobileAvif3x?: Maybe<HeadshotsFields_Sizes_MobileAvif3x>;
  mobileAvif4x?: Maybe<HeadshotsFields_Sizes_MobileAvif4x>;
  mobileWebp?: Maybe<HeadshotsFields_Sizes_MobileWebp>;
  mobileWebp1_5x?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x>;
  mobileWebp2x?: Maybe<HeadshotsFields_Sizes_MobileWebp2x>;
  mobileWebp3x?: Maybe<HeadshotsFields_Sizes_MobileWebp3x>;
  mobileWebp4x?: Maybe<HeadshotsFields_Sizes_MobileWebp4x>;
  thumbnail?: Maybe<HeadshotsFields_Sizes_Thumbnail>;
  thumbnailAvif?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif>;
  thumbnailWebp?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp>;
};

export type HeadshotsFields_Sizes_Read = {
  __typename?: 'HeadshotsFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Update = {
  __typename?: 'HeadshotsFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile = {
  __typename?: 'HeadshotsFields_sizes_mobile';
  create?: Maybe<HeadshotsFields_Sizes_Mobile_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_Mobile_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile_Update>;
};

export type HeadshotsFields_Sizes_Mobile1_5x = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x';
  create?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Update>;
};

export type HeadshotsFields_Sizes_Mobile1_5x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Width>;
};

export type HeadshotsFields_Sizes_Mobile1_5x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_filename';
  create?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Filename_Update>;
};

export type HeadshotsFields_Sizes_Mobile1_5x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_Mobile1_5x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_height';
  create?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Height_Update>;
};

export type HeadshotsFields_Sizes_Mobile1_5x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_Mobile1_5x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_url';
  create?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Url_Update>;
};

export type HeadshotsFields_Sizes_Mobile1_5x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_width';
  create?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile1_5x_Width_Update>;
};

export type HeadshotsFields_Sizes_Mobile1_5x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile1_5x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile1_5x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x = {
  __typename?: 'HeadshotsFields_sizes_mobile2x';
  create?: Maybe<HeadshotsFields_Sizes_Mobile2x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile2x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_Mobile2x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile2x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile2x_Update>;
};

export type HeadshotsFields_Sizes_Mobile2x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_Mobile2x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_Mobile2x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_Mobile2x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_Mobile2x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_Mobile2x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_Mobile2x_Width>;
};

export type HeadshotsFields_Sizes_Mobile2x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_filename';
  create?: Maybe<HeadshotsFields_Sizes_Mobile2x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile2x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile2x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile2x_Filename_Update>;
};

export type HeadshotsFields_Sizes_Mobile2x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_Mobile2x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile2x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile2x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile2x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_Mobile2x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_height';
  create?: Maybe<HeadshotsFields_Sizes_Mobile2x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile2x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile2x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile2x_Height_Update>;
};

export type HeadshotsFields_Sizes_Mobile2x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_Mobile2x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile2x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile2x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile2x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_Mobile2x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_url';
  create?: Maybe<HeadshotsFields_Sizes_Mobile2x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile2x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile2x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile2x_Url_Update>;
};

export type HeadshotsFields_Sizes_Mobile2x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_width';
  create?: Maybe<HeadshotsFields_Sizes_Mobile2x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile2x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile2x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile2x_Width_Update>;
};

export type HeadshotsFields_Sizes_Mobile2x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile2x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile2x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x = {
  __typename?: 'HeadshotsFields_sizes_mobile3x';
  create?: Maybe<HeadshotsFields_Sizes_Mobile3x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile3x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_Mobile3x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile3x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile3x_Update>;
};

export type HeadshotsFields_Sizes_Mobile3x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_Mobile3x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_Mobile3x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_Mobile3x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_Mobile3x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_Mobile3x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_Mobile3x_Width>;
};

export type HeadshotsFields_Sizes_Mobile3x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_filename';
  create?: Maybe<HeadshotsFields_Sizes_Mobile3x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile3x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile3x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile3x_Filename_Update>;
};

export type HeadshotsFields_Sizes_Mobile3x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_Mobile3x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile3x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile3x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile3x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_Mobile3x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_height';
  create?: Maybe<HeadshotsFields_Sizes_Mobile3x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile3x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile3x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile3x_Height_Update>;
};

export type HeadshotsFields_Sizes_Mobile3x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_Mobile3x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile3x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile3x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile3x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_Mobile3x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_url';
  create?: Maybe<HeadshotsFields_Sizes_Mobile3x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile3x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile3x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile3x_Url_Update>;
};

export type HeadshotsFields_Sizes_Mobile3x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_width';
  create?: Maybe<HeadshotsFields_Sizes_Mobile3x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile3x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile3x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile3x_Width_Update>;
};

export type HeadshotsFields_Sizes_Mobile3x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile3x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile3x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x = {
  __typename?: 'HeadshotsFields_sizes_mobile4x';
  create?: Maybe<HeadshotsFields_Sizes_Mobile4x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile4x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_Mobile4x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile4x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile4x_Update>;
};

export type HeadshotsFields_Sizes_Mobile4x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_Mobile4x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_Mobile4x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_Mobile4x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_Mobile4x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_Mobile4x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_Mobile4x_Width>;
};

export type HeadshotsFields_Sizes_Mobile4x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_filename';
  create?: Maybe<HeadshotsFields_Sizes_Mobile4x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile4x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile4x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile4x_Filename_Update>;
};

export type HeadshotsFields_Sizes_Mobile4x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_Mobile4x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile4x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile4x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile4x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_Mobile4x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_height';
  create?: Maybe<HeadshotsFields_Sizes_Mobile4x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile4x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile4x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile4x_Height_Update>;
};

export type HeadshotsFields_Sizes_Mobile4x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_Mobile4x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile4x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile4x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile4x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_Mobile4x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_url';
  create?: Maybe<HeadshotsFields_Sizes_Mobile4x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile4x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile4x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile4x_Url_Update>;
};

export type HeadshotsFields_Sizes_Mobile4x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_width';
  create?: Maybe<HeadshotsFields_Sizes_Mobile4x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile4x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile4x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile4x_Width_Update>;
};

export type HeadshotsFields_Sizes_Mobile4x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile4x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile4x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_MobileAvif_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif1_5x = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Width>;
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_filename';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Filename_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_height';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Height_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_url';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Url_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_width';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif1_5x_Width_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif1_5x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif1_5x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif2x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Width>;
};

export type HeadshotsFields_Sizes_MobileAvif2x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_filename';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Filename_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif2x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif2x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_height';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Height_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif2x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif2x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_url';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Url_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif2x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_width';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif2x_Width_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif2x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif2x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif2x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif3x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Width>;
};

export type HeadshotsFields_Sizes_MobileAvif3x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_filename';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Filename_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif3x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif3x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_height';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Height_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif3x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif3x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_url';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Url_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif3x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_width';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif3x_Width_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif3x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif3x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif3x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif4x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Width>;
};

export type HeadshotsFields_Sizes_MobileAvif4x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_filename';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Filename_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif4x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif4x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_height';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Height_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif4x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif4x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_url';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Url_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif4x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_width';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif4x_Width_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif4x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif4x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif4x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_MobileAvif_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_MobileAvif_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_MobileAvif_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_MobileAvif_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_MobileAvif_Url>;
  width?: Maybe<HeadshotsFields_Sizes_MobileAvif_Width>;
};

export type HeadshotsFields_Sizes_MobileAvif_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_filename';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif_Filename_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_filesize';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif_Filesize_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Height = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_height';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif_Height_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif_MimeType_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Url = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_url';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif_Url_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Width = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_width';
  create?: Maybe<HeadshotsFields_Sizes_MobileAvif_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileAvif_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileAvif_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileAvif_Width_Update>;
};

export type HeadshotsFields_Sizes_MobileAvif_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileAvif_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileAvif_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_MobileWebp_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp1_5x = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Width>;
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_filename';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Filename_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_height';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Height_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_url';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Url_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_width';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp1_5x_Width_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp1_5x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp1_5x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp2x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Width>;
};

export type HeadshotsFields_Sizes_MobileWebp2x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_filename';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Filename_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp2x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp2x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_height';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Height_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp2x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp2x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_url';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Url_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp2x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_width';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp2x_Width_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp2x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp2x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp2x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp3x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Width>;
};

export type HeadshotsFields_Sizes_MobileWebp3x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_filename';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Filename_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp3x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp3x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_height';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Height_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp3x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp3x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_url';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Url_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp3x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_width';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp3x_Width_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp3x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp3x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp3x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp4x_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Url>;
  width?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Width>;
};

export type HeadshotsFields_Sizes_MobileWebp4x_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_filename';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Filename_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp4x_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_filesize';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Filesize_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp4x_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Height = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_height';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Height_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp4x_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_MimeType_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp4x_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Url = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_url';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Url_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp4x_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Width = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_width';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp4x_Width_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp4x_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp4x_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp4x_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_MobileWebp_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_MobileWebp_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_MobileWebp_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_MobileWebp_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_MobileWebp_Url>;
  width?: Maybe<HeadshotsFields_Sizes_MobileWebp_Width>;
};

export type HeadshotsFields_Sizes_MobileWebp_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_filename';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp_Filename_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_filesize';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp_Filesize_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Height = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_height';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp_Height_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp_MimeType_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Url = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_url';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp_Url_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Width = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_width';
  create?: Maybe<HeadshotsFields_Sizes_MobileWebp_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_MobileWebp_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_MobileWebp_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_MobileWebp_Width_Update>;
};

export type HeadshotsFields_Sizes_MobileWebp_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_MobileWebp_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobileWebp_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Fields = {
  __typename?: 'HeadshotsFields_sizes_mobile_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_Mobile_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_Mobile_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_Mobile_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_Mobile_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_Mobile_Url>;
  width?: Maybe<HeadshotsFields_Sizes_Mobile_Width>;
};

export type HeadshotsFields_Sizes_Mobile_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Filename = {
  __typename?: 'HeadshotsFields_sizes_mobile_filename';
  create?: Maybe<HeadshotsFields_Sizes_Mobile_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile_Filename_Update>;
};

export type HeadshotsFields_Sizes_Mobile_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Filesize = {
  __typename?: 'HeadshotsFields_sizes_mobile_filesize';
  create?: Maybe<HeadshotsFields_Sizes_Mobile_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile_Filesize_Update>;
};

export type HeadshotsFields_Sizes_Mobile_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Height = {
  __typename?: 'HeadshotsFields_sizes_mobile_height';
  create?: Maybe<HeadshotsFields_Sizes_Mobile_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile_Height_Update>;
};

export type HeadshotsFields_Sizes_Mobile_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_MimeType = {
  __typename?: 'HeadshotsFields_sizes_mobile_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_Mobile_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile_MimeType_Update>;
};

export type HeadshotsFields_Sizes_Mobile_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Url = {
  __typename?: 'HeadshotsFields_sizes_mobile_url';
  create?: Maybe<HeadshotsFields_Sizes_Mobile_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile_Url_Update>;
};

export type HeadshotsFields_Sizes_Mobile_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Width = {
  __typename?: 'HeadshotsFields_sizes_mobile_width';
  create?: Maybe<HeadshotsFields_Sizes_Mobile_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Mobile_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Mobile_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Mobile_Width_Update>;
};

export type HeadshotsFields_Sizes_Mobile_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_mobile_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_mobile_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_mobile_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Mobile_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_mobile_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail = {
  __typename?: 'HeadshotsFields_sizes_thumbnail';
  create?: Maybe<HeadshotsFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_Thumbnail_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Thumbnail_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailAvif = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Fields = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Url>;
  width?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Width>;
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Filename = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_filename';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Filename_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Filesize = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_filesize';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Filesize_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Height = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_height';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Height_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_MimeType = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_MimeType_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailAvif_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Url = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_url';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Url_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Width = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_width';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailAvif_Width_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailAvif_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailAvif_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Delete>;
  fields?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Fields>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Fields = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Url>;
  width?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Width>;
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Filename = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_filename';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Filename_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Filesize = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_filesize';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Filesize_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Height = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_height';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Height_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_MimeType = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_MimeType_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailWebp_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Url = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_url';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Url_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Width = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_width';
  create?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_ThumbnailWebp_Width_Update>;
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_ThumbnailWebp_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnailWebp_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Fields = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_Fields';
  filename?: Maybe<HeadshotsFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<HeadshotsFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<HeadshotsFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<HeadshotsFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<HeadshotsFields_Sizes_Thumbnail_Url>;
  width?: Maybe<HeadshotsFields_Sizes_Thumbnail_Width>;
};

export type HeadshotsFields_Sizes_Thumbnail_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Filename = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_filename';
  create?: Maybe<HeadshotsFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Thumbnail_Filename_Update>;
};

export type HeadshotsFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_filesize';
  create?: Maybe<HeadshotsFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Thumbnail_Filesize_Update>;
};

export type HeadshotsFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Height = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_height';
  create?: Maybe<HeadshotsFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Thumbnail_Height_Update>;
};

export type HeadshotsFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_mimeType';
  create?: Maybe<HeadshotsFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Thumbnail_MimeType_Update>;
};

export type HeadshotsFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Url = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_url';
  create?: Maybe<HeadshotsFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Thumbnail_Url_Update>;
};

export type HeadshotsFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Width = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_width';
  create?: Maybe<HeadshotsFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<HeadshotsFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<HeadshotsFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<HeadshotsFields_Sizes_Thumbnail_Width_Update>;
};

export type HeadshotsFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'HeadshotsFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_UpdatedAt = {
  __typename?: 'HeadshotsFields_updatedAt';
  create?: Maybe<HeadshotsFields_UpdatedAt_Create>;
  delete?: Maybe<HeadshotsFields_UpdatedAt_Delete>;
  read?: Maybe<HeadshotsFields_UpdatedAt_Read>;
  update?: Maybe<HeadshotsFields_UpdatedAt_Update>;
};

export type HeadshotsFields_UpdatedAt_Create = {
  __typename?: 'HeadshotsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_UpdatedAt_Delete = {
  __typename?: 'HeadshotsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_UpdatedAt_Read = {
  __typename?: 'HeadshotsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_UpdatedAt_Update = {
  __typename?: 'HeadshotsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Url = {
  __typename?: 'HeadshotsFields_url';
  create?: Maybe<HeadshotsFields_Url_Create>;
  delete?: Maybe<HeadshotsFields_Url_Delete>;
  read?: Maybe<HeadshotsFields_Url_Read>;
  update?: Maybe<HeadshotsFields_Url_Update>;
};

export type HeadshotsFields_Url_Create = {
  __typename?: 'HeadshotsFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Url_Delete = {
  __typename?: 'HeadshotsFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Url_Read = {
  __typename?: 'HeadshotsFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Url_Update = {
  __typename?: 'HeadshotsFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Width = {
  __typename?: 'HeadshotsFields_width';
  create?: Maybe<HeadshotsFields_Width_Create>;
  delete?: Maybe<HeadshotsFields_Width_Delete>;
  read?: Maybe<HeadshotsFields_Width_Read>;
  update?: Maybe<HeadshotsFields_Width_Update>;
};

export type HeadshotsFields_Width_Create = {
  __typename?: 'HeadshotsFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Width_Delete = {
  __typename?: 'HeadshotsFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Width_Read = {
  __typename?: 'HeadshotsFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsFields_Width_Update = {
  __typename?: 'HeadshotsFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeadshotsReadAccess = {
  __typename?: 'HeadshotsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeadshotsReadDocAccess = {
  __typename?: 'HeadshotsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeadshotsUpdateAccess = {
  __typename?: 'HeadshotsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeadshotsUpdateDocAccess = {
  __typename?: 'HeadshotsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Home = {
  __typename?: 'Home';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  skills?: Maybe<Home_Skills>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whatIDo?: Maybe<Home_WhatIDo>;
};

export type HomeDocAccessFields = {
  __typename?: 'HomeDocAccessFields';
  createdAt?: Maybe<HomeDocAccessFields_CreatedAt>;
  skills?: Maybe<HomeDocAccessFields_Skills>;
  updatedAt?: Maybe<HomeDocAccessFields_UpdatedAt>;
  whatIDo?: Maybe<HomeDocAccessFields_WhatIDo>;
};

export type HomeDocAccessFields_CreatedAt = {
  __typename?: 'HomeDocAccessFields_createdAt';
  create?: Maybe<HomeDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<HomeDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<HomeDocAccessFields_CreatedAt_Read>;
  update?: Maybe<HomeDocAccessFields_CreatedAt_Update>;
};

export type HomeDocAccessFields_CreatedAt_Create = {
  __typename?: 'HomeDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HomeDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CreatedAt_Read = {
  __typename?: 'HomeDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CreatedAt_Update = {
  __typename?: 'HomeDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills = {
  __typename?: 'HomeDocAccessFields_skills';
  create?: Maybe<HomeDocAccessFields_Skills_Create>;
  delete?: Maybe<HomeDocAccessFields_Skills_Delete>;
  fields?: Maybe<HomeDocAccessFields_Skills_Fields>;
  read?: Maybe<HomeDocAccessFields_Skills_Read>;
  update?: Maybe<HomeDocAccessFields_Skills_Update>;
};

export type HomeDocAccessFields_Skills_Create = {
  __typename?: 'HomeDocAccessFields_skills_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Delete = {
  __typename?: 'HomeDocAccessFields_skills_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Fields = {
  __typename?: 'HomeDocAccessFields_skills_Fields';
  skills?: Maybe<HomeDocAccessFields_Skills_Skills>;
  title?: Maybe<HomeDocAccessFields_Skills_Title>;
};

export type HomeDocAccessFields_Skills_Read = {
  __typename?: 'HomeDocAccessFields_skills_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Update = {
  __typename?: 'HomeDocAccessFields_skills_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills = {
  __typename?: 'HomeDocAccessFields_skills_skills';
  create?: Maybe<HomeDocAccessFields_Skills_Skills_Create>;
  delete?: Maybe<HomeDocAccessFields_Skills_Skills_Delete>;
  fields?: Maybe<HomeDocAccessFields_Skills_Skills_Fields>;
  read?: Maybe<HomeDocAccessFields_Skills_Skills_Read>;
  update?: Maybe<HomeDocAccessFields_Skills_Skills_Update>;
};

export type HomeDocAccessFields_Skills_Skills_Create = {
  __typename?: 'HomeDocAccessFields_skills_skills_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Delete = {
  __typename?: 'HomeDocAccessFields_skills_skills_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Fields = {
  __typename?: 'HomeDocAccessFields_skills_skills_Fields';
  icon?: Maybe<HomeDocAccessFields_Skills_Skills_Icon>;
  id?: Maybe<HomeDocAccessFields_Skills_Skills_Id>;
  name?: Maybe<HomeDocAccessFields_Skills_Skills_Name>;
  proficiency?: Maybe<HomeDocAccessFields_Skills_Skills_Proficiency>;
};

export type HomeDocAccessFields_Skills_Skills_Read = {
  __typename?: 'HomeDocAccessFields_skills_skills_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Update = {
  __typename?: 'HomeDocAccessFields_skills_skills_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Icon = {
  __typename?: 'HomeDocAccessFields_skills_skills_icon';
  create?: Maybe<HomeDocAccessFields_Skills_Skills_Icon_Create>;
  delete?: Maybe<HomeDocAccessFields_Skills_Skills_Icon_Delete>;
  read?: Maybe<HomeDocAccessFields_Skills_Skills_Icon_Read>;
  update?: Maybe<HomeDocAccessFields_Skills_Skills_Icon_Update>;
};

export type HomeDocAccessFields_Skills_Skills_Icon_Create = {
  __typename?: 'HomeDocAccessFields_skills_skills_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Icon_Delete = {
  __typename?: 'HomeDocAccessFields_skills_skills_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Icon_Read = {
  __typename?: 'HomeDocAccessFields_skills_skills_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Icon_Update = {
  __typename?: 'HomeDocAccessFields_skills_skills_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Id = {
  __typename?: 'HomeDocAccessFields_skills_skills_id';
  create?: Maybe<HomeDocAccessFields_Skills_Skills_Id_Create>;
  delete?: Maybe<HomeDocAccessFields_Skills_Skills_Id_Delete>;
  read?: Maybe<HomeDocAccessFields_Skills_Skills_Id_Read>;
  update?: Maybe<HomeDocAccessFields_Skills_Skills_Id_Update>;
};

export type HomeDocAccessFields_Skills_Skills_Id_Create = {
  __typename?: 'HomeDocAccessFields_skills_skills_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Id_Delete = {
  __typename?: 'HomeDocAccessFields_skills_skills_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Id_Read = {
  __typename?: 'HomeDocAccessFields_skills_skills_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Id_Update = {
  __typename?: 'HomeDocAccessFields_skills_skills_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Name = {
  __typename?: 'HomeDocAccessFields_skills_skills_name';
  create?: Maybe<HomeDocAccessFields_Skills_Skills_Name_Create>;
  delete?: Maybe<HomeDocAccessFields_Skills_Skills_Name_Delete>;
  read?: Maybe<HomeDocAccessFields_Skills_Skills_Name_Read>;
  update?: Maybe<HomeDocAccessFields_Skills_Skills_Name_Update>;
};

export type HomeDocAccessFields_Skills_Skills_Name_Create = {
  __typename?: 'HomeDocAccessFields_skills_skills_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Name_Delete = {
  __typename?: 'HomeDocAccessFields_skills_skills_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Name_Read = {
  __typename?: 'HomeDocAccessFields_skills_skills_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Name_Update = {
  __typename?: 'HomeDocAccessFields_skills_skills_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Proficiency = {
  __typename?: 'HomeDocAccessFields_skills_skills_proficiency';
  create?: Maybe<HomeDocAccessFields_Skills_Skills_Proficiency_Create>;
  delete?: Maybe<HomeDocAccessFields_Skills_Skills_Proficiency_Delete>;
  read?: Maybe<HomeDocAccessFields_Skills_Skills_Proficiency_Read>;
  update?: Maybe<HomeDocAccessFields_Skills_Skills_Proficiency_Update>;
};

export type HomeDocAccessFields_Skills_Skills_Proficiency_Create = {
  __typename?: 'HomeDocAccessFields_skills_skills_proficiency_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Proficiency_Delete = {
  __typename?: 'HomeDocAccessFields_skills_skills_proficiency_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Proficiency_Read = {
  __typename?: 'HomeDocAccessFields_skills_skills_proficiency_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Skills_Proficiency_Update = {
  __typename?: 'HomeDocAccessFields_skills_skills_proficiency_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Title = {
  __typename?: 'HomeDocAccessFields_skills_title';
  create?: Maybe<HomeDocAccessFields_Skills_Title_Create>;
  delete?: Maybe<HomeDocAccessFields_Skills_Title_Delete>;
  read?: Maybe<HomeDocAccessFields_Skills_Title_Read>;
  update?: Maybe<HomeDocAccessFields_Skills_Title_Update>;
};

export type HomeDocAccessFields_Skills_Title_Create = {
  __typename?: 'HomeDocAccessFields_skills_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Title_Delete = {
  __typename?: 'HomeDocAccessFields_skills_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Title_Read = {
  __typename?: 'HomeDocAccessFields_skills_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Skills_Title_Update = {
  __typename?: 'HomeDocAccessFields_skills_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt = {
  __typename?: 'HomeDocAccessFields_updatedAt';
  create?: Maybe<HomeDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<HomeDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<HomeDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<HomeDocAccessFields_UpdatedAt_Update>;
};

export type HomeDocAccessFields_UpdatedAt_Create = {
  __typename?: 'HomeDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HomeDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HomeDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HomeDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo = {
  __typename?: 'HomeDocAccessFields_whatIDo';
  create?: Maybe<HomeDocAccessFields_WhatIDo_Create>;
  delete?: Maybe<HomeDocAccessFields_WhatIDo_Delete>;
  fields?: Maybe<HomeDocAccessFields_WhatIDo_Fields>;
  read?: Maybe<HomeDocAccessFields_WhatIDo_Read>;
  update?: Maybe<HomeDocAccessFields_WhatIDo_Update>;
};

export type HomeDocAccessFields_WhatIDo_Create = {
  __typename?: 'HomeDocAccessFields_whatIDo_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Delete = {
  __typename?: 'HomeDocAccessFields_whatIDo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Fields = {
  __typename?: 'HomeDocAccessFields_whatIDo_Fields';
  sections?: Maybe<HomeDocAccessFields_WhatIDo_Sections>;
  title?: Maybe<HomeDocAccessFields_WhatIDo_Title>;
};

export type HomeDocAccessFields_WhatIDo_Read = {
  __typename?: 'HomeDocAccessFields_whatIDo_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Update = {
  __typename?: 'HomeDocAccessFields_whatIDo_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections';
  create?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Create>;
  delete?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Delete>;
  fields?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Fields>;
  read?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Read>;
  update?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Update>;
};

export type HomeDocAccessFields_WhatIDo_Sections_Create = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Delete = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Fields = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_Fields';
  description?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Description>;
  icon?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Icon>;
  id?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Id>;
  title?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Title>;
};

export type HomeDocAccessFields_WhatIDo_Sections_Read = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Update = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Description = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_description';
  create?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Description_Create>;
  delete?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Description_Delete>;
  read?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Description_Read>;
  update?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Description_Update>;
};

export type HomeDocAccessFields_WhatIDo_Sections_Description_Create = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Description_Delete = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Description_Read = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Description_Update = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Icon = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_icon';
  create?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Icon_Create>;
  delete?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Icon_Delete>;
  read?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Icon_Read>;
  update?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Icon_Update>;
};

export type HomeDocAccessFields_WhatIDo_Sections_Icon_Create = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Icon_Delete = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Icon_Read = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Icon_Update = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Id = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_id';
  create?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Id_Create>;
  delete?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Id_Delete>;
  read?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Id_Read>;
  update?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Id_Update>;
};

export type HomeDocAccessFields_WhatIDo_Sections_Id_Create = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Id_Delete = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Id_Read = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Id_Update = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Title = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_title';
  create?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Title_Create>;
  delete?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Title_Delete>;
  read?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Title_Read>;
  update?: Maybe<HomeDocAccessFields_WhatIDo_Sections_Title_Update>;
};

export type HomeDocAccessFields_WhatIDo_Sections_Title_Create = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Title_Delete = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Title_Read = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Sections_Title_Update = {
  __typename?: 'HomeDocAccessFields_whatIDo_sections_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Title = {
  __typename?: 'HomeDocAccessFields_whatIDo_title';
  create?: Maybe<HomeDocAccessFields_WhatIDo_Title_Create>;
  delete?: Maybe<HomeDocAccessFields_WhatIDo_Title_Delete>;
  read?: Maybe<HomeDocAccessFields_WhatIDo_Title_Read>;
  update?: Maybe<HomeDocAccessFields_WhatIDo_Title_Update>;
};

export type HomeDocAccessFields_WhatIDo_Title_Create = {
  __typename?: 'HomeDocAccessFields_whatIDo_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Title_Delete = {
  __typename?: 'HomeDocAccessFields_whatIDo_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Title_Read = {
  __typename?: 'HomeDocAccessFields_whatIDo_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_WhatIDo_Title_Update = {
  __typename?: 'HomeDocAccessFields_whatIDo_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields = {
  __typename?: 'HomeFields';
  createdAt?: Maybe<HomeFields_CreatedAt>;
  skills?: Maybe<HomeFields_Skills>;
  updatedAt?: Maybe<HomeFields_UpdatedAt>;
  whatIDo?: Maybe<HomeFields_WhatIDo>;
};

export type HomeFields_CreatedAt = {
  __typename?: 'HomeFields_createdAt';
  create?: Maybe<HomeFields_CreatedAt_Create>;
  delete?: Maybe<HomeFields_CreatedAt_Delete>;
  read?: Maybe<HomeFields_CreatedAt_Read>;
  update?: Maybe<HomeFields_CreatedAt_Update>;
};

export type HomeFields_CreatedAt_Create = {
  __typename?: 'HomeFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CreatedAt_Delete = {
  __typename?: 'HomeFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CreatedAt_Read = {
  __typename?: 'HomeFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CreatedAt_Update = {
  __typename?: 'HomeFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills = {
  __typename?: 'HomeFields_skills';
  create?: Maybe<HomeFields_Skills_Create>;
  delete?: Maybe<HomeFields_Skills_Delete>;
  fields?: Maybe<HomeFields_Skills_Fields>;
  read?: Maybe<HomeFields_Skills_Read>;
  update?: Maybe<HomeFields_Skills_Update>;
};

export type HomeFields_Skills_Create = {
  __typename?: 'HomeFields_skills_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Delete = {
  __typename?: 'HomeFields_skills_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Fields = {
  __typename?: 'HomeFields_skills_Fields';
  skills?: Maybe<HomeFields_Skills_Skills>;
  title?: Maybe<HomeFields_Skills_Title>;
};

export type HomeFields_Skills_Read = {
  __typename?: 'HomeFields_skills_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Update = {
  __typename?: 'HomeFields_skills_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills = {
  __typename?: 'HomeFields_skills_skills';
  create?: Maybe<HomeFields_Skills_Skills_Create>;
  delete?: Maybe<HomeFields_Skills_Skills_Delete>;
  fields?: Maybe<HomeFields_Skills_Skills_Fields>;
  read?: Maybe<HomeFields_Skills_Skills_Read>;
  update?: Maybe<HomeFields_Skills_Skills_Update>;
};

export type HomeFields_Skills_Skills_Create = {
  __typename?: 'HomeFields_skills_skills_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Delete = {
  __typename?: 'HomeFields_skills_skills_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Fields = {
  __typename?: 'HomeFields_skills_skills_Fields';
  icon?: Maybe<HomeFields_Skills_Skills_Icon>;
  id?: Maybe<HomeFields_Skills_Skills_Id>;
  name?: Maybe<HomeFields_Skills_Skills_Name>;
  proficiency?: Maybe<HomeFields_Skills_Skills_Proficiency>;
};

export type HomeFields_Skills_Skills_Read = {
  __typename?: 'HomeFields_skills_skills_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Update = {
  __typename?: 'HomeFields_skills_skills_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Icon = {
  __typename?: 'HomeFields_skills_skills_icon';
  create?: Maybe<HomeFields_Skills_Skills_Icon_Create>;
  delete?: Maybe<HomeFields_Skills_Skills_Icon_Delete>;
  read?: Maybe<HomeFields_Skills_Skills_Icon_Read>;
  update?: Maybe<HomeFields_Skills_Skills_Icon_Update>;
};

export type HomeFields_Skills_Skills_Icon_Create = {
  __typename?: 'HomeFields_skills_skills_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Icon_Delete = {
  __typename?: 'HomeFields_skills_skills_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Icon_Read = {
  __typename?: 'HomeFields_skills_skills_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Icon_Update = {
  __typename?: 'HomeFields_skills_skills_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Id = {
  __typename?: 'HomeFields_skills_skills_id';
  create?: Maybe<HomeFields_Skills_Skills_Id_Create>;
  delete?: Maybe<HomeFields_Skills_Skills_Id_Delete>;
  read?: Maybe<HomeFields_Skills_Skills_Id_Read>;
  update?: Maybe<HomeFields_Skills_Skills_Id_Update>;
};

export type HomeFields_Skills_Skills_Id_Create = {
  __typename?: 'HomeFields_skills_skills_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Id_Delete = {
  __typename?: 'HomeFields_skills_skills_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Id_Read = {
  __typename?: 'HomeFields_skills_skills_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Id_Update = {
  __typename?: 'HomeFields_skills_skills_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Name = {
  __typename?: 'HomeFields_skills_skills_name';
  create?: Maybe<HomeFields_Skills_Skills_Name_Create>;
  delete?: Maybe<HomeFields_Skills_Skills_Name_Delete>;
  read?: Maybe<HomeFields_Skills_Skills_Name_Read>;
  update?: Maybe<HomeFields_Skills_Skills_Name_Update>;
};

export type HomeFields_Skills_Skills_Name_Create = {
  __typename?: 'HomeFields_skills_skills_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Name_Delete = {
  __typename?: 'HomeFields_skills_skills_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Name_Read = {
  __typename?: 'HomeFields_skills_skills_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Name_Update = {
  __typename?: 'HomeFields_skills_skills_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Proficiency = {
  __typename?: 'HomeFields_skills_skills_proficiency';
  create?: Maybe<HomeFields_Skills_Skills_Proficiency_Create>;
  delete?: Maybe<HomeFields_Skills_Skills_Proficiency_Delete>;
  read?: Maybe<HomeFields_Skills_Skills_Proficiency_Read>;
  update?: Maybe<HomeFields_Skills_Skills_Proficiency_Update>;
};

export type HomeFields_Skills_Skills_Proficiency_Create = {
  __typename?: 'HomeFields_skills_skills_proficiency_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Proficiency_Delete = {
  __typename?: 'HomeFields_skills_skills_proficiency_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Proficiency_Read = {
  __typename?: 'HomeFields_skills_skills_proficiency_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Skills_Proficiency_Update = {
  __typename?: 'HomeFields_skills_skills_proficiency_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Title = {
  __typename?: 'HomeFields_skills_title';
  create?: Maybe<HomeFields_Skills_Title_Create>;
  delete?: Maybe<HomeFields_Skills_Title_Delete>;
  read?: Maybe<HomeFields_Skills_Title_Read>;
  update?: Maybe<HomeFields_Skills_Title_Update>;
};

export type HomeFields_Skills_Title_Create = {
  __typename?: 'HomeFields_skills_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Title_Delete = {
  __typename?: 'HomeFields_skills_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Title_Read = {
  __typename?: 'HomeFields_skills_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Skills_Title_Update = {
  __typename?: 'HomeFields_skills_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt = {
  __typename?: 'HomeFields_updatedAt';
  create?: Maybe<HomeFields_UpdatedAt_Create>;
  delete?: Maybe<HomeFields_UpdatedAt_Delete>;
  read?: Maybe<HomeFields_UpdatedAt_Read>;
  update?: Maybe<HomeFields_UpdatedAt_Update>;
};

export type HomeFields_UpdatedAt_Create = {
  __typename?: 'HomeFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt_Delete = {
  __typename?: 'HomeFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt_Read = {
  __typename?: 'HomeFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt_Update = {
  __typename?: 'HomeFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo = {
  __typename?: 'HomeFields_whatIDo';
  create?: Maybe<HomeFields_WhatIDo_Create>;
  delete?: Maybe<HomeFields_WhatIDo_Delete>;
  fields?: Maybe<HomeFields_WhatIDo_Fields>;
  read?: Maybe<HomeFields_WhatIDo_Read>;
  update?: Maybe<HomeFields_WhatIDo_Update>;
};

export type HomeFields_WhatIDo_Create = {
  __typename?: 'HomeFields_whatIDo_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Delete = {
  __typename?: 'HomeFields_whatIDo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Fields = {
  __typename?: 'HomeFields_whatIDo_Fields';
  sections?: Maybe<HomeFields_WhatIDo_Sections>;
  title?: Maybe<HomeFields_WhatIDo_Title>;
};

export type HomeFields_WhatIDo_Read = {
  __typename?: 'HomeFields_whatIDo_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Update = {
  __typename?: 'HomeFields_whatIDo_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections = {
  __typename?: 'HomeFields_whatIDo_sections';
  create?: Maybe<HomeFields_WhatIDo_Sections_Create>;
  delete?: Maybe<HomeFields_WhatIDo_Sections_Delete>;
  fields?: Maybe<HomeFields_WhatIDo_Sections_Fields>;
  read?: Maybe<HomeFields_WhatIDo_Sections_Read>;
  update?: Maybe<HomeFields_WhatIDo_Sections_Update>;
};

export type HomeFields_WhatIDo_Sections_Create = {
  __typename?: 'HomeFields_whatIDo_sections_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Delete = {
  __typename?: 'HomeFields_whatIDo_sections_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Fields = {
  __typename?: 'HomeFields_whatIDo_sections_Fields';
  description?: Maybe<HomeFields_WhatIDo_Sections_Description>;
  icon?: Maybe<HomeFields_WhatIDo_Sections_Icon>;
  id?: Maybe<HomeFields_WhatIDo_Sections_Id>;
  title?: Maybe<HomeFields_WhatIDo_Sections_Title>;
};

export type HomeFields_WhatIDo_Sections_Read = {
  __typename?: 'HomeFields_whatIDo_sections_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Update = {
  __typename?: 'HomeFields_whatIDo_sections_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Description = {
  __typename?: 'HomeFields_whatIDo_sections_description';
  create?: Maybe<HomeFields_WhatIDo_Sections_Description_Create>;
  delete?: Maybe<HomeFields_WhatIDo_Sections_Description_Delete>;
  read?: Maybe<HomeFields_WhatIDo_Sections_Description_Read>;
  update?: Maybe<HomeFields_WhatIDo_Sections_Description_Update>;
};

export type HomeFields_WhatIDo_Sections_Description_Create = {
  __typename?: 'HomeFields_whatIDo_sections_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Description_Delete = {
  __typename?: 'HomeFields_whatIDo_sections_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Description_Read = {
  __typename?: 'HomeFields_whatIDo_sections_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Description_Update = {
  __typename?: 'HomeFields_whatIDo_sections_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Icon = {
  __typename?: 'HomeFields_whatIDo_sections_icon';
  create?: Maybe<HomeFields_WhatIDo_Sections_Icon_Create>;
  delete?: Maybe<HomeFields_WhatIDo_Sections_Icon_Delete>;
  read?: Maybe<HomeFields_WhatIDo_Sections_Icon_Read>;
  update?: Maybe<HomeFields_WhatIDo_Sections_Icon_Update>;
};

export type HomeFields_WhatIDo_Sections_Icon_Create = {
  __typename?: 'HomeFields_whatIDo_sections_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Icon_Delete = {
  __typename?: 'HomeFields_whatIDo_sections_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Icon_Read = {
  __typename?: 'HomeFields_whatIDo_sections_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Icon_Update = {
  __typename?: 'HomeFields_whatIDo_sections_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Id = {
  __typename?: 'HomeFields_whatIDo_sections_id';
  create?: Maybe<HomeFields_WhatIDo_Sections_Id_Create>;
  delete?: Maybe<HomeFields_WhatIDo_Sections_Id_Delete>;
  read?: Maybe<HomeFields_WhatIDo_Sections_Id_Read>;
  update?: Maybe<HomeFields_WhatIDo_Sections_Id_Update>;
};

export type HomeFields_WhatIDo_Sections_Id_Create = {
  __typename?: 'HomeFields_whatIDo_sections_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Id_Delete = {
  __typename?: 'HomeFields_whatIDo_sections_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Id_Read = {
  __typename?: 'HomeFields_whatIDo_sections_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Id_Update = {
  __typename?: 'HomeFields_whatIDo_sections_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Title = {
  __typename?: 'HomeFields_whatIDo_sections_title';
  create?: Maybe<HomeFields_WhatIDo_Sections_Title_Create>;
  delete?: Maybe<HomeFields_WhatIDo_Sections_Title_Delete>;
  read?: Maybe<HomeFields_WhatIDo_Sections_Title_Read>;
  update?: Maybe<HomeFields_WhatIDo_Sections_Title_Update>;
};

export type HomeFields_WhatIDo_Sections_Title_Create = {
  __typename?: 'HomeFields_whatIDo_sections_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Title_Delete = {
  __typename?: 'HomeFields_whatIDo_sections_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Title_Read = {
  __typename?: 'HomeFields_whatIDo_sections_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Sections_Title_Update = {
  __typename?: 'HomeFields_whatIDo_sections_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Title = {
  __typename?: 'HomeFields_whatIDo_title';
  create?: Maybe<HomeFields_WhatIDo_Title_Create>;
  delete?: Maybe<HomeFields_WhatIDo_Title_Delete>;
  read?: Maybe<HomeFields_WhatIDo_Title_Read>;
  update?: Maybe<HomeFields_WhatIDo_Title_Update>;
};

export type HomeFields_WhatIDo_Title_Create = {
  __typename?: 'HomeFields_whatIDo_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Title_Delete = {
  __typename?: 'HomeFields_whatIDo_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Title_Read = {
  __typename?: 'HomeFields_whatIDo_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_WhatIDo_Title_Update = {
  __typename?: 'HomeFields_whatIDo_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeReadAccess = {
  __typename?: 'HomeReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeReadDocAccess = {
  __typename?: 'HomeReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeUpdateAccess = {
  __typename?: 'HomeUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeUpdateDocAccess = {
  __typename?: 'HomeUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Home_Skills = {
  __typename?: 'Home_Skills';
  skills: Array<Home_Skills_Skills>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Home_Skills_Skills = {
  __typename?: 'Home_Skills_Skills';
  icon: Home_Skills_Skills_Icon;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  proficiency: Home_Skills_Skills_Proficiency;
};

export enum Home_Skills_Skills_Icon {
  Angular = 'angular',
  Api = 'api',
  Astro = 'astro',
  Code = 'code',
  Computer = 'computer',
  Construction = 'construction',
  Docker = 'docker',
  Gcp = 'gcp',
  Github = 'github',
  Go = 'go',
  Java = 'java',
  Javascript = 'javascript',
  LinkedIn = 'linkedIn',
  Mail = 'mail',
  Map = 'map',
  Nextjs = 'nextjs',
  Nodejs = 'nodejs',
  Php = 'php',
  React = 'react',
  Ruby = 'ruby',
  Terraform = 'terraform',
  Twitter = 'twitter',
  Typescript = 'typescript',
  Vue = 'vue'
}

export enum Home_Skills_Skills_Icon_MutationInput {
  Angular = 'angular',
  Api = 'api',
  Astro = 'astro',
  Code = 'code',
  Computer = 'computer',
  Construction = 'construction',
  Docker = 'docker',
  Gcp = 'gcp',
  Github = 'github',
  Go = 'go',
  Java = 'java',
  Javascript = 'javascript',
  LinkedIn = 'linkedIn',
  Mail = 'mail',
  Map = 'map',
  Nextjs = 'nextjs',
  Nodejs = 'nodejs',
  Php = 'php',
  React = 'react',
  Ruby = 'ruby',
  Terraform = 'terraform',
  Twitter = 'twitter',
  Typescript = 'typescript',
  Vue = 'vue'
}

export enum Home_Skills_Skills_Proficiency {
  '8_333333' = '_8_333333',
  '16_666667' = '_16_666667',
  '20' = '_20',
  '25' = '_25',
  '33_333333' = '_33_333333',
  '40' = '_40',
  '41_666667' = '_41_666667',
  '50' = '_50',
  '58_333333' = '_58_333333',
  '60' = '_60',
  '66_666667' = '_66_666667',
  '75' = '_75',
  '80' = '_80',
  '83_333333' = '_83_333333',
  '91_666667' = '_91_666667',
  '100' = '_100'
}

export enum Home_Skills_Skills_Proficiency_MutationInput {
  '8_333333' = '_8_333333',
  '16_666667' = '_16_666667',
  '20' = '_20',
  '25' = '_25',
  '33_333333' = '_33_333333',
  '40' = '_40',
  '41_666667' = '_41_666667',
  '50' = '_50',
  '58_333333' = '_58_333333',
  '60' = '_60',
  '66_666667' = '_66_666667',
  '75' = '_75',
  '80' = '_80',
  '83_333333' = '_83_333333',
  '91_666667' = '_91_666667',
  '100' = '_100'
}

export type Home_WhatIDo = {
  __typename?: 'Home_WhatIDo';
  sections: Array<Home_WhatIDo_Sections>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Home_WhatIDo_Sections = {
  __typename?: 'Home_WhatIDo_Sections';
  description: Scalars['String']['output'];
  icon: Home_WhatIDo_Sections_Icon;
  id?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export enum Home_WhatIDo_Sections_Icon {
  Angular = 'angular',
  Api = 'api',
  Astro = 'astro',
  Code = 'code',
  Computer = 'computer',
  Construction = 'construction',
  Docker = 'docker',
  Gcp = 'gcp',
  Github = 'github',
  Go = 'go',
  Java = 'java',
  Javascript = 'javascript',
  LinkedIn = 'linkedIn',
  Mail = 'mail',
  Map = 'map',
  Nextjs = 'nextjs',
  Nodejs = 'nodejs',
  Php = 'php',
  React = 'react',
  Ruby = 'ruby',
  Terraform = 'terraform',
  Twitter = 'twitter',
  Typescript = 'typescript',
  Vue = 'vue'
}

export enum Home_WhatIDo_Sections_Icon_MutationInput {
  Angular = 'angular',
  Api = 'api',
  Astro = 'astro',
  Code = 'code',
  Computer = 'computer',
  Construction = 'construction',
  Docker = 'docker',
  Gcp = 'gcp',
  Github = 'github',
  Go = 'go',
  Java = 'java',
  Javascript = 'javascript',
  LinkedIn = 'linkedIn',
  Mail = 'mail',
  Map = 'map',
  Nextjs = 'nextjs',
  Nodejs = 'nodejs',
  Php = 'php',
  React = 'react',
  Ruby = 'ruby',
  Terraform = 'terraform',
  Twitter = 'twitter',
  Typescript = 'typescript',
  Vue = 'vue'
}

export type Machine = {
  __typename?: 'Machine';
  apiKey?: Maybe<Scalars['String']['output']>;
  apiKeyIndex?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  enableAPIKey?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Machine_ApiKey_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Machine_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Machine_Description_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Machine_EnableApiKey_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Machine_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Machine_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Machine_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Machine_Where = {
  AND?: InputMaybe<Array<InputMaybe<Machine_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Machine_Where_Or>>>;
  apiKey?: InputMaybe<Machine_ApiKey_Operator>;
  createdAt?: InputMaybe<Machine_CreatedAt_Operator>;
  description?: InputMaybe<Machine_Description_Operator>;
  enableAPIKey?: InputMaybe<Machine_EnableApiKey_Operator>;
  id?: InputMaybe<Machine_Id_Operator>;
  name?: InputMaybe<Machine_Name_Operator>;
  updatedAt?: InputMaybe<Machine_UpdatedAt_Operator>;
};

export type Machine_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Machine_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Machine_Where_Or>>>;
  apiKey?: InputMaybe<Machine_ApiKey_Operator>;
  createdAt?: InputMaybe<Machine_CreatedAt_Operator>;
  description?: InputMaybe<Machine_Description_Operator>;
  enableAPIKey?: InputMaybe<Machine_EnableApiKey_Operator>;
  id?: InputMaybe<Machine_Id_Operator>;
  name?: InputMaybe<Machine_Name_Operator>;
  updatedAt?: InputMaybe<Machine_UpdatedAt_Operator>;
};

export type Machine_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Machine_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Machine_Where_Or>>>;
  apiKey?: InputMaybe<Machine_ApiKey_Operator>;
  createdAt?: InputMaybe<Machine_CreatedAt_Operator>;
  description?: InputMaybe<Machine_Description_Operator>;
  enableAPIKey?: InputMaybe<Machine_EnableApiKey_Operator>;
  id?: InputMaybe<Machine_Id_Operator>;
  name?: InputMaybe<Machine_Name_Operator>;
  updatedAt?: InputMaybe<Machine_UpdatedAt_Operator>;
};

export type Machines = {
  __typename?: 'Machines';
  docs?: Maybe<Array<Maybe<Machine>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type MachinesCreateAccess = {
  __typename?: 'MachinesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MachinesCreateDocAccess = {
  __typename?: 'MachinesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MachinesDeleteAccess = {
  __typename?: 'MachinesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MachinesDeleteDocAccess = {
  __typename?: 'MachinesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MachinesDocAccessFields = {
  __typename?: 'MachinesDocAccessFields';
  apiKey?: Maybe<MachinesDocAccessFields_ApiKey>;
  createdAt?: Maybe<MachinesDocAccessFields_CreatedAt>;
  description?: Maybe<MachinesDocAccessFields_Description>;
  enableAPIKey?: Maybe<MachinesDocAccessFields_EnableApiKey>;
  name?: Maybe<MachinesDocAccessFields_Name>;
  updatedAt?: Maybe<MachinesDocAccessFields_UpdatedAt>;
};

export type MachinesDocAccessFields_ApiKey = {
  __typename?: 'MachinesDocAccessFields_apiKey';
  create?: Maybe<MachinesDocAccessFields_ApiKey_Create>;
  delete?: Maybe<MachinesDocAccessFields_ApiKey_Delete>;
  read?: Maybe<MachinesDocAccessFields_ApiKey_Read>;
  update?: Maybe<MachinesDocAccessFields_ApiKey_Update>;
};

export type MachinesDocAccessFields_ApiKey_Create = {
  __typename?: 'MachinesDocAccessFields_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_ApiKey_Delete = {
  __typename?: 'MachinesDocAccessFields_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_ApiKey_Read = {
  __typename?: 'MachinesDocAccessFields_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_ApiKey_Update = {
  __typename?: 'MachinesDocAccessFields_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_CreatedAt = {
  __typename?: 'MachinesDocAccessFields_createdAt';
  create?: Maybe<MachinesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MachinesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MachinesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MachinesDocAccessFields_CreatedAt_Update>;
};

export type MachinesDocAccessFields_CreatedAt_Create = {
  __typename?: 'MachinesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MachinesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_CreatedAt_Read = {
  __typename?: 'MachinesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_CreatedAt_Update = {
  __typename?: 'MachinesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_Description = {
  __typename?: 'MachinesDocAccessFields_description';
  create?: Maybe<MachinesDocAccessFields_Description_Create>;
  delete?: Maybe<MachinesDocAccessFields_Description_Delete>;
  read?: Maybe<MachinesDocAccessFields_Description_Read>;
  update?: Maybe<MachinesDocAccessFields_Description_Update>;
};

export type MachinesDocAccessFields_Description_Create = {
  __typename?: 'MachinesDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_Description_Delete = {
  __typename?: 'MachinesDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_Description_Read = {
  __typename?: 'MachinesDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_Description_Update = {
  __typename?: 'MachinesDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_EnableApiKey = {
  __typename?: 'MachinesDocAccessFields_enableAPIKey';
  create?: Maybe<MachinesDocAccessFields_EnableApiKey_Create>;
  delete?: Maybe<MachinesDocAccessFields_EnableApiKey_Delete>;
  read?: Maybe<MachinesDocAccessFields_EnableApiKey_Read>;
  update?: Maybe<MachinesDocAccessFields_EnableApiKey_Update>;
};

export type MachinesDocAccessFields_EnableApiKey_Create = {
  __typename?: 'MachinesDocAccessFields_enableAPIKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_EnableApiKey_Delete = {
  __typename?: 'MachinesDocAccessFields_enableAPIKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_EnableApiKey_Read = {
  __typename?: 'MachinesDocAccessFields_enableAPIKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_EnableApiKey_Update = {
  __typename?: 'MachinesDocAccessFields_enableAPIKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_Name = {
  __typename?: 'MachinesDocAccessFields_name';
  create?: Maybe<MachinesDocAccessFields_Name_Create>;
  delete?: Maybe<MachinesDocAccessFields_Name_Delete>;
  read?: Maybe<MachinesDocAccessFields_Name_Read>;
  update?: Maybe<MachinesDocAccessFields_Name_Update>;
};

export type MachinesDocAccessFields_Name_Create = {
  __typename?: 'MachinesDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_Name_Delete = {
  __typename?: 'MachinesDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_Name_Read = {
  __typename?: 'MachinesDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_Name_Update = {
  __typename?: 'MachinesDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_UpdatedAt = {
  __typename?: 'MachinesDocAccessFields_updatedAt';
  create?: Maybe<MachinesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MachinesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MachinesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MachinesDocAccessFields_UpdatedAt_Update>;
};

export type MachinesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MachinesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MachinesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MachinesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MachinesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields = {
  __typename?: 'MachinesFields';
  apiKey?: Maybe<MachinesFields_ApiKey>;
  createdAt?: Maybe<MachinesFields_CreatedAt>;
  description?: Maybe<MachinesFields_Description>;
  enableAPIKey?: Maybe<MachinesFields_EnableApiKey>;
  name?: Maybe<MachinesFields_Name>;
  updatedAt?: Maybe<MachinesFields_UpdatedAt>;
};

export type MachinesFields_ApiKey = {
  __typename?: 'MachinesFields_apiKey';
  create?: Maybe<MachinesFields_ApiKey_Create>;
  delete?: Maybe<MachinesFields_ApiKey_Delete>;
  read?: Maybe<MachinesFields_ApiKey_Read>;
  update?: Maybe<MachinesFields_ApiKey_Update>;
};

export type MachinesFields_ApiKey_Create = {
  __typename?: 'MachinesFields_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_ApiKey_Delete = {
  __typename?: 'MachinesFields_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_ApiKey_Read = {
  __typename?: 'MachinesFields_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_ApiKey_Update = {
  __typename?: 'MachinesFields_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_CreatedAt = {
  __typename?: 'MachinesFields_createdAt';
  create?: Maybe<MachinesFields_CreatedAt_Create>;
  delete?: Maybe<MachinesFields_CreatedAt_Delete>;
  read?: Maybe<MachinesFields_CreatedAt_Read>;
  update?: Maybe<MachinesFields_CreatedAt_Update>;
};

export type MachinesFields_CreatedAt_Create = {
  __typename?: 'MachinesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_CreatedAt_Delete = {
  __typename?: 'MachinesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_CreatedAt_Read = {
  __typename?: 'MachinesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_CreatedAt_Update = {
  __typename?: 'MachinesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_Description = {
  __typename?: 'MachinesFields_description';
  create?: Maybe<MachinesFields_Description_Create>;
  delete?: Maybe<MachinesFields_Description_Delete>;
  read?: Maybe<MachinesFields_Description_Read>;
  update?: Maybe<MachinesFields_Description_Update>;
};

export type MachinesFields_Description_Create = {
  __typename?: 'MachinesFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_Description_Delete = {
  __typename?: 'MachinesFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_Description_Read = {
  __typename?: 'MachinesFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_Description_Update = {
  __typename?: 'MachinesFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_EnableApiKey = {
  __typename?: 'MachinesFields_enableAPIKey';
  create?: Maybe<MachinesFields_EnableApiKey_Create>;
  delete?: Maybe<MachinesFields_EnableApiKey_Delete>;
  read?: Maybe<MachinesFields_EnableApiKey_Read>;
  update?: Maybe<MachinesFields_EnableApiKey_Update>;
};

export type MachinesFields_EnableApiKey_Create = {
  __typename?: 'MachinesFields_enableAPIKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_EnableApiKey_Delete = {
  __typename?: 'MachinesFields_enableAPIKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_EnableApiKey_Read = {
  __typename?: 'MachinesFields_enableAPIKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_EnableApiKey_Update = {
  __typename?: 'MachinesFields_enableAPIKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_Name = {
  __typename?: 'MachinesFields_name';
  create?: Maybe<MachinesFields_Name_Create>;
  delete?: Maybe<MachinesFields_Name_Delete>;
  read?: Maybe<MachinesFields_Name_Read>;
  update?: Maybe<MachinesFields_Name_Update>;
};

export type MachinesFields_Name_Create = {
  __typename?: 'MachinesFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_Name_Delete = {
  __typename?: 'MachinesFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_Name_Read = {
  __typename?: 'MachinesFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_Name_Update = {
  __typename?: 'MachinesFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_UpdatedAt = {
  __typename?: 'MachinesFields_updatedAt';
  create?: Maybe<MachinesFields_UpdatedAt_Create>;
  delete?: Maybe<MachinesFields_UpdatedAt_Delete>;
  read?: Maybe<MachinesFields_UpdatedAt_Read>;
  update?: Maybe<MachinesFields_UpdatedAt_Update>;
};

export type MachinesFields_UpdatedAt_Create = {
  __typename?: 'MachinesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_UpdatedAt_Delete = {
  __typename?: 'MachinesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_UpdatedAt_Read = {
  __typename?: 'MachinesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MachinesFields_UpdatedAt_Update = {
  __typename?: 'MachinesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MachinesReadAccess = {
  __typename?: 'MachinesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MachinesReadDocAccess = {
  __typename?: 'MachinesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MachinesUnlockAccess = {
  __typename?: 'MachinesUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MachinesUnlockDocAccess = {
  __typename?: 'MachinesUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MachinesUpdateAccess = {
  __typename?: 'MachinesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MachinesUpdateDocAccess = {
  __typename?: 'MachinesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHeadshot?: Maybe<Headshot>;
  createMachine?: Maybe<Machine>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createUser?: Maybe<User>;
  deleteHeadshot?: Maybe<Headshot>;
  deleteMachine?: Maybe<Machine>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutMachine?: Maybe<Scalars['String']['output']>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenMachine?: Maybe<MachinesRefreshedMachine>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateContact?: Maybe<Contact>;
  updateHeadshot?: Maybe<Headshot>;
  updateHome?: Maybe<Home>;
  updateMachine?: Maybe<Machine>;
  updateNav?: Maybe<Nav>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateUser?: Maybe<User>;
  updateUserInfo?: Maybe<UserInfo>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateHeadshotArgs = {
  data: MutationHeadshotInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMachineArgs = {
  data: MutationMachineInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteHeadshotArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMachineArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRefreshTokenMachineArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateContactArgs = {
  data: MutationContactInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateHeadshotArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationHeadshotUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateHomeArgs = {
  data: MutationHomeInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateMachineArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMachineUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateNavArgs = {
  data: MutationNavInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateUserInfoArgs = {
  data: MutationUserInfoInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Nav = {
  __typename?: 'Nav';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  links: Array<Nav_Links>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NavDocAccessFields = {
  __typename?: 'NavDocAccessFields';
  createdAt?: Maybe<NavDocAccessFields_CreatedAt>;
  links?: Maybe<NavDocAccessFields_Links>;
  updatedAt?: Maybe<NavDocAccessFields_UpdatedAt>;
};

export type NavDocAccessFields_CreatedAt = {
  __typename?: 'NavDocAccessFields_createdAt';
  create?: Maybe<NavDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<NavDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<NavDocAccessFields_CreatedAt_Read>;
  update?: Maybe<NavDocAccessFields_CreatedAt_Update>;
};

export type NavDocAccessFields_CreatedAt_Create = {
  __typename?: 'NavDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_CreatedAt_Delete = {
  __typename?: 'NavDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_CreatedAt_Read = {
  __typename?: 'NavDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_CreatedAt_Update = {
  __typename?: 'NavDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links = {
  __typename?: 'NavDocAccessFields_links';
  create?: Maybe<NavDocAccessFields_Links_Create>;
  delete?: Maybe<NavDocAccessFields_Links_Delete>;
  fields?: Maybe<NavDocAccessFields_Links_Fields>;
  read?: Maybe<NavDocAccessFields_Links_Read>;
  update?: Maybe<NavDocAccessFields_Links_Update>;
};

export type NavDocAccessFields_Links_Create = {
  __typename?: 'NavDocAccessFields_links_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Delete = {
  __typename?: 'NavDocAccessFields_links_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Fields = {
  __typename?: 'NavDocAccessFields_links_Fields';
  id?: Maybe<NavDocAccessFields_Links_Id>;
  label?: Maybe<NavDocAccessFields_Links_Label>;
  link?: Maybe<NavDocAccessFields_Links_Link>;
};

export type NavDocAccessFields_Links_Read = {
  __typename?: 'NavDocAccessFields_links_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Update = {
  __typename?: 'NavDocAccessFields_links_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Id = {
  __typename?: 'NavDocAccessFields_links_id';
  create?: Maybe<NavDocAccessFields_Links_Id_Create>;
  delete?: Maybe<NavDocAccessFields_Links_Id_Delete>;
  read?: Maybe<NavDocAccessFields_Links_Id_Read>;
  update?: Maybe<NavDocAccessFields_Links_Id_Update>;
};

export type NavDocAccessFields_Links_Id_Create = {
  __typename?: 'NavDocAccessFields_links_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Id_Delete = {
  __typename?: 'NavDocAccessFields_links_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Id_Read = {
  __typename?: 'NavDocAccessFields_links_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Id_Update = {
  __typename?: 'NavDocAccessFields_links_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Label = {
  __typename?: 'NavDocAccessFields_links_label';
  create?: Maybe<NavDocAccessFields_Links_Label_Create>;
  delete?: Maybe<NavDocAccessFields_Links_Label_Delete>;
  read?: Maybe<NavDocAccessFields_Links_Label_Read>;
  update?: Maybe<NavDocAccessFields_Links_Label_Update>;
};

export type NavDocAccessFields_Links_Label_Create = {
  __typename?: 'NavDocAccessFields_links_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Label_Delete = {
  __typename?: 'NavDocAccessFields_links_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Label_Read = {
  __typename?: 'NavDocAccessFields_links_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Label_Update = {
  __typename?: 'NavDocAccessFields_links_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Link = {
  __typename?: 'NavDocAccessFields_links_link';
  create?: Maybe<NavDocAccessFields_Links_Link_Create>;
  delete?: Maybe<NavDocAccessFields_Links_Link_Delete>;
  read?: Maybe<NavDocAccessFields_Links_Link_Read>;
  update?: Maybe<NavDocAccessFields_Links_Link_Update>;
};

export type NavDocAccessFields_Links_Link_Create = {
  __typename?: 'NavDocAccessFields_links_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Link_Delete = {
  __typename?: 'NavDocAccessFields_links_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Link_Read = {
  __typename?: 'NavDocAccessFields_links_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_Links_Link_Update = {
  __typename?: 'NavDocAccessFields_links_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_UpdatedAt = {
  __typename?: 'NavDocAccessFields_updatedAt';
  create?: Maybe<NavDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<NavDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<NavDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<NavDocAccessFields_UpdatedAt_Update>;
};

export type NavDocAccessFields_UpdatedAt_Create = {
  __typename?: 'NavDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'NavDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_UpdatedAt_Read = {
  __typename?: 'NavDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_UpdatedAt_Update = {
  __typename?: 'NavDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavFields = {
  __typename?: 'NavFields';
  createdAt?: Maybe<NavFields_CreatedAt>;
  links?: Maybe<NavFields_Links>;
  updatedAt?: Maybe<NavFields_UpdatedAt>;
};

export type NavFields_CreatedAt = {
  __typename?: 'NavFields_createdAt';
  create?: Maybe<NavFields_CreatedAt_Create>;
  delete?: Maybe<NavFields_CreatedAt_Delete>;
  read?: Maybe<NavFields_CreatedAt_Read>;
  update?: Maybe<NavFields_CreatedAt_Update>;
};

export type NavFields_CreatedAt_Create = {
  __typename?: 'NavFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_CreatedAt_Delete = {
  __typename?: 'NavFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_CreatedAt_Read = {
  __typename?: 'NavFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_CreatedAt_Update = {
  __typename?: 'NavFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links = {
  __typename?: 'NavFields_links';
  create?: Maybe<NavFields_Links_Create>;
  delete?: Maybe<NavFields_Links_Delete>;
  fields?: Maybe<NavFields_Links_Fields>;
  read?: Maybe<NavFields_Links_Read>;
  update?: Maybe<NavFields_Links_Update>;
};

export type NavFields_Links_Create = {
  __typename?: 'NavFields_links_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Delete = {
  __typename?: 'NavFields_links_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Fields = {
  __typename?: 'NavFields_links_Fields';
  id?: Maybe<NavFields_Links_Id>;
  label?: Maybe<NavFields_Links_Label>;
  link?: Maybe<NavFields_Links_Link>;
};

export type NavFields_Links_Read = {
  __typename?: 'NavFields_links_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Update = {
  __typename?: 'NavFields_links_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Id = {
  __typename?: 'NavFields_links_id';
  create?: Maybe<NavFields_Links_Id_Create>;
  delete?: Maybe<NavFields_Links_Id_Delete>;
  read?: Maybe<NavFields_Links_Id_Read>;
  update?: Maybe<NavFields_Links_Id_Update>;
};

export type NavFields_Links_Id_Create = {
  __typename?: 'NavFields_links_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Id_Delete = {
  __typename?: 'NavFields_links_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Id_Read = {
  __typename?: 'NavFields_links_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Id_Update = {
  __typename?: 'NavFields_links_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Label = {
  __typename?: 'NavFields_links_label';
  create?: Maybe<NavFields_Links_Label_Create>;
  delete?: Maybe<NavFields_Links_Label_Delete>;
  read?: Maybe<NavFields_Links_Label_Read>;
  update?: Maybe<NavFields_Links_Label_Update>;
};

export type NavFields_Links_Label_Create = {
  __typename?: 'NavFields_links_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Label_Delete = {
  __typename?: 'NavFields_links_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Label_Read = {
  __typename?: 'NavFields_links_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Label_Update = {
  __typename?: 'NavFields_links_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Link = {
  __typename?: 'NavFields_links_link';
  create?: Maybe<NavFields_Links_Link_Create>;
  delete?: Maybe<NavFields_Links_Link_Delete>;
  read?: Maybe<NavFields_Links_Link_Read>;
  update?: Maybe<NavFields_Links_Link_Update>;
};

export type NavFields_Links_Link_Create = {
  __typename?: 'NavFields_links_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Link_Delete = {
  __typename?: 'NavFields_links_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Link_Read = {
  __typename?: 'NavFields_links_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_Links_Link_Update = {
  __typename?: 'NavFields_links_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_UpdatedAt = {
  __typename?: 'NavFields_updatedAt';
  create?: Maybe<NavFields_UpdatedAt_Create>;
  delete?: Maybe<NavFields_UpdatedAt_Delete>;
  read?: Maybe<NavFields_UpdatedAt_Read>;
  update?: Maybe<NavFields_UpdatedAt_Update>;
};

export type NavFields_UpdatedAt_Create = {
  __typename?: 'NavFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_UpdatedAt_Delete = {
  __typename?: 'NavFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_UpdatedAt_Read = {
  __typename?: 'NavFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NavFields_UpdatedAt_Update = {
  __typename?: 'NavFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NavReadAccess = {
  __typename?: 'NavReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NavReadDocAccess = {
  __typename?: 'NavReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NavUpdateAccess = {
  __typename?: 'NavUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NavUpdateDocAccess = {
  __typename?: 'NavUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Nav_Links = {
  __typename?: 'Nav_Links';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Machines = 'machines',
  Users = 'users'
}

export type PayloadPreference_User = Machine | User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Machines = 'machines',
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Machines = 'machines',
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Machines = 'machines',
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Contact?: Maybe<Contact>;
  Headshot?: Maybe<Headshot>;
  Headshots?: Maybe<Headshots>;
  Home?: Maybe<Home>;
  Machine?: Maybe<Machine>;
  Machines?: Maybe<Machines>;
  Nav?: Maybe<Nav>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  User?: Maybe<User>;
  UserInfo?: Maybe<UserInfo>;
  Users?: Maybe<Users>;
  docAccessContact?: Maybe<ContactDocAccess>;
  docAccessHeadshot?: Maybe<HeadshotsDocAccess>;
  docAccessHome?: Maybe<HomeDocAccess>;
  docAccessMachine?: Maybe<MachinesDocAccess>;
  docAccessNav?: Maybe<NavDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  docAccessUserInfo?: Maybe<User_InfoDocAccess>;
  initializedMachine?: Maybe<Scalars['Boolean']['output']>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meMachine?: Maybe<MachinesMe>;
  meUser?: Maybe<UsersMe>;
};


export type QueryContactArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeadshotArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryHeadshotsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Headshot_Where>;
};


export type QueryHomeArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMachineArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryMachinesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Machine_Where>;
};


export type QueryNavArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryUserInfoArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryDocAccessHeadshotArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessMachineArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _verificationToken?: Maybe<Scalars['String']['output']>;
  _verified?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  socials: Array<UserInfo_Socials>;
  suffix?: Maybe<UserInfo_Suffix>;
  titles: Array<UserInfo_Titles>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserInfoDocAccessFields = {
  __typename?: 'UserInfoDocAccessFields';
  createdAt?: Maybe<UserInfoDocAccessFields_CreatedAt>;
  description?: Maybe<UserInfoDocAccessFields_Description>;
  firstName?: Maybe<UserInfoDocAccessFields_FirstName>;
  fullName?: Maybe<UserInfoDocAccessFields_FullName>;
  lastName?: Maybe<UserInfoDocAccessFields_LastName>;
  socials?: Maybe<UserInfoDocAccessFields_Socials>;
  suffix?: Maybe<UserInfoDocAccessFields_Suffix>;
  titles?: Maybe<UserInfoDocAccessFields_Titles>;
  updatedAt?: Maybe<UserInfoDocAccessFields_UpdatedAt>;
};

export type UserInfoDocAccessFields_CreatedAt = {
  __typename?: 'UserInfoDocAccessFields_createdAt';
  create?: Maybe<UserInfoDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UserInfoDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UserInfoDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UserInfoDocAccessFields_CreatedAt_Update>;
};

export type UserInfoDocAccessFields_CreatedAt_Create = {
  __typename?: 'UserInfoDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UserInfoDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_CreatedAt_Read = {
  __typename?: 'UserInfoDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_CreatedAt_Update = {
  __typename?: 'UserInfoDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Description = {
  __typename?: 'UserInfoDocAccessFields_description';
  create?: Maybe<UserInfoDocAccessFields_Description_Create>;
  delete?: Maybe<UserInfoDocAccessFields_Description_Delete>;
  read?: Maybe<UserInfoDocAccessFields_Description_Read>;
  update?: Maybe<UserInfoDocAccessFields_Description_Update>;
};

export type UserInfoDocAccessFields_Description_Create = {
  __typename?: 'UserInfoDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Description_Delete = {
  __typename?: 'UserInfoDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Description_Read = {
  __typename?: 'UserInfoDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Description_Update = {
  __typename?: 'UserInfoDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_FirstName = {
  __typename?: 'UserInfoDocAccessFields_firstName';
  create?: Maybe<UserInfoDocAccessFields_FirstName_Create>;
  delete?: Maybe<UserInfoDocAccessFields_FirstName_Delete>;
  read?: Maybe<UserInfoDocAccessFields_FirstName_Read>;
  update?: Maybe<UserInfoDocAccessFields_FirstName_Update>;
};

export type UserInfoDocAccessFields_FirstName_Create = {
  __typename?: 'UserInfoDocAccessFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_FirstName_Delete = {
  __typename?: 'UserInfoDocAccessFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_FirstName_Read = {
  __typename?: 'UserInfoDocAccessFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_FirstName_Update = {
  __typename?: 'UserInfoDocAccessFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_FullName = {
  __typename?: 'UserInfoDocAccessFields_fullName';
  create?: Maybe<UserInfoDocAccessFields_FullName_Create>;
  delete?: Maybe<UserInfoDocAccessFields_FullName_Delete>;
  read?: Maybe<UserInfoDocAccessFields_FullName_Read>;
  update?: Maybe<UserInfoDocAccessFields_FullName_Update>;
};

export type UserInfoDocAccessFields_FullName_Create = {
  __typename?: 'UserInfoDocAccessFields_fullName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_FullName_Delete = {
  __typename?: 'UserInfoDocAccessFields_fullName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_FullName_Read = {
  __typename?: 'UserInfoDocAccessFields_fullName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_FullName_Update = {
  __typename?: 'UserInfoDocAccessFields_fullName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_LastName = {
  __typename?: 'UserInfoDocAccessFields_lastName';
  create?: Maybe<UserInfoDocAccessFields_LastName_Create>;
  delete?: Maybe<UserInfoDocAccessFields_LastName_Delete>;
  read?: Maybe<UserInfoDocAccessFields_LastName_Read>;
  update?: Maybe<UserInfoDocAccessFields_LastName_Update>;
};

export type UserInfoDocAccessFields_LastName_Create = {
  __typename?: 'UserInfoDocAccessFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_LastName_Delete = {
  __typename?: 'UserInfoDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_LastName_Read = {
  __typename?: 'UserInfoDocAccessFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_LastName_Update = {
  __typename?: 'UserInfoDocAccessFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials = {
  __typename?: 'UserInfoDocAccessFields_socials';
  create?: Maybe<UserInfoDocAccessFields_Socials_Create>;
  delete?: Maybe<UserInfoDocAccessFields_Socials_Delete>;
  fields?: Maybe<UserInfoDocAccessFields_Socials_Fields>;
  read?: Maybe<UserInfoDocAccessFields_Socials_Read>;
  update?: Maybe<UserInfoDocAccessFields_Socials_Update>;
};

export type UserInfoDocAccessFields_Socials_Create = {
  __typename?: 'UserInfoDocAccessFields_socials_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Delete = {
  __typename?: 'UserInfoDocAccessFields_socials_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Fields = {
  __typename?: 'UserInfoDocAccessFields_socials_Fields';
  icon?: Maybe<UserInfoDocAccessFields_Socials_Icon>;
  id?: Maybe<UserInfoDocAccessFields_Socials_Id>;
  label?: Maybe<UserInfoDocAccessFields_Socials_Label>;
  link?: Maybe<UserInfoDocAccessFields_Socials_Link>;
};

export type UserInfoDocAccessFields_Socials_Read = {
  __typename?: 'UserInfoDocAccessFields_socials_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Update = {
  __typename?: 'UserInfoDocAccessFields_socials_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Icon = {
  __typename?: 'UserInfoDocAccessFields_socials_icon';
  create?: Maybe<UserInfoDocAccessFields_Socials_Icon_Create>;
  delete?: Maybe<UserInfoDocAccessFields_Socials_Icon_Delete>;
  read?: Maybe<UserInfoDocAccessFields_Socials_Icon_Read>;
  update?: Maybe<UserInfoDocAccessFields_Socials_Icon_Update>;
};

export type UserInfoDocAccessFields_Socials_Icon_Create = {
  __typename?: 'UserInfoDocAccessFields_socials_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Icon_Delete = {
  __typename?: 'UserInfoDocAccessFields_socials_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Icon_Read = {
  __typename?: 'UserInfoDocAccessFields_socials_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Icon_Update = {
  __typename?: 'UserInfoDocAccessFields_socials_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Id = {
  __typename?: 'UserInfoDocAccessFields_socials_id';
  create?: Maybe<UserInfoDocAccessFields_Socials_Id_Create>;
  delete?: Maybe<UserInfoDocAccessFields_Socials_Id_Delete>;
  read?: Maybe<UserInfoDocAccessFields_Socials_Id_Read>;
  update?: Maybe<UserInfoDocAccessFields_Socials_Id_Update>;
};

export type UserInfoDocAccessFields_Socials_Id_Create = {
  __typename?: 'UserInfoDocAccessFields_socials_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Id_Delete = {
  __typename?: 'UserInfoDocAccessFields_socials_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Id_Read = {
  __typename?: 'UserInfoDocAccessFields_socials_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Id_Update = {
  __typename?: 'UserInfoDocAccessFields_socials_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Label = {
  __typename?: 'UserInfoDocAccessFields_socials_label';
  create?: Maybe<UserInfoDocAccessFields_Socials_Label_Create>;
  delete?: Maybe<UserInfoDocAccessFields_Socials_Label_Delete>;
  read?: Maybe<UserInfoDocAccessFields_Socials_Label_Read>;
  update?: Maybe<UserInfoDocAccessFields_Socials_Label_Update>;
};

export type UserInfoDocAccessFields_Socials_Label_Create = {
  __typename?: 'UserInfoDocAccessFields_socials_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Label_Delete = {
  __typename?: 'UserInfoDocAccessFields_socials_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Label_Read = {
  __typename?: 'UserInfoDocAccessFields_socials_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Label_Update = {
  __typename?: 'UserInfoDocAccessFields_socials_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Link = {
  __typename?: 'UserInfoDocAccessFields_socials_link';
  create?: Maybe<UserInfoDocAccessFields_Socials_Link_Create>;
  delete?: Maybe<UserInfoDocAccessFields_Socials_Link_Delete>;
  read?: Maybe<UserInfoDocAccessFields_Socials_Link_Read>;
  update?: Maybe<UserInfoDocAccessFields_Socials_Link_Update>;
};

export type UserInfoDocAccessFields_Socials_Link_Create = {
  __typename?: 'UserInfoDocAccessFields_socials_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Link_Delete = {
  __typename?: 'UserInfoDocAccessFields_socials_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Link_Read = {
  __typename?: 'UserInfoDocAccessFields_socials_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Socials_Link_Update = {
  __typename?: 'UserInfoDocAccessFields_socials_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Suffix = {
  __typename?: 'UserInfoDocAccessFields_suffix';
  create?: Maybe<UserInfoDocAccessFields_Suffix_Create>;
  delete?: Maybe<UserInfoDocAccessFields_Suffix_Delete>;
  read?: Maybe<UserInfoDocAccessFields_Suffix_Read>;
  update?: Maybe<UserInfoDocAccessFields_Suffix_Update>;
};

export type UserInfoDocAccessFields_Suffix_Create = {
  __typename?: 'UserInfoDocAccessFields_suffix_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Suffix_Delete = {
  __typename?: 'UserInfoDocAccessFields_suffix_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Suffix_Read = {
  __typename?: 'UserInfoDocAccessFields_suffix_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Suffix_Update = {
  __typename?: 'UserInfoDocAccessFields_suffix_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles = {
  __typename?: 'UserInfoDocAccessFields_titles';
  create?: Maybe<UserInfoDocAccessFields_Titles_Create>;
  delete?: Maybe<UserInfoDocAccessFields_Titles_Delete>;
  fields?: Maybe<UserInfoDocAccessFields_Titles_Fields>;
  read?: Maybe<UserInfoDocAccessFields_Titles_Read>;
  update?: Maybe<UserInfoDocAccessFields_Titles_Update>;
};

export type UserInfoDocAccessFields_Titles_Create = {
  __typename?: 'UserInfoDocAccessFields_titles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Delete = {
  __typename?: 'UserInfoDocAccessFields_titles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Fields = {
  __typename?: 'UserInfoDocAccessFields_titles_Fields';
  id?: Maybe<UserInfoDocAccessFields_Titles_Id>;
  title?: Maybe<UserInfoDocAccessFields_Titles_Title>;
};

export type UserInfoDocAccessFields_Titles_Read = {
  __typename?: 'UserInfoDocAccessFields_titles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Update = {
  __typename?: 'UserInfoDocAccessFields_titles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Id = {
  __typename?: 'UserInfoDocAccessFields_titles_id';
  create?: Maybe<UserInfoDocAccessFields_Titles_Id_Create>;
  delete?: Maybe<UserInfoDocAccessFields_Titles_Id_Delete>;
  read?: Maybe<UserInfoDocAccessFields_Titles_Id_Read>;
  update?: Maybe<UserInfoDocAccessFields_Titles_Id_Update>;
};

export type UserInfoDocAccessFields_Titles_Id_Create = {
  __typename?: 'UserInfoDocAccessFields_titles_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Id_Delete = {
  __typename?: 'UserInfoDocAccessFields_titles_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Id_Read = {
  __typename?: 'UserInfoDocAccessFields_titles_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Id_Update = {
  __typename?: 'UserInfoDocAccessFields_titles_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Title = {
  __typename?: 'UserInfoDocAccessFields_titles_title';
  create?: Maybe<UserInfoDocAccessFields_Titles_Title_Create>;
  delete?: Maybe<UserInfoDocAccessFields_Titles_Title_Delete>;
  read?: Maybe<UserInfoDocAccessFields_Titles_Title_Read>;
  update?: Maybe<UserInfoDocAccessFields_Titles_Title_Update>;
};

export type UserInfoDocAccessFields_Titles_Title_Create = {
  __typename?: 'UserInfoDocAccessFields_titles_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Title_Delete = {
  __typename?: 'UserInfoDocAccessFields_titles_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Title_Read = {
  __typename?: 'UserInfoDocAccessFields_titles_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_Titles_Title_Update = {
  __typename?: 'UserInfoDocAccessFields_titles_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_UpdatedAt = {
  __typename?: 'UserInfoDocAccessFields_updatedAt';
  create?: Maybe<UserInfoDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UserInfoDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UserInfoDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UserInfoDocAccessFields_UpdatedAt_Update>;
};

export type UserInfoDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UserInfoDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UserInfoDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UserInfoDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UserInfoDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields = {
  __typename?: 'UserInfoFields';
  createdAt?: Maybe<UserInfoFields_CreatedAt>;
  description?: Maybe<UserInfoFields_Description>;
  firstName?: Maybe<UserInfoFields_FirstName>;
  fullName?: Maybe<UserInfoFields_FullName>;
  lastName?: Maybe<UserInfoFields_LastName>;
  socials?: Maybe<UserInfoFields_Socials>;
  suffix?: Maybe<UserInfoFields_Suffix>;
  titles?: Maybe<UserInfoFields_Titles>;
  updatedAt?: Maybe<UserInfoFields_UpdatedAt>;
};

export type UserInfoFields_CreatedAt = {
  __typename?: 'UserInfoFields_createdAt';
  create?: Maybe<UserInfoFields_CreatedAt_Create>;
  delete?: Maybe<UserInfoFields_CreatedAt_Delete>;
  read?: Maybe<UserInfoFields_CreatedAt_Read>;
  update?: Maybe<UserInfoFields_CreatedAt_Update>;
};

export type UserInfoFields_CreatedAt_Create = {
  __typename?: 'UserInfoFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_CreatedAt_Delete = {
  __typename?: 'UserInfoFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_CreatedAt_Read = {
  __typename?: 'UserInfoFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_CreatedAt_Update = {
  __typename?: 'UserInfoFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Description = {
  __typename?: 'UserInfoFields_description';
  create?: Maybe<UserInfoFields_Description_Create>;
  delete?: Maybe<UserInfoFields_Description_Delete>;
  read?: Maybe<UserInfoFields_Description_Read>;
  update?: Maybe<UserInfoFields_Description_Update>;
};

export type UserInfoFields_Description_Create = {
  __typename?: 'UserInfoFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Description_Delete = {
  __typename?: 'UserInfoFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Description_Read = {
  __typename?: 'UserInfoFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Description_Update = {
  __typename?: 'UserInfoFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_FirstName = {
  __typename?: 'UserInfoFields_firstName';
  create?: Maybe<UserInfoFields_FirstName_Create>;
  delete?: Maybe<UserInfoFields_FirstName_Delete>;
  read?: Maybe<UserInfoFields_FirstName_Read>;
  update?: Maybe<UserInfoFields_FirstName_Update>;
};

export type UserInfoFields_FirstName_Create = {
  __typename?: 'UserInfoFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_FirstName_Delete = {
  __typename?: 'UserInfoFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_FirstName_Read = {
  __typename?: 'UserInfoFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_FirstName_Update = {
  __typename?: 'UserInfoFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_FullName = {
  __typename?: 'UserInfoFields_fullName';
  create?: Maybe<UserInfoFields_FullName_Create>;
  delete?: Maybe<UserInfoFields_FullName_Delete>;
  read?: Maybe<UserInfoFields_FullName_Read>;
  update?: Maybe<UserInfoFields_FullName_Update>;
};

export type UserInfoFields_FullName_Create = {
  __typename?: 'UserInfoFields_fullName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_FullName_Delete = {
  __typename?: 'UserInfoFields_fullName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_FullName_Read = {
  __typename?: 'UserInfoFields_fullName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_FullName_Update = {
  __typename?: 'UserInfoFields_fullName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_LastName = {
  __typename?: 'UserInfoFields_lastName';
  create?: Maybe<UserInfoFields_LastName_Create>;
  delete?: Maybe<UserInfoFields_LastName_Delete>;
  read?: Maybe<UserInfoFields_LastName_Read>;
  update?: Maybe<UserInfoFields_LastName_Update>;
};

export type UserInfoFields_LastName_Create = {
  __typename?: 'UserInfoFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_LastName_Delete = {
  __typename?: 'UserInfoFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_LastName_Read = {
  __typename?: 'UserInfoFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_LastName_Update = {
  __typename?: 'UserInfoFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials = {
  __typename?: 'UserInfoFields_socials';
  create?: Maybe<UserInfoFields_Socials_Create>;
  delete?: Maybe<UserInfoFields_Socials_Delete>;
  fields?: Maybe<UserInfoFields_Socials_Fields>;
  read?: Maybe<UserInfoFields_Socials_Read>;
  update?: Maybe<UserInfoFields_Socials_Update>;
};

export type UserInfoFields_Socials_Create = {
  __typename?: 'UserInfoFields_socials_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Delete = {
  __typename?: 'UserInfoFields_socials_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Fields = {
  __typename?: 'UserInfoFields_socials_Fields';
  icon?: Maybe<UserInfoFields_Socials_Icon>;
  id?: Maybe<UserInfoFields_Socials_Id>;
  label?: Maybe<UserInfoFields_Socials_Label>;
  link?: Maybe<UserInfoFields_Socials_Link>;
};

export type UserInfoFields_Socials_Read = {
  __typename?: 'UserInfoFields_socials_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Update = {
  __typename?: 'UserInfoFields_socials_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Icon = {
  __typename?: 'UserInfoFields_socials_icon';
  create?: Maybe<UserInfoFields_Socials_Icon_Create>;
  delete?: Maybe<UserInfoFields_Socials_Icon_Delete>;
  read?: Maybe<UserInfoFields_Socials_Icon_Read>;
  update?: Maybe<UserInfoFields_Socials_Icon_Update>;
};

export type UserInfoFields_Socials_Icon_Create = {
  __typename?: 'UserInfoFields_socials_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Icon_Delete = {
  __typename?: 'UserInfoFields_socials_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Icon_Read = {
  __typename?: 'UserInfoFields_socials_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Icon_Update = {
  __typename?: 'UserInfoFields_socials_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Id = {
  __typename?: 'UserInfoFields_socials_id';
  create?: Maybe<UserInfoFields_Socials_Id_Create>;
  delete?: Maybe<UserInfoFields_Socials_Id_Delete>;
  read?: Maybe<UserInfoFields_Socials_Id_Read>;
  update?: Maybe<UserInfoFields_Socials_Id_Update>;
};

export type UserInfoFields_Socials_Id_Create = {
  __typename?: 'UserInfoFields_socials_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Id_Delete = {
  __typename?: 'UserInfoFields_socials_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Id_Read = {
  __typename?: 'UserInfoFields_socials_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Id_Update = {
  __typename?: 'UserInfoFields_socials_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Label = {
  __typename?: 'UserInfoFields_socials_label';
  create?: Maybe<UserInfoFields_Socials_Label_Create>;
  delete?: Maybe<UserInfoFields_Socials_Label_Delete>;
  read?: Maybe<UserInfoFields_Socials_Label_Read>;
  update?: Maybe<UserInfoFields_Socials_Label_Update>;
};

export type UserInfoFields_Socials_Label_Create = {
  __typename?: 'UserInfoFields_socials_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Label_Delete = {
  __typename?: 'UserInfoFields_socials_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Label_Read = {
  __typename?: 'UserInfoFields_socials_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Label_Update = {
  __typename?: 'UserInfoFields_socials_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Link = {
  __typename?: 'UserInfoFields_socials_link';
  create?: Maybe<UserInfoFields_Socials_Link_Create>;
  delete?: Maybe<UserInfoFields_Socials_Link_Delete>;
  read?: Maybe<UserInfoFields_Socials_Link_Read>;
  update?: Maybe<UserInfoFields_Socials_Link_Update>;
};

export type UserInfoFields_Socials_Link_Create = {
  __typename?: 'UserInfoFields_socials_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Link_Delete = {
  __typename?: 'UserInfoFields_socials_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Link_Read = {
  __typename?: 'UserInfoFields_socials_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Socials_Link_Update = {
  __typename?: 'UserInfoFields_socials_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Suffix = {
  __typename?: 'UserInfoFields_suffix';
  create?: Maybe<UserInfoFields_Suffix_Create>;
  delete?: Maybe<UserInfoFields_Suffix_Delete>;
  read?: Maybe<UserInfoFields_Suffix_Read>;
  update?: Maybe<UserInfoFields_Suffix_Update>;
};

export type UserInfoFields_Suffix_Create = {
  __typename?: 'UserInfoFields_suffix_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Suffix_Delete = {
  __typename?: 'UserInfoFields_suffix_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Suffix_Read = {
  __typename?: 'UserInfoFields_suffix_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Suffix_Update = {
  __typename?: 'UserInfoFields_suffix_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles = {
  __typename?: 'UserInfoFields_titles';
  create?: Maybe<UserInfoFields_Titles_Create>;
  delete?: Maybe<UserInfoFields_Titles_Delete>;
  fields?: Maybe<UserInfoFields_Titles_Fields>;
  read?: Maybe<UserInfoFields_Titles_Read>;
  update?: Maybe<UserInfoFields_Titles_Update>;
};

export type UserInfoFields_Titles_Create = {
  __typename?: 'UserInfoFields_titles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Delete = {
  __typename?: 'UserInfoFields_titles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Fields = {
  __typename?: 'UserInfoFields_titles_Fields';
  id?: Maybe<UserInfoFields_Titles_Id>;
  title?: Maybe<UserInfoFields_Titles_Title>;
};

export type UserInfoFields_Titles_Read = {
  __typename?: 'UserInfoFields_titles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Update = {
  __typename?: 'UserInfoFields_titles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Id = {
  __typename?: 'UserInfoFields_titles_id';
  create?: Maybe<UserInfoFields_Titles_Id_Create>;
  delete?: Maybe<UserInfoFields_Titles_Id_Delete>;
  read?: Maybe<UserInfoFields_Titles_Id_Read>;
  update?: Maybe<UserInfoFields_Titles_Id_Update>;
};

export type UserInfoFields_Titles_Id_Create = {
  __typename?: 'UserInfoFields_titles_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Id_Delete = {
  __typename?: 'UserInfoFields_titles_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Id_Read = {
  __typename?: 'UserInfoFields_titles_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Id_Update = {
  __typename?: 'UserInfoFields_titles_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Title = {
  __typename?: 'UserInfoFields_titles_title';
  create?: Maybe<UserInfoFields_Titles_Title_Create>;
  delete?: Maybe<UserInfoFields_Titles_Title_Delete>;
  read?: Maybe<UserInfoFields_Titles_Title_Read>;
  update?: Maybe<UserInfoFields_Titles_Title_Update>;
};

export type UserInfoFields_Titles_Title_Create = {
  __typename?: 'UserInfoFields_titles_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Title_Delete = {
  __typename?: 'UserInfoFields_titles_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Title_Read = {
  __typename?: 'UserInfoFields_titles_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_Titles_Title_Update = {
  __typename?: 'UserInfoFields_titles_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_UpdatedAt = {
  __typename?: 'UserInfoFields_updatedAt';
  create?: Maybe<UserInfoFields_UpdatedAt_Create>;
  delete?: Maybe<UserInfoFields_UpdatedAt_Delete>;
  read?: Maybe<UserInfoFields_UpdatedAt_Read>;
  update?: Maybe<UserInfoFields_UpdatedAt_Update>;
};

export type UserInfoFields_UpdatedAt_Create = {
  __typename?: 'UserInfoFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_UpdatedAt_Delete = {
  __typename?: 'UserInfoFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_UpdatedAt_Read = {
  __typename?: 'UserInfoFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoFields_UpdatedAt_Update = {
  __typename?: 'UserInfoFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserInfoReadAccess = {
  __typename?: 'UserInfoReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserInfoReadDocAccess = {
  __typename?: 'UserInfoReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserInfoUpdateAccess = {
  __typename?: 'UserInfoUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserInfoUpdateDocAccess = {
  __typename?: 'UserInfoUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserInfo_Socials = {
  __typename?: 'UserInfo_Socials';
  icon?: Maybe<UserInfo_Socials_Icon>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
};

export enum UserInfo_Socials_Icon {
  Angular = 'angular',
  Api = 'api',
  Astro = 'astro',
  Code = 'code',
  Computer = 'computer',
  Construction = 'construction',
  Docker = 'docker',
  Gcp = 'gcp',
  Github = 'github',
  Go = 'go',
  Java = 'java',
  Javascript = 'javascript',
  LinkedIn = 'linkedIn',
  Mail = 'mail',
  Map = 'map',
  Nextjs = 'nextjs',
  Nodejs = 'nodejs',
  Php = 'php',
  React = 'react',
  Ruby = 'ruby',
  Terraform = 'terraform',
  Twitter = 'twitter',
  Typescript = 'typescript',
  Vue = 'vue'
}

export enum UserInfo_Socials_Icon_MutationInput {
  Angular = 'angular',
  Api = 'api',
  Astro = 'astro',
  Code = 'code',
  Computer = 'computer',
  Construction = 'construction',
  Docker = 'docker',
  Gcp = 'gcp',
  Github = 'github',
  Go = 'go',
  Java = 'java',
  Javascript = 'javascript',
  LinkedIn = 'linkedIn',
  Mail = 'mail',
  Map = 'map',
  Nextjs = 'nextjs',
  Nodejs = 'nodejs',
  Php = 'php',
  React = 'react',
  Ruby = 'ruby',
  Terraform = 'terraform',
  Twitter = 'twitter',
  Typescript = 'typescript',
  Vue = 'vue'
}

export type UserInfo_Titles = {
  __typename?: 'UserInfo_Titles';
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum UserInfo_Suffix {
  Iii = 'III',
  Iv = 'IV',
  Jr = 'Jr_',
  Sr = 'Sr_',
  V = 'V'
}

export enum UserInfo_Suffix_MutationInput {
  Iii = 'III',
  Iv = 'IV',
  Jr = 'Jr_',
  Sr = 'Sr_',
  V = 'V'
}

export type User__Verified_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  _verified?: Maybe<UsersDocAccessFields__Verified>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  password?: Maybe<UsersDocAccessFields_Password>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields__Verified = {
  __typename?: 'UsersDocAccessFields__verified';
  create?: Maybe<UsersDocAccessFields__Verified_Create>;
  delete?: Maybe<UsersDocAccessFields__Verified_Delete>;
  read?: Maybe<UsersDocAccessFields__Verified_Read>;
  update?: Maybe<UsersDocAccessFields__Verified_Update>;
};

export type UsersDocAccessFields__Verified_Create = {
  __typename?: 'UsersDocAccessFields__verified_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Delete = {
  __typename?: 'UsersDocAccessFields__verified_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Read = {
  __typename?: 'UsersDocAccessFields__verified_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Update = {
  __typename?: 'UsersDocAccessFields__verified_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  _verified?: Maybe<UsersFields__Verified>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  password?: Maybe<UsersFields_Password>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields__Verified = {
  __typename?: 'UsersFields__verified';
  create?: Maybe<UsersFields__Verified_Create>;
  delete?: Maybe<UsersFields__Verified_Delete>;
  read?: Maybe<UsersFields__Verified_Read>;
  update?: Maybe<UsersFields__Verified_Update>;
};

export type UsersFields__Verified_Create = {
  __typename?: 'UsersFields__verified_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Delete = {
  __typename?: 'UsersFields__verified_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Read = {
  __typename?: 'UsersFields__verified_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Update = {
  __typename?: 'UsersFields__verified_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactAccess = {
  __typename?: 'contactAccess';
  fields?: Maybe<ContactFields>;
  read?: Maybe<ContactReadAccess>;
  update?: Maybe<ContactUpdateAccess>;
};

export type ContactDocAccess = {
  __typename?: 'contactDocAccess';
  fields?: Maybe<ContactDocAccessFields>;
  read?: Maybe<ContactReadDocAccess>;
  update?: Maybe<ContactUpdateDocAccess>;
};

export type HeadshotsAccess = {
  __typename?: 'headshotsAccess';
  create?: Maybe<HeadshotsCreateAccess>;
  delete?: Maybe<HeadshotsDeleteAccess>;
  fields?: Maybe<HeadshotsFields>;
  read?: Maybe<HeadshotsReadAccess>;
  update?: Maybe<HeadshotsUpdateAccess>;
};

export type HeadshotsDocAccess = {
  __typename?: 'headshotsDocAccess';
  create?: Maybe<HeadshotsCreateDocAccess>;
  delete?: Maybe<HeadshotsDeleteDocAccess>;
  fields?: Maybe<HeadshotsDocAccessFields>;
  read?: Maybe<HeadshotsReadDocAccess>;
  update?: Maybe<HeadshotsUpdateDocAccess>;
};

export type HomeAccess = {
  __typename?: 'homeAccess';
  fields?: Maybe<HomeFields>;
  read?: Maybe<HomeReadAccess>;
  update?: Maybe<HomeUpdateAccess>;
};

export type HomeDocAccess = {
  __typename?: 'homeDocAccess';
  fields?: Maybe<HomeDocAccessFields>;
  read?: Maybe<HomeReadDocAccess>;
  update?: Maybe<HomeUpdateDocAccess>;
};

export type MachinesAccess = {
  __typename?: 'machinesAccess';
  create?: Maybe<MachinesCreateAccess>;
  delete?: Maybe<MachinesDeleteAccess>;
  fields?: Maybe<MachinesFields>;
  read?: Maybe<MachinesReadAccess>;
  unlock?: Maybe<MachinesUnlockAccess>;
  update?: Maybe<MachinesUpdateAccess>;
};

export type MachinesDocAccess = {
  __typename?: 'machinesDocAccess';
  create?: Maybe<MachinesCreateDocAccess>;
  delete?: Maybe<MachinesDeleteDocAccess>;
  fields?: Maybe<MachinesDocAccessFields>;
  read?: Maybe<MachinesReadDocAccess>;
  unlock?: Maybe<MachinesUnlockDocAccess>;
  update?: Maybe<MachinesUpdateDocAccess>;
};

export type MachinesJwt = {
  __typename?: 'machinesJWT';
  collection: Scalars['String']['output'];
};

export type MachinesMe = {
  __typename?: 'machinesMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Machine>;
};

export type MachinesRefreshedMachine = {
  __typename?: 'machinesRefreshedMachine';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<MachinesJwt>;
};

export type MutationContactInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  details: MutationContact_DetailsInput;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationContact_DetailsInput = {
  email: MutationContact_Details_EmailInput;
  location: MutationContact_Details_LocationInput;
  map: MutationContact_Details_MapInput;
};

export type MutationContact_Details_EmailInput = {
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  icon: Contact_Details_Email_Icon_MutationInput;
};

export type MutationContact_Details_LocationInput = {
  description: Scalars['String']['input'];
  icon: Contact_Details_Location_Icon_MutationInput;
  title: Scalars['String']['input'];
};

export type MutationContact_Details_MapInput = {
  alt: Scalars['String']['input'];
  link: Scalars['String']['input'];
};

export type MutationHeadshotInput = {
  alt: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sizes?: InputMaybe<MutationHeadshot_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationHeadshotUpdate_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_SizesInput = {
  mobile?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileInput>;
  mobile1_5x?: InputMaybe<MutationHeadshotUpdate_Sizes_Mobile1_5xInput>;
  mobile2x?: InputMaybe<MutationHeadshotUpdate_Sizes_Mobile2xInput>;
  mobile3x?: InputMaybe<MutationHeadshotUpdate_Sizes_Mobile3xInput>;
  mobile4x?: InputMaybe<MutationHeadshotUpdate_Sizes_Mobile4xInput>;
  mobileAvif?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileAvifInput>;
  mobileAvif1_5x?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileAvif1_5xInput>;
  mobileAvif2x?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileAvif2xInput>;
  mobileAvif3x?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileAvif3xInput>;
  mobileAvif4x?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileAvif4xInput>;
  mobileWebp?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileWebpInput>;
  mobileWebp1_5x?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileWebp1_5xInput>;
  mobileWebp2x?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileWebp2xInput>;
  mobileWebp3x?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileWebp3xInput>;
  mobileWebp4x?: InputMaybe<MutationHeadshotUpdate_Sizes_MobileWebp4xInput>;
  thumbnail?: InputMaybe<MutationHeadshotUpdate_Sizes_ThumbnailInput>;
  thumbnailAvif?: InputMaybe<MutationHeadshotUpdate_Sizes_ThumbnailAvifInput>;
  thumbnailWebp?: InputMaybe<MutationHeadshotUpdate_Sizes_ThumbnailWebpInput>;
};

export type MutationHeadshotUpdate_Sizes_Mobile1_5xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_Mobile2xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_Mobile3xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_Mobile4xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileAvif1_5xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileAvif2xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileAvif3xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileAvif4xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileAvifInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileWebp1_5xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileWebp2xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileWebp3xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileWebp4xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_MobileWebpInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_ThumbnailAvifInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshotUpdate_Sizes_ThumbnailWebpInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_SizesInput = {
  mobile?: InputMaybe<MutationHeadshot_Sizes_MobileInput>;
  mobile1_5x?: InputMaybe<MutationHeadshot_Sizes_Mobile1_5xInput>;
  mobile2x?: InputMaybe<MutationHeadshot_Sizes_Mobile2xInput>;
  mobile3x?: InputMaybe<MutationHeadshot_Sizes_Mobile3xInput>;
  mobile4x?: InputMaybe<MutationHeadshot_Sizes_Mobile4xInput>;
  mobileAvif?: InputMaybe<MutationHeadshot_Sizes_MobileAvifInput>;
  mobileAvif1_5x?: InputMaybe<MutationHeadshot_Sizes_MobileAvif1_5xInput>;
  mobileAvif2x?: InputMaybe<MutationHeadshot_Sizes_MobileAvif2xInput>;
  mobileAvif3x?: InputMaybe<MutationHeadshot_Sizes_MobileAvif3xInput>;
  mobileAvif4x?: InputMaybe<MutationHeadshot_Sizes_MobileAvif4xInput>;
  mobileWebp?: InputMaybe<MutationHeadshot_Sizes_MobileWebpInput>;
  mobileWebp1_5x?: InputMaybe<MutationHeadshot_Sizes_MobileWebp1_5xInput>;
  mobileWebp2x?: InputMaybe<MutationHeadshot_Sizes_MobileWebp2xInput>;
  mobileWebp3x?: InputMaybe<MutationHeadshot_Sizes_MobileWebp3xInput>;
  mobileWebp4x?: InputMaybe<MutationHeadshot_Sizes_MobileWebp4xInput>;
  thumbnail?: InputMaybe<MutationHeadshot_Sizes_ThumbnailInput>;
  thumbnailAvif?: InputMaybe<MutationHeadshot_Sizes_ThumbnailAvifInput>;
  thumbnailWebp?: InputMaybe<MutationHeadshot_Sizes_ThumbnailWebpInput>;
};

export type MutationHeadshot_Sizes_Mobile1_5xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_Mobile2xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_Mobile3xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_Mobile4xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileAvif1_5xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileAvif2xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileAvif3xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileAvif4xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileAvifInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileWebp1_5xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileWebp2xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileWebp3xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileWebp4xInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_MobileWebpInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_ThumbnailAvifInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHeadshot_Sizes_ThumbnailWebpInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHomeInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  skills: MutationHome_SkillsInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  whatIDo: MutationHome_WhatIDoInput;
};

export type MutationHome_SkillsInput = {
  skills?: InputMaybe<Array<MutationHome_Skills_SkillsInput>>;
  title: Scalars['String']['input'];
};

export type MutationHome_Skills_SkillsInput = {
  icon: Home_Skills_Skills_Icon_MutationInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  proficiency: Home_Skills_Skills_Proficiency_MutationInput;
};

export type MutationHome_WhatIDoInput = {
  sections?: InputMaybe<Array<MutationHome_WhatIDo_SectionsInput>>;
  title: Scalars['String']['input'];
};

export type MutationHome_WhatIDo_SectionsInput = {
  description: Scalars['String']['input'];
  icon: Home_WhatIDo_Sections_Icon_MutationInput;
  id?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type MutationMachineInput = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
  apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMachineUpdateInput = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
  apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationNavInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Array<MutationNav_LinksInput>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationNav_LinksInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  link: Scalars['String']['input'];
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationUserInfoInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  socials?: InputMaybe<Array<MutationUserInfo_SocialsInput>>;
  suffix?: InputMaybe<UserInfo_Suffix_MutationInput>;
  titles?: InputMaybe<Array<MutationUserInfo_TitlesInput>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInfo_SocialsInput = {
  icon: UserInfo_Socials_Icon_MutationInput;
  id?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  link: Scalars['String']['input'];
};

export type MutationUserInfo_TitlesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type MutationUserInput = {
  _verificationToken?: InputMaybe<Scalars['String']['input']>;
  _verified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  _verificationToken?: InputMaybe<Scalars['String']['input']>;
  _verified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type NavAccess = {
  __typename?: 'navAccess';
  fields?: Maybe<NavFields>;
  read?: Maybe<NavReadAccess>;
  update?: Maybe<NavUpdateAccess>;
};

export type NavDocAccess = {
  __typename?: 'navDocAccess';
  fields?: Maybe<NavDocAccessFields>;
  read?: Maybe<NavReadDocAccess>;
  update?: Maybe<NavUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type User_InfoAccess = {
  __typename?: 'user_infoAccess';
  fields?: Maybe<UserInfoFields>;
  read?: Maybe<UserInfoReadAccess>;
  update?: Maybe<UserInfoUpdateAccess>;
};

export type User_InfoDocAccess = {
  __typename?: 'user_infoDocAccess';
  fields?: Maybe<UserInfoDocAccessFields>;
  read?: Maybe<UserInfoReadDocAccess>;
  update?: Maybe<UserInfoUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactPageQuery = { __typename?: 'Query', UserInfo?: { __typename?: 'UserInfo', fullName?: string | null, description: string, titles: Array<{ __typename?: 'UserInfo_Titles', title?: string | null }>, socials: Array<{ __typename?: 'UserInfo_Socials', icon?: UserInfo_Socials_Icon | null, link?: string | null, label?: string | null }> } | null, Nav?: { __typename?: 'Nav', links: Array<{ __typename?: 'Nav_Links', label?: string | null, link?: string | null }> } | null, Contact?: { __typename?: 'Contact', title: string, details?: { __typename?: 'Contact_Details', map?: { __typename?: 'Contact_Details_Map', link?: string | null, alt?: string | null } | null, location?: { __typename?: 'Contact_Details_Location', icon?: Contact_Details_Location_Icon | null, title?: string | null, description?: string | null } | null, email?: { __typename?: 'Contact_Details_Email', icon?: Contact_Details_Email_Icon | null, email?: any | null, description?: string | null } | null } | null } | null };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', UserInfo?: { __typename?: 'UserInfo', fullName?: string | null, description: string, titles: Array<{ __typename?: 'UserInfo_Titles', title?: string | null }>, socials: Array<{ __typename?: 'UserInfo_Socials', icon?: UserInfo_Socials_Icon | null, link?: string | null, label?: string | null }> } | null, Home?: { __typename?: 'Home', createdAt?: any | null, updatedAt?: any | null, whatIDo?: { __typename?: 'Home_WhatIDo', title?: string | null, sections: Array<{ __typename?: 'Home_WhatIDo_Sections', icon: Home_WhatIDo_Sections_Icon, title: string, description: string }> } | null, skills?: { __typename?: 'Home_Skills', title?: string | null, skills: Array<{ __typename?: 'Home_Skills_Skills', icon: Home_Skills_Skills_Icon, name: string, proficiency: Home_Skills_Skills_Proficiency }> } | null } | null, Nav?: { __typename?: 'Nav', links: Array<{ __typename?: 'Nav_Links', label?: string | null, link?: string | null }> } | null, Headshots?: { __typename?: 'Headshots', docs?: Array<{ __typename?: 'Headshot', alt: string, sizes?: { __typename?: 'Headshot_Sizes', mobile?: { __typename?: 'Headshot_Sizes_Mobile', url?: string | null } | null, mobileWebp?: { __typename?: 'Headshot_Sizes_MobileWebp', url?: string | null } | null, mobileAvif?: { __typename?: 'Headshot_Sizes_MobileAvif', url?: string | null } | null, mobile1_5x?: { __typename?: 'Headshot_Sizes_Mobile1_5x', url?: string | null } | null, mobileAvif1_5x?: { __typename?: 'Headshot_Sizes_MobileAvif1_5x', url?: string | null } | null, mobileWebp1_5x?: { __typename?: 'Headshot_Sizes_MobileWebp1_5x', url?: string | null } | null, mobile2x?: { __typename?: 'Headshot_Sizes_Mobile2x', url?: string | null } | null, mobileAvif2x?: { __typename?: 'Headshot_Sizes_MobileAvif2x', url?: string | null } | null, mobileWebp2x?: { __typename?: 'Headshot_Sizes_MobileWebp2x', url?: string | null } | null, mobile3x?: { __typename?: 'Headshot_Sizes_Mobile3x', url?: string | null } | null, mobileAvif3x?: { __typename?: 'Headshot_Sizes_MobileAvif3x', url?: string | null } | null, mobileWebp3x?: { __typename?: 'Headshot_Sizes_MobileWebp3x', url?: string | null } | null, mobile4x?: { __typename?: 'Headshot_Sizes_Mobile4x', url?: string | null } | null, mobileAvif4x?: { __typename?: 'Headshot_Sizes_MobileAvif4x', url?: string | null } | null, mobileWebp4x?: { __typename?: 'Headshot_Sizes_MobileWebp4x', url?: string | null } | null } | null } | null> | null } | null };


export const ContactPageDocument = gql`
    query ContactPage {
  UserInfo {
    fullName
    description
    titles {
      title
    }
    socials {
      icon
      link
      label
    }
  }
  Nav {
    links {
      label
      link
    }
  }
  Contact {
    title
    details {
      map {
        link
        alt
      }
      location {
        icon
        title
        description
      }
      email {
        icon
        email
        description
      }
    }
  }
}
    `;
export const HomePageDocument = gql`
    query HomePage {
  UserInfo {
    fullName
    description
    titles {
      title
    }
    socials {
      icon
      link
      label
    }
  }
  Home {
    createdAt
    updatedAt
    whatIDo {
      title
      sections {
        icon
        title
        description
      }
    }
    skills {
      title
      skills {
        icon
        name
        proficiency
      }
    }
  }
  Nav {
    links {
      label
      link
    }
  }
  Headshots(where: {name: {equals: "Professional"}}) {
    docs {
      alt
      sizes {
        mobile {
          url
        }
        mobileWebp {
          url
        }
        mobileAvif {
          url
        }
        mobile1_5x {
          url
        }
        mobileAvif1_5x {
          url
        }
        mobileWebp1_5x {
          url
        }
        mobile2x {
          url
        }
        mobileAvif2x {
          url
        }
        mobileWebp2x {
          url
        }
        mobile3x {
          url
        }
        mobileAvif3x {
          url
        }
        mobileWebp3x {
          url
        }
        mobile4x {
          url
        }
        mobileAvif4x {
          url
        }
        mobileWebp4x {
          url
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ContactPage(variables?: ContactPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContactPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContactPageQuery>(ContactPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ContactPage', 'query', variables);
    },
    HomePage(variables?: HomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<HomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomePageQuery>(HomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HomePage', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;