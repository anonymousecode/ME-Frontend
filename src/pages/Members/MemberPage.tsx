import React, { useEffect, useState } from "react";
import styles from "./MemberPage.module.css";
import MemberCard from "../../Components/MemberCard/MemberCard";
import { Member } from "../../types/Member";
import axios from "axios";

const MemberPage: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("https://intership-project3-3.onrender.com/api/users");
        setMembers(response.data); // Make sure API returns an array of Member objects
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch member data");
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Our Members</h2>
        <div className={styles.filterSort}>
          <button>Filter</button>
          <button>Sort</button>
        </div>

        {loading && <p>Loading members...</p>}
        {error && <p>{error}</p>}

        <div className={styles.membersContainer}>
          {!loading && !error && members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
