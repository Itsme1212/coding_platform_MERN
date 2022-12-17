import React from 'react';
import { CCard,CCardImage,CCardBody ,CCardText, CButton, CCardTitle, CRow, CCol} from '@coreui/react';

import { ProductCard } from 'react-ui-cards';

// import NavBar from '../NavBar'

export const Certificate=() => {
  return (

    <div className='Certificate-Main'>
 <CCard className="mb-3" style={{ maxWidth: '540px' }}>
  <CRow className="g-0">
    <CCol md={4}>
      <CCardImage src="https://www.aljazeera.com/wp-content/uploads/2022/10/h_56549938.jpg?resize=770%2C513" />
    </CCol>
    <CCol md={8}>
      <CCardBody>
        <CCardTitle>Python </CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CCardText>
        <CCardText>
          <small className="text-medium-emphasis">Last updated 3 mins ago</small>
        </CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard>
</div>


  );
}