import React from 'react';

const Test: React.FC = () => {
  return (
    <div style={styles.container}>
      <input type="text" placeholder="Value" style={styles.textBox} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height to center the text box vertically
    flexDirection: 'column', // Optional, in case you want to add more items
  },
  textBox: {
    padding: '10px',
    fontSize: '16px',
    width: '300px', // Adjust the width as needed
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

export default Test;
