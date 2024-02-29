const ForgotPasswordForm: React.FC = () => {
    


return (
    <div>
      <label>Email:</label>
      <input type="email" onChange={(e) => (e.target.value)} />
      <button>Forgot Password</button>
    </div>
  );
}
export default ForgotPasswordForm