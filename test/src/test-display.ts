import { displayMessage } from 'sandstone-screenshake'

/**
 * Expected result(s):
 * 
 *  - .sandstone/output/datapack/data/template/functions/display_message.mcfunction
 * 
 *    - tellraw @a ["\n========= Congratulations! =========\n\n",{"text":" Sandstone template library","color":"gold","bold":true}," is ",{"text":"successfully installed.\n\n","color":"green"},"==============",{"text":"🏹","color":"#D2691E"},{"text":"⚔","color":"#45ACA5"},{"text":"⛏","color":"#FFD700"},"=============="]
 */
displayMessage()