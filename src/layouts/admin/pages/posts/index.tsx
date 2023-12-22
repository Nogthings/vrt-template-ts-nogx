import Button from "../../../components/buttons/button";
import { useNavigate } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
function Posts() {
  const navigate = useNavigate();
  const handleCreateClick = () => {
    navigate("/admin/posts/create");
  };

  return (
    <div className="h-screen flex gap-2">
      <div>
        <h1>Posts</h1>
        <Button title="Create Post" onClick={handleCreateClick}>
          <IoAddOutline />
        </Button>
      </div>
    </div>
  );
}

export default Posts;
