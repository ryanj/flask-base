# A basic Flask quickstart
*With support for serving easy APIs and static content*

## OpenShift
Deploy to OpenShift
```bash
oc new-app python~https://github.com/ryanj/flask-base
oc expose service/flask-base
```

## Local Dev
Initialize a python virtual environment:
```bash
python3 -m venv .venv
. .venv/bin/activate
```

Install module dependencies:
```bash
pip install -r requirements.txt
```

Start a local development server on port 8080:
```bash
flask --app flaskapp run --port=8080 --debug
```

## License
This code is dedicated to the public domain to the maximum extent permitted by applicable law, pursuant to CC0 (http://creativecommons.org/publicdomain/zero/1.0/)
