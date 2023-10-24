import { React, useState, useEffect } from 'react'
import './App.scss';
import { FilterableMultiSelect } from '@carbon/react';

function App() {

  const [selectedItems, setSelectedItems] = useState([])

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
    console.log(selectedItems);
  });


  return (

    <div className='main'>

      <h1>Carbon React - FilterableMultiselect Component</h1>
      <p className='subtitle-p'>How to get selected items as object array</p>

      <div className='cds-react-dropdown'>
        <FilterableMultiSelect
          id="cds-filterablemultiselect"
          titleText="Names"
          items={items}
          itemToString={(item) => (item ? item.name : '')}
          selectionFeedback="top-after-reopen"
          onChange={({ selectedItems }) => setSelectedItems(selectedItems)}
          selectedItems={selectedItems}
        />
      </div>

      <p>See console logs for selected objects.</p>
    </div>

  );
}

export default App;
