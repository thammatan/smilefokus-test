import './App.css';
import React, { useState, useEffect } from 'react'
import { Layout, Button, Breadcrumb, Typography, Row, Col, Space, Select, } from 'antd';
import { HomeFilled, DownloadOutlined, PrinterFilled, AreaChartOutlined ,CalendarOutlined} from '@ant-design/icons';
import MyTable from './components/MyTable'
import MyCard from './components/MyCard'
import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'
const { Header, Content, Footer } = Layout;
const { Option } = Select;
const { Title, Text } = Typography;
const rawdata = {
  "code": 0,
  "msg": "",
  "data": {
    "list": [
      {
        "customername": "Bussaracum ",
        "customertier": "Gold",
        "customerphone": "0824669224",
        "totaltransaction": 1,
        "totalamount": 500008,
        "totalreward": 40000,
        "remainingpoint": 40000
      },
      {
        "customername": "Leelar ",
        "customertier": "Platinum",
        "customerphone": "0874368466",
        "totaltransaction": 1,
        "totalamount": 10000,
        "totalreward": 800,
        "remainingpoint": 800
      },
      {
        "customername": "Papawarin M.",
        "customertier": "Silver",
        "customerphone": "0900843048",
        "totaltransaction": 1,
        "totalamount": 111050,
        "totalreward": 4442,
        "remainingpoint": 4442
      },
      {
        "customername": "VeryCust ",
        "customertier": "White",
        "customerphone": "0199909999",
        "totaltransaction": 1,
        "totalamount": 8600,
        "totalreward": 2064,
        "remainingpoint": 2064
      },
      {
        "customername": "smilecustomer ",
        "customertier": "Black",
        "customerphone": "0187773377",
        "totaltransaction": 1,
        "totalamount": 9840,
        "totalreward": 393,
        "remainingpoint": 393
      }
    ],
    "summarytier": [
      {
        "total_members": 5,
        "total_amount": 731899,
        "tier_name": "Platinum"
      }
    ],
    "summary": {
      "totaltransaction": 5,
      "totalpoint": 47699,
      "remainingpoint": 89983,
      "lifetimevalue": 985339
    },
    "total": 5
  }
}
function App() {
  const [data, setdata] = useState(rawdata.data)
  useEffect(() => {
    console.log(data);
  }, [])

  return (
    <Layout>

      <Content style={{ height: '90vh'}}>
        <MyHeader />
        <Row style={{ margin: 10 }} justify="space-between">
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item >
                <HomeFilled />
              </Breadcrumb.Item>
              <Breadcrumb.Item >
                <span> <Text>Business Insight</Text> </span>
              </Breadcrumb.Item>
              <Breadcrumb.Item >
                <span><Text>Report</Text></span>
              </Breadcrumb.Item>
              <Breadcrumb.Item >
                <span><Text>Member</Text></span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span><Text strong style={{ color: "orange", fontSize: "24px" }}>Member</Text></span></Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col>
            <Space>
              <Button className="my-button" style={{ backgroundColor: 'orange' }} shape="circle" icon={<AreaChartOutlined style={{ color: 'white' }} />} />
              <Button className="my-button" style={{ backgroundColor: 'orange' }} shape="circle" icon={<DownloadOutlined style={{ color: 'white' }} />} />
              <Button className="my-button" style={{ backgroundColor: 'orange' }} shape="circle" icon={<PrinterFilled style={{ color: 'white' }} />} />
            </Space>
          </Col>
        </Row>
        <Row style={{ margin: 10 }} justify="space-between" align="bottom">
          <Col>
            <Space align="baseline">
              <Title style={{ color: 'orange' }} level={4}>Yearly Member</Title>
              <Title style={{ color: 'orange' }} level={5}>01-Jan-2020 to 31-Dec-2020</Title>
            </Space>
          </Col>
          <Col>
          <Space>
            <Select size="small" defaultValue="year" style={{ color:'orange' }}>
              <Option value="day">Day View</Option>
              <Option value="month">Month View</Option>
              <Option value="year">
                Year View
              </Option>
            </Select>
            <div>
              <Button size="middle">
                2020
              </Button>
              <Button icon={<CalendarOutlined />} />
            </div>
          </Space>
          </Col>
        </Row>
        <MyCard data={data.summarytier} />
        <MyTable data={data.list} />
      </Content>
      <footer style={{ margin: 10  }}><MyFooter data={data.summary} /></footer>
    </Layout>
  );
}

export default App;
