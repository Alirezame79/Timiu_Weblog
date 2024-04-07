'use client'
import axios from "axios";
import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

export default function PostsCarousel() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [index, setIndex] = useState(0);
  const router = useRouter();
  
  useEffect(() => {
    async function fetchRequest() {
      try {
        const response = await axios.get('http://localhost:5000/posts-title/')
        console.log(response)
        if (response.status === 200) {
          setPosts(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchRequest();
  }, [])

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  function carouselClicked(id: string) {
    console.log(id)
    router.push('post/' + id)
  }

  return (
    <Carousel activeIndex={index} variant="light" onSelect={handleSelect}>
      {posts.map((post) => (
        <Carousel.Item key={post.ID} interval={5000}>
          <img className="carouselImage" src={post.image} alt="slides" onClick={() => carouselClicked(post.ID)} />
          <Carousel.Caption>
            <h3 className="carouselCaption">{post.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}