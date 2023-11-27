import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, TabPanel, useTab, useMultiStyleConfig, Box,Button, Tab } from '@chakra-ui/react'

import UserList from '../user/UserList';
import ItemList from '../items/ItemList';
import { FcDownLeft,FcDownRight } from "react-icons/fc";


const Table = () => {
    const CustomTab = React.forwardRef((props, ref) => {
        // 1. Reuse the `useTab` hook
        const tabProps = useTab({ ...props, ref })
        const isSelected = !!tabProps['aria-selected']
    
        // 2. Hook into the Tabs `size`, `variant`, props
        const styles = useMultiStyleConfig('Tabs', tabProps)
    
        return (
          <Button __css={styles.tab} {...tabProps}>
            <Box as='span' mr='2'>
              {isSelected ? <FcDownRight />: <FcDownLeft />
}
            </Box>
            {tabProps.children}
          </Button>
        )
      })
    return (
        <div className='  table-bg'>
            <Tabs>
            <TabList justifyContent="center">
            <Tab color="white" fontWeight="700" _selected={{ color: '#E99400' }}>User List</Tab>
      <Tab color="white" fontWeight="700" _selected={{ color: '#E99400' }}>Item List</Tab>
    </TabList>
      <TabPanels>
        <TabPanel>
            <UserList/>
        </TabPanel>
        <TabPanel>
            <ItemList/>
        </TabPanel>
      </TabPanels>
    </Tabs>
        </div>
    );
};

export default Table;