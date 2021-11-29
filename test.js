const server = require("./src/index");

// server.statusJava("play.cubecraft.net").then((res) => console.log(res));
// server.statusBedrock("nitrofaction.fr").then((res) => console.log(res));
// server.status("java", "play.cubecraft.net").then((res) => console.log(res));
// server.status("bedrock", "nitrofaction.fr").then((res) => console.log(res));

test("statusJava return object contain online", () => {
  expect(server.statusJava("play.cubecraft.net")).resolves.toHaveProperty(
    "online",
    true || false
  );
});

test("statusJava with port return object contain online", () => {
  expect(
    server.statusJava("play.cubecraft.net", 25565)
  ).resolves.toHaveProperty("online", true || false);
});

test("statusBedrock return contain online", () => {
  expect(server.statusBedrock("nitrofaction.fr")).resolves.toHaveProperty(
    "online",
    true || false
  );
});

test("statuBedrock with port return contain online", () => {
  expect(
    server.statusBedrock("nitrofaction.fr", 19132)
  ).resolves.toHaveProperty("online", true || false);
});

test("status with port return object contain online", () => {
  expect(
    server.status("java", "play.cubecraft.net", 25565)
  ).resolves.toHaveProperty("online", true || false);
});

test("status java return contain online", () => {
  expect(server.status("java", "play.cubecraft.net")).resolves.toHaveProperty(
    "online",
    true || false
  );
});

test("status bedrock return object contain online true or false", () => {
  expect(server.status("bedrock", "nitrofaction.fr")).resolves.toHaveProperty(
    "online",
    true || false
  );
});
