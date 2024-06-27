import React from 'react'

export default function VdkListUser({renderVdkListUser}) {
    console.log("VdkListUser:",renderVdkListUser);

    let vdkElemenUser=renderVdkListUser.map((vdkUser,index)=>{
    return(
        <>
         <tr>
                    <td>{vdkUser.Id}</td>
                    <td>{vdkUser.UserName}</td>
                    <td>{vdkUser.Password}</td>
                    <td>{vdkUser.Email}</td>
                    <td>{vdkUser.Phone}</td>
                    <td>...</td>
                   
                </tr>
        </>
    )
})
  return (
    <div className='row'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>chuc nang</th>
                </tr>
            </thead>
            <tbody>
               {vdkElemenUser}
            </tbody>
        </table>
    </div>
  )
}
