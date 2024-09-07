const style = {
    color: "green",
    border: "3px solid green",
    borderRadius: "5px",
    padding: 10,
    fontSize: 25,
    background: "lightgray",
    marginBottom: 15
};

const Notification = ({ message, isError }) => {
  if (message === null) return null;

    return <div style={isError ? {...style, color} style}>{message}</div>;
};

export default Notification;
