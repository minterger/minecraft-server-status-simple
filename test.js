const server = require("./src/index");

// server.statusJava("play.cubecraft.net").then((res) => console.log(res));
// server.statusBedrock("nitrofaction.fr").then((res) => console.log(res));
// server.status("java", "play.cubecraft.net").then((res) => console.log(res));
// server.status("bedrock", "nitrofaction.fr").then((res) => console.log(res));

test("statusJava return object contain online", () => {
  expect(server.statusJava("play.cubecraft.net")).resolves.toHaveProperty(
    "online"
  );
});

test("statusJava with port return object contain online", () => {
  expect(
    server.statusJava({ ip: "play.cubecraft.net", port: 25565 })
  ).resolves.toHaveProperty("online");
});

test("statusBedrock return contain online", () => {
  expect(
    server.statusBedrock({ ip: "nitrofaction.fr" })
  ).resolves.toHaveProperty("online");
});

test("statuBedrock with port return contain online", () => {
  expect(
    server.statusBedrock({ ip: "nitrofaction.fr", port: 19132 })
  ).resolves.toHaveProperty("online");
});

test("status with port return object contain online", () => {
  expect(
    server.status({ type: "java", ip: "play.cubecraft.net", port: 25565 })
  ).resolves.toHaveProperty("online");
});

test("status java return contain online", () => {
  expect(
    server.status({ type: "java", ip: "play.cubecraft.net" })
  ).resolves.toHaveProperty("online");
});

test("status bedrock return object contain online or false", () => {
  expect(
    server.status({ type: "bedrock", ip: "nitrofaction.fr" })
  ).resolves.toHaveProperty("online");
});

test("status bedrock with param show return object contain players", () => {
  expect(
    server.status({
      type: "bedrock",
      ip: "nitrofaction.fr",
      port: 19132,
      show: ["players"],
    })
  ).resolves.toHaveProperty("players");
});
