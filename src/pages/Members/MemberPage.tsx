import React from "react";
import styles from "./MemberPage.module.css";
import MemberCard from "../../Components/MemberCard/MemberCard";
import { Member } from "../../types/Member";

const members: Member[] = [
  {
    id: 1,
    name: "Arya Menon",
    role: "Event Coordinator",
    bloodGroup: "O+",
    place: "Kochi",
    image: "images/member1.jpg",
  },
  {
    id: 2,
    name: "Rahul Nair",
    role: "Volunteer Manager",
    bloodGroup: "A+",
    place: "Thrissur",
    image: "images/member2.jpeg",
  },
  {
    id: 3,
    name: "Neha Kumar",
    role: "Public Relations Officer",
    bloodGroup: "B+",
    place: "Kottayam",
    image: "images/member3.jpeg",
  },
];

const MemberPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Our Members</h2>
        <div className={styles.filterSort}>
          <button>Filter</button>
          <button>Sort</button>
        </div>
        <div className={styles.membersContainer}>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
