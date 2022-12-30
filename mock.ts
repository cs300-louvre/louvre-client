import {
  IChatNotificationResponse,
  IEOM,
  IEventCoreData,
  IEventGenre,
  IEventResponse,
  IFollowedEvent,
  IFollowedMuseum,
  IGetMeResponse,
  IMessageCoreData,
  IMessageResponse,
  IMuseumCoreData,
  IMuseumGenre,
  IMuseumResponse,
  INotificationResponse,
  IPostCoreData,
  IPostResponse,
  IRatingCoreData,
  IRatingResponse,
  ISignInData,
  ISignInResponse,
  ISignUpData,
  ISignUpResponse,
  ITicketResponse,
} from "./types";
import { faker } from "@faker-js/faker";

const eventGenres: IEventGenre[] = [
  "new",
  "art",
  "corporate",
  "education",
  "festival",
  "sport",
  "virtual",
  "volunteer",
];
const museumGenres: IMuseumGenre[] = [
  "new",
  "art",
  "general",
  "history",
  "natural",
  "science",
  "virtual",
];

const fakeDateString = () => {
  return `${faker.date.month()} ${faker.datatype.number({
    min: 1,
    max: 28,
  })} ${faker.datatype.number({
    min: 2020,
    max: 2022,
  })}`;
};

const fakeEventGenre = () => {
  return eventGenres[
    faker.datatype.number({ min: 0, max: eventGenres.length - 1 })
  ];
};

const fakeMuseumGenre = () => {
  return museumGenres[
    faker.datatype.number({ min: 0, max: museumGenres.length - 1 })
  ];
};

const fakeLocation = () => {
  return ` ${faker.address.buildingNumber()} ${faker.address.street()}, ${faker.address.city()} City, ${faker.address.country()}`;
};

export const fakeGetMeResponse: () => IGetMeResponse = () => {
  return {
    userId: faker.datatype.string(),
    email: faker.internet.email(),
    name: faker.internet.userName(),
  };
};

export const fakeChatNotificationResponse: () => IChatNotificationResponse =
  () => {
    return {
      chatId: faker.datatype.uuid(),
      content: faker.lorem.sentence(),
      isSeen: faker.datatype.boolean(),
      name: faker.name.fullName(),
      sentAt: fakeDateString(),
      thumbnailUrl: faker.image.abstract(),
      userId: faker.datatype.uuid(),
    };
  };

export const fakeEventResponse: () => IEventResponse = () => {
  return {
    coverUrl: faker.image.abstract(640, 480, true),
    description: faker.lorem.sentence(),
    startTime: fakeDateString(),
    endTime: fakeDateString(),
    genre: fakeEventGenre(),
    eventId: faker.datatype.uuid(),
    isUserFavourite: faker.datatype.boolean(),
    location: fakeLocation(),
    museumId: faker.datatype.uuid(),
    museumName: faker.company.name(),
    museumThumbnailUrl: faker.image.abstract(),
    name: faker.music.songName(),
    numOfFollowers: faker.datatype.number({ min: 0, max: 1000 }),
    numOfReviews: faker.datatype.number({ min: 0, max: 1000 }),
    rating: faker.datatype.number({ precision: 0.1, min: 1, max: 5 }),
    sales: faker.datatype.number({ min: 0, max: 1000 }),
    thumbnailUrl: faker.image.abstract(640, 480, true),
    ticketPrice: faker.datatype.number({
      min: 10000,
      max: 300000,
      precision: 10000,
    }),
    userId: faker.datatype.uuid(),
  };
};
