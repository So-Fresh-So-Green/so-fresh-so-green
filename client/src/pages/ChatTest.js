import { useQuery } from '@apollo/client';
import { QUERY_MESSAGE } from '../utils/queries';


const Messages = ({ sender }) => {
  const { data } = useQuery(QUERY_MESSAGE);
  if (!data) {
    return null;
  }

  return JSON.stringify(data)
}

const Chat = () => {
  return (
    <div>
      <Messages sender='Jack' />
    </div>
  )
}

export default Chat