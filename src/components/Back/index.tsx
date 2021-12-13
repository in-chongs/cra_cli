import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import "./index.less";

const Back: FC = () => {
  const navigate = useNavigate();

  const backBtn = () => {
    navigate(-1);
  }

  return (
    <div className='backContainer' onClick={backBtn}>
      <ArrowLeftOutlined /> back
    </div>
  )
}

export default Back