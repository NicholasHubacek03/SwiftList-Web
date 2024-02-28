import { ChangeEvent, FormEvent, useState } from "react";

interface TaskFormProps {
    onClose: () => void;
}
interface TaskFormData {
    title: String
}

const TaskForm: React.FC<TaskFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState<TaskFormData>({
      title: '',
      // Initialize other fields as needed
    });

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value    
    });
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault
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
      {/* Add more form fields as needed */}
      <button type="submit">Save Task</button>
    </form>
  </div>
);
};

export default TaskForm;    

