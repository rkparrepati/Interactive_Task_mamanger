import actionList from '../data/actionList.js';
import Categories from './Categories.jsx';
export default function MailActions({ setCategory }) {
  const actionListComponent = actionList.map((item) => (
    <li key={item.name} className="item">
      <img className="feather feather-inbox" src={item.img} alt="" />
      <button>
        <span>{item.label}</span>
      </button>
    </li>
  ));

  return (
    <div className="left-content">
      <ul className="action-list">{actionListComponent}</ul>
      <Categories setCategory={setCategory} />
    </div>
  );
}
