import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import { db } from '../../../firebase/Firebase'
import { collection, getDocs } from 'firebase/firestore'
import moment from 'moment'
import { AppSidebar, AppFooter, AppHeader } from '../../../components'
import Buttons from '../../buttons/buttons/Buttons'
import { Link } from 'react-router-dom'

const Tables = () => {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Complaint'));
        const data = querySnapshot.docs.map((doc, index) => ({
          id: doc.id,
          index: index + 1,
          ...doc.data(),
        }));
        setComplaints(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <CRow>
            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardHeader>
                  <strong>Data Pengaduan</strong> <small></small>
                </CCardHeader>
                <CCardBody>
                  {/* <p className="text-body-secondary small">
              Use <code>striped</code> property to add zebra-striping to any table row within the{' '}
              <code>&lt;CTableBody&gt;</code>.
            </p> */}
                  {/* <DocsExample href="components/table#striped-rows"> */}
                  <CTable striped>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">No</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Instansi</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {complaints.map((complaint) => (
                        <CTableRow key={complaint.id}>
                          <CTableHeaderCell scope="row">{complaint.index}</CTableHeaderCell>
                          <CTableDataCell>{complaint.instansi}</CTableDataCell>
                          <CTableDataCell>{complaint.email}</CTableDataCell>
                          <CTableDataCell>{complaint.status}</CTableDataCell>
                          <CTableDataCell>{moment(complaint.date).format('DD-MMMM-YYYY')}</CTableDataCell>
                          <CTableDataCell>
                            <Link to={`/edit/${complaint.id}`}>
                              <CButton type='submit' color="primary" className="px-4">
                                Edit
                              </CButton>
                            </Link>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default Tables
