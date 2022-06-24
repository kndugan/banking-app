function AllData(){
    const ctx = React.useContext(UserContext);
  return (
    <div className="container">
        <Card 
        bgcolor="secondary"
        txtcolor="white"
        header="All Data"
        body={JSON.stringify(ctx)}
        />
    </div>
  )
}

