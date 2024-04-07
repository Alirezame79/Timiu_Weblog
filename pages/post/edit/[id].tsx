import axios from "axios";
import { Rubik } from "next/font/google";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const rubik = Rubik({ subsets: ["arabic"] });

export default function EditPost() {
  const [post, setPost] = useState<Post>()
  const [postBody, setPostBody] = useState<Body[]>([])
  const draggedItemIndex = useRef(0);
  const draggedOverItemIndex = useRef(0);

  function dragStart(e: any, position: number) {
    draggedItemIndex.current = position;
  }

  function dragEnter(e: any, position: number) {
    draggedOverItemIndex.current = position;
  }

  function dragEnd() {
    const copyList: Body[] = postBody.slice()
    copyList[draggedItemIndex.current].index = draggedOverItemIndex.current;
    copyList[draggedOverItemIndex.current].index = draggedItemIndex.current;
    setPostBody(copyList);
  }

  useEffect(() => {
    async function fetchRequest() {
      try {
        const responsePost = await axios.post("http://localhost:5000/post/", {
          id: '123'
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        })
        console.log(responsePost)
        
        if (responsePost.status === 200) {
          setPost(responsePost.data)
          setPostBody(responsePost.data.body)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchRequest();
  }, [])

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <main>
        {post !== undefined && postBody !== undefined ? <div className={`postContainer ${rubik.className}`}>
          <img className="postHeadImg" src={post.image} alt="post topic" />
          <h3>{post.title}</h3>
          {postBody.sort((a: Body, b: Body) => a.index > b.index ? 1 : -1).map((element: Body) => (
            <div className="postEachElement" key={element.index}
            draggable 
            onDragStart={(e) => dragStart(e, element.index)} 
            onDragEnter={(e) => dragEnter(e, element.index)} 
            onDragEnd={dragEnd}>
              <div className="postEachElementEditContainer" draggable>
                <svg width={50} height={50} id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <g><rect height="32" width="512" y="144"/><rect height="32" width="512" y="240"/>
                  <rect height="32" width="512" y="336"/></g></svg>
                {element.type === "text" && <p>{element.data}</p>}
                {element.type === "topic" && <h4>{element.data}</h4>}
                {element.type === "image" && <img src={element.data} />}
              </div>
            </div>
          ))}
        </div>: <div>Loading ...</div>}
      </main>
    </>
  )
}