const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="datatable">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                {data.map((data1) => {
                        <tr key={data1.id}></tr>
                        <td>{data1.id}</td>
                        <td>{data1.name}</td>
                        <td>{data1.email}</td>
                        <td>{data1.phone}</td>
                })}
            </table>
        </div>
    </div>
  )
}

export default Dashboard