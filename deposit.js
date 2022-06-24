function Deposit(){
  const [show, setShow]        = React.useState(true); 
  const [status, setStatus]    = React.useState(''); 
  const [balance, setBalance]  = React.useState('100'); 
  const [deposit, setDeposit]  = React.useState(''); 

  const balanceMessage = "Balance: $" + balance;
  const ctx = React.useContext(UserContext);
  return (
    <div className="container">
        <Card 
        bgcolor="success"
        txtcolor="white"
        header="Deposit"
        text={balanceMessage}
        body="Deposit Amount"
       
        />
    </div>
  )
}