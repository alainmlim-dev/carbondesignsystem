import { React, useState, useEffect } from 'react'
import './App.scss';
import { Dropdown } from '@carbon/react';

function App() {

  const [currentItem, setCurrentItem] = useState();

  const items = [
    {
      id: 1,
      name: "Peter Sagan"
    },
    {
      id: 2,
      name: "Primoz Roglic"
    },
    {
      id: 3,
      name: "Lance Armstrong"
    },
    {
      id: 4,
      name: "Wout van Aert"
    },
    {
      id: 5,
      name: "Mathieu van der Poel"
    }
  ]

  useEffect(() => {
    console.log(currentItem);
  });


  return (

    <div className='main'>

      <h1>Carbon React - Dropdown Component</h1>
      <p className='subtitle-p'>How to get selected item as object</p>

      <div className='cds-react-dropdown'>
        <Dropdown
          id="default"
          titleText="Dropdown label"
          helperText="This is some helper text"
          label="Select a name"
          items={items}
          onChange={({ selectedItem }) => setCurrentItem(selectedItem)}
          itemToString={item => item ? item.name : ''}
          selectedItem={currentItem}
        />
      </div>

      <p>See console logs for selected objects.</p>
    </div>

  );
}

export default App;
