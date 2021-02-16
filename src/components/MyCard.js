import React from 'react'
import { Card, Row, Col, Typography, Space } from 'antd';
const { Title } = Typography;
function abbrNum(number, decPlaces = 0) {
    decPlaces = Math.pow(10,decPlaces);
    console.log(typeof number);
    var abbrev = [ "k", "m", "b", "t" ];
    for (var i=abbrev.length-1; i>=0; i--) {
        var size = Math.pow(10,(i+1)*3);
        if(size <= number) {
             number = Math.round(number*decPlaces/size)/decPlaces;
             number += abbrev[i];
             break;
        }
    }

    return number;
}

function MyCard({data}) {
    return (
        <Row style={{ margin: "10px 10px 5px 10px" }} >
            <Col span="8">
                <Card
                    bodyStyle={{padding:"5px 20px 10px 20px"}}
                    style={{height:120,backgroundColor: "orange" }}>
                    <Row justify="space-between" align="middle" style={{height:40,paddingTop:5}}>
                        <Col >
                            <Space size="small">
                                <Title style={{ color: "white" }} level={4}>
                                    Total
                                </Title>
                                <Title style={{ color: "white" }} level={3}>
                                    Members :
                                </Title>
                            </Space>
                        </Col>
                        <Col>
                            <Title style={{ color: "white" }} level={1}>
                                     {abbrNum(data[0].total_members)}
                            </Title>
                        </Col>
                    </Row>
                    <Row justify="space-between" align="middle" style={{height:40,paddingTop:10}}>
                        <Col >
                            <Space size="small">
                                <Title style={{ color: "white" }} level={4}>
                                    Total
                                </Title>
                                <Title style={{ color: "white" }} level={3}>
                                    Rev.
                                </Title>
                                <Title style={{ color: "white", fontSize: '12px' }}>
                                    (THB)
                                </Title>
                                <Title style={{ color: "white" }} level={3}>
                                    :
                                </Title>
                            </Space>
                        </Col>
                        <Col>
                            <Title style={{ color: "white" }} level={1}>
                                {abbrNum(data[0].total_amount)}
                            </Title>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span="16">
                <Card 
                     bodyStyle={{padding:"5px 10px 10px 10px"}}
                  style={{height:120,backgroundColor: "#808080"}}>
                        <Row justify="center" align="middle" style={{height:20}}>
                        <Col>
                        <Title style={{ color: "white" }} level={4}>
                        {data[0].tier_name}
                                </Title>
                        </Col>
                    </Row>
                    <Row justify="space-between" align="middle" style={{height:20,paddingTop:10}} >
                        <Col >
                            <Space size="small">
                                <Title style={{ color: "white" }} level={5}>
                                    Total
                                </Title>
                                <Title style={{ color: "white" }} level={4}>
                                    Members :
                                </Title>
                            </Space>
                        </Col>
                        <Col>
                            <Title style={{ color: "white" }} level={2}>
                            {abbrNum(data[0].total_members)}
                            </Title>
                        </Col>
                    </Row>
                    <Row justify="space-between" align="middle" style={{height:20,paddingTop:30}}>
                        <Col >
                            <Space size="small">
                                <Title style={{ color: "white" }} level={5}>
                                    Total
                                </Title>
                                <Title style={{ color: "white" }} level={4}>
                                    Rev.
                                </Title>
                                <Title style={{ color: "white", fontSize: '10px' }}>
                                    (THB)
                                </Title>
                                <Title style={{ color: "white" }} level={4}>
                                    :
                                </Title>
                            </Space>
                        </Col>
                        <Col>
                            <Title style={{ color: "white" }} level={2}>
                            {abbrNum(data[0].total_amount)}
                            </Title>
                        </Col>
                    </Row>
                 
                   
                </Card>
            </Col>
        </Row>
    )
}

export default MyCard
