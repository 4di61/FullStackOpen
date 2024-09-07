const style = {
    color: "green",
    border: 5 solid 5
};

const Notification = ({ message }) => {
  if (message === null) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
