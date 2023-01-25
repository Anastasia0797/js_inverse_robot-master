'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

const kolli = {
  Kolli: 'name',
  123: 'chipVer',
  3: 'wheels',
};

const robert = {
  Robert: 'name',
  123: 'chipVer',
  113: 'chipVer',
};

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    if (result.hasOwnProperty(robot[key])) {
      return null;
    }

    result[robot[key]] = key;
  }

  return result;
}

inverseRobot(kolli);
inverseRobot(robert);

module.exports = inverseRobot;
