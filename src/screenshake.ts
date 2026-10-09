import { _, execute, MCFunction, MCFunctionClass, Objective, ObjectiveClass, rel, Score } from "sandstone";
import { MultipleEntitiesArgument } from "sandstone/arguments";

function randomFloatFromInterval(min: number, max: number): number {
  return parseFloat(((1 - Math.random()) * (max - min) + min).toFixed(2));
}

export class Screenshake {
  // Private member variables
  private id: string;
  private intensity: [x: number, y: number];
  private duration: number;
  private delay: number;
  private entryPoint: MCFunctionClass | undefined;
  private selector: MultipleEntitiesArgument<false> | undefined;
  private privateObjective: ObjectiveClass;
  private latch: Score | undefined;

  constructor(id: string, intensity: [x: number, y: number], duration: number, delay: number) {
    this.id = id;
    this.intensity = intensity;
    this.duration = duration;
    this.delay = delay;

    this.privateObjective = Objective.create("private", "dummy");
  }

  // Method to actually shake the screen of the give selector by thr given intensity
  private rotate() {
    if (!this.selector) return;
    execute
      .as(this.selector)
      .at("@s")
      .run.teleport(
        "@s",
        rel(0, 0, 0),
        rel(
          randomFloatFromInterval(-this.intensity[0], this.intensity[0]),
          randomFloatFromInterval(-this.intensity[1], this.intensity[1])
        )
      );
  }

  play(selector: MultipleEntitiesArgument<false>) {
    this.latch = this.privateObjective(`latch_${this.id}`).set(0);
    this.selector = selector;

    this.entryPoint = MCFunction(`screenshake/shake_${this.id}`, () => {
      for (let i = 0; i < Math.floor(this.duration / this.delay); i++) {
        // Check if the stop() is called and stop the screenshake
        _.if(this.latch!.matches([1, null])).return(1);

        // Else keep running the screenshake
        this.rotate();
        _.await.sleep(`${this.delay}t`);
      }
    });
    this.entryPoint();
  }

  stop() {
    this.latch!.set(1);
  }
}
