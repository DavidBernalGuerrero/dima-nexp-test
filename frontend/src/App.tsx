import './App.css'
import { DutyForm } from './components/dutyForm.component';
import { DutyList } from './components/dutyList.component'
import { useDuties } from './hooks/useDuties';
import type { CreateDutyInput } from './types/duty.types';

function App() {
  const { duties, addDuty, editDuty, removeDuty } = useDuties();

  const submitHandler = async (data: CreateDutyInput) => {
    await addDuty(data);
  }
  
  return (
    <>
      <DutyForm onSubmit={submitHandler}/>
      <DutyList duties={duties} onEdit={editDuty} onDelete={removeDuty}/>
    </>
  )
}

export default App
