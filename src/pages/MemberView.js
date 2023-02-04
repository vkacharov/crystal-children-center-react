import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import S3Image  from '../components/S3Image'; 

import { 
  MemberHeroResponsiveLayout, UpdateResponsiveCardCollectionWithMemberFilter, UpdateCreateFormWithUpload
} from '../ui-components';
import { Member } from "../models";
import { DataStore } from "aws-amplify";

  function MemberView({isAdmin}) {
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
          <S3Image imgKey={member.pictureUrl} imgPrefix={id}/>
        }/>
        <div className="section-title">
          <h2>Updates about {member.name}</h2>
        </div>
        <UpdateResponsiveCardCollectionWithMemberFilter 
          memberid={id}
          overrideItems={({ item }) => ({
            imageSlot: 
              <S3Image imgKey = {item.pictureUrl} imgPrefix = {id + '/' + item.id} />,
          })}
      />

      {isAdmin &&
        <>
            <div className='section-title'>
            <h3>Add an Update</h3>
          </div>
          <UpdateCreateFormWithUpload memberid={id} />
        </>
      }

      </div>
    );
  }

  
  export default MemberView;
