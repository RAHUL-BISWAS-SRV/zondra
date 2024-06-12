"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, IconButton, Tab, Tabs } from "@mui/material";
import { Email, Lock, Person } from "@mui/icons-material";
import  "./login.scss"; // Assuming your SCSS file is here

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
		<h3>Welcome Back!</h3>
		<p>Please fill details and go to your dashboard.</p>
      <div className="form-group">
        <label>Email</label>
        <TextField
          fullWidth
          variant="outlined"
          type="email"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
          InputProps={{
            startAdornment: (
              <IconButton>
                <Email />
              </IconButton>
            ),
          }}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            startAdornment: (
              <IconButton>
                <Lock />
              </IconButton>
            ),
          }}
        />
      </div>
      <Button type="submit" className="submit-button">
        Login
      </Button>
    </form>
  );
};

const SignupForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
		<h3>Welcome to Zondra!</h3>
		<p>Please fill all details and go to your dashboard.</p>
      <div className="form-group">
        <label>Name</label>
        <TextField
          fullWidth
          variant="outlined"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
          InputProps={{
            startAdornment: (
              <IconButton>
                <Person />
              </IconButton>
            ),
          }}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <TextField
          fullWidth
          variant="outlined"
          type="email"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
          InputProps={{
            startAdornment: (
              <IconButton>
                <Email />
              </IconButton>
            ),
          }}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            startAdornment: (
              <IconButton>
                <Lock />
              </IconButton>
            ),
          }}
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          {...register("confirmPassword", {
            validate: (value) => value === password || "Passwords do not match",
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          InputProps={{
            startAdornment: (
              <IconButton>
                <Lock />
              </IconButton>
            ),
          }}
        />
      </div>
      <Button type="submit" className="submit-button">
        Sign Up
      </Button>
    </form>
  );
};

const Page = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleLogin = (data) => {
    console.log("Login Data:", data);
  };

  const handleSignup = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="loginPage">
      <div className="container">
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Login" value="login"/>
          <Tab label="Signup" value="signup"/>
        </Tabs>
        {activeTab === "login" && <LoginForm onSubmit={handleLogin} />}
        {activeTab === "signup" && <SignupForm onSubmit={handleSignup} />}
      </div>
    </div>
  );
};

export default Page;
