import './NewtonButton.css';
import { Button } from '@material-ui/core';


export default function NewtonButton({
  text,
  variant,
  action
}) {
  return (
    <Button
      className={"NewtonButton"}
      variant={ variant || 'outlined' }
      onClick={ action }>
      {text}
    </Button>
  );
}