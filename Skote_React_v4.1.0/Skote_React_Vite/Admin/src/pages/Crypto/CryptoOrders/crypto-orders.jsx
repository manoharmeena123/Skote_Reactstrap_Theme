import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import withRouter from "../../../components/Common/withRouter";

import { Pdate, Type, Value, ValueinUSD, Status, Coin } from "./CryptoCol";

import TableContainer from "../../../components/Common/TableContainer";

// flatpickr
import "flatpickr/dist/themes/material_blue.css";
import FlatPickr from "react-flatpickr";

import "/src/assets/scss/datatables.scss";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";
import { getCryptoOrders } from "/src/store/crypto/actions";
import { handleSearchData } from "../../../components/Common/searchFile";
import Spinners from "../../../components/Common/Spinner";

const CryptoOrders = (props) => {
  //meta title
  document.title = "Orders | Skote - Vite React Admin & Dashboard Template";

  const { orders, onGetOrders, loading } = props;
  const [cryptoOrder, setCryptoOrder] = useState()
  const [activeTab, setActiveTab] = useState("1");
  const [startDate, setStartDate] = useState(new Date('04-03-2020'));
  const [selectCoin, setselectCoin] = useState('Bitcoin');
  const [selectType, setselectType] = useState('Buy');
  const [selectStatus, setselectStatus] = useState('Completed');
  const [isLoading, setLoading] = useState(loading)

  useEffect(() => {
    onGetOrders();
  }, [onGetOrders]);

  useEffect(() => {
    setCryptoOrder(orders)
  }, [orders])

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  // search 
  const handleSearch = (ele) => {
    if (ele) {
      handleSearchData({ setState: setCryptoOrder, data: orders, item: ele })
    } else {
      setCryptoOrder(orders)
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "pdate",
        filterable: true,
        isSort: true,
        Cell: cellProps => {
          return <Pdate {...cellProps} />;
        },
      },
      {
        Header: "Type",
        accessor: "type",
        filterable: true,
        isSort: true,
        Cell: cellProps => {
          return <Type {...cellProps} />;
        },
      },
      {
        Header: "Coin",
        accessor: "coin",
        filterable: true,
        isSort: true,
        Cell: cellProps => {
          return <Coin {...cellProps} />;
        },
      },
      {
        Header: "Value",
        accessor: "value",
        filterable: true,
        isSort: true,
        Cell: cellProps => {
          return <Value {...cellProps} />;
        },
      },
      {
        Header: "Value in USD",
        accessor: "valueInUsd",
        filterable: true,
        isSort: true,
        Cell: cellProps => {
          return <ValueinUSD {...cellProps} />;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        isSort: true,
        Cell: cellProps => {
          return <Status {...cellProps} />;
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Crypto" breadcrumbItem="Orders" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-3">Orders</h4>
                  {
                    isLoading ? <Spinners setLoading={setLoading} />
                      :
                      <>
                        <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: activeTab === "1",
                              })}
                              onClick={() => {
                                toggleTab("1");
                              }}
                            >
                              All Orders
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: activeTab === "2",
                              })}
                              onClick={() => {
                                toggleTab("2");
                              }}
                            >
                              Processing
                            </NavLink>
                          </NavItem>
                        </ul>

                        <TabContent activeTab={activeTab} className="p-3">
                          <TabPane tabId="1" id="all-order">
                            <Form>
                              <Row className="mb-4">
                                <div className="col-xl col-sm-6">
                                  <FormGroup className="mt-3 mb-0">
                                    <Label>Date :</Label>
                                    <FlatPickr
                                      className="form-control"
                                      name="joiningDate"
                                      selected={startDate}
                                      onChange={(date) => setStartDate(date)}
                                      placeholder="Select time"
                                      options={{
                                        dateFormat: "d M, Y"
                                      }}
                                    />
                                  </FormGroup>
                                </div>

                                <div className="col-xl col-sm-6">
                                  <FormGroup className="mt-3 mb-0">
                                    <Label>Coin</Label>
                                    <select className="form-control select2-search-disable" value={selectCoin}
                                      onChange={(e) => {
                                        setselectCoin(e.target.value);
                                        handleSearch(e.target.value)
                                      }}>
                                      <option value="Bitcoin" defaultValue>
                                        Bitcoin
                                      </option>
                                      <option value="Ethereum">Ethereum</option>
                                      <option value="litecoin">litecoin</option>
                                    </select>
                                  </FormGroup>
                                </div>

                                <div className="col-xl col-sm-6">
                                  <FormGroup className="mt-3 mb-0">
                                    <Label>Type</Label>
                                    <select className="form-control select2-search-disable" value={selectType}
                                      onChange={(e) => {
                                        setselectType(e.target.value);
                                        handleSearch(e.target.value)
                                      }}>
                                      <option value="Buy" defaultValue>
                                        Buy
                                      </option>
                                      <option value="Sell">Sell</option>
                                    </select>
                                  </FormGroup>
                                </div>

                                <div className="col-xl col-sm-6">
                                  <FormGroup className="mt-3 mb-0">
                                    <Label>Status</Label>
                                    <select className="form-control select2-search-disable" value={selectStatus}
                                      onChange={(e) => {
                                        setselectStatus(e.target.value);
                                        handleSearch(e.target.value)
                                      }}>
                                      <option value="CO" defaultValue>
                                        Completed
                                      </option>
                                      <option value="PE">Pending</option>
                                    </select>
                                  </FormGroup>
                                </div>

                                <div className="col-xl col-sm-6 align-self-end">
                                  <div className="mb-3">
                                    <Button
                                      type="button"
                                      color="primary"
                                      className="w-md"
                                    >
                                      Filter
                                    </Button>
                                  </div>
                                </div>
                              </Row>
                            </Form>


                            <TableContainer
                              columns={columns}
                              data={cryptoOrder || []}
                              isGlobalFilter={true}
                              isAddOptions={false}
                              customPageSize={10}
                              iscustomPageSizeOptions={true}
                              isPagination={true}
                              isShowingPageLength={true}
                              paginationDiv="col-sm-12 col-md-7"
                              pagination="pagination justify-content-end pagination-rounded"
                              tableClass="table-hover datatable dt-responsive nowrap dataTable no-footer dtr-inline"
                            />
                          </TabPane>
                          <TabPane tabId="2" id="processing">
                            <div>
                              <TableContainer
                                columns={columns}
                                data={orders}
                                isGlobalFilter={true}
                                isAddOptions={false}
                                customPageSize={10}
                                iscustomPageSizeOptions={true}
                                isShowingPageLength={true}
                                isPagination={true}
                                paginationDiv="col-sm-12 col-md-7"
                                pagination="pagination justify-content-end pagination-rounded"
                                tableClass="table-hover datatable dt-responsive nowrap dataTable no-footer dtr-inline"
                              />
                            </div>
                          </TabPane>
                        </TabContent>
                      </>
                  }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

CryptoOrders.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

const mapStateToProps = ({ crypto }) => ({
  orders: crypto.orders,
  loading: crypto.loading
});

const mapDispatchToProps = (dispatch) => ({
  onGetOrders: () => dispatch(getCryptoOrders()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CryptoOrders));
