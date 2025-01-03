Xylogames Marketing Dashboard

Welcome to the Xylogames Marketing Dashboard, a comprehensive platform for managing and optimizing marketing campaigns for games published on the Xylogames platform. This dashboard empowers the marketing team to create impactful campaigns, analyze performance metrics, and maximize ROI effectively.

Key Features

1. Authentication and Authorization

Secure login and signup system with JWT.

Role-based access control (Admin, Marketer, Viewer).

2. Campaign Management

Create, edit, view, and delete marketing campaigns.

Track campaign metrics such as impressions, clicks, conversions, and ROI.

Manage campaign statuses (Active, Completed, Pending).

3. Game Insights

View detailed performance metrics for games, including downloads, playtime, revenue, and retention rates.

Filter and sort data to gain actionable insights.

4. Analytics and Reporting

Visualize data using interactive charts (e.g., bar, pie, and line charts).

Export reports in PDF and Excel formats.

5. Budget Tracking

Visual tools to monitor campaign budgets.

Alerts for overspending or budget thresholds.

6. Community Metrics

Track social media engagement (likes, shares, comments, mentions).

Analyze engagement trends over time.

7. Content Repository

Upload and manage marketing assets (images, videos, documents).

Organize assets into folders and categories.

8. Notifications

Real-time notifications for campaign updates and milestones.

Budget usage alerts.

9. User Activity Logs

Maintain logs for key actions (e.g., campaign creation, updates, deletions).

10. Mobile Responsiveness

Fully responsive design for seamless use on desktops, tablets, and mobile devices.

Screenshots

Dashboard Overview



Campaign Management



Analytics and Reporting



Development

Tech Stack

Frontend:

React with React Router for navigation and Context API/Redux for state management.

Chart.js/Recharts for data visualization.

Ant Design/Material-UI for UI components.

Backend:

Node.js with Express for REST APIs.

JWT for authentication.

Multer for file uploads.

Database:

MongoDB with Mongoose for schema management.

Setup Instructions

Backend

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Create a .env file and configure it:

MONGO_URI=mongodb://localhost:27017/xylogames
PORT=5000

Start the server:

node server.js

Frontend

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the React development server:

npm start

Database

Install MongoDB and start the service:

mongod

Research and Insights

User Feedback

Conducted surveys with marketing team members to identify pain points in current workflows.

Prioritized features like budget tracking, community metrics, and real-time notifications.

Market Analysis

Benchmarked against leading marketing tools to ensure a competitive feature set.

Focused on scalability and user-friendliness for growing teams.

Future Enhancements

Integration with third-party tools: Add support for APIs like Google Analytics and Facebook Insights.

AI-driven recommendations: Use machine learning to optimize campaign strategies.

Localization: Support for multiple languages for global teams.




