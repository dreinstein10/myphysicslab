// Copyright 2016 Erik Neumann.  All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('myphysicslab.lab.engine2D.Scrim');

goog.require('myphysicslab.lab.engine2D.RigidBody');
goog.require('myphysicslab.lab.util.AffineTransform');
goog.require('myphysicslab.lab.util.DoubleRect');
goog.require('myphysicslab.lab.util.Util');
goog.require('myphysicslab.lab.util.Vector');

goog.scope(function() {

var AffineTransform = myphysicslab.lab.util.AffineTransform;
var DoubleRect = myphysicslab.lab.util.DoubleRect;
var RigidBody = myphysicslab.lab.engine2D.RigidBody;
var Util = goog.module.get('myphysicslab.lab.util.Util');
var Vector = myphysicslab.lab.util.Vector;

/** The fixed background to which objects can be attached with Springs, Joints or Ropes;
it is an immutable singleton object. Access the singleton Scrim object via
{@link #getScrim}.

As a RigidBody, Scrim has infinite mass, infinite extent, and never moves. Its
body coordinatess are the same as world coordinatess.

Scrim does not collide with anything, so it is excluded from the collision and contact
detection phases of the physics engine. It can however appear in a
{@link myphysicslab.lab.engine2D.ConnectorCollision} which are generated by
{@link myphysicslab.lab.engine2D.Joint} or {@link myphysicslab.lab.engine2D.Rope}.

Scrim is never on the list of bodies in {@link myphysicslab.lab.engine2D.RigidBodySim},
only Polygons are on that list.

* @constructor
* @final
* @struct
* @implements {RigidBody}
* @private
*/
myphysicslab.lab.engine2D.Scrim = function() {};

var Scrim = myphysicslab.lab.engine2D.Scrim;

/**
* @type {!Scrim}
* @private
*/
Scrim.singleton = new Scrim();

/** Returns the singleton instance of Scrim.
* @return {!Scrim} the singleton instance of Scrim
*/
Scrim.getScrim = function() {
  return Scrim.singleton;
};

if (!Util.ADVANCED) {
  /** @inheritDoc */
  Scrim.prototype.toString = function() {
    return 'Scrim{}';
  };

  /** @inheritDoc */
  Scrim.prototype.toStringShort = function() {
    return 'Scrim{}';
  };
};

/** @inheritDoc */
Scrim.prototype.addNonCollide = function(bodies) {
};

/** @inheritDoc */
Scrim.prototype.alignTo = function(p_body, p_world, opt_angle) {
  throw new Error();
};

/** @inheritDoc */
Scrim.prototype.bodyToWorld = function(p_body) {
  return Vector.clone(p_body);
};

/** @inheritDoc */
Scrim.prototype.bodyToWorldTransform = function() {
  return AffineTransform.IDENTITY;
};

/** @inheritDoc */
Scrim.prototype.createCanvasPath = function(context) {
  // make an empty path
  context.beginPath();
  context.closePath();
};

/** @inheritDoc */
Scrim.prototype.doesNotCollide = function(body) {
  return true;
};

/** @inheritDoc */
Scrim.prototype.eraseOldCoords = function() {
};

/** @inheritDoc */
Scrim.prototype.getAccuracy = function() {
  return 0;
};

/** @inheritDoc */
Scrim.prototype.getAngle = function() {
  return 0;
};

/** @inheritDoc */
Scrim.prototype.getAngularVelocity = function() {
  return 0;
};

/** @inheritDoc */
Scrim.prototype.getBottomBody = function() {
  return Util.NEGATIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getBottomWorld = function() {
  return Util.NEGATIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getBoundsBody = function() {
  return new DoubleRect(this.getLeftBody(), this.getBottomBody(),
      this.getRightBody(), this.getTopBody());
};

/** @inheritDoc */
Scrim.prototype.getBoundsWorld = function() {
  return this.getBoundsBody();
};

/** @inheritDoc */
Scrim.prototype.getCenterOfMassBody = function() {
  return Vector.ORIGIN;
};

/** @inheritDoc */
Scrim.prototype.getCentroidBody = function() {
  return Vector.ORIGIN;
};

/** @inheritDoc */
Scrim.prototype.getCentroidRadius = function() {
  return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getCentroidWorld = function() {
  return Vector.ORIGIN;
};

/** @inheritDoc */
Scrim.prototype.getDistanceTol = function() {
  return 0;
};

/** @inheritDoc */
Scrim.prototype.getDragPoints = function() {
  return [];
};

/** @inheritDoc */
Scrim.prototype.getElasticity = function() {
  return 1;
};

/** @inheritDoc */
Scrim.prototype.getExpireTime = function() {
  return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getHeight = function() {
  return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getKineticEnergy = function() {
  return 0;
};

/** @inheritDoc */
Scrim.prototype.getLeftBody = function() {
  return Util.NEGATIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getLeftWorld = function() {
  return Util.NEGATIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getMass = function() {
  return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getName = function(opt_localized) {
  return 'SCRIM';
};

/** @inheritDoc */
Scrim.prototype.getMinHeight = function() {
  return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getOldCoords = function() {
  return null;
};

/** @inheritDoc */
Scrim.prototype.getPosition = function() {
  return Vector.ORIGIN;
};

/** @inheritDoc */
Scrim.prototype.getRightBody = function() {
  return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getRightWorld = function() {
  return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getTopBody = function() {
return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getTopWorld = function() {
return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getVarsIndex = function() {
  return -1;
};

/** @inheritDoc */
Scrim.prototype.getVelocity = function(p_body) {
  return Vector.ORIGIN;
};

/** @inheritDoc */
Scrim.prototype.getVelocityTol = function() {
  return 0;
};

/** @inheritDoc */
Scrim.prototype.getVerticesBody = function() {
  return [];
};

/** @inheritDoc */
Scrim.prototype.getWidth = function() {
  return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.getZeroEnergyLevel = function() {
  return null;
};

/** @inheritDoc */
Scrim.prototype.isMassObject = function() {
  return true;
};

/** @inheritDoc */
Scrim.prototype.momentAboutCM = function() {
  return Util.POSITIVE_INFINITY;
};

/** @inheritDoc */
Scrim.prototype.momentum = function() {
  var r = new Array(3);
  r[0] = r[1] = r[2] = Util.POSITIVE_INFINITY;
  return r;
};

/** @inheritDoc */
Scrim.prototype.nameEquals = function(name) {
  return this.getName() == Util.toName(name);
};

/** @inheritDoc */
Scrim.prototype.removeNonCollide = function(bodies) {
};

/** @inheritDoc */
Scrim.prototype.rotateBodyToWorld = function(v_body) {
  return Vector.clone(v_body);
};

/** @inheritDoc */
Scrim.prototype.rotateWorldToBody = function(v_world) {
  return Vector.clone(v_world);
};

/** @inheritDoc */
Scrim.prototype.rotationalEnergy = function() {
  return 0;
};

/** @inheritDoc */
Scrim.prototype.saveOldCoords = function() {
};

/** @inheritDoc */
Scrim.prototype.setAccuracy = function(accuracy) {
};

/** @inheritDoc */
Scrim.prototype.setAngle = function(angle) {
};

/** @inheritDoc */
Scrim.prototype.setAngularVelocity = function(angular_velocity) {
};

/** @inheritDoc */
Scrim.prototype.setCenterOfMass = function(x_body, y_body) {
};

/** @inheritDoc */
Scrim.prototype.setDistanceTol = function(value) {
};

/** @inheritDoc */
Scrim.prototype.setDragPoints = function(dragPts) {
};

/** @inheritDoc */
Scrim.prototype.setElasticity = function(value) {
};

/** @inheritDoc */
Scrim.prototype.setExpireTime = function(time) {
  return this;
};

/** @inheritDoc */
Scrim.prototype.setMass = function(mass) {
  throw new Error();
};

/** @inheritDoc */
Scrim.prototype.setMinHeight = function(minHeight) {
};

/** @inheritDoc */
Scrim.prototype.setMomentAboutCM = function(moment) {
};

/** @inheritDoc */
Scrim.prototype.setPosition = function(loc_world, angle) {
  if (loc_world.getX() != 0 || loc_world.getY() != 0) {
    throw new Error();
  }
  if (goog.isDef(angle) && angle != 0) {
    throw new Error();
  }
};

/** @inheritDoc */
Scrim.prototype.setVelocity = function(velocity_world, angular_velocity) {
  if (velocity_world.getX() != 0 || velocity_world.getY() != 0) {
    throw new Error();
  }
  if (goog.isDef(angular_velocity) && angular_velocity != 0) {
    throw new Error();
  }
};

/** @inheritDoc */
Scrim.prototype.setVelocityTol = function(value) {
};

/** @inheritDoc */
Scrim.prototype.setZeroEnergyLevel = function(zeroEnergyLevel) {
  return this;
};

/** @inheritDoc */
Scrim.prototype.similar = function(obj, opt_tolerance) {
  return false;
};

/** @inheritDoc */
Scrim.prototype.translationalEnergy = function() {
  return 0;
};

/** @inheritDoc */
Scrim.prototype.worldToBody = function(p_world) {
  return Vector.clone(p_world);
};

}); // goog.scope
