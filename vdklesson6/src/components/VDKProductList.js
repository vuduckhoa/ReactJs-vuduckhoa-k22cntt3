import React, { Component } from 'react'

export default class VDKProductList extends Component {
  vdkHandleEdit=(product)=>{
    console.log("Edit:",product);
    this.props.vdkOnEdit(product)
      }
  render() {
    let{renderProducts}=this.props;
    console.log("App:",renderProducts);
    let elementProduct = renderProducts.map((item,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.active?'hien thi':'an'}</td>
                    <td>
                      <button className='btn btn-success mx-1'
                      name='vdkBtnEdit'
                      onClick={()=>this.vdkHandleEdit(item)}
                      >
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button className='btn btn-danger mx-1'
                      name='vdkBtndelete'><i class="fa-solid fa-trash"></i></button>
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
                    <th>#</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>active</th>
                    <th>action</th>
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
