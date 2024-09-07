const style = {
    color: "green",
    borderStyle: "solid",
    borderRadius: "5px",
    borderSize: "10px"
};

const Notification = ({ message }) => {
  if (message === null) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
