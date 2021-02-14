import { locationPinStyle } from './locationPinStyle';

export default function MyGreatPlace(props) {
  return (
    <div style={ locationPinStyle }>
      {props.text}
    </div>
  );
}