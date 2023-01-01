import {
  IEventGenre,
  IMuseumGenre,
  INotificationType,
  ITicketStatus,
} from "./types";

export const EVENT_GENRES: IEventGenre[] = [
  "art",
  "corporate",
  "education",
  "festival",
  "sport",
  "virtual",
  "volunteer",
];

export const MUSEUM_GENRES: IMuseumGenre[] = [
  "art",
  "general",
  "history",
  "natural",
  "science",
  "virtual",
];

export const NOTIFICATION_TYPES: INotificationType[] = [
  "event",
  "message",
  "museum",
  "system",
];

export const TICKET_STATUS: ITicketStatus[] = ["paid", "used", "wait"];
