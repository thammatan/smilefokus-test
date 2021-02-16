import React from 'react'
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
function MyFooter({data}) {
    return (
        <table id="my-table">
         <tr className="footer">
         <td style={{width:'20%',textAlign:"center"}}>Total</td>
         <td style={{width:'15%',textAlign:"center"}}></td>
         <td style={{width:'10%',textAlign:"center"}}></td>
         <td style={{width:'15%',textAlign:"right"}}>{formatNumber(data.lifetimevalue)}</td>
         <td style={{width:'10%',textAlign:"right"}}>{formatNumber(data.totaltransaction)}</td>
         <td style={{width:'15%',textAlign:"right"}}>{formatNumber(data.totalpoint)}</td>
         <td style={{width:'15%',textAlign:"right"}}>{formatNumber(data.remainingpoint)}</td>
       </tr>
        </table>
    )
}

export default MyFooter
