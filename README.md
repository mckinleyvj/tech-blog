# tech-blog

![bcrypt](https://img.shields.io/static/v1?label=bcrypt&message=bcrypt&color=red)
![connect-session-sequelize](https://img.shields.io/static/v1?label=connect-session-sequelize&message=connect-session-sequelize&color=green)
![dotenv](https://img.shields.io/static/v1?label=dotenv&message=dotenv&color=yellow)
![express](https://img.shields.io/static/v1?label=express&message=express&color=red)
![express-handlebars](https://img.shields.io/static/v1?label=express-handlebars&message=express-handlebars&color=green)
![express-session](https://img.shields.io/static/v1?label=express-session&message=express-session&color=yellow)
![mysql2](https://img.shields.io/static/v1?label=mysql2&message=mysql2&color=red)
![sequelize](https://img.shields.io/static/v1?label=sequelize&message=sequelize&color=green)
![momentJS](https://img.shields.io/static/v1?label=momentJS&message=momentJS&color=yellow)

## Table of Contents

-   [Contributing](#contributing)
-   [Installation](#installation)
-   [Deployment](#deployment)
-   [Usage](#usage)
-   [Resources](#resources)
-   [Author](#author)
-   [Questions](#questions)

## Description

This project enables me to create a web application using the MVC structure. It uses a backend MySQL Database and Handlebars to display the pages. Using models to structure the database, controller to hold the business rules and logical processes of the system and the views that renders the output as a web application.

Please make sure to install the required <kbd>dependencies</kbd> and <kbd>MySQL</kbd> on your local machine after cloning the repository.

## Contributing

I am always looking for contributors of all skill levels! If you have something in mind to add to the project, try out by [creating an issue](https://github.com/mckinleyvj/tech-blog/issues) and let's see where we can go from there.

[Back to top](#tech-blog)

## Installation

Fork and clone the repository, then install the required packages to run the application.

1. Fork the repository to your Github profile.

2. Clone the repository to your local computer.

```bash
git clone git@github.com:mckinleyvj/tech-blog.git
```

3. Req: Install <kbd>node</kbd> dependencies. Use the latest version or a version higher than 14.0.0

```bash
npm i || npm install n -g || npm install v15.0.0 (Specific version)
```

4. Req: Install <kbd>MySQL</kbd> schema and seeds. Make sure to have MySQL installed on your local machine.

```bash
mysql -u root -p
source db/schema.sql
quit
```

5. Inject demodata to MySQL

```bash
npm run seed
```

6. Run the application invoking <kbd>npm run start</kbd>

```bash
npm run start
```

[Back to top](#tech-blog)

## Deployment

Please visit the live site at https://mac-tech-blog.herokuapp.com/

[Back to top](#tech-blog)

## Usage

-   This project creates a new database on the local MySQL database server then injects data into it. It works as a social network site for posting thoughts and people to provide comments.
-   This project does not collect any bank details or personal information for misuse.
-   This project is open source and is available to all developers that finds interest to enhancing features by raising [an issue](https://github.com/mckinleyvj/tech-blog/issues) or simply by [contacting me](#questions).

[Back to top](#tech-blog)

## Resources

-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [NodeJS](https://nodejs.org/)
-   Node Packages:
    -   [bcrypt](https://www.npmjs.com/package/bcrypt)
    -   [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
    -   [dotenv](https://www.npmjs.com/package/dotenv)
    -   [express](https://www.npmjs.com/package/express)
    -   [express-handlebars](https://www.npmjs.com/package/express-handlebars)
    -   [express-session](https://www.npmjs.com/package/express-session)
    -   [mysql2](https://www.npmjs.com/package/mysql2)
    -   [sequelize](https://www.npmjs.com/package/sequelize)
    -   [moment](https://www.npmjs.com/package/moment)

[Back to top](#tech-blog)

## Author

Mckinley Jimenez

-   [Portfolio](https://mckinleyvj.github.io/professional-portfolio/)
-   [GitHub](https://github.com/mckinleyvj)
-   [LinkedIn](https://www.linkedin.com/in/mckinleyjimenez)

[Back to top](#tech-blog)

## Questions

Visit my [GitHub profile](https://github.com/mckinleyvj) for more information about me and my other repositories.

You can also send me an <a href="mailto:mckinleyvj@gmail.com?">email</a> to know more information.

[Back to top](#tech-blog)
