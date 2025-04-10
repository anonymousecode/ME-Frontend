
import React from "react";
import styles from "./membercard.module.css";
import { Member } from "../../types/Member";

interface Props {
  member: Member;
}

function MemberCard({ member }: Props) {
  const {
    image,
    name,
    email,
    role,
    status,
    phoneNumber,
    bloodGroup,
    location,
    skills = [],
  } = member;

  return (
    <div className={styles.memberCard}>
      <img className={styles.memberImage} src={image} alt={name} />
      <div className={styles.memberDetails}>
        <div className={styles.memberInfo}>
          <h3>{name}</h3>
          <p><strong>Role:</strong> {role}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phoneNumber}</p>
          <p><strong>Blood Group:</strong> {bloodGroup}</p>
          <p><strong>Location:</strong> {location}</p>
          {skills.length > 0 && (
            <div className={styles.skillsSection}>
              <strong>Skills:</strong>
              <ul className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <li key={index} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button className={styles.viewProfile}>View Profile</button>
      </div>
    </div>
  );
}

export default MemberCard;
