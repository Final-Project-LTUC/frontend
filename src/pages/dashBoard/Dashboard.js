import React from 'react'

import Profile from '../../Components/dashboard/Profile'
import TaskCard1 from '../../Components/dashboard/TaskCard1'
import cookie from 'react-cookies';
import { Flex } from '@chakra-ui/react';

function Dashboard() {
  let token1 =cookie.load('auth'); 
  return (
    <>
    <Flex width="100vw" justifyContent={'space-around'} paddingX="50px" paddingY="50px">

      <Profile token={token1} />
      <TaskCard1  />

  
    </Flex>
    </>
  );
}

export default Dashboard;