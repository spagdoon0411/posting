import { PostingCard } from "./components/PostingCard"
import './App.css';
import salad from "./images/Chopped-Salad-001_1.webp"

let description = "Sed ut perspiciatis unde omnis iste natus\
error sit voluptatem accusantium doloremque laudantium,\
totam rem aperiam, eaque ipsa quae ab illo inventore\
veritatis et quasi architecto beatae vitae dicta sunt\
explicabo."

function App() {
  return (
    <div className="Wrapper">
      <PostingCard 
        image={salad} 
        title="A salad" 
        description={description}
        buttontext="Test button"> 
      </PostingCard>
    </div>
  );
}

export default App;
