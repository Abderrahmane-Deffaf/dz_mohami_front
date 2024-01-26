import React from 'react';
import avocat1 from "../assets/avocat/avocat1.png";
import Profile from "../Components/reusable/Profile";

const AvocatList = () => {
    const avocatList = [
        { name: 'Ranim Benkerri', url: 'test' },
        { name: 'Abdou daffaf', url: 'test' },
        { name: 'Abdou daffaf', url: 'test' },
        { name: 'Abdou daffaf', url: 'test' },
        { name: 'Abdou daffaf', url: 'test' },
        // ... add more avocats as needed
    ];

    return (
        <div className="">
            <ul className='grid gap-4 grid-cols-3'>
                {avocatList.map((avocat, index) => (
                    <div className="flex " key={index}>
                        <div className='mr-4'><Profile image={avocat1}/></div>
                        <div>
                            <p>avocat.name</p>
                            <p>comment</p>
                        </div>
                    {/* iconButton */}
                    </div>
                ))}
            </ul>

        </div>
    );
};

export default AvocatList;
