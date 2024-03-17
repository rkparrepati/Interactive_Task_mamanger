import MEETINGS from '../data/meetings.js';

export default function Meetings({ setCount }) {
  const meetingsCount = MEETINGS.length; // Calculate the task count

  return (
    <ul className="right-content" onClick={() => setCount(meetingsCount)}>
      {MEETINGS.map((meeting) => (
        <li key={meeting.id} className={`task-box ${meeting.color}`}>
          <section className="description-task">
            <div className="time">{meeting.time}</div>
            <div className="task-name">{meeting.taskLabel}</div>
          </section>
          <div className="more-button"></div>
          <section className="members">
            {meeting.members.map((member, index) => (
              <img
                key={index}
                src={member.imgName}
                alt={`Member ${index + 1}`}
              />
            ))}
          </section>
        </li>
      ))}
    </ul>
  );
}
