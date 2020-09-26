import React from 'react';
import HeaderNav from 'components/shared/header-nav/HeaderNav';
import LeftNav from 'components/shared/left-nav/LeftNav';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';


const UserManagement = () => {
  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="User Management" isAdmin="true"/>
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th style={{padding: '1rem 1rem 1rem 3rem'}} scope="col">Date</th>
                      <th scope="col">Order No</th>
                      <th scope="col">IP No</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Credit Bal</th>
                      <th scope="col">Order Amount</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>

                    {/* <CreditApprovalItem /> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement;