import Image from "next/image";
import "./page.scss";
import { Container } from "@mui/material";
import img1 from "../Assets/Images/img1.png";
import img2 from "../Assets/Images/img2.png";
import img3 from "../Assets/Images/img3.png";
import img4 from "../Assets/Images/img4.png";
import img5 from "../Assets/Images/img5.png";
import img6 from "../Assets/Images/img6.png";
export default function Home() {
  return (
    <main className="maincontainerHome">
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <Container className="content">
            <h1>Welcome to Zondra</h1>
            <p>
              Zondra is your ultimate task management solution, designed to help
              you streamline your daily activities and boost your productivity.
              With a simple and intuitive interface, Zondra makes it easy to
              create, organize, and manage your to-do lists, ensuring that you
              stay on top of your tasks and deadlines.
            </p>
            <p>
              <strong>Stay Organized and Achieve More- </strong>
              Whether you're managing personal errands, professional projects,
              or collaborative team tasks, Zondra provides the tools you need to
              stay organized and efficient. Our app offers a range of powerful
              features, including task categorization, deadline reminders, and
              real-time syncing across all your devices.
            </p>
            <a href="/login" className="login">Login</a>
          </Container>
          <Container className="image">
            <Image width={800} height={500} src={img1} alt="Hero Image" />
          </Container>
        </section>

        {/* About Section */}
        <section className="about">
          <Container className="image">
            <Image width={700} height={500} src={img4} alt="About Image" />
          </Container>
          <Container className="content">
            <h2>About Zondra</h2>
            <p>
              Zondra is a powerful, yet simple to-do list app designed to help
              you manage your tasks efficiently. Created by Rahul, Zondra is
              totally free and open source, ensuring that anyone can use it and
              contribute to its development. The app is built with modern web
              technologies like Next.js, Redux Toolkit, Firebase, Material-UI,
              SCSS, and React Hook Form, offering a seamless and user-friendly
              experience for all users.
            </p>

            <p>
              <strong>Inspiration and Development</strong>
              <br />
              Rahul created Zondra out of a need for a simple yet effective task
              management tool. Frustrated by the complexity and cost of existing
              to-do list apps, he set out to develop a solution that is both
              powerful and user-friendly. Rahul’s vision was to create an app
              that anyone could use and benefit from, regardless of their
              technical expertise.
            </p>
            <p>
              <strong>Community and Open Source</strong>
              <br />
              As an open-source project, Zondra invites developers from around
              the world to contribute and improve the app. The open-source
              nature of Zondra ensures continuous development and innovation,
              driven by a community of passionate contributors. Users can
              suggest features, report bugs, and even contribute code to help
              make Zondra better.
            </p>
          </Container>
        </section>

        {/* Todo List Details Section */}
        <section className="todo-details">
          <Container className="content">
            <h2>Why Choose Zondra?</h2>
            <ol>
              <li>
                <strong>Simplicity:</strong>
                <br />
                Zondra’s straightforward design makes it easy for anyone to
                start managing their tasks immediately. There’s no steep
                learning curve, and users can quickly get up and running with
                minimal setup.
              </li>
              <br />
              <li>
                <strong>Efficiency:</strong>
                <br />
                With features like reminders, categories, and real-time sync,
                Zondra helps you stay organized and productive. The app is
                designed to streamline your workflow and make task management a
                breeze.
              </li>
              <br />
              <li>
                <strong>Cost-Free:</strong>
                <br />
                Unlike many task management tools that require subscriptions or
                one-time purchases, Zondra is completely free. You can enjoy all
                its features without any cost, making it accessible to everyone.
              </li>
              <br />
              <li>
                <strong>Flexibility:</strong>
                <br />
                Zondra’s customizable settings and flexible features cater to a
                wide range of users. Whether you’re a student, professional, or
                team leader, Zondra adapts to your specific needs.
              </li>
              <br />
              <li>
                <strong>Community-Driven:</strong>
                <br />
                Being open-source, Zondra benefits from the contributions of a
                global community. This collaborative approach ensures that the
                app evolves continuously and incorporates the best ideas and
                innovations from users and developers.
              </li>
            </ol>
          </Container>
          <Container className="image">
            <Image
              width={800}
              height={700}
              src={img3}
              alt="Todo Details Image"
            />
          </Container>
        </section>

        {/* Features Section */}
        <section className="features">
          <Container className="image">
            <Image width={800} height={900} src={img2} alt="Features Image" />
          </Container>
          <Container className="content">
            <h2>Key Features</h2>
            <ol>
              <li>
                <strong>Task Management:</strong>
                <br />
                Zondra allows you to create, update, and delete tasks
                effortlessly. You can organize your tasks by categories, making
                it easy to prioritize and focus on what matters most. The
                intuitive interface ensures that adding or modifying tasks is
                quick and straightforward, so you can spend more time getting
                things done.
              </li>
              <br />
              <li>
                <strong>Categories and Labels:</strong>
                <br />
                Categorize your tasks with custom labels to keep everything
                organized. Whether you’re managing work projects, personal
                errands, or collaborative team tasks, Zondra’s categorization
                feature helps you maintain clarity and structure.
              </li>
              <br />
              <li>
                <strong>Deadlines and Reminders:</strong>
                <br />
                Never miss a deadline with Zondra’s built-in reminder system.
                Set due dates for your tasks and receive timely notifications to
                stay on track. The app’s notification system ensures you’re
                always aware of upcoming deadlines, helping you manage your time
                effectively.
              </li>
              <br />
              <li>
                <strong>Sync Across Devices:</strong>
                <br />
                Zondra syncs your tasks across all your devices in real-time.
                Whether you’re on your phone, tablet, or computer, you can
                access and manage your to-do list from anywhere. This
                cross-device synchronization ensures that your tasks are always
                up-to-date, no matter where you are.
              </li>
              <br />
              <li>
                <strong>User-Friendly Interface:</strong>
                <br />
                The app features a clean, minimalist design that is easy to
                navigate. With a focus on usability, Zondra’s interface is
                designed to reduce clutter and enhance productivity. The
                straightforward layout allows users to focus on their tasks
                without unnecessary distractions.
              </li>
              <br />
              <li>
                <strong>Collaboration Tools:</strong>
                <br />
                Collaborate with others by sharing tasks and projects. Zondra’s
                collaboration features enable team members to work together
                efficiently, share updates, and track progress. Whether you’re
                working on a group project or managing team tasks, Zondra’s
                collaborative tools streamline communication and coordination.
              </li>
              <br />
              <li>
                <strong>Security and Privacy:</strong>
                <br />
                Zondra is built with security in mind. Your data is stored
                securely in Firebase, ensuring that your information is
                protected. The app’s privacy policies are transparent, and it is
                designed to safeguard your personal and task data.
              </li>
            </ol>
          </Container>
        </section>

        {/* Reviews Section */}
        <section className="reviews">
          <Container className="content">
            <h2>Reviews</h2>
            <p>
              We pride ourselves on the positive feedback and reviews we receive
              from our users. Here are some testimonials from our community:
            </p>
            <ol>
              <li>
                <strong>Sarah L.:</strong> <br />
                “Zondra has completely transformed the way I manage my tasks.
                The app’s simplicity and powerful features make it an essential
                tool for my daily productivity.”
              </li>
              <br />
              <li>
                <strong>Michael B.:</strong>
                <br />
                “I love how Zondra syncs across all my devices. Whether I’m at
                home or on the go, I always have access to my to-do list. The
                reminders are a lifesaver!”
              </li>
              <br />
              <li>
                <strong>Emily R.:</strong>
                <br />
                “As a freelancer, I need a reliable task management app, and
                Zondra is perfect. It’s free, open source, and incredibly easy
                to use. Highly recommend it!”
              </li>
              <br />
              <li>
                <strong>David K.:</strong>
                <br />
                “The collaborative features in Zondra have made teamwork so much
                easier. We can share tasks and track progress seamlessly. It’s a
                fantastic tool for any team.”
              </li>
              <br />
              <li>
                <strong>Jessica T.:</strong>
                <br />
                “Zondra’s design is clean and intuitive. I was able to start
                using it right away without any hassle. It’s definitely my go-to
                app for task management.”
              </li>
            </ol>

            <p>
              These reviews highlight the impact Zondra has had on our users’
              productivity and task management. We’re continually working to
              improve the app based on user feedback and suggestions.
            </p>
          </Container>
          <Container className="image">
            <Image width={800} height={550} src={img5} alt="Reviews Image" />
          </Container>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <Container className="image">
            <Image width={800} height={780} src={img6} alt="Contact Image" />
          </Container>
          <Container className="content">
            <h2></h2>
            <p>
              <strong>Getting Started with Zondra:</strong> <br />
              To get started with Zondra, simply visit our website and sign up
              for a free account. Once you’re registered, you can start creating
              tasks, setting deadlines, and organizing your to-do list. The
              app’s intuitive interface and helpful tutorials will guide you
              through the initial setup and ensure you’re making the most of
              Zondra’s features.
            </p>
            <p>
              <strong>Join Our Community:</strong> <br />
              Join our growing community of users and contributors by visiting
              our GitHub repository. Here, you can find the latest updates,
              contribute to the project, and connect with other users. Whether
              you’re a developer looking to contribute code or a user with
              feedback and suggestions, your participation is welcome and
              valued.
            </p>
            <p>
              <strong>Conclusion:</strong> <br />
              Zondra is more than just a to-do list app; it’s a comprehensive
              task management solution designed to help you stay organized and
              productive. With its powerful features, user-friendly interface,
              and open-source nature, Zondra is the perfect tool for anyone
              looking to improve their task management. Created by Rahul with a
              vision of simplicity and efficiency, Zondra is a testament to the
              power of community-driven development and the benefits of
              open-source software.
            </p>
            <p>
              <strong>Contacting the Zondra Team</strong> <br />
              If you have any questions or feedback about Zondra, you can reach
              out to the Zondra team at 1-800-ZONDRA (1-800-555-5555). We’re
              here to help and answer any questions you may have.
            </p>
            <p>
              <strong>Follow Us on Social Media:</strong> <br />
              Follow Zondra on social media to stay up-to-date with the latest
              news and updates. We’re always looking for new ways to improve
              Zondra, so be sure to follow us on Twitter, Facebook, and
              Instagram to stay informed.
            </p>

            <p>
              Start using Zondra today and experience the difference in your
              productivity and task management. Join our community, contribute
              to the project, and help us make Zondra the best task management
              tool available.
            </p>
          </Container>
        </section>

        {/* Footer Section */}
        <section className="footer">
          <Container>
            <p>&copy; 2024 Zondra. All rights reserved.</p>
          </Container>
        </section>
      </div>
    </main>
  );
}
