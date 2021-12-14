import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber} from './actions/index';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <div className="wrapper">
      <h1 className='counter-Heading'>Counter App</h1>
      <div className="counter">
      <Button className='btn-decrease' onClick={ () => dispatch(decNumber ())} type="primary" shape="round" icon={<MinusOutlined />} />
      <Input size="large" placeholder="large size" value={myState} className='input'  disabled  />
      <Button className='btn-increase' onClick={ () => dispatch(incNumber ())} type="primary" shape="round" icon={<PlusOutlined />} />
      </div>
    </div>
    </div>
    
  );
}

export default App;
