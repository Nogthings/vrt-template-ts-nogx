import Button from "../../../components/buttons/button";
import LinkButton from "../../../components/buttons/linkButton";
import { IoAddOutline } from "react-icons/io5";
function Posts() {
  return (
    <div className="h-screen flex gap-2">
      <div className="space-y-2">
        <h1 className="text-gray-800 dark:text-gray-100">Posts</h1>
        <LinkButton
          title="Create Post"
          color="primary"
          variant="gradient"
          to={"create"}
        >
          <IoAddOutline />
        </LinkButton>
        <Button
          title="Create"
          color="error"
          variant="gradient"
          iconOnly
          rounded
        >
          <IoAddOutline />
        </Button>
      </div>
    </div>
  );
}

export default Posts;
