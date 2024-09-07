const style = {
    color: "green",
    border: "5px solid green",
    borderRadius: "5px",
    padding: 
};

const Notification = ({ message }) => {
  if (message === null) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
