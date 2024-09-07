const style = {
    color: "green",
    borderStyle: "solid",
    borderRadius: "5px",
    borderSize:
};

const Notification = ({ message }) => {
  if (message === null) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
