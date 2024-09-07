const style = {
    color: "green",
    border: "solid 5 green",
};

const Notification = ({ message }) => {
  if (message === null) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
