import Motivation from "./Motivation";
function Motivations({quotes}){
  console.log("Motivations Component Quotes : ",quotes);
  return <div>
    {quotes.map(items=>(<Motivation items={items} key={items._id}/>))}
  </div>
}

export default Motivations;