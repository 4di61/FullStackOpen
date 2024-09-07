const style = {
    color: "green",
    border: "3px solid green",
    borderRadius: "5px",
    padding: 10,
    fontSize: 25,
    background: "lightgray",
    marginBottom: 10
};

const Notification = ({ message }) => {
  if (message === null) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
