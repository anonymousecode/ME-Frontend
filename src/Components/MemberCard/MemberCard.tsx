import React from "react";
import styles from "./membercard.module.css";
import { Member } from "../../types/Member";

interface Props {
  member: Member;
}


function MemberCard({ member }: Props) {
    const { image, name, role, bloodGroup, place } = member;

    return (
        <div className={styles.memberCard}>
            <img className={styles.memberImage} src={member.image} alt={name} />
            <div className={styles.memberDetails}>
                    <div className={styles.memberInfo}>
                        <h3 >{member.name}</h3>
                        <p>Role: {member.role}</p>
                        <p>Blood Group: {member.bloodGroup}+</p>
                        <p>Place: {member.place}</p>
                    </div>
                    
                <button className={styles.viewProfile}>View Profile</button>
            </div>
        </div>
    );
}

export default MemberCard;
