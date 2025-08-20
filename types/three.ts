import React from 'react';

interface ThreeTypesProps {
  type1: string; // e.g., "Luxury Villa"
  type2: string; // e.g., "Modern Apartment"
  type3: string; // e.g., "Cozy Cottage"
}

const ThreeTypes: React.FC<ThreeTypesProps> = ({ type1, type2, type3 }) => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px' }}>
      <h2 style={{ color: '#ff69b4' }}>Explore Our Types</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ border: '1px solid #ff69b4', padding: '10px', borderRadius: '8px' }}>
          <h3>{type1}</h3>
        </div>
        <div style={{ border: '1px solid #ff69b4', padding: '10px', borderRadius: '8px' }}>
          <h3>{type2}</h3>
        </div>
        <div style={{ border: '1px solid #ff69b4', padding: '10px', borderRadius: '8px' }}>
          <h3>{type3}</h3>
        </div>
      </div>
    </div>
  );
};

export default ThreeTypes;