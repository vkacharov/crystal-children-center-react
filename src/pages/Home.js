import { 
    MemberSummaryPostCollection, MainPageTitleResponsivePanel, MemberCreateFormWithUpload,
    MemberUpdateFormWithUpload
  } from '../ui-components';
import S3Image  from '../components/S3Image'; 
import { useState } from 'react';
import Modal from 'react-modal';
import { Member } from "../models";
import { DataStore } from 'aws-amplify';
import { confirmAlert } from 'react-confirm-alert';
import '@aws-amplify/ui-react/styles.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

  Modal.setAppElement()
  function Home({ isAdmin }) {
    const [selectedMember, setSelectedMember] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const editIconClicked = (id) => {
      if (isAdmin) {
        setSelectedMember(id);
        setModalIsOpen(true);
      }
    }

    const deleteMember = async (memberId) => {
      if (isAdmin) {
        const member = await DataStore.query(Member, memberId);
        if (member) {
          DataStore.delete(member);
        }
      }
    }

    const deleteIconClicked = (memberId, memberName) => {
      if (isAdmin) {
        confirmAlert({
          title: 'Delete Member',
          message: `Are you sure you want to delete ${memberName}?`,
          buttons: [
            {
              label: 'Yes',
              onClick: () => deleteMember(memberId)
            },
            {
              label: 'No',
            }
          ]
        });
      }
    }

    return (
        <div className="App">
          <header className="App-header">
            <MainPageTitleResponsivePanel />
            <div className='section-title'>
              <h2>Meet Our Family</h2>
            </div>
            <MemberSummaryPostCollection 
              overrideItems={({ item }) => ({
                imageSlot: 
                  <S3Image imgKey = {item.pictureUrl} imgPrefix = {item.id} />,
                onEditIconClick: () => editIconClicked(item.id),
                onDeleteIconClick: () => deleteIconClicked(item.id, item.name),
                isAdmin: isAdmin
              })}

              templateColumns = {{large: "1fr 1fr", medium: "1fr"}}
              width={{large: "1260px", medium: "480px"}}
            />
            {isAdmin &&
              <>
                 <div className='section-title'>
                  <h3>Create a Member</h3>
                </div>
                <MemberCreateFormWithUpload clearOnSuccess={true}/>
              </>
            }
          </header>

          <Modal
            isOpen={modalIsOpen}
            contentLabel="Member Modal"
          >
            <MemberUpdateFormWithUpload id={selectedMember} clearOnSuccess={true}
              onSuccess = {() => {
                setModalIsOpen(false);
              }}
            />
          </Modal>
        </div>
      );
  }

  export default Home;