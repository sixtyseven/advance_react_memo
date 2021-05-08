import { memo, useState, useCallback, useRef } from "react";
import { SketchPicker, ColorResult } from "react-color";
import { useMouseDownOutside } from "hooks/use-click-outside";

interface IProps {
  debugName: string;
  color: string;
  width?: number;
  height?: number;
  onChangeColor: (newColor: string) => void;
}

function ColorBlock(props: IProps) {
  const { color, width = 30, height = 30, onChangeColor, debugName } = props;
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const onChangeComplete = (color: ColorResult) => {
    onChangeColor(color.hex);
  };
  let sketchPickerComponent = null;
  if (showColorPicker) {
    sketchPickerComponent = (
      <div ref={ref} style={{ position: "absolute", top: 35, zIndex: 1 }}>
        <SketchPicker color={color} onChangeComplete={onChangeComplete} />
      </div>
    );
  }

  const onClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const closeColorPicker = useCallback(() => {
    setShowColorPicker(false);
  }, []);

  useMouseDownOutside(ref, closeColorPicker);
  console.log("[render] Memo Color Block ", debugName);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ backgroundColor: color, width, height }}
        onClick={onClick}
      ></div>

      {sketchPickerComponent}
    </div>
  );
}

export default memo(ColorBlock);
