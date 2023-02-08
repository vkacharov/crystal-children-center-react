import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import S3Image  from '../components/S3Image';
import Modal from 'react-modal';
import { 
  MemberHeroResponsiveLayout, UpdateResponsiveCardCollectionWithMemberFilter, UpdateCreateFormWithUpload,
  UpdateUpdateFormWithUpload
} from '../ui-components';
import { Member, Update } from "../models";
import { DataStore } from "aws-amplify";
import { confirmAlert } from 'react-confirm-alert';
import '@aws-amplify/ui-react/styles.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

  function MemberView({isAdmin}) {
    const { id } = useParams();
    const [member, setMember] = useState({});

    useEffect(() => {
      DataStore.query(Member, id)
        .then(result => {
          setMember(result)
        })
    }, []);

    const [selectedUpdate, setSelectedUpdate] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const editIconClicked = (updateId) => {
      if (isAdmin) {
        setSelectedUpdate(updateId);
        setModalIsOpen(true);
      }
    }

    const deleteUpdate = async (updateId) => {
      if (isAdmin) {
        const update = await DataStore.query(Update, updateId);
        if (update) {
          DataStore.delete(update);
        }
      }
    }

    const deleteIconClicked = (updateId) => {
      if (isAdmin) {
        confirmAlert({
          title: 'Delete Update',
          message: 'Are you sure you want to delete this Update?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => deleteUpdate(updateId)
            },
            {
              label: 'No',
            }
          ]
        });
      }
    }

    return (
      <div className="member">
        <MemberHeroResponsiveLayout member = {member}
          imageSlot = {
            <S3Image imgKey={member.pictureUrl} imgPrefix={id}/>
          }
        />
        <div className="section-title">
          <h2>Updates about {member.name}</h2>
        </div>
        <UpdateResponsiveCardCollectionWithMemberFilter 
          memberid={id}
          overrideItems={({ item }) => ({
            imageSlot: 
              <S3Image imgKey = {item.pictureUrl} imgPrefix = {id + '/' + item.id} />,
              onEditIconClick: () => editIconClicked(item.id),
              onDeleteIconClick: () => deleteIconClicked(item.id),
              isAdmin: isAdmin
          })}
      />

      {isAdmin &&
        <>
          <div className='section-title'>
            <h3>Add an Update</h3>
          </div>
          <UpdateCreateFormWithUpload memberid={id} clearOnSuccess={true} />
        </>
      }

          <Modal
            style = {{
              content: {
                width: "50vw"
              },
            }}
            isOpen={modalIsOpen}
            contentLabel="Update Modal"
          >
            <UpdateUpdateFormWithUpload
              clearOnSuccess={true}
              id = {selectedUpdate}
              memberid={id}
              onSuccess = {() => {
                setModalIsOpen(false);
              }}

              onCancel = {() => {
                  setModalIsOpen(false);
                }
              }
            />
          </Modal>
      </div>
    );
  }

  
  export default MemberView;
