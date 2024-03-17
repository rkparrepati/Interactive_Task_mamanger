import PageControlButtons from './PageControlButtons.jsx';
import MailActions from './MailActions.jsx';
export default function SideBar({ setCategory }) {
  return (
    <div className="left-bar">
      <PageControlButtons />
      <MailActions setCategory={setCategory} />
    </div>
  );
}
