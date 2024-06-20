import React from 'react'

export default function VdkCategoryList({renderVdkCategories}) {
    console.log("renderVdkCategories:",renderVdkCategories)
    let VdkCategoryElement =renderVdkCategories.map((VdkCategory,index)=>{
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <th>{VdkCategory+vdkId}</th>
                <th>{VdkCategory+vdkCategoryName}</th>
                <th>{VdkCategory+vdkCategoryStatus===true?"hien thi":"tam khoa"}</th>np
            </tr>
        )
    })
  return (
    <div className='container m-2'>
        <h2>danh sach cac loai san pham</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ma loai</th>
                    <th>ten loai</th>
                    <th>trang thai</th>
                    <th>chuc nang</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
  )
}
