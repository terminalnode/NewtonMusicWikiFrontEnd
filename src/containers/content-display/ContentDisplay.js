import './ContentDisplay.css';
import ContentHeader from './content-header/ContentHeader'
import ContentBody from './content-body/ContentBody'

function ContentDisplay({contentName}) {
  return (
    <div className="ContentDisplay">
        <ContentHeader contentName={contentName} />
        <ContentBody contentName={contentName} />
    </div>
  );
}

export default ContentDisplay;