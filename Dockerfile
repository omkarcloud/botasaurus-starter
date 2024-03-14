FROM chetan1111/botasaurus:latest

ENV PYTHONUNBUFFERED=1

COPY requirements.txt .

RUN python run.py install

RUN mkdir app
WORKDIR /app
COPY . /app

CMD ["python", "run.py"]