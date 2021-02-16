import React from 'react'
import {  Avatar, Row, Col ,Space ,Typography } from 'antd';
import { UserOutlined ,HeartFilled} from '@ant-design/icons';
const {Text} = Typography
function MyHeader() {
    return (
        <div style={{height:"40px",width:"100%"}}>
        <Row >
            <Col span="16" style={{ backgroundColor: "black" }}>
                <Row justify="space-between">
                    <Col >
                      <Space>
                      <img style={{width:100}} src="https://www.smilefokus.com/userfiles/files/logo-smileSME-2562x595px.png" alt="logo" />
                      <p style={{position:'absolute',color:'white',right:10,top:5}}>  SME</p>
                      </Space>
                      
                    </Col>
                    <Col>
                    <Space style={{marginRight:10}}>
                    <Avatar style={{ backgroundColor: 'white' }} icon={<UserOutlined style={{color:'orange'}} />} />
                        <div>
                            <Text style={{color:"orange"}} strong>MR. ADMIN</Text>
                            <br/>
                            <Text style={{color:"white"}} >Head Quaerter</Text>
                        </div>
                    </Space>
                       
                    </Col>
                </Row>
              
            </Col>
            <Col span="8" style={{ backgroundColor: "orange" }}>
            <Row justify="end" align="middle">
                <Col>
                <Space style={{marginRight:10}}>
                <Text style={{fontSize:18,color:"white"}} >MENU</Text>
                <HeartFilled style={{fontSize:32,color:"white"}} />
                </Space>
                </Col>
            </Row>
                
             
            </Col>
      </Row>
        </div>
    )
}

export default MyHeader
