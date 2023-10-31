import { useState } from "react";
import HomePage from "./page/HomePage";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const DATA = [
  {
    id: 1,
    image: require('./images/image-1.webp'),
  },
  {
    id: 2,
    image: require('./images/image-2.webp'),
  },
  {
    id: 3,
    image: require('./images/image-3.webp'),
  },
  {
    id: 4,
    image: require('./images/image-4.webp'),
  },
  {
    id: 5,
    image: require('./images/image-5.webp'),
  },
  {
    id: 6,
    image: require('./images/image-6.webp'),
  },
  {
    id: 7,
    image: require('./images/image-7.webp'),
  },
  {
    id: 8,
    image: require('./images/image-8.webp'),
  },
  {
    id: 9,
    image: require('./images/image-9.webp'),
  },
  {
    id: 10,
    image: require('./images/image-10.jpeg'),
  },
  {
    id: 11,
    image: require('./images/image-11.jpeg'),
  }
]


function App() {
  const [images, setImages] = useState(DATA)


  return (
    <main >
      <HomePage />
    </main>
  );
}



export default App;