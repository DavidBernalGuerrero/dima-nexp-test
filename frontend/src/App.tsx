import './App.css'
import { DutyList } from './components/dutyList.component'
import { useDuties } from './hooks/useDuties';

function App() {
  const { duties } = useDuties();
  
  return (
    <>
      <DutyList duties={ duties }/>
    </>
  )
}

export default App
