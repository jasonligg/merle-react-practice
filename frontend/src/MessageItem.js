const MessageItem = ({ message }) => {
  return (
    <div>
      {`${message.alias} ${message.text} ${message.postedAt}`}
    </div>
  )
};

export default MessageItem;