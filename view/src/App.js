import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';



const App = () => {
  const [selectedItem, setSelectedItem] = useState('Item 1');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        open={true}
        style={{ width: 271 }}
      >
        <List>
          <ListItem
            button
            onClick={() => handleItemClick('Item 1')}
            selected={selectedItem === 'Item 1'}
          >
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleItemClick('Item 2')}
            selected={selectedItem === 'Item 2'}
          >
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleItemClick('Item 3')}
            selected={selectedItem === 'Item 3'}
          >
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Drawer>

      <div style={{ marginLeft: 271, flexGrow: 1 }}>
        <div>
          <h1>{selectedItem}</h1>
          {/* Contenu correspondant à chaque élément sélectionné */}
          {selectedItem === 'Item 1' && <div>Contenu pour Item 1</div>}
          {selectedItem === 'Item 2' && <div>Contenu pour Item 2</div>}
          {selectedItem === 'Item 3' && <div>Contenu pour Item 3</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
