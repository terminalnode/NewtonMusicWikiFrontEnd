import './ContentHeader.css';

function ContentHeader({contentName}) {
  return (
    <div className="ContentHeader">
      {/* TODO create a function for displaying content based on content name */}
      {contentName}
    </div>
  );
}

export default ContentHeader;