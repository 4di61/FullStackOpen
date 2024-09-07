const style = {
    color: "green",
    borderStyle: "5 solid green",
};

const Notification = ({ message }) => {
  if (message === null) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
