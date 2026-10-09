# Screenshake Library for Sandstone

---

_This library is built for [Sandstone](https://github.com/sandstone-mc/sandstone)._ :computer:

> **Note:** This library works with >=Release 1.0 of Sandstone.

This library provides an easy-to-use `Screenshake` class for creating controllable view-angle shake effects on target entities and players in Minecraft.

## Installation

To use the screenshake library:

1. Install the NPM package: :arrow_down:

   ```bash
   bun i sandstone-screenshake
   ```

2. Import `Screenshake` into your project: :arrow_heading_down:

   ```ts
   import { Screenshake } from "sandstone-screenshake";
   ```

3. Instantiate the class and trigger `.start()` or `.stop()`.

4. Enjoy! :star:

---

## Syntax

```ts
const shake = new Screenshake(id, intensity, duration, delay);
```

### Parameters

`id`  
Unique identifier string for the shake instance. Used for generated `.mcfunction` paths and score tracking.

`intensity`  
A 2D numeric tuple `[x, y]` representing the maximum random angular rotation offset applied per shake (in degrees).

`duration`  
Total duration of the screen shake in game ticks.

`delay`  
Delay interval between consecutive shake adjustments in game ticks.

---

### Methods

#### `start(selector)`

Initiates the shake routine on the specified selector.

- **`selector`**: A target selector (e.g. `@s`, `@a`, `@p`) to apply the screenshake to.

#### `stop()`

Stops the screenshake early by triggering the internal latch score check.

---

## Example

```ts
import { Screenshake } from "sandstone-screenshake";
import { Selector } from "sandstone";

// Create a shake instance: 3 degrees pitch/yaw, lasting 40 ticks, shaking every 2 ticks
const explosionShake = new Screenshake("explosion", [3, 3], 40, 2);

// Play shake on the nearest player
explosionShake.start(Selector("@p"));

// Can be stopped conditionally:
// explosionShake.stop();
```

---

## Example Pack

```ts
import { MCFunction, Objective, execute, Selector } from "sandstone";
import { Screenshake } from "sandstone-screenshake";

// Initialize the screenshake preset
const quakeShake = new Screenshake("earthquake", [2.5, 2.5], 60, 2);

// Scoreboard trigger for testing
const triggerShake = Objective.create("trigger_shake", "dummy")("@s");

MCFunction(
  "main",
  () => {
    execute
      .as(Selector("@a", { scores: { [triggerShake.objective.name]: [1, null] } }))
      .at("@s")
      .run(() => {
        triggerShake.set(0);

        // Start screenshake for current player
        quakeShake.start(Selector("@s"));
      });
  },
  { runEveryTick: true }
);
```

> **Note:** Screenshakes run via relative teleports anchored to target entities. Ensure target selectors are valid at the time `.start()` executes.
