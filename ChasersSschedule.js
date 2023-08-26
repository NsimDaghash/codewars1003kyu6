/*
Chaser's schedule

A runner, who runs with base speed s with duration t will cover a distances d: d = s * t
However, this runner can sprint for one unit of time with double speed s * 2
After sprinting, base speed s will permanently reduced by 1, and for next one unit of time runner will enter recovery phase and can't sprint again.

Your task, given base speed s and time t, is to find the maximum possible distance d.

Input:
1 <= s < 1000
1 <= t < 1000

Example:
Given s = 2 and t = 4.
We could schedule when runner should sprint so we could get these possible sequences:

Seq.: RRRR
=> s + s + s + s
=> 2 + 2 + 2 + 2 = 8
Seq.: RRRS
=> s + s + s + s*2
=> 2 + 2 + 2 + 2*2 = 10
Seq.: RRSR
=> s + s + s*2 + (s-1)
=> 2 + 2 + 2*2 + (2-1) = 9
Seq.: RSRR
=> s + s*2 + (s-1) + (s-1)
=> 2 + 2*2 + (2-1) + (2-1) = 8
Seq.: RSRS
=> s + s*2 + (s-1) + (s-1)*2
=> 2 + 2*2 + (2-1) + (2-1)*2 = 9
Seq.: SRRR
=> s*2 + (s-1) + (s-1) + (s-1)
=> 2*2 + (2-1) + (2-1) + (2-1) = 7
Seq.: SRRS
=> s*2 + (s-1) + (s-1) + (s-1)*2
=> 2*2 + (2-1) + (2-1) + (2-1)*2 = 8
Seq.: SRSR
=> s*2 + (s-1) + (s-1)*2 + (s-1-1)
=> 2*2 + (2-1) + (2-1)*2 + (2-1-1) = 7

Where:
- R: Normal Run / Recovery
- S: Sprint
Based on above sequences, the maximum possible distance d is 10.
*/
function solution(s, t) {
  // Initialize maxDist to the initial maximum distance,
  // assuming the runner maintains their base speed for the entire duration t.
  let maxDist = s * t;

  // Calculate the number of sprints the runner can perform.
  // Divide t by 2 and take the ceiling to ensure any remaining time is considered.
  const sprints = Math.ceil(t / 2);

  // Loop through the sprints and recovery phases.
  for (let i = 0; i < sprints; i++) {
    // Check if the current base speed after deducting 3 * i is greater than 0.
    // This ensures that the base speed does not become negative.
    if (s - 3 * i > 0) {
      // If the condition is met, increase maxDist by s - 3 * i.
      // This represents the distance covered during the current phase (sprint or recovery).
      maxDist += s - 3 * i;
    }
  }

  // Return the maximum distance achieved by following the sprinting and recovery pattern.
  return maxDist;
}
