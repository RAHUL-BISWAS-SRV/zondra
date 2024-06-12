import "./about.scss";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircle, Build } from "@mui/icons-material";

const Page = () => {
  return (
    <div className="aboutPage">
      <div className="about-container">
        <h1>About Zondra</h1>
        <p>
          Zondra is a powerful, yet simple to-do list website designed to help
          you manage your tasks efficiently. Created by Rahul, Zondra is totally
          free and open source, ensuring that anyone can use it and contribute
          to its development.
        </p>
        <>
          <h2>Features</h2>
          <p>Zondra offers a range of features to help you stay organized:</p>
          <List className="features-list">
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Create, update, and delete tasks" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Organize tasks by categories" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Set deadlines and reminders" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Sync your tasks across devices" />
            </ListItem>
          </List>
        </>
        <>
          <h2>Technologies Used</h2>
          <p>To build Zondra, we used a variety of modern technologies:</p>
          <List className="technologies-list">
            <ListItem>
              <ListItemIcon>
                <Build />
              </ListItemIcon>
              <ListItemText primary="Next.js - for server-side rendering and static site generation" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Build />
              </ListItemIcon>
              <ListItemText primary="Redux Toolkit - for state management" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Build />
              </ListItemIcon>
              <ListItemText primary="Firebase - for authentication and real-time database" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Build />
              </ListItemIcon>
              <ListItemText primary="Material-UI - for responsive and accessible UI components" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Build />
              </ListItemIcon>
              <ListItemText primary="SCSS - for modular and maintainable CSS" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Build />
              </ListItemIcon>
              <ListItemText primary="React Hook Form - for easy form management" />
            </ListItem>
          </List>
        </>
        <div className="footer">
          <p>
            Created by Rahul. Zondra is completely free and open source. Join
            our community and contribute to making task management easier for
            everyone!
          </p>
          <p>
            For more information, visit our{" "}
            <a href="https://github.com/zondra">GitHub repository</a> and check
            out the latest updates, issues, and contribution guidelines. We
            welcome all contributions, from bug fixes to new feature
            implementations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
