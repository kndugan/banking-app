function Withdraw(){
  const [show, setShow]        = React.useState(true); 
  const [status, setStatus]    = React.useState(''); 
  const [balance, setBalance]  = React.useState('$100'); 
  const [deposit, setDeposit]  = React.useState(''); 

  const balanceMessage = "Balance: " + balance;
  const ctx = React.useContext(UserContext);
  return (
    <div className="container">
        <Card 
        bgcolor="danger"
        txtcolor="white"
        header="Withdraw"
        body={balanceMessage}
        />
    </div>
  )
}
