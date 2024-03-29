import {
  IConversationPreviewResponse,
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
  INotificationType,
  IPostCoreData,
  IPostResponse,
  IRatingCoreData,
  IRatingResponse,
  IRole,
  ISignInData,
  ISignInResponse,
  ISignUpData,
  ISignUpResponse,
  ITicketResponse,
} from "./types";
import { faker } from "@faker-js/faker";
import {
  EVENT_GENRES,
  MUSEUM_GENRES,
  NOTIFICATION_TYPES,
  TICKET_STATUS,
} from "./const";

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
  return EVENT_GENRES[
    faker.datatype.number({ min: 0, max: EVENT_GENRES.length - 1 })
  ];
};

const fakeMuseumGenre = () => {
  return MUSEUM_GENRES[
    faker.datatype.number({ min: 0, max: MUSEUM_GENRES.length - 1 })
  ];
};

const fakeNotificationType = () => {
  return NOTIFICATION_TYPES[
    faker.datatype.number({ min: 0, max: NOTIFICATION_TYPES.length - 1 })
  ];
};

const fakeLocation = () => {
  return `${faker.address.buildingNumber()} ${faker.address.street()}, ${faker.address.city()} City, ${faker.address.country()}`;
};

export const fakeChatPreviewResponse: () => IConversationPreviewResponse =
  () => {
    return {
      conversationId: faker.datatype.uuid(),
      content: faker.lorem.sentence(),
      name: faker.name.fullName(),
      sentAt: fakeDateString(),
      thumbnailUrl: faker.image.abstract(640, 480, true),
      userId: faker.datatype.uuid(),
    };
  };

export const fakeMessageResponse: () => IMessageResponse = () => {
  return {
    conversationId: faker.datatype.uuid(),
    content: faker.lorem.paragraph(),
    sentAt: fakeDateString(),
    thumbnailUrl: faker.internet.avatar(),
    userId: faker.datatype.uuid(),
    userName: faker.internet.userName(),
    messageId: faker.datatype.uuid(),
  };
};

export const fakeNotificationResponse: (
  type?: INotificationType
) => INotificationResponse = (type) => {
  return {
    content: faker.lorem.sentence(9),
    name: faker.internet.userName(),
    notificationId: faker.datatype.uuid(),
    thumbnailUrl: faker.image.business(40, 480, true),
    type: type ? type : fakeNotificationType(),
    sourceId: faker.datatype.uuid(),
  };
};

export const fakeEventResponse: () => IEventResponse = () => {
  return {
    coverUrl: faker.image.abstract(640, 480, true),
    description: faker.lorem.paragraphs().split("\n").join("\n\n"),
    startTime: fakeDateString(),
    endTime: fakeDateString(),
    genre: fakeEventGenre(),
    eventId: faker.datatype.uuid(),
    isFollowedByUser: faker.datatype.boolean(),
    location: fakeLocation(),
    museumId: faker.datatype.uuid(),
    museumName: faker.company.name(),
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
    createdAt: faker.date.past().toISOString(),
  };
};

export const fakeMuseumResponse: () => IMuseumResponse = () => {
  return {
    location: fakeLocation(),
    coverUrl: faker.image.business(640, 480, true),
    createdAt: faker.date.past().toISOString(),
    description: faker.lorem.paragraphs().split("\n").join("\n\n"),
    genre: fakeMuseumGenre(),
    isFollowedByUser: faker.datatype.boolean(),
    museumId: faker.datatype.uuid(),
    name: faker.music.songName(),
    numOfFollowers: faker.datatype.number({ min: 0, max: 1000 }),
    numOfReviews: faker.datatype.number({ min: 0, max: 1000 }),
    rating: faker.datatype.number({ precision: 0.1, min: 1, max: 5 }),
    sales: faker.datatype.number({ min: 0, max: 1000 }),
    thumbnailUrl: faker.image.business(640, 480, true),
    ticketPrice: faker.datatype.number({
      min: 10000,
      max: 300000,
      precision: 10000,
    }),
    userId: faker.datatype.uuid(),
  };
};

export const fakePost: () => IPostResponse = () => {
  return {
    body: faker.lorem.sentences(2),
    createdAt: fakeDateString(),
    eomId: faker.datatype.uuid(),
    imageUrl: faker.image.image(640, 480, true),
    postId: faker.datatype.uuid(),
    title: faker.lorem.sentence(),
  };
};

export const fakeRating: () => IRatingResponse = () => {
  return {
    content: faker.lorem.sentences(3),
    eomId: faker.datatype.uuid(),
    rating: faker.datatype.number({ precision: 0.1, min: 1, max: 5 }),
    thumbnailUrl: faker.internet.avatar(),
    userId: faker.datatype.uuid(),
    userName: faker.internet.userName(),
    ratingId: faker.datatype.uuid(),
    createdAt: fakeDateString(),
  };
};

export const fakeGetMeResponse: (role: IRole) => IGetMeResponse = (role) => {
  return {
    role,
    email: faker.internet.email(),
    name: faker.internet.userName(),
    userId: faker.datatype.uuid(),
    thumbnailUrl: faker.image.avatar(),
  };
};

export const fakeTicketStatus = () => {
  return TICKET_STATUS[
    faker.datatype.number({ min: 0, max: TICKET_STATUS.length - 1 })
  ];
};
export const fakeTicket: () => ITicketResponse = () => {
  return {
    location: fakeLocation(),
    museumId: faker.datatype.uuid(),
    eventId: faker.datatype.uuid(),
    name: faker.music.songName(),
    price: faker.datatype.number({
      min: 10000,
      max: 300000,
      precision: 10000,
    }),
    purchasedAt: fakeDateString(),
    status: fakeTicketStatus(),
    thumbnailUrl: faker.image.abstract(640, 480, true),
    ticketId: faker.datatype.uuid(),
    userId: faker.datatype.uuid(),
    endTime: fakeDateString(),
    startTime: fakeDateString(),
    qrCodeUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/QR_deWP.svg/1200px-QR_deWP.svg.png",
  };
};
