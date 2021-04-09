import Form from "../components/Form.js";
import List from "../components/List.js";
import Template from "./Template.js";

import qoreContext from "../qoreContext.js";

function Main({ currentUser }) {
  const feedbacks = qoreContext.view("allFeedback").useListRow();
  return (
    <Template>
      {currentUser !== null && <Form feedbacks={feedbacks} />}
      <List feedbacks={feedbacks} />
    </Template>
  );
}

export default Main;
