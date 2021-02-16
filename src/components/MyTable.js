import React from 'react'
import { Typography , Space ,Row,Col} from 'antd';
import { StepForwardOutlined , StepBackwardOutlined , RightOutlined , LeftOutlined } from '@ant-design/icons';
const {Text} = Typography
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  function formatTel(num) {
    return num.toString().replace(/^(\d{3})(\d{3})(\d{4})$/, '$1 $2 $3')
  }
function MyTable({data}) {
    return (
        <div style={{margin:"0px 10px 10px 10px"}}>
 <table id="my-table" >
  <tr>
    <th style={{width:'20%'}}>Name</th>
    <th style={{width:'15%'}}>ID</th>
    <th style={{width:'10%'}}>Tier</th>
    <th style={{width:'15%'}}>LTV</th>
    <th style={{width:'10%'}}>Total Trans.</th>
    <th style={{width:'15%'}}>Total Points</th>
    <th style={{width:'15%'}}>Reamaining Points</th>
  </tr>
    {data.map(value =>
         <tr>
         <td>{value.customername}</td>
         <td style={{textAlign:"center"}}>{formatTel(value.customerphone)}</td>
         <td style={{textAlign:"center"}}>{value.customertier}</td>
         <td style={{textAlign:"right"}}>{formatNumber(value.totalamount)}</td>
         <td style={{textAlign:"right"}}>{formatNumber(value.totaltransaction)}</td>
         <td style={{textAlign:"right"}}>{formatNumber(value.totalreward)}</td>
         <td style={{textAlign:"right"}}>{formatNumber(value.remainingpoint)}</td>
       </tr>
        )}
  
    </table>
    <Row justify="end">
      <Col>
      <div style={{margin:10, float:'left'}}>
        <Space>
        <Text strong>1-5 of 5</Text>
        <StepBackwardOutlined style={{color:'grey'}} onClick={e => console.log('StepBackwardOutlined')} />
        <LeftOutlined style={{color:'grey'}} onClick={e => console.log('LeftOutlined')} />
        <RightOutlined style={{color:'grey'}} onClick={e => console.log('RightOutlined')} />
        <StepForwardOutlined style={{color:'grey'}} onClick={e => console.log('StepForwardOutlined')} />
        </Space>
      </div>
      </Col>
    </Row>
     
        </div>
       
    )
}

export default MyTable
