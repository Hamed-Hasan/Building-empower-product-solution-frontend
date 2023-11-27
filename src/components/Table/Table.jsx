import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, TabPanel, useTab, useMultiStyleConfig, Box,Button } from '@chakra-ui/react'

import UserList from '../user/UserList';
import ItemList from '../items/ItemList';

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
              {isSelected ? '😎' : '😐'}
            </Box>
            {tabProps.children}
          </Button>
        )
      })
    return (
        <div className=' h-screen table-bg'>
            <Tabs>
            <TabList justifyContent="center">
      <CustomTab>User List</CustomTab>
      <CustomTab>Item List</CustomTab>
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