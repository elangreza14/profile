import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


function App() {
  return (
    <ProSidebar collapsed={false}>
      <SidebarHeader>
        <h1>asasqwq</h1>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem >Dashboard</MenuItem>
          <SubMenu title="Components" >
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <h2>this is footer</h2>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default App;
