/**
* Gets the shortest angle between `angle1` and `angle2`.
* Both angles must be in the range -180 to 180, which is the same clamped
* range that `sprite.angle` uses, so you can pass in two sprite angles to
* this method, and get the shortest angle back between the two of them.
*
* The angle returned will be in the same range. If the returned angle is
* greater than 0 then it's a counter-clockwise rotation, if < 0 then it's
* a clockwise rotation.
*
* @method Phaser.Math#getShortestAngle
* @param {number} angle1 - The first angle. In the range -180 to 180.
* @param {number} angle2 - The second angle. In the range -180 to 180.
* @return {number} The shortest angle, in degrees. If greater than zero it's a counter-clockwise rotation.
*/
export default function (angle1: any, angle2: any): number;
