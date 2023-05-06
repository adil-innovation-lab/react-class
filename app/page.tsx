import Avatar from "./components/Avatar";
import Gallery from "./components/Gallery";
// import { Profile } from "./components/Gallery";
import Profile from "./components/Profile";
import ToDo from "./components/ToDo";
import TodoList from "./components/ToDoList";

export default function Home() {
  return (
    <div>
      <Profile
        person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
        size={200}
      />
    </div>
  );
}
