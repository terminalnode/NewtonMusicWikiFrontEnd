import './ContentBody.css';
import HomePage from '../../../components/contents/home-page/HomePage'

function ContentBody({contentName}) {
  return (
    <div className="ContentBody">
      {/* TODO create a function for displaying content based on content name */}
      {getContent(contentName)}
    </div>
  );
}

function getContent(contentName) {
  switch (contentName) {
    case "home": return <HomePage />
  }
}

export default ContentBody;