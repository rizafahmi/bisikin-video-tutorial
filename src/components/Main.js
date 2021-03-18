import Form from "./Form.js";
import List from "./List.js";

import qoreContext from "../qoreContext.js";

function Main() {
  const feedbacks = qoreContext.view("allFeedback").useListRow();
  return (
    <div className="outbox">
      <div className="innerbox">
        <Form feedbacks={feedbacks} />
        <List feedbacks={feedbacks} />
      </div>
    </div>
  );
}

export default Main;