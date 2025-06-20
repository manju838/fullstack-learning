# Project2:

This project is based on <www.youtube.com/watch?v=SE0TA_6Geqo>. It is used to upload images and display it to the backend.

* React Instructions:
```bash
npx create-react-app my-app
cd my-app
npm start

```

In case of an error, "Cannot find module 'ajv/dist/compile/codegen'  " use: 
```bash
npm install ajv ajv-keywords --save
```

* FastAPI Instructions:

I am using an existing conda environment(named ws_py39) and if it needed create a new environment be it on conda or venv and **activate** it.

```bash
mkdir backend

pip install "fastapi[standard]"

pip install Pillow
```
Create a main.py file to have all the fastapi code in it.

```bash
python main.py
```

Incase main.py is running but the browser doesnt open http://0.0.0.0:8000, use localhost:8000 and it should work.