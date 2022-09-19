import axios from "axios" 
import { useEffect, useState } from "react" 
 
const baseURL = 'https://api.unsplash.com/search/photos&client_id=HEJhmgWEBAAH9UiDhdBKlHse2doDjaGx4gbMuclqiXc' 
 
export default function App() {
    const [post, setPost] = useState([]);

    const getPost = () => {
        axios.get(baseURL).then((response) => {
            const myPost = response.data;
            setPost(myPost)
            console.log(post);
          });
    }
    useEffect(() => getPost (), [])
 

    return (
      <div className="text-bold p-20 ">
        <div key={post.articles}>
        {/* {post.articles.map((item, index) => {
            <li key={item.id}>{}</li>
        
            
        })} */}
          {
                Object.keys(post).forEach(key => 
                    <h2 key={key.articles}>key: statistics{key.source}</h2>
                )
            }
        </div>
        {JSON.stringify(post.articles)}
      </div>
    );
  }