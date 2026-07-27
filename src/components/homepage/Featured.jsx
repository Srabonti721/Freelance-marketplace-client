import React, { useEffect } from 'react';

const Featured = () => {

    useEffect(() => {
    fetch("http://localhost:5000/featuredTasks")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            });
}, []);
    return (
        <div>
            <h3>ddfmgkign</h3>
        </div>
    );
};

export default Featured;