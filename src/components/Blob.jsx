import { useEffect, useRef, useState } from "react";

function getPath(points) {
  let str = `M ${points[0][0]} ${points[0][1]}`;
  str += `C ${points[1][0]} ${points[1][1]}, ${points[2][0]} ${points[2][1]}, ${points[3][0]} ${points[3][1]}`;
  for (let i = 4; i < points.length; i += 2) {
    str += `S ${points[i][0]} ${points[i][1]}, ${points[i + 1][0]} ${
      points[i + 1][1]
    }`;
  }
  str += "Z";
  return str;
}

function getPoints(n_points, center, radius) {
  let mag = (2.5 / n_points) * radius;
  let regPoints = [
    [center[0], center[1] - radius],
    [center[0] + mag, center[1] - radius],
  ];
  const theta = (2 * Math.PI) / n_points;
  for (let i = 1; i <= n_points; ++i) {
    const cos = Math.cos(theta * i);
    const sin = Math.sin(theta * i);
    const x = center[0] + radius * sin;
    const y = center[1] - radius * cos;
    regPoints.push([x - mag * cos, y - mag * sin]);
    regPoints.push([x, y]);
  }
  return regPoints;
}

function movePoints(points, delta) {
  let newPoints = [...points];
  newPoints[0][0] += delta[0][0];
  newPoints[0][1] += delta[0][1];
  newPoints[1][0] += delta[0][0];
  newPoints[1][1] += delta[0][1];
  newPoints[points.length - 1][0] += delta[0][0];
  newPoints[points.length - 1][1] += delta[0][1];
  newPoints[points.length - 2][0] += delta[0][0];
  newPoints[points.length - 2][1] += delta[0][1];
  for (let i = 2; i < points.length - 2; i += 2) {
    newPoints[i][0] += delta[i / 2][0];
    newPoints[i][1] += delta[i / 2][1];
  }
  return newPoints;
}

function getDeltas(n_points, magnitude) {
  let deltas = [];
  for (let i = 0; i < n_points; ++i) {
    deltas.push([
      (Math.random() * 2 - 1) * magnitude,
      (Math.random() * 2 - 1) * magnitude,
    ]);
  }
  return deltas;
}

function refreshPoints(
  points,
  deltas,
  startTimestamp,
  timestamp,
  endTimestamp
) {
  const t = (timestamp - startTimestamp) / (endTimestamp - startTimestamp);
  const d = deltas.map((d) => [d[0] * t, d[1] * t]);
  const movedPoints = movePoints(points, d);
  return movedPoints;
}

export function Blob() {
  const n_points = 5,
    center = [500, 400],
    radius = 300;
  const [curPoints, setCurPoints] = useState(
    getPoints(n_points, center, radius)
  );
  const startTimestampRef = useRef(0);
  const nextTimestampRef = useRef(0);
  const deltasRef = useRef(0);

  const requestRef = useRef();
  const animStep = (timestamp) => {
    if (timestamp >= nextTimestampRef.current) {
      startTimestampRef.current = timestamp;
      nextTimestampRef.current = timestamp + 5000;
      deltasRef.current = getDeltas(n_points, 0.5);
    }
    setCurPoints((points) =>
      refreshPoints(
        points,
        deltasRef.current,
        startTimestampRef.current,
        timestamp,
        nextTimestampRef.current
      )
    );
    requestRef.current = requestAnimationFrame(animStep);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animStep);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <svg id="blob" viewBox="0 0 1000 1000 " xmlns="http://www.w3.org/2000/svg">
      <path fill="#feb12f" d={getPath(curPoints)}></path>
    </svg>
  );
}

export default Blob;
