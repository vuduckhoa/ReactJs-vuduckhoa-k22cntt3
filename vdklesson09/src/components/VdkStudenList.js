
export default function VdkStudenList({renderVdkStudentList}) {
    console.log("Data",renderVdkStudentList);
    let vdkElement =renderVdkStudentList.map((VdkStuden,index)=>{
        return(
            <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{VdkStuden.vdkId}</td>
                        <td>{VdkStuden.vdkName}</td>
                        <td>{VdkStuden.vdkAge}</td>
                        <td>{VdkStuden.vdkEmail}</td>
                        <td>{VdkStuden.vdkStatus}</td>
                        <td>
                            delet|edit
                        </td>
                    </tr>
        )
    })
    return (
        <div>
            <h2>danh sacsh sinh vien</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ma sinh vien</th>
                        <th scope="col">ho ten</th>
                        <th scope="col">tuoi</th>
                        <th scope="col">dien thoai</th>
                        <th scope="col">trang thai</th>
                        <th scope="col">chuc nang</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>

        </div>
    )
}
