import { Table } from "antd";
import { Icon } from "@material-ui/core";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";

const TableContent = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/organizacion")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "División",
      dataIndex: "division",
      sorter: (a, b) => (a.division > b.division ? -1 : 1),
      filters: [
        {
          text: "CEO",
          value: "CEO",
        },
        {
          text: "Math",
          value: "Math",
        },
        {
          text: "Growth",
          value: "Growth",
        },
        {
          text: "Strategy",
          value: "Strategy",
        },
      ],
      onFilter: (value, record) => {
        return record.division === value;
      },
    },
    {
      key: "2",
      title: "División Superior",
      dataIndex: "divisionSuperior",
      sorter: (a, b) => (a.divisionSuperior > b.divisionSuperior ? -1 : 1),
      filters: [
        {
          text: "Dirección general",
          value: "Dirección general",
        },
        {
          text: "Producto",
          value: "Producto",
        },
        {
          text: "Operaciones",
          value: "Operaciones",
        },
      ],
      onFilter: (value, record) => {
        return record.divisionSuperior === value;
      },
    },
    {
      key: "3",
      title: "Colaboradores",
      dataIndex: "colaboradores",
      sorter: (a, b) => (a.colaboradores > b.colaboradores ? -1 : 1),
      filters: [
        {
          text: "delectus",
          value: "delectus",
        },
        {
          text: "quis",
          value: "quis",
        },
        {
          text: "fugiat",
          value: "fugiat",
        },
      ],
      onFilter: (value, record) => {
        return record.title === value;
      },
    },
    {
      key: "4",
      title: "Nivel",
      dataIndex: "nivel",
      sorter: (a, b) => (a.nivel > b.nivel ? -1 : 1),
      filters: [
        {
          text: "1",
          value: 1,
        },
        {
          text: "2",
          value: 2,
        },
        {
          text: "3",
          value: 3,
        },
      ],
      onFilter: (value, record) => {
        return record.nivel === value;
      },
    },
    {
      key: "5",
      title: "Sub divisiones",
      dataIndex: "subDivisiones",
      sorter: (a, b) => (a.subDivisiones > b.subDivisiones ? -1 : 1),
      render: (record, index) => {
        return (
          <>
            <div className="subDivisiones" key={`subdivicion-${index}`}>
              {record.length}
              <Icon className="subDivisionesIcon">add_circle</Icon>
            </div>
          </>
        );
      },
    },
    {
      key: "6",
      title: "Embajadores",
      dataIndex: "embajadores",
    },
  ];
  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        rowSelection={true}
        bordered={true}
        size="small"
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      ></Table>
    </div>
  );
};

export default TableContent;
