import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Picture from './Picture';
import DateInput from './DateInput';
import {useState, useEffect} from 'react';
import { getPicture } from './NasaAPI';
import { formatLink } from './Utility';
import Buttons from './Buttons';

function App() {

  const [date, setDate] = useState('2024-08-17');
  const [data, setData] = useState([]);
  const [pictureIndex, setPictureIndex] = useState(0);
  const [image, setImage] = useState();


  const handlePictureIndexUp = () => {
    if (pictureIndex <= data.length - 2) {
    setImage();
    setPictureIndex(prev => prev + 1);
    setImage(formatLink(date, data, pictureIndex));
  }
  }

  const handlePictureIndexDown = () => {
    if (pictureIndex >= 1) {
    setImage();
    setPictureIndex(prev => prev - 1);
    setImage(formatLink(date, data, pictureIndex));
  }
  }

  const handleDateChange = (e) => {
    setImage();
    const newDate = e.target.value;
    setDate(newDate);
  }

  const updatePic = async () => {
    const newData = await getPicture(date);
    console.log(newData);
    setData(newData);
  }

  useEffect(() => {
    updatePic(date);
  }, [date])

  useEffect(() => {
    if (data.length > 0) {
    setImage(formatLink(date, data, pictureIndex));
  }
  }, [data])



  
  return (
    <div className="bg-gray-800 h-screen">
      <Header/>
      <Buttons picUp={handlePictureIndexUp} picDown={handlePictureIndexDown} data={data} pictureIndex={pictureIndex}/>
      <Picture image={image}/>
      <p className="text-white text-center">{data[pictureIndex] ? data[pictureIndex].date : "Could not get Picture"}</p>
      <DateInput handleDateChange={handleDateChange} date={date} />
    </div>
  );
}

export default App;
