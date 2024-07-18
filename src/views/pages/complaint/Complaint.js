import React from "react";
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
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Complaint = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Striped rows</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-body-secondary small">
                            Use <code>striped</code> property to add zebra-striping to any table row within the{' '}
                            <code>&lt;CTableBody&gt;</code>.
                        </p>
                        <DocsExample href="components/table#striped-rows">
                            <CTable striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>Mark</CTableDataCell>
                                        <CTableDataCell>Otto</CTableDataCell>
                                        <CTableDataCell>@mdo</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>Jacob</CTableDataCell>
                                        <CTableDataCell>Thornton</CTableDataCell>
                                        <CTableDataCell>@fat</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                                        <CTableDataCell>@twitter</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <p className="text-body-secondary small">
                            These classes can also be added to table variants:
                        </p>
                        <DocsExample href="components/table#striped-rows">
                            <CTable color="dark" striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>Mark</CTableDataCell>
                                        <CTableDataCell>Otto</CTableDataCell>
                                        <CTableDataCell>@mdo</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>Jacob</CTableDataCell>
                                        <CTableDataCell>Thornton</CTableDataCell>
                                        <CTableDataCell>@fat</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                                        <CTableDataCell>@twitter</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <DocsExample href="components/table#striped-rows">
                            <CTable color="success" striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>Mark</CTableDataCell>
                                        <CTableDataCell>Otto</CTableDataCell>
                                        <CTableDataCell>@mdo</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                        <CTableDataCell>Jacob</CTableDataCell>
                                        <CTableDataCell>Thornton</CTableDataCell>
                                        <CTableDataCell>@fat</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                        <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                                        <CTableDataCell>@twitter</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Complaint;