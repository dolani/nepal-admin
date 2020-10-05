import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LeftNav from 'components/shared/left-nav/LeftNav';
import HeaderNav from 'components/shared/header-nav/HeaderNav';
import CreditApprovalItem from './CreditApprovalItem';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';

import { creditApprovalActions } from 'state/actions/creditApprovalActions';
import Spinner from 'components/shared/spinner/Spinner';


const CreditApproval = () => {
  const dispatch = useDispatch();
  const cdReducer = useSelector(state => state.creditApprovalReducer);
  const creditApprovals = cdReducer.creditApprovals;
  const pending = cdReducer.pending;

  useEffect(() => {
    dispatch(creditApprovalActions.getCreditApprovals())
  }, [dispatch])


  const creditApprovalItems = creditApprovals.map((ca) => <CreditApprovalItem key={ca.id} creditApproval={ca} />);

  return (
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        {pending ? <Spinner /> : null}
        <HeaderNav />
        <LeftNav />
        <div className="page-wrapper" style={{ display: 'block' }}>
          <div className="col-12">
            <div className="card">
              <BreadCrumb title="Orders awaiting Credit Approval" isAdmin="neutral"/>
              <div className="table-responsive">
                <table className="table table-striped mb-0" id="myTable">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th style={{ padding: '1rem 1rem 1rem 0rem' }} scope="col"></th>
                      <th scope="col">IpMan Code</th>
                      <th scope="col">Business Name</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Order No</th>
                      <th scope="col">Total Amount (#)</th>
                      <th scope="col">Credit Balance</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {creditApprovals.length > 0 ? creditApprovalItems : <tr><td>No record available</td></tr>}
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

export default CreditApproval;