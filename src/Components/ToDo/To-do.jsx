import  { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import { Pagination } from '@mantine/core';
import './To-Do.css';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';


const ToDo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  // function deleteItem(id) {
  //   const items = list.filter(item => item.id !== id);
  //   setList(items);
  // }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Default number of items to display per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const incompleteItems = list.filter(item => !item.complete);
  const itemsToDisplay = incompleteItems.slice(startIndex, endIndex);

  return (
    <>
      <div className="ToDoMain">
        <header className="ToDoMainheader" >
          <h2>To Do List: {incomplete} items pending</h2>
        </header>
  <div className='ToDo'>


    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>
        
          <TextField
            fullWidth
            onChange={handleChange}
            name="text"
            type="text"
            
            id="outlined-basic" label="Item Details" variant="outlined"
          />
    
          
          <TextField
            fullWidth
            onChange={handleChange}
            name="assignee"
            type="text"
          
            id="outlined-basic" label="Assigned To" variant="outlined"
          />



       
          <span>Difficulty</span>
          <Slider
            aria-label="Difficulty"
            defaultValue={defaultValues.difficulty}
            onChange={(event, value) => handleChange({ target: { name: 'difficulty', value } })}
            step={1}
            marks
            min={1}
            max={5}
          />
        
          <Button type="submit" variant="contained">Add Item</Button>

      
      </form>
    </div>


  
        <div className="items-container">
          {itemsToDisplay.map(item => (
            <div key={item.id}>
              <p>{item.text}</p>
              <p><small>Assigned to: {item.assignee}</small></p>
              <p><small>Difficulty: {item.difficulty}</small></p>
              <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
              <hr />
            </div>
          ))}

{incompleteItems.length > itemsPerPage && (
          <Pagination
            total={Math.ceil(incompleteItems.length / itemsPerPage)}
            value={currentPage}
            onChange={setCurrentPage}
          />)}
        </div>
  
       
        
  </div>
        
      </div>
    </>
  );
};

export default ToDo;