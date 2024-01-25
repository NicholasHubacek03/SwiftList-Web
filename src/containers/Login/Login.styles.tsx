import styled from "styled-components";

export const StyledLoginSection =  styled.section`

body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.login-form {
  max-width: 300px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  color: #333;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #555;
}

.card{
  color: red;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

.remember-me {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #1b6ca8;
}

.forgot-password {
  text-align: center;
  margin-top: 10px;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}


`


