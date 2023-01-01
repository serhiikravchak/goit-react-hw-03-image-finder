import { Button } from "./LoadMore.styled";

export const LoadMore = ({ onClick, children }) => {
  return (
    <Button  type="button" onClick={onClick}>
      {children}
    </Button>
  );
};
