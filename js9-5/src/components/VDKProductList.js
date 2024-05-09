import React, { Component } from 'react'

export default class VDKProductList extends Component {

  render() {
    let{renderProducts}=this.props;
    console.log("Products:",renderProducts);
    let fnStatus =(param)=>{
      if(param===1){
        return 'Active';
      }
      return 'nonActive';
    }
    let elementProduct = renderProducts.map((item,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {/*<td>{item.status===1?'Active':'Nonactive'}</td>*/}
                    <td>
                      {fnStatus(item.status)}
                    </td>
                </tr>
            </>
        )
    })
    return (
      <div>
        <h2> danh sach san pham</h2>
        <table className='table table-brodered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                {elementProduct}
            </tbody>
        </table>
      </div>
    )
  }
}
