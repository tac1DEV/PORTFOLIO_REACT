import { useEffect, useRef } from "react";
import { getCoordinates } from './../../lib/canvas';

// Draw exercise
export const DrawCanvas = ({ canvas }) => {
  const isDrawing = useRef(false);
  const lastCoordinate = useRef(null);

  const startDrawing = (event) => {
    isDrawing.current = true;
    lastCoordinate.current = getCoordinates(event, canvas.current);
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const draw = (event) => {
    if(!isDrawing.current) return;

    const context = canvas.current?.getContext("2d");

    const coordinate = getCoordinates(event, canvas.current);

    if(!context || !coordinate) return;

    context.fillRect(coordinate.x, coordinate.y,1,1);

    if(lastCoordinate.current){
      context.lineCap = "round";
      context.lineJoin = "round";
      context.beginPath();
      context.moveTo(lastCoordinate.current.x, lastCoordinate.current.y);
      context.lineTo(coordinate.x,coordinate.y);
      context.stroke();
    }

    lastCoordinate.current = coordinate;
  };


  useEffect(() => {
    const handleMouseUp = () =>{
      stopDrawing();
    }
    window.addEventListener("mouseup", handleMouseUp);

    return() =>{
      window.removeEventListener("mouseup", handleMouseUp);
    }
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseMove={draw}
      width={560}
      height={315}
      ref={canvas}
      className="m-auto bg-white rounded-md shadow-md"
    />
  );
};
