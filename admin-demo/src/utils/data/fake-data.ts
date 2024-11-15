import { EventType, IEvent } from "../api/event.api";
import { INeighborhood } from "../api/neighborhood.api";
import { IPlace, PlaceCategory } from "../api/place.api";

export const admins = [
  {
    _id: '64a7b1d3cfa9a12345678901',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    phoneNumber: '+1234567890',
    isActive: true,
    isDeleted: false,
    createdAt: '2024-08-01T12:34:56Z',
    updatedAt: '2024-09-15T08:22:33Z',
  },
  {
    _id: '64a7b1d3cfa9a12345678902',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    password: 'securePassword',
    phoneNumber: '+1987654321',
    isActive: false,
    isDeleted: false,
    createdAt: '2024-07-21T10:00:45Z',
    updatedAt: '2024-08-30T13:45:12Z',
  },
  {
    _id: '64a7b1d3cfa9a12345678903',
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    password: 'adminPass456',
    phoneNumber: '+1122334455',
    isActive: true,
    isDeleted: false,
    createdAt: '2024-06-15T07:12:10Z',
    updatedAt: '2024-09-12T09:30:45Z',
  },
];
export const users = [
  {
    _id: '64b1a2c4d7e8b56789012345',
    name: 'Emily Brown',
    email: 'emily.brown@example.com',
    phone: '+1444555666',
    dob: '1990-05-15',
    isActive: true,
    createdAt: '2024-09-01T14:12:00Z',
    updatedAt: '2024-10-05T16:45:30Z',
  },
  {
    _id: '64b1a2c4d7e8b56789012346',
    name: 'Michael Green',
    email: 'michael.green@example.com',
    phone: '+1333444555',
    dob: '1988-11-23',
    isActive: false,
    createdAt: '2024-07-19T12:34:56Z',
    updatedAt: '2024-09-22T10:15:22Z',
  },
  {
    _id: '64b1a2c4d7e8b56789012347',
    name: 'Sophia Turner',
    email: 'sophia.turner@example.com',
    phone: '+1222333444',
    dob: '1995-08-10',
    isActive: true,
    createdAt: '2024-05-20T18:30:15Z',
    updatedAt: '2024-08-01T09:12:34Z',
  },
];

export const fakeLoginResponse = {
  status: true,
  result: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJfaWQiOiI2NmU5OTExOWMyYzljODQzNDZiODE2ZWMiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaXNBY3RpdmUiOnRydWUsInBhc3N3b3JkIjoiJDJiJDEwJHlBV1NnMGhtcGlRRUlNWWVVSi4uVC5NUGtSd0ZzTlNYNDZoS095NVh5RTRiRjc5cnkxREtxIiwiaXNEZWxldGVkIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyNC0wOS0xN1QxNDoyNDoyNS41NzRaIiwidXBkYXRlZEF0IjoiMjAyNC0wOS0xN1QxNDoyNDoyNS41NzRaIiwiX192IjowfSwicm9sZSI6ImFkbWluIiwiaWQiOiI2NmU5OTExOWMyYzljODQzNDZiODE2ZWMiLCJpYXQiOjE3Mjg1NDQ5MDcsImV4cCI6MTczMTEzNjkwN30.MjeLSXqbmMZgYHIl2ftRoIUzV_7vRcAA83yNk2XylYU',
    admin: {
      _id: '66e99119c2c9c84346b816ec',
      name: 'admin',
      phone: '234562122',
      email: 'admin@example.com',
      isActive: true,
      isDeleted: false,
    },
  },
  message: 'Admin login successfully',
};

export const interests = [
  {
    id: 1,
    name: 'Photography',
    isTopInterest: true,
    isActive: true,
    isEnabled: true,
  },
  {
    id: 2,
    name: 'Cooking',
    isTopInterest: false,
    isActive: false,
    isEnabled: true,
  },
  {
    id: 3,
    name: 'Traveling',
    isTopInterest: true,
    isActive: true,
    isEnabled: false,
  },
  {
    id: 4,
    name: 'Gardening',
    isTopInterest: false,
    isActive: false,
    isEnabled: true,
  },
  {
    id: 5,
    name: 'Reading',
    isTopInterest: true,
    isActive: true,
    isEnabled: true,
  },
];

