export enum MeasurableEvent {
  CLICK = "CLICK",
  NAVIGATE = "NAVIGATE",
}

export enum MeasurableAgent {
  BROWSER = "BROWSER",
  MOBILE_APP = "MOBILE_APP",
}

export interface Measurable {
  eventId: string;
  /**
   * Event is associated with the name Measurable Event.
   * It allows us to identify what was the reason for this request.
   * Like a CLICK on a button or the user "NAVIGATE" to a certain screen.
   */
  event: MeasurableEvent | string;
  /**
   * Event descriptor is a string that describes the event.
   */
  eventDescriptor: string;
  /**
   * Location defines the place where the event occurred.
   * Location can be per example the PROFILE page of the user
   */
  location: string;
  /**
   * Session id must be an unique identifier for each session
   */
  sessionId: string;
  /**
   * User Agent must indicate if the user events are being sent by a BROWSER or an App
   */
  agent: MeasurableAgent | string;
  /**
   * user session details. If user is logged in it should send an unique user identifier such as an email or a id
   */
  userId?: string;
  /**
   * createdAt is the date when the event was created
   */
  createdAt: Date;
}
