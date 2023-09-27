import { useDndMonitor } from "@dnd-kit/core";

const DndMonitor = () => {
  useDndMonitor({
    onDragStart(event) {console.log(event);},
    onDragOver(event) {console.log(event);},
    onDragEnd(event) {console.log(event);},
  });
  return (
    <div>
      
    </div>
  );
}

export default DndMonitor;
