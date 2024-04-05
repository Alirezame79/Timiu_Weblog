'use client'
import axios from "axios";
import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AuthorCarousel() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [index, setIndex] = useState(1);
  
  useEffect(() => {
    async function fetchRequest() {
      try {
        const response = await axios.get('http://localhost:5000/authors/')
        console.log(response)
        if (response.status === 200) {
          setAuthors(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchRequest();
  }, [])

  function rightArrowClicked() {
    setIndex(index  - 1);
  }
  
  function leftArrowClicked() {
    setIndex(index  + 1);
  }

  return (
    <div className="card authorCarouselContainer">
      <h3 className="card-title">برترین نویسندگان</h3>
      <div className="authorsContainer">
        {index !== 1 && <svg onClick={rightArrowClicked} className="rightArrow" height="100%" width="60px" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "/></svg>}
        {authors.map((author) => {
          return (
            <div key={author.ID}>
            {(((author.ID as unknown as number) - index === 0 ) ||
             ((author.ID as unknown as number) - index === 1 ) ||
             ((author.ID as unknown as number) - index === 2 )) && 
            <div className="eachAuthorCarousel" key={author.ID}>
              <img
                src={author.image}
                width={125}
                height={125}
                alt="author profile image" />
              <h4>{author.name}</h4>
              <h5>{author.count} مقاله</h5>
            </div> }</div>
          )
        })}
        {index !== authors.length - 2 && <svg onClick={leftArrowClicked} className="leftArrow" height="100%" width="60px" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "/></svg>}
      </div>
    </div>
  );
}