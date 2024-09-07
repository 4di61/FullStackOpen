const style = {
    color: "green",
    border: " green",
};

const Notification = ({ message }) => {
  if (message === null) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
