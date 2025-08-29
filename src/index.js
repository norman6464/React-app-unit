import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from 'navigation/Navigation';
import CreatorList from 'navigation/CreatorList';
import LearnSection from 'navigation/LearnSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navigation />
    <LearnSection />
    <CreatorList />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
