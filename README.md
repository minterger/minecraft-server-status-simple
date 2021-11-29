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

```js
mc.status(type, ip, port);
```

```js
const mc = require("minecraft-server-status-simple");

mc.status("java", "play.cubecraft.net", 25565)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

### Get the java server info

```js
mc.statusJava(ip, port);
```

```js
mc.statusJava("play.cubecraft.net", 25565)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

### Get the bedrock server info

```js
mc.statusBedrock(ip, port);
```

```js
mc.statusBedrock("nitrofaction.fr", 19132)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

This library uses [mcsrvstat](https://api.mcsrvstat.us)
