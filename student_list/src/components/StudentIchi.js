import { useState } from 'react';

export default function StudentIchi(){
  const studentList = ['Huyen', 'Khang', 'Khanh'];
  const [position, setposition] = useState(0);

  const onNext = () => {
    if(position >= studentList.length){
      setposition(0)
    } else {
      let count = position;
      setposition(count + 1)
    }
  }

  const onPrev = () => {
    if(position <= 0){
      setposition(studentList.length)
    } else {
      let count = position;
      setposition(count - 1)
    }
  }
  return(
    <div>
      <div>学生一覧：[{studentList.map(student=> <span>{student},</span>)}]</div>
      <div>位置: {position + 1}</div>
      <div>名前: {studentList[position]}</div>
      <div>
        <button onClick={()=>onNext()}>次に</button>
        <button onClick={()=>onPrev()}>前に</button>
      </div>
    </div>
  )
}