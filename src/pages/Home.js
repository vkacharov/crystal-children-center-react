import { 
    MemberSummaryPostCollection, MainPageTitleResponsivePanel, MemberCreateFormWithUpload,
    MemberUpdateFormWithUpload
  } from '../ui-components';
import S3Image  from '../components/S3Image'; 
import { useState } from 'react';
import '@aws-amplify/ui-react/styles.css';
import Modal from 'react-modal';

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
                <MemberCreateFormWithUpload />
              </>
            }
          </header>

          <Modal
            isOpen={modalIsOpen}
            contentLabel="Member Modal"
          >
            <MemberUpdateFormWithUpload id={selectedMember} 
              onSuccess = {() => {
                setModalIsOpen(false);
              }}
            />
          </Modal>
        </div>
      );
  }

  export default Home;