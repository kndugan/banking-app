function CreateAccount(){
  const [show, setShow]         = React.useState(true); 
  const [status, setStatus]     = React.useState(''); 
  const [name, setName]         = React.useState(''); 
  const [email, setEmail]       = React.useState(''); 
  const [password, setPassword] = React.useState(''); 
  const ctx = React.useContext(UserContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: Please enter a valid ' + label);
      setTimeout(() => setStatus(''), 5000);
      return false; 
    } 
    return true; 
  }

  

  function handleCreate(){
    console.log(name,email,password); 
    if (!validate(name,     'name'))      return; 
    if (!validate(email,    'email'))     return; 
    if (!validate(password, 'password'))  return; 
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <div className="container">
      <Card 
      bgcolor="light"
      txtcolor="black"
      header="Create Account"
      status={status}
      body={show ? (
        <>
        Name<br/>
        <input type="input" className="form-control" id="name"  placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
        Email Address<br/>
        <input type="email" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
        <button type="submit" className="btn btn-dark" onClick={handleCreate}>Create Account</button>
        </>
      
      ) : (
        <>
        <h5>You've Successfully Created Your Account!</h5>
        <button type="submit" className="btn btn-dark" onClick={clearForm}>Add Another Account</button>
        </>
      )}
      />
    </div>
  );
}

// function CreateAccount(){
//   const ctx = React.useContext(UserContext);

//   function handle(data){
//     ctx.users.push({name:data.name,email:data.email,password:data.password,balance:100});
//     return true;
//   }

//   return (
//     <BankForm
//       bgcolor="light"
//       txtcolor="black"
//       handle={handle}
//       hideAmount={true}
//       successButton="Add Another Account"
//     />
//   )
// }