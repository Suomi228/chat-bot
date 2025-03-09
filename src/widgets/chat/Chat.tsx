import './index.css'
import Input from '../../shared/ui/input/Input';
export default function Chat() {
  return <div className="chat">
    <div className='chat__inner'>
        <div className='chat__top-part'></div>
        <div className='chat__bottom-part'>
            <Input type='text' placeholder='Спроси о чем-нибудь...'></Input>
        </div>
    </div>
  </div>;
}
