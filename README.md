# Nostr Proxy
Push and get events to your Proxy, get results from multiple Nostr relays

## Installation

In the project directory, run:

```sh
pnpm install
```

Edit your env variables. You can use a `.env` file by copying the file `.env.example` in the root directory, or you can set your variables into your hosting provider UI.

```
PROXY_URL=wss://your-proxy.com
RELAYS=wss://relay1.com,wss://relay2.com,wss://relay.com
```

## Launch

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
Use `ws://localhost:3000` into your Nostr client.

### `npm start`

For production mode

### `npm run test` (TODO)

Run the test cases.

## Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).

===

![](https://raw.githubusercontent.com/wiki/nektos/act/img/logo-150.png)

### "act in act" like "docker in docker"

1. [Install act CI](https://github.com/nektos/act#installation)

	$`curl -s https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash`

2. Install `make`

	$`brew install make`
or
	$`apt install make`

3. clone repo

	$`git clone https://github.com/RandyMcMillan/nuke-docker.git`

	$`cd nuke-docker`

4. $`make`

![](./make.png)

5. $`make push`

https://github.com/RandyMcMillan/nuke-docker/assets/152159/dac1cdef-bec4-4b76-8f2d-c304de680b44

---

### act example

```
act -v   -W .github/workflows/push.yml
act -vr  -W .github/workflows/push.yml
act -vrb -W .github/workflows/push.yml
```
=======
- [Nostr](https://github.com/nostr-protocol/nostr)
- [Awesome Nostr](https://github.com/aljazceru/awesome-nostr)

## License

This project is MIT licensed.
