import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import S3Image  from '../components/S3Image'; 

import { 
  MemberHeroResponsiveLayout, UpdateResponsiveCardCollection, 
} from '../ui-components';
import { Member } from "../models";
import { DataStore } from "aws-amplify";

  function MemberView() {
    const { id } = useParams();
    const [member, setMember] = useState({});

    useEffect(() => {
      DataStore.query(Member, id)
        .then(result => {
          setMember(result)
        })
    }, []);

    return (
      <div className="member">
        <MemberHeroResponsiveLayout member = {member} 
        imageSlot = {
          <S3Image imgKey={member.pictureUrl}/>
        }/>
        <div className="section-title">
          <h2>Updates about {member.name}</h2>
        </div>
        <UpdateResponsiveCardCollection 
          memberid={id}
      />
      </div>
    );
  }

  
  export default MemberView;
