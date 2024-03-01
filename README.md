
# Device Management Web Application


The Device Management Web Application is a user-friendly interface designed for efficiently managing and monitoring various devices. It provides insightful details about each device, offering a comprehensive overview and allowing users to navigate through device information effortlessly.


## Prerequisites

#### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

#### Install create-react-app

Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app
```bash
npm install -g create-react-app
```
## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**
## Routes

### 1. **Device List Screen:**
   - **Path:** `/devicelist`
   - **Description:** Displays a list of devices with essential details. Users can search for specific devices, apply filters, and navigate through paginated results.

### 2. **Device Detail Screen:**
   - **Path:** `/devicelist/:applianceId`
   - **Description:** Presents detailed information about a specific device identified by `:applianceId`. Users can view a summary, detailed device information, and navigate back to the device list.
## Key Components

#### Device Summary:
- Showcases key details about a device in a concise format.
- Includes visual indicators for device status.

#### Device Detail:
- Presents in-depth information about a specific device.
- Divided into sections for easy navigation.

#### Pagination Component:
- Enables easy navigation through multiple pages of device listings.

#### Error Details Component:
- Displays error information and provides a refresh option.


## Dependencies

- **[react-router-dom](https://reactrouter.com/web/guides/quick-start):**
  - **Usage:** Used for declarative routing in the application.
  - **Description:** `react-router-dom` enables navigation and URL handling in React applications. It provides a set of components for defining the structure of your application based on the URL.

- **[axios](https://axios-http.com/docs/intro):**
  - **Usage:** Utilized for making HTTP requests from the frontend to the backend.
  - **Description:** `axios` is a promise-based HTTP client for the browser and Node.js. It simplifies the process of making asynchronous requests and handling responses.

- **[bootstrap](https://getbootstrap.com/):**
  - **Usage:** Used for responsive styling and UI components.
  - **Description:** `bootstrap` is a popular CSS framework that provides a collection of pre-designed components and styles. It facilitates the development of consistent and responsive user interfaces.

- **[react-bootstrap](https://react-bootstrap.github.io/):**
  - **Usage:** Used in conjunction with `bootstrap` for integrating Bootstrap components into React applications.
  - **Description:** `react-bootstrap` is a React-specific implementation of Bootstrap components. It allows seamless integration of Bootstrap styles and components into React applications.

- **[date-fns](https://date-fns.org/):**
  - **Usage:** Utilized for date formatting in the application.
  - **Description:** `date-fns` is a modern JavaScript date utility library that provides functions for formatting, parsing, and manipulating dates. It offers a lightweight alternative to the larger moment.js library.
## Authors

[@Deva45anbu](https://github.com/Deva45anbu)