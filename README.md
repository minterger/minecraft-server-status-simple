# Minecraft Server Status Simple

This package will give infomation about minecraft servers.

## Getting started

You will need to install the package:

```shell
$ npm i minecraft-server-status-simple
```

## Using the library

### Basic usage:

type eq "java" or "bedrock"

the port is not necessary, default: **25565** Java or **19132** Bedrock

NEW show array in params this is optional

Possible options:

```js
show: [
  "online",
  "ip",
  "port",
  "debug",
  "motd",
  "players",
  "version",
  "protocol",
  "hostname",
  "icon",
  "software",
  "map",
  "gamemode",
  "serverid",
  "plugins",
  "mods",
  "info",
];
```

```js
mc.status({ type, ip, port, show: [] });
```

```js
const mc = require("minecraft-server-status-simple");

mc.status({
  type: "java",
  ip: "play.cubecraft.net",
  port: 25565,
  show: ["online", "players"],
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

### Get the java server info

```js
mc.statusJava({ ip, port, show: [] });
```

```js
mc.statusJava({ ip: "play.cubecraft.net", port: 25565 })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

### Get the bedrock server info

```js
mc.statusBedrock({ ip, port, show: [] });
```

```js
mc.statusBedrock({ ip: "nitrofaction.fr", port: 19132 })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

This library uses [mcsrvstat](https://api.mcsrvstat.us)
