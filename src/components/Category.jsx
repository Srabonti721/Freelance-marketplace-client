import React from 'react';

const Category = () => {
    return (
        <div>
            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="faq" defaultChecked />
  <div className="collapse-title text-xl font-semibold">
    How do I post a task?
  </div>
  <div className="collapse-content">
    <p>
      Sign in to your account, navigate to the <strong>Add Task</strong> page,
      complete the task details such as title, category, description, deadline,
      and budget, then click the <strong>Add Task</strong> button to publish it.
    </p>
  </div>
</div>

<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="faq" />
  <div className="collapse-title text-xl font-semibold">
    How do bids work?
  </div>
  <div className="collapse-content">
    <p>
      Freelancers can place bids on available tasks. Each bid increases the bid
      count for that task, allowing clients to see how many freelancers are
      interested before selecting the right person.
    </p>
  </div>
</div>

<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="faq" />
  <div className="collapse-title text-xl font-semibold">
    Is registration free?
  </div>
  <div className="collapse-content">
    <p>
      Yes. Creating an account is completely free. Once registered, you can
      browse tasks, post new tasks, manage your own tasks, and participate in
      the marketplace without any registration fee.
    </p>
  </div>
</div>

<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="faq" />
  <div className="collapse-title text-xl font-semibold">
    Can I edit my task later?
  </div>
  <div className="collapse-content">
    <p>
      Yes. If you are the owner of a task, you can update its title,
      description, category, deadline, or budget anytime from the
      <strong> My Posted Tasks </strong> page before the task is completed.
    </p>
  </div>
</div>
        </div>
    );
};

export default Category;