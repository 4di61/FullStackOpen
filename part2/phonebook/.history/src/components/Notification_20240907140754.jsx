const style = {
    color: "green",
    border: ""
    // borderStyle: "solid",
    borderRadius: "5px",

};

const Notification = ({ message }) => {
  if (message === null) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
