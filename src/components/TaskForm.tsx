import { ChangeEvent, FormEvent, useState } from "react";

interface TaskFormProps {
    onClose: () => void;
}
interface TaskFormData {
  title: string;
  description: string;
  dueDate: string;
  progress: number;
  priority: string;
  completed: boolean;
  recurring: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState<TaskFormData>({
      title: '',
      description: '',
      dueDate: '',
      progress: 0,
      priority: 'low',
      completed: false,
      recurring: false,
    });

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value    
    });
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData)

onClose()

};

return (
  <div className="task-form">
    <h2>Add Task</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>

      <label>
        Due Date:
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Progress:
        <input
          type="number"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
        />
      </label>

      <label>
        Priority:
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <label>
        Completed:
        <input
          type="checkbox"
          name="completed"
          checked={formData.completed}
          onChange={handleChange}
        />
      </label>

      <label>
        Recurring:
        <input
          type="checkbox"
          name="recurring"
          checked={formData.recurring}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Save Task</button>
    </form>
  </div>
);

};

export default TaskForm;    

