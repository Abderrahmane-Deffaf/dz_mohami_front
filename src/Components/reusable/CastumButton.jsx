import React from 'react';

const CastumButton = ({nom, textColor, borderColor}) => {
    return (
        <button className={`text-${textColor} border-${borderColor} hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-${borderColor} focus:ring-opacity-50 p-3 rounded text-xs`} style={{ borderWidth: '1px' }}>
            {nom}
        </button>
    );
};

export default CastumButton;