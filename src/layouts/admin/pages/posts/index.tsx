import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoLogoHtml5 } from "react-icons/io5";
function Posts() {
  const navigate = useNavigate();
  const handleCreateClick = () => {
    navigate("/admin/posts/create");
  };

  return (
    <div className="h-screen flex gap-2 py-4">
      <div>
        <h1>Posts</h1>
        <Button
          title="Create Post"
          onClick={handleCreateClick}
          icon={IoLogoHtml5}
        />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Posts;
