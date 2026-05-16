import {
   Container,
   Title, 
   Typography, 
   Card, 
   ToDoList, 
   Form, 
   ProgressBar, 
  } from "./components"
import CategoriesList from "./components/CategoriesList/CategoriesList";
import { useSelector } from "react-redux";


function App() {
  const { category} = useSelector((state) => state.todos);
  
  return( 
  <Container>
    <Title />
    <Typography fontSize={28} bold marginTop={"38px"} marginBottom={"17px"}>
      List of <span style={{textTransform: "capitalize"}}>{category}</span> Tasks
    </Typography>
    <Container flex>
      <ToDoList />
      <Container flexcol>
      <Card col>
        <Typography fontSize={28} bold>
          List of Tasks
        </Typography>
        <ProgressBar />
      </Card>
      <Form/>
    </Container>
    </Container>
    <CategoriesList/>
  </Container>
  )
}

export default App;
