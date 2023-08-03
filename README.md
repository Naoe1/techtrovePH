# TechtrovePH
This website is designed to display the prices of various PC parts from some of the most popular tech-focused online stores in the Philippines, while also offering the convenient feature of sharing and saving builds through links.

## Demo
https://techtrove-ph.vercel.app/

## Supported Vendors
The scraper currently supports the following online stores:

* Bermorzone: https://bermorzone.com.ph/
* Dynaquest PC: https://dynaquestpc.com/
* Easy PC: https://easypc.com.ph/
* IT World: https://itworldph.com/
* PC Express: https://pcx.com.ph/
* Techmovers: https://www.techmoversph.com/

## Getting Started
### Building
1. Clone the project repository from GitHub to your local machine and install the required dependencies.
```shell
git clone https://github.com/Naoe1/techtrovePH.git
npm i
```
2. Set up a PostgreSQL database with [Supabase](https://supabase.com/) and create a .env file in the project root directory with your credentials for connection:
```shell
SUPABASE_URL='<url>'
SUPABASE_KEY='<key>'
```
3. Run `npm start` for backend and `npm run dev` for fronend.

Alternatively, you can run the entire application in Docker containers: 
```
docker compose up
```
### Deploying
#### Backend
1. Run the backend server using a process manager like PM2 or deploy it to a cloud platform like Render, AWS, or Railway.
#### Frontend
1. Build the frontend application using:
```
npm run build
```
2. Deploy the build artifacts to a static file hosting service or a cloud platform like Netlify or Vercel.


