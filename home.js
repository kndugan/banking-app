function Home(){ 
  const ctx = React.useContext(UserContext);
  const name = ctx.users[0].name;
  const email = ctx.users[0].email;

  const welcomeMessage = "Welcome to the Bank " + name + "!";
  const textMessage ="You can move around using the navigation bar.";
  

  return (
    <div className="container">
      <Card 
        bgcolor="light"
        txtcolor="black"
        header="BadBank Landing Page"
        title={welcomeMessage}
        text={textMessage}
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />  
    </div>
  );  
}
