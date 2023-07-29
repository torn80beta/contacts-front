import './notFound.scss';
import { BackLink } from 'components/backLink/BackLink';

const NotFound = () => {
  return (
    <>
      <BackLink to={{ pathname: '/' }}>Back to Homepage</BackLink>
      <p className="notFound">Page not found ¯\_(ツ)_/¯</p>
    </>
  );
};

export default NotFound;
