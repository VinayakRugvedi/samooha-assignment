# Samooha Assignment

The goal is to create a UI piece (Signup) as part of the streamlit application.
The UI component was initiated by a [react based template](https://github.com/streamlit/component-template) as sugested by streamlit.

### Steps to run this locally

Lets have 2 terminals in place

Start by setting up the environment and installing the dependencies for streamlit.

In Terminal 1:
1. `pipenv shell`
2. `pipenv install`


Navigate to the frontend directory to install dependencies and then spin up the frontend server.

In Terminal 2:
1. `cd streamlit_signup_component/frontend/`
2. `npm install`
3. `npm run start`

Back to Terminal 1:
Spin up streamlit
1. `streamlit run streamlit_signup_component/__init__.py`

Your browser should open a tab and take you to **http://localhost:8501/**
