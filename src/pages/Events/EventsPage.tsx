import styles from "./EventsPage.module.css";
import React from "react";
import EventCard from "../../Components/EventCard/EventCard";
import { Event } from "../../types/Event";


const events: Event[] = [
  {
    id: 1,
    title: "Blood Donation Camp",
    description: "A small act of kindness can save lives...Participate in our blood donation camp and be a hero ! This event is open to all eligible donors and aims to replenish the community's blood supply.",
    date: "January 20, 2024",
    time: "9:00 AM - 3:00 PM",
    venue: "Red Cross Hall, M.G. Road",
    seatsAvailable: 100,
    image: "images/event1.jpeg",
  },
  {
    id: 2,
    title: "Marathon for a Cause",
    description: "Get ready to lace up your running shoes and join us in a spirited run for a cleaner and greener city ! This event welcomes everyone to contribute to a meaningful cause while having fun.",
    date: "February 25, 2024",
    time: "6:00 AM",
    venue: "Gandhi Square, Thrissur",
    seatsAvailable: 1000,
    image: "images/event2.jpeg",
  },
  {
    id: 3,
    title: "Tree Plantation Drive",
    description: "Planting trees is a powerful way to combat climate change,preserve biodiversity and enhance the beauty of our environment.Join us for our tree plantation drive and be part of a green movement.",
    date: "February 5, 2024",
    time: "8:00 AM",
    venue: "City Park, Kottayam",
    seatsAvailable: 30,
    image: "images/event3.jpeg",
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
          
          <div className={styles.filterSort}>
          <h2>Events</h2>
            <button>Filter</button>
            <button>Sort</button>
          </div>
          <div className={styles.eventsContainer}>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
      </div>
    </div>
    
  );
};

export default EventsPage;
