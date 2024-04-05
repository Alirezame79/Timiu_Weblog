interface Post {
  ID: string,
  title: string,
  image: string,
  author: string,
  body: Body[]
}

interface Body {
  index: number,
  type: Type,
  data: string
}

type Type = "text" | "image" | "topic" 