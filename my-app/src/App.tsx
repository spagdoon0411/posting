import './App.css';
import {
  PostingCard,
  TagContainer,
  Tag,
  ContactContainer,
  Contact,
  CardStates,
  CardColumn
} from './components/CardComponents';

let testMarkdown1 = "Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit...";

let testMarkdown2 = "Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
reprehenderit in voluptate velit...";

let testMarkdown3 = "Duis aute irure dolor in \
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit...";

let testMarkdown4 = "Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit. Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 


function App() {
  return (
    <div className='columnOrganizer'>
      <CardColumn>
        <PostingCard 
        title="Hospice of SLO Website"
        markdown={testMarkdown1}
        state={CardStates.expanded}>
        </PostingCard>

        <PostingCard 
        title="Isomer Enumeration"
        markdown={testMarkdown2}
        state={CardStates.expanded}>
        </PostingCard>
      
      </CardColumn>
      <CardColumn>
        <PostingCard 
        title="FAR 10k Rocket Manufacturing"
        markdown={testMarkdown3}
        state={CardStates.expanded}>
        </PostingCard>
        <PostingCard 
        title="Analysis of CS Student Social Networks"
        markdown={testMarkdown4}
        state={CardStates.expanded}>
        </PostingCard>
      
      </CardColumn>
    </div>
  );
}

export default App;
