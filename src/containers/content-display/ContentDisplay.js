import './ContentDisplay.css';
import ContentHeader from './content-header/ContentHeader'
import ContentBody from './content-body/ContentBody'

function ContentDisplay({contentName, artistList, albumList}) {
  return (
    <div className="ContentDisplay">
        <ContentHeader contentName={contentName} />
        <ContentBody
          contentName={contentName}
          artistList={artistList}
          albumList={albumList}
        />
    </div>
  );
}

export default ContentDisplay;