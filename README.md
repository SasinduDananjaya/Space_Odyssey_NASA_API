# Space_Odyssey_NASA_API
# Sasindu Gunawardana
## Space Odyssey - NASA_API Application
 
## Run Directly on Your Browser
- Copy the link and past on new tab (NOTE: This is the project hosted link)
 
  ```bash
  http
  ```
 
## Run Locally
- Clone the project
  ```bash
  git clone https://github.com/sliitcsse/se3040-assignment02-SasinduDananjaya
  ```
 
- Install dependencies in root directory
  ```bash
  npm install
  ```
 
- create a file called .env.local in the root directory, and paste below codes in to it. ( NOTE : to get the key you need to navigate to https://dashboard.clerk.com/sign-up and signup. Then create application and copy the VITE_CLERK_PUBLISHABLE_KEY)
    ```bash
    VITE_CLERK_PUBLISHABLE_KEY = YOUR_CLERK_KEY
    ```
 
- create a file called constants.js inside the src/utils folder, and paste below codes in to it. ( NOTE : to get NASA_API_KEY navigate to https://api.nasa.gov/ and signup )
    ```bash
    const API_KEY = "YOUR_NASA_API_KEY";
    const DEFAULT_ROVER_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${API_KEY}`;
    const ASTRONOMY_PICTURE_URL = `https://api.nasa.gov/planetary/`;
    const EPIC_URL = `https://api.nasa.gov/EPIC/api/natural/`;
 
    export { API_KEY, DEFAULT_ROVER_URL, ASTRONOMY_PICTURE_URL, EPIC_URL};
    ```
- Run the project using below command: 
  ```bash
  npm run dev
  ```
- Run Tests
  ```bash
  npm test
  ```
