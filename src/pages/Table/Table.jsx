import React from 'react';
import { Tabs, TabList, TabPanels, TabPanel, useTab, useMultiStyleConfig, Box, Button, Tab } from '@chakra-ui/react';
import { FcDownLeft, FcDownRight } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom'; 

import '../../styles/styles.css';
import UserList from '../../components/user/UserList';
import ItemList from '../../components/items/ItemList';
import FileUploader from '../../components/uploads/FileUploader';

const Table = () => {
  const navigate = useNavigate(); // Step 2

  const CustomTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps['aria-selected'];
    const styles = useMultiStyleConfig('Tabs', tabProps);

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as='span' mr='2'>
          {isSelected ? <FcDownRight /> : <FcDownLeft />}
        </Box>
        {tabProps.children}
      </Button>
    );
  });

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="bg-slate-950 h-full pb-20">

    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl">
                <div className=''>
      <div className='flex items-center justify-center my-6'>
        <button onClick={handleLogout} style={{ content: 'Hover me!' }}>
          <div class='left'></div>
          <h1 className='font-bold text-white px-5 py-3'>Logout</h1>
          <div class='right'></div>
        </button>
      </div>
      <Tabs>
        <TabList justifyContent='center' gap='5'>
          <Tab
            color='white'
            fontWeight='700'
            _selected={{ color: 'white', bg: '#E99400', rounded: 'full' }}
          >
            File Uploads
          </Tab>
          <Tab
            color='white'
            fontWeight='700'
            _selected={{ color: 'white', bg: '#E99400', rounded: 'full' }}
          >
            User List
          </Tab>
          <Tab
            color='white'
            fontWeight='700'
            _selected={{ color: 'white', bg: '#E99400', rounded: 'full' }}
          >
            Item List
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FileUploader />
          </TabPanel>
          <TabPanel>
            <UserList />
          </TabPanel>
          <TabPanel>
            <ItemList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
      </div>
    </div>
  </div>
  );
};

export default Table;