import { 
    MemberSummaryPostCollection, MainPageTitleResponsivePanel, MemberCreateFormWithUpload,
  } from '../ui-components';
import S3Image  from '../components/S3Image'; 
import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react/styles.css';

  function Home() {
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
                  <S3Image imgKey = {item.pictureUrl} imgPrefix = {item.id} />
              })}

              templateColumns = {{large: "1fr 1fr", medium: "1fr"}}
              width={{large: "1260px", medium: "480px"}}
            />

            <h3>Add a Member</h3>
            <MemberCreateFormWithUpload />
          </header>
        </div>
      );
  }

  export default Home;