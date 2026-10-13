import { MCFunction, Selector } from "sandstone";
import Screenshake from "sandstone-screenshake";

let quake1 = new Screenshake("quake1", [1.5, 1.5], 100, 1);

MCFunction("start_quake_1", () => {
  quake1.start(Selector("@a", { distance: [null, 10] }));
});
MCFunction("start_quake_2", () => {
  quake1.start(Selector("@a", { distance: [null, 30] }));
});

MCFunction("stop_quake_1", () => {
  quake1.stop();
});
