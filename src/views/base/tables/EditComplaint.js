import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppSidebar, AppFooter, AppHeader } from '../../../components'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CFormSelect,
} from '@coreui/react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase/Firebase'
import emailjs from 'emailjs-com'

const EditComplaint = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    instansi: '',
    date: '',
    report: '',
    status: '',
    imageURL: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'Complaint', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setFormData(docSnap.data())
      } else {
        console.log('No such document!')
      }
    }

    fetchData()
  }, [id])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({ ...prevData, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const docRef = doc(db, 'Complaint', id)
      await updateDoc(docRef, formData)
      alert('Data updated successfully!')
      console.log(sendEmailNotification(), 'email');
      navigate('/pengaduan')
    } catch (error) {
      console.error('Error updating document:', error)
    }
  }

  const sendEmailNotification = () => {
    const emailParams = {
      to_email: formData.email,
      complaint_title: formData.title,
      complaint_status: formData.status,
    }

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_USER_ID,
      )
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text)
      })
      .catch((err) => {
        console.error('Failed to send email. Error: ', err)
      })
  }

  //   const handleImageClick = () => {
  //     const imgElement = document.getElementById('fullScreenImage')
  //     if (imgElement.requestFullscreen) {
  //       imgElement.requestFullscreen()
  //     } else if (imgElement.mozRequestFullScreen) {
  //       imgElement.mozRequestFullScreen()
  //     } else if (imgElement.webkitRequestFullscreen) {
  //       imgElement.webkitRequestFullscreen()
  //     } else if (imgElement.msRequestFullscreen) {
  //       imgElement.msRequestFullscreen()
  //     }
  //   }

  const downloadImage = (url) => {
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'image.jpg')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <CRow>
            <CCol xs={12} style={{ marginLeft: '2.5rem' }}>
              <CCard className="mb-4" style={{ width: '95%' }}>
                <CCardHeader>
                  <strong>Edit Status Pengaduan</strong>
                </CCardHeader>
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <CFormLabel htmlFor="exampleFormControlInput1">Judul Pengaduan</CFormLabel>
                      <CFormInput
                        type="text"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="exampleFormControlInput1">Email User</CFormLabel>
                      <CFormInput
                        type="text"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="exampleFormControlInput1">Nama Perusahaan</CFormLabel>
                      <CFormInput
                        type="text"
                        id="instansi"
                        value={formData.instansi}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="exampleFormControlInput1">Tanggal Pengaduan</CFormLabel>
                      <CFormInput
                        type="text"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="exampleFormControlTextarea1">
                        Deskripsi Pengaduan
                      </CFormLabel>
                      <CFormTextarea
                        id="report"
                        rows={3}
                        value={formData.report}
                        onChange={handleChange}
                        readOnly
                      ></CFormTextarea>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="status">Status Pengaduan</CFormLabel>
                      <CFormSelect id="status" value={formData.status} onChange={handleChange}>
                        <option value="Diterima">Diterima</option>
                        <option value="Diproses">Diproses</option>
                        <option value="Selesai">Selesai</option>
                      </CFormSelect>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="image">Gambar Pengaduan</CFormLabel>
                      {formData.imageURL && (
                        <div>
                          <img
                            id="fullScreenImage"
                            src={formData.imageURL}
                            alt="Complaint"
                            style={{ width: '300px', cursor: 'pointer', marginRight: '1rem' }}
                          />
                          <CButton color="primary" onClick={() => downloadImage(formData.imageURL)}>
                            lihat image
                          </CButton>
                        </div>
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </CForm>
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

export default EditComplaint
