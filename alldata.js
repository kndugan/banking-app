function AllData(){
    const ctx = React.useContext(UserContext);
    console.log(JSON.stringify(ctx))

  return (
    <div className="card mycard">
      <div className="card-header">
        All Data
      </div>
      <table className="card-table table">
        <thead>
          <tr>
            <th data-field="name" scope="col">Name</th>
            <th data-field="email" scope="col">Email</th>
            <th data-field="password" scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ctx.users[0].name}</td>
            <td>{ctx.users[0].email}</td>
            <td>{ctx.users[0].password}</td>
          </tr>
          <tr>
            <td>{ctx.users[1].name}</td>
            <td>{ctx.users[1].email}</td>
            <td>{ctx.users[1].password}</td>
          </tr>
          <tr>
            <td>{ctx.users[2].name}</td>
            <td>{ctx.users[2].email}</td>
            <td>{ctx.users[2].password}</td>
          </tr>
        </tbody>
      </table>
    </div>

      
      
  

        // <Card 
        // bgcolor="secondary"
        // txtcolor="white"
        // header="All Data"
        // body={JSON.stringify(ctx)}
        // />

        
    
  )
  
}


