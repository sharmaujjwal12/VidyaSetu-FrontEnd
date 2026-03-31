import Motivation from "./Motivation";
function Motivations({quotes}){
  return <div>
    {console.log(quotes)}
    {quotes && quotes.map(item=> <Motivation item={item}/>)}
  </div>
}

export default Motivations;