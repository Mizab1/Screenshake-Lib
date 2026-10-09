import type { SandstoneConfig } from "sandstone";

export default {
  name: "sandstone-screenshake-testing",
  packs: {
    datapack: {
      description: ["A ", { text: "Sandstone", color: "gold" }, " datapack."],
      packFormat: 121
    },
    resourcepack: {
      description: ["A ", { text: "Sandstone", color: "gold" }, " resource pack."],
      packFormat: 97
    }
  },
  onConflict: {
    default: "warn"
  },
  namespace: "sandstone_screenshake_test",
  packUid: "41V9rY0w",
  mcmeta: "latest",
  saveOptions: { clientPath: "C:\\Users\\mizab\\AppData\\Roaming\\ModrinthApp\\profiles\\Fabric 1.21.11", world: "Screen Shake" }
} as SandstoneConfig;
