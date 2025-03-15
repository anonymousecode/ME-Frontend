import React from "react";
import { Event } from "../../types/Event";
import styles from "./EventCard.module.css";

interface Props {
  event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <div className={styles.card}>
      <img className={styles.eventImage} src={event.image} alt={event.title} />
      <h3 >{event.title}</h3>
      <p className={styles.description}>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Seats Available:</strong> {event.seatsAvailable}</p>
      <button className={styles.joinButton}>Join Now</button>
    </div>
  );
};

export default EventCard;
