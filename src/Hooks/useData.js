import React, { useEffect, useState } from 'react';

const useData = () => {
    const [packages, setPackages] = useState([]);

    useEffect( ()=>
    {
        fetch('https://powerful-hollows-40819.herokuapp.com/ticket')
        .then(res => res.json())
        .then(data => {
            setPackages(data)
            console.log(data);
        })
        
    },[])
    
    return {
        packages,
        setPackages
    };
};

export default useData;