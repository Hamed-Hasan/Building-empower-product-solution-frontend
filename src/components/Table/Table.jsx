import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { FcDownLeft, FcDownRight } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import '../../styles/styles.css';
import UserList from '../user/UserList';
import ItemList from '../items/ItemList';

const Table = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('user');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='table-bg py-14'>
      <div className='flex items-center justify-center my-6'>
        <button onClick={handleLogout} style={{ content: 'Hover me!' }}>
          <div className='left'></div>
          <h1 className='font-bold text-white px-5 py-3'>Logout</h1>
          <div className='right'></div>
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '5' }}>
        <CustomTab
          tabId='user'
          isSelected={selectedTab === 'user'}
          onClick={() => handleTabChange('user')}
        >
          User List
        </CustomTab>
        <CustomTab
          tabId='item'
          isSelected={selectedTab === 'item'}
          onClick={() => handleTabChange('item')}
        >
          Item List
        </CustomTab>
      </div>
      <div>
        {selectedTab === 'user' && <UserList />}
        {selectedTab === 'item' && <ItemList />}
      </div>
    </div>
  );
};

const CustomTab = ({ tabId, isSelected, onClick, children }) => {
  return (
    <Button
      onClick={onClick}
      bg={isSelected ? '#E99400' : 'transparent'}
      color={isSelected ? 'white' : 'black'}
      fontWeight='700'
      rounded='full'
      p={2}
      _hover={{ bg: isSelected ? '#E99400' : 'gray.200' }}
    >
      <Box as='span' mr='2'>
        {isSelected ? <FcDownRight /> : <FcDownLeft />}
      </Box>
      {children}
    </Button>
  );
};

export default Table;
