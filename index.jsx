
function MyNavbar({addToList}) {
  const { Navbar,Container,Nav,NavDropdown } = ReactBootstrap;
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <Nav.Link href="https://tschanzvera.github.io/">Github Portfolio</Nav.Link>
            <NavDropdown title="Weekly todos" id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={e =>{addToList("Grocery shopping")}}>Grocery shopping</NavDropdown.Item>
              <NavDropdown.Item onClick={e =>{addToList("Vacuuming")}} >
                Vacuuming
              </NavDropdown.Item>
              <NavDropdown.Item onClick={e =>{addToList("Laundry")}} >Laundry</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    
    <div className="app">
        <MyNavbar addToList={addTodo}></MyNavbar>
      <div className="todo-list" >     
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
