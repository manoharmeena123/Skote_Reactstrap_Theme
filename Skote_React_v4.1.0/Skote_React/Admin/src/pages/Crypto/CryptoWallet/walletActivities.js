import React, { useState, useEffect } from "react";
import { useMemo } from "react";
import { Card, CardBody, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { getCryptoProducts as onGetCryptoProducts } from "store/actions";
import TableContainer from "../../../components/Common/TableContainer";
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from "reselect";
import { Idno, Pdate, Type, Value, ValueInUsd, Amount } from "./CryptoWalCol";
import Spinners from "components/Common/Spinner";

const WalletActivities = ({ isLoading, setLoading }) => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("all");

  const selectCryptoState = (state) => state.crypto;
  const CryptoProperties = createSelector(
    selectCryptoState,
    (Crypto) => ({
      products: Crypto.products,
    })
  );

  const {
    products
  } = useSelector(CryptoProperties);

  const [productData, setSetProductData] = useState([products]);

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    dispatch(onGetCryptoProducts());
    if (activeTab !== 'all') {
      var allProduct = products.filter(product =>
        product.type === activeTab
      );
    } else {
      var allProduct = products;
    }

    setSetProductData(allProduct)
  }, [activeTab]);

  const columns = useMemo(
    () => [
      {
        Header: "Id No",
        accessor: "idno",
        filterable: true,
        isSort: false,
        Cell: cellProps => {
          return <Idno {...cellProps} />;
        },
      },
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
        Header: "Currency",
        accessor: "coin",
        filterable: true,
        isSort: true,
        Cell: cellProps => {
          return <Value {...cellProps} />;
        },
      },
      {
        Header: "Amount",
        accessor: "amount",
        filterable: true,
        isSort: true,
        Cell: cellProps => {
          return <Amount {...cellProps} />;
        },
      },
      {
        Header: "Amount in USD",
        accessor: "valueInUsd",
        filterable: true,
        isSort: true,
        Cell: cellProps => {
          return <ValueInUsd {...cellProps} />;
        },
      },
    ],
    []
  );

  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">Activities</h4>
        {
          isLoading ? <Spinners setLoading={setLoading} />
            :
            <>
              <ul className="nav nav-tabs nav-tabs-custom">
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "all",
                    })}
                    onClick={() => {
                      toggleTab("all");
                    }}
                  >
                    All
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "Buy",
                    })}
                    onClick={() => {
                      toggleTab("Buy");
                    }}
                  >
                    Buy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "Sell",
                    })}
                    onClick={() => {
                      toggleTab("Sell");
                    }}
                  >
                    Sell
                  </NavLink>
                </NavItem>
              </ul>
              <div className="mt-4">

                <TableContainer
                  tableClass="table-hover dt-responsive nowrap dataTable no-footer dtr-inline"
                  columns={columns}
                  data={activeTab !== 'all' ? productData : products}
                  isGlobalFilter={true}
                  customPageSize={10}
                  isPagination={true}
                  isShowingPageLength={true}
                  iscustomPageSizeOptions={true}
                  paginationDiv="col-sm-12 col-md-7"
                  pagination="pagination justify-content-end pagination-rounded"
                />

              </div>
            </>
        }
      </CardBody>
    </Card>
  );
};

export default WalletActivities;
