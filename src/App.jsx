

import './App.css'
import {useQuery,gql} from "@apollo/client"
import List_items from './assets/list_items';



  const QueryMessage=gql`
  query{
    messages{
      items{
        id
        subject
        search_snippet
        body
        author{
          login
          href
        }
        
      }
    }
  }`

  console.log("fetching....")

function App() {
  const {data,error,loading} =useQuery(QueryMessage);
  console.log(data)

  if (loading) return <h1 className='loader'>....loading</h1>
  if (error) return <h1 className='failure'>....sry nothing to fetch the data</h1>
  

  
  return (
    <>
    <h1>The data is fetched and displayed using Dialog</h1>
    <div className='container'>
    {data && <>
    {data.messages.items.map((each) =>
      <List_items key={each.id} list={each}/>
    )}
    </>}
    </div>
    </>
    
  )
}

export default App
