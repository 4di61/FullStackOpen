const style = {
    color: "green",
    borderStyle: "solid",
    borderRadius: "2px",
    
};

const Notification = ({ message }) => {
  if (message === null) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
