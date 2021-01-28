import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [{
        id: 'u1',
        name: 'Bruno',
        image: 'https://www.pexels.com/photo/ocean-waves-under-white-sky-4737039/',
        places: 3
    },];

    return <UsersList items = {
        USERS
    }
    />
};

export default Users;