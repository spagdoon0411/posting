import './App.css';
import { CardField, CardStates, PostingCard } from './components/CardComponents';
import { Navbar } from './components/Navbar';
import { testData } from './testData';

let testLinks: [string, string][] = [
  ["Home", ""],
  ["Explore", ""],
  ["Communities", ""]
];

function App() {
  return (
    <div>
      <Navbar pageTitle='Find a Project' links={testLinks}></Navbar>
      <CardField numColumns={2}>
        {
          testData.map(d => <PostingCard 
            title={d[0]}
            markdown={d[1]} 
            tags={d[2]} 
            state={CardStates.compressed}>

            </PostingCard>)
        }
      </CardField>
      
    </div>
  );
}

export default App;
