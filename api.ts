import axios from "axios";
import * as SecureStore from "expo-secure-store";
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
  ISignInData,
  ISignInResponse,
  ISignUpData,
  ISignUpResponse,
  ITicketResponse,
} from "./types";

export const API = axios.create({
  baseURL: "http://10.0.2.2:3000",
  withCredentials: false,
});

API.interceptors.request.use(async (req) => {
  const token = await SecureStore.getItemAsync("token");
  if (token) req.headers.authorization = `Bearer ${token}`;
  else req.headers.authorization = undefined;
  return req;
});

// USER
// WHEN SIGNING UP, USER'S NAME SHOULD, BY DEFAULT, BE THEIR EMAIL HANDLE (WITHOUT THE PART AFTER @)
export const signIn = (data: ISignInData) =>
  API.post<ISignInResponse>("/user/login", data);

export const signUp = (data: ISignUpData) =>
  API.post<ISignUpResponse>("/user/register", data);

export const resetPassword = (data: { email: string }) =>
  API.post("/user/reset_password", data);

// ME
export const getMe = () => API.get<IGetMeResponse>("/me", { timeout: 5000 });

export const changePassword = (data: {
  currentPassword: string;
  newPassword: string;
}) => API.patch("/me/change_password", data);

export const getFollowedMuseums = () =>
  API.get<IFollowedMuseum[]>("/me/museum");

export const getFollowedEvents = () => API.get<IFollowedEvent[]>("/me/event");

export const getMyTickets = () => API.get<ITicketResponse[]>("/me/ticket");

export const purchaseTicket = (type: IEOM, eomId: string) =>
  API.post<ITicketResponse>(`/me/ticket?type=${type}&eomId=${eomId}`);

export const getMyRatings = () => API.get<IRatingResponse[]>("/me/rating");

export const getNotifications = (type: INotificationType) =>
  API.get<INotificationResponse[]>(`/me/notification?type=${type}`);

export const putFollowMuseum = (museumId: string) =>
  API.put(`/me/museum?museumId=${museumId}`);
export const putFollowEvent = (eventId: string) =>
  API.put(`/me/event?eventId=${eventId}`);

export const getConversationPreviews = () =>
  API.get<IConversationPreviewResponse[]>("/me/conversation_notification");

// TICKET
export const getTicketById = (ticketId) =>
  API.get<ITicketResponse>(`/ticket/${ticketId}`);

export const checkIn = (ticketId: string) =>
  API.put(`/ticket/${ticketId}/checkin`);

// RATING
export const getRatingsByEomId = (eomId: string) =>
  API.get<IRatingResponse[]>(`/rating?eomId=${eomId}`);
export const postRating = (data: IRatingCoreData) => API.post("/rating", data);

// POST
export const postPost = (data: IPostCoreData) => API.post("/post", data);
export const getPostsByEomId = (eomId: string) =>
  API.get<IPostResponse[]>(`/post?eomId=${eomId}`);

// MUSEUM
export const getMuseumsByGenre = (genre: IMuseumGenre) =>
  API.get<IMuseumResponse[]>(`/museum?genre=${genre}`);
export const getMuseumById = (museumId: string) =>
  API.get<IMuseumResponse>(`museum/${museumId}`);
export const postMuseum = (data: IMuseumCoreData) => API.post("/museum", data);
export const getEventsByMuseumId = (museumId: string) =>
  API.get<IEventResponse[]>(`/museum/${museumId}/event`);
export const patchMuseum = (museumId: string, data: IMuseumCoreData) =>
  API.patch(`/museum/${museumId}`, data);

// EVENT
export const getEventsByGenre = (genre: IEventGenre) =>
  API.get<IEventResponse[]>(`/event?genre=${genre}`);
export const getEventByEventId = (eventId: string) =>
  API.get<IEventResponse>(`/event/${eventId}`);
export const postEvent = (data: IEventCoreData) => API.post("/event", data);
export const patchEvent = (eventId: string, data: IEventCoreData) =>
  API.patch(`/event/${eventId}`, data);

// CHAT
export const postMessage = (data: IMessageCoreData) =>
  API.post("/message", data);
export const getMessagesByConversationId = (conversationId: string) =>
  API.get<IMessageResponse[]>(`/message?conversationId=${conversationId}`); // userId is the id of the other messager. SORTED BY "sentAt"
export const getConversationIdByUserId = (userId: string) =>
  API.get<{ conversationId: string }>(`/conversation?userId=${userId}`);

// BROWSE
export const getAnalytics = () => API.get("/browse/analytics"); //TO-DO: Nghĩ xem sẽ analyse cái chỉ số gì
export const getEventChart = () =>
  API.get<IEventResponse[]>("/browse/event_chart"); //Trả về list event có người follow đông nhất theo thứ tự giảm dần
export const getMuseumChart = () =>
  API.get<IMuseumResponse[]>("/browse/museum_chart");
export const getFeaturedEvents = () =>
  API.get<IEventResponse[]>("/browse/featured");
export const getMuseums = () => API.get<IMuseumResponse[]>("/browse/museum"); // Trả về museums[], trong đó đảm bảo mỗi genre có tối đa 3 museums thuộc genre đó
export const getEvents = () => API.get<IEventResponse[]>("/browse/event"); // Tương tự GET /browse/museum

//SEARCH
export const search = (query: string) =>
  API.get<(IMuseumResponse | IEventResponse)[]>(`/search?query=${query}`);
