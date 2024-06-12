import { Button, LinearProgress, CircularProgress, Box } from "@mui/material";
import { Logout, Lock, Edit } from "@mui/icons-material";
import "./profile.scss";
const Page = () => {
  return (
    <div className="profilePage">
      <div className="profile-page">
        <div className="left-box">
          <div className="profile-details">
            <h2>Profile Details</h2>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
          </div>
          <div className="buttons">
            <Button>
              <Logout />
              Logout
            </Button>
            <Button>
              <Lock />
              Change Password
            </Button>
            <Button>
              <Edit />
              Update Profile
            </Button>
          </div>
        </div>
        <div className="right-box">
          <h2>Progress Results</h2>
          <div className="progress-result">
            <h3>Task Completion</h3>
            <LinearProgress variant="determinate" value={70} />
          </div>
          <div className="progress-result">
            <h3>Profile Completeness</h3>
            <LinearProgress variant="determinate" value={85} />
          </div>
          <div className="progress-result">
            <h3>Overall Performance</h3>
            <Box display="flex" alignItems="center">
              <Box position="relative" display="inline-flex" marginLeft="20px">
                <CircularProgress variant="determinate" value={90} />
                <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
                  <h4>90%</h4>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;