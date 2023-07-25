FROM octoblu/pnpm
MAINTAINER Bob Example <bob@example.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN pnpm install --production --quiet
COPY . /usr/src/app/

CMD [ "node", "server.js" ] # Explicitely calling node rather than 'npm start' allows signal propagation (SIGINT, SIGTERM, etc.)
