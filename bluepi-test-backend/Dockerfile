FROM python

WORKDIR /app
RUN pip freeze > requirements.txt
COPY ./requirements.txt .
RUN pip install -r ./requirements.txt
COPY . .
EXPOSE 8000