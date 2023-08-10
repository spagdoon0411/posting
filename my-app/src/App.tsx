import './App.css';
import {
  PostingCard,
  CardStates,
  CardColumn
} from './components/CardComponents';
import { Navbar } from './components/Navbar';

let testMarkdown1 = "Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit...";

let testTags1 = [
  "Web Development",
  "UI/UX",
  "Volunteering",
  "Databases"
];

let testMarkdown2 = "Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
reprehenderit in voluptate velit...";

let testTags2 = [
  "Composites",
  "Aerospace",
  "CAD",
  "Machine Shop",
  "Lathes",
  "..."
];

let testMarkdown3 = "Duis aute irure dolor in \
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit...";

let testTags3 = [
  "Graph Theory",
  "Formal Research",
  "Computer Science",
  "Applied Mathematics",
];

let testMarkdown4 = "Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit. Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 

let testTags4 = [
  "Data Science",
  "Chemistry",
  "Graph Theory"
];

let testLinks: [string, string][] = [
  ["Home", ""],
  ["Explore", ""],
  ["Communities", ""]
];

function App() {
  return (
    <div>
      <Navbar pageTitle='Find a Project' links={testLinks}></Navbar>
      <div className='columnOrganizer'>
        <CardColumn>
          <PostingCard 
          title="Hospice of SLO Website"
          markdown={testMarkdown1}
          state={CardStates.expanded}
          tags={testTags1}>
          </PostingCard>

          <PostingCard 
          title="Isomer Enumeration"
          markdown={testMarkdown2}
          state={CardStates.expanded}
          tags={testTags2}>
          </PostingCard>
        
        </CardColumn>
        <CardColumn>
          <PostingCard 
          title="FAR 10k Rocket Manufacturing"
          markdown={testMarkdown3}
          state={CardStates.expanded}
          tags={testTags3}>
          </PostingCard>
          <PostingCard 
          title="Analysis of CS Student Social Networks"
          markdown={testMarkdown4}
          state={CardStates.expanded}
          tags={testTags4}>
          </PostingCard>
        
        </CardColumn>
      </div>
    </div>
  );
}

export default App;
