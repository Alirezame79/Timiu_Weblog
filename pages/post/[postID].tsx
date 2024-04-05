import axios from "axios";
import { Rubik } from "next/font/google";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NotFound from "../404";

const rubik = Rubik({ subsets: ["arabic"] });

export default function Post() {
  const [post, setPost] = useState<Post>();
  const [notFound, setNotFound] = useState(false);
  const { postID } = useParams();

  useEffect(() => {
    async function fetchRequest() {
      try {
        const response = await axios.post("http://localhost:5000/post/", {
          id: postID
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        })
        console.log(response)
  
        if (response.status === 200) {
          setPost(response.data)
        }
      } catch (error) {
        console.log(error)
        // @ts-ignore comment
        if (error.response.status === 403) {
          setNotFound(true)
        }
      }
    }

    console.log(postID)
    fetchRequest();
  }, [])

  return (
    <>
    {notFound && <NotFound />}
    {post !== undefined ? <div className={`postContainer ${rubik.className}`}>
      <img className="postHeadImg" src={post.image} alt="post topic" />
      <h3>{post.title}</h3>

      {post.body.sort((a, b) => a.index > b.index ? 1 : -1).map((element) => {
        return (
          <div className="postEachElement" key={element.index}>
            {element.type === "text" && <p>{element.data}</p>}
            {element.type === "topic" && <h4>{element.data}</h4>}
            {element.type === "image" && <img src={element.data} />}
          </div>
        )
      })}

      
    </div>: <div>Loading ...</div>}
    </>
  )
}