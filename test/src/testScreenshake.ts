import { MCFunction } from "sandstone";
import Screenshake from "sandstone-screenshake";

let quake1 = new Screenshake("quake1", [1.5, 1.5], 100, 1);

MCFunction("start_quake_1", () => {
  quake1.start("@a");
});

MCFunction("stop_quake_1", () => {
  quake1.stop();
});
