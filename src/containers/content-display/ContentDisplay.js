import './ContentDisplay.css';
import ContentHeader from './content-header/ContentHeader'
import ContentBody from './content-body/ContentBody'

function ContentDisplay() {
  return (
    <div className="ContentDisplay">
        <ContentHeader text="Header goes here!" />
        <ContentBody text="Content goes here!" />
    </div>
  );
}

export default ContentDisplay;