<div id="top"></div>

<!-- PROJECT LOGO -->

<!-- ABOUT THE PROJECT -->

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yanelys-mena/flairbnb.git
   ```

2. Install dependencies from the root directory.
    ```sh
    cd frontend > npm install
    ```
    ```sh
    cd backend > npm install
    ```

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
    ```sh
      CREATE USER <name> WITH CREATEDB PASSWORD <'password'>
    ```

4. Create a .env file base on the .env.example given in the backend folder

5. Enter your username and password information into you .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).

6. Add the following proxy to your package.json file with your front end directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
    ```sh
      "proxy": "http://localhost:5000"
    ```

7. Create Database, Migrate, and Seed models.
    ```sh
      npx dotenv sequelize db:create
    ```
    ```sh
      npx dotenv sequelize db:migrate
    ```
    ```sh
      npx dotenv sequelize db:seed:all
    ```
8. Start the services in the back end directory.
    ```sh
      npm start
    ```
9. Start the services in the front end directory, which should open the project in your default broswer. If not naviagte to <a href="http://localhost:3000">http://localhost:3000</a>
    ```sh
      npm start
    ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Yanelys Mena - yanelyshm@outlook.com

Project Link: [https://github.com/yanelys-mena/flairbnb](https://github.com/github_username/flairbnb)

<p align="right">(<a href="#top">back to top</a>)</p>

