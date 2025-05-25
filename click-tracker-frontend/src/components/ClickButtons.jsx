// src/components/ClickButtons.jsx
import axios from 'axios';

const API_BASE = 'http://localhost:8080/click';

const ClickButtons = () => {
  const handleClick = async (type) => {
    try {
      const res = await axios.post(`${API_BASE}/${type}`);
      console.log(`Sent ${type}`, res.data);
    } catch (error) {
      console.error(`Failed to send ${type}`, error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Track Click Events</h2>
      <button onClick={() => handleClick("general_click")} style={styles.button}>General Click</button>
      <button onClick={() => handleClick("enroll_click")} style={styles.button}>Enroll</button>
      <button onClick={() => handleClick("buy_click")} style={styles.button}>Buy Course</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '80px',
    gap: '15px'
  },
  button: {
    padding: '12px 30px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    width: '200px'
  }
};

export default ClickButtons;
